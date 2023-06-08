from datetime import date
from backend.student.member import Member
from backend.mysql_wrapper.sql_connection import *
from backend.student.member_enums import *

def __initializeDatabaseSchemaIfNotExists(conn: MySQLConnection = None) -> None:
    conn = getSQLConnection() if conn is None else conn
    cursor = conn.cursor()
    cursor.execute("CREATE DATABASE IF NOT EXISTS celesta_data;")
    cursor.execute("USE celesta_data;")

    # Initialize all tables here

    cursor.execute("""CREATE TABLE IF NOT EXISTS members (
        _id INT NOT NULL AUTO_INCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        member_type_id INT NOT NULL,
        student_number INT,
        faculty_id INT,
        email_address TEXT NOT NULL,
        notes TEXT,
        shirt_size_id INT,
        sign_up_date DATE,
        PRIMARY KEY (_id)
    );""")

    cursor.execute("""CREATE TABLE IF NOT EXISTS member_instruments (
        _id INT NOT NULL AUTO_INCREMENT,
        member_id INT NOT NULL,
        instrument_id INT NOT NULL,
        is_primary BOOLEAN,
        PRIMARY KEY (_id)
    );""")


def __insertInstrument(member_id: int, instrument_name: str, is_primary: bool, conn: MySQLConnection):
    newInstrumentStatement: str = "INSERT INTO instrument_lookup (instrument_name) VALUES (?, true);"
    instrumentStatement: str = "INSERT INTO member_instruments (member_id, instrument_id, is_primary) VALUES (?,?,?);"

    cursor = conn.cursor(prepared=True)
    cursor.execute("SELECT instrument_id FROM instrument_lookup WHERE instrument_name = ?", (instrument_name,))
    result = cursor.fetchall()
    instrument_id: int

    if (len(result) > 0):
        # The instrument was already in the table
        instrument_id = result[0][0]
    else:
        # New instrument
        cursor.execute(newInstrumentStatement, (instrument_name,))
        instrument_id = cursor.lastrowid

    cursor.execute(instrumentStatement, (member_id, instrument_id, is_primary))

#
# Writing New Members (Should not overwrite)
#


# Augments the member with their MySQL _id from the database
def insertMember(member: Member) -> None:
    conn = getSQLConnection()
    __initializeDatabaseSchemaIfNotExists(conn)

    if (member.first_name is None):
        raise ValueError("A Member's first_name cannot be None")
    if (member.last_name is None):
        raise ValueError("A Member's last_name cannot be None")
    if (member.member_type is None):
        raise ValueError("A Member's member_type cannot be None")
    if (member.email_address is None):
        raise ValueError("A Member's email_address cannot be None")
    
    cursor = conn.cursor(prepared=True) # So we can use ? in our statements
    duplicate_check: str = """SELECT _id FROM members WHERE
    _id = ? OR (first_name = ? AND last_name = ? AND (student_number = ? OR email = ?));"""

    insert_statement: str = """INSERT INTO members 
    (first_name, last_name, member_type_id, student_number, faculty_id, email_address, notes, shirt_size_id, sign_up_date)
    VALUES (?,?,?,?,?,?,?,?,?);"""


    # Check if the member is already in the table
    # Members are considered duplicate if:
    #   Their member_id matches
    #   Their name and student number match
    #   Their name and email address match
    cursor.execute(duplicate_check,
                   (member.member_id,
                    member.first_name,
                    member.last_name,
                    member.student_number,
                    member.email_address))
    if (cursor.fetchone() is not None):
        # We have a duplicate
        raise ValueError("Member already exists")


    cursor.execute(insert_statement, 
                   (member.first_name,
                    member.last_name,
                    member.member_type.value,
                    member.student_number,
                    member.faculty.value,
                    member.email_address,
                    member.notes,
                    member.shirt_size.value,
                    member.sign_up_date)) 
    member.member_id = cursor.lastrowid

    # Now we handle the instruments
    for instrument in member.other_instruments:
        __insertInstrument(member.member_id, instrument, False, conn)
    if member.primary_instrument is not None:
        __insertInstrument(member.member_id, member.primary_instrument, True, conn)


#
# Reading Members
#

def __fetchMemberByID(id: int, conn: MySQLConnection) -> Member:
    cursor = conn.cursor(prepared=True)
    cursor.execute("SELECT first_name, last_name, email_address, shirt_size_id, member_type_id, faculty_id, notes, sign_up_date, _id FROM members WHERE _id = ?", (id,))
    member_data: tuple[str, str, str, str, str, str, str, str, str] = cursor.fetchone()

    if member_data is None:
        return None

    cursor.execute("""SELECT instrument_name, is_primary FROM member_instruments 
    LEFT JOIN instrument_lookup
    ON member_instruments.instrument_id = instrument_lookup.instrument_id
    WHERE member_id = ?""", (id,))
    member_instruments: list[tuple[str, str]] = cursor.fetchall()

    primary_instruments: list[str] = filter(lambda x:(x[1] == True), member_instruments)
    other_instruments: list[str] = filter(lambda x:(x[1] == False), member_instruments)
    if any(primary_instruments):
        primary_instruments = primary_instruments[0]
    else:
        primary_instruments = None

    shirt_size: ShirtSize = None
    try: 
        shirt_size = ShirtSize(member_data[3])
    except ValueError:
        pass

    member_type: MemberType = None
    try: 
        member_type = MemberType(member_data[4])
    except ValueError:
        pass

    faculty: Faculty = None
    try: 
        faculty = Faculty(member_data[5])
    except ValueError:
        pass

    sign_up_date: date = None
    split = member_data[7].split('-')
    if (len(split) == 3):
        sign_up_date = date(split[0], split[1], split[2])

    member = Member(member_data[0],
                    member_data[1],
                    primary_instruments,
                    other_instruments,
                    member_data[2],
                    shirt_size,
                    sign_up_date,
                    member_type,
                    member_data[5],
                    faculty,
                    member_data[6])
    member.member_id = member_data[8]
    return member



def getMembers() -> list[Member]:
    conn = getSQLConnection()
    __initializeDatabaseSchemaIfNotExists(conn)

    cursor = conn.cursor()
    cursor.execute("SELECT _id FROM members;")

    return map(lambda x:__fetchMemberByID(x[0], conn), cursor.fetchall())


def getMembersByName(filter: str):
    conn = getSQLConnection()
    __initializeDatabaseSchemaIfNotExists(conn)

    cursor = conn.cursor(prepared=True)
    cursor.execute("""SELECT _id FROM members
    WHERE CONCAT(UPPER(first_name),' ',UPPER(last_name))
    LIKE CONCAT('%',UPPER(?),'%');""", (filter,))

    return map(lambda x:__fetchMemberByID(x[0], conn), cursor.fetchall())


def getMembersByStudentNumber(filter: int):
    conn = getSQLConnection()
    __initializeDatabaseSchemaIfNotExists(conn)

    cursor = conn.cursor(prepared=True)
    cursor.execute("SELECT _id FROM members WHERE student_number LIKE CONCAT('%',?,'%')", (filter,))

    return map(lambda x:__fetchMemberByID(x[0], conn), cursor.fetchall())


def getMembersByEmail(filter: int):
    conn = getSQLConnection()
    __initializeDatabaseSchemaIfNotExists(conn)

    cursor = conn.cursor(prepared=True)
    cursor.execute("SELECT _id FROM members WHERE UPPER(email_address) LIKE CONCAT('%',UPPER(?),'%')", (filter,))

    return map(lambda x:__fetchMemberByID(x[0], conn), cursor.fetchall())
