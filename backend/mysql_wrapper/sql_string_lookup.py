from backend.student.member_enums import *
from backend.mysql_wrapper.sql_connection import getSQLConnection

def getFacultyNameString(faculty: Faculty) -> str:
    if faculty is None:
        return None

    conn = getSQLConnection()
    cursor = conn.cursor()
    cursor.execute("SELECT faculty_name FROM faculty_lookup WHERE faculty_id = {};".format(faculty.value))

    # Should return a list of one-tuples
    result = cursor.fetchone()
    if result is not None:
        return result[0]
    return None


def getMemberTypeString(member_type: MemberType) -> str:
    if member_type is None:
        return None

    conn = getSQLConnection()
    cursor = conn.cursor()
    cursor.execute("SELECT member_type FROM member_type_lookup WHERE member_type_id = {};".format(member_type.value))

    # Should return a list of one-tuples
    result = cursor.fetchone()
    if result is not None:
        return result[0]
    return None


def getShirtSizeString(shirt_size: ShirtSize) -> str:
    if shirt_size is None:
        return None

    conn = getSQLConnection()
    cursor = conn.cursor()
    cursor.execute("SELECT shirt_size_name FROM shirt_size_lookup WHERE shirt_size_id = {};".format(shirt_size.value))

    # Should return a list of one-tuples
    result = cursor.fetchone()
    if result is not None:
        return result[0]
    return None
    

def getAllInstruments() -> list[str]:
    conn = getSQLConnection()
    cursor = conn.cursor()
    cursor.execute("SELECT instrument_name FROM instrument_lookup WHERE is_user_defined = false")

    # Should return a list of one-tuples.  We convert to a list of strings
    return map(lambda x:x[0], cursor.fetchall())
