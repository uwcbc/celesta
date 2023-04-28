from datetime import date
from backend.student.member_enums import *
from backend.mysql_wrapper.sql_string_lookup import *

class Member:
    def __init__(self,
                first_name: str,
                last_name: str,
                primary_instrument: str,
                other_instruments: list[str],
                email_address: str,
                shirt_size: ShirtSize,
                sign_up_date: date,
                member_type: MemberType,
                student_number: int = None,
                faculty: Faculty = None,
                notes: str = None):
        self.member_id = None
        self.first_name = first_name
        self.last_name = last_name
        self.student_number = student_number
        self.primary_instrument = primary_instrument
        self.other_instruments = other_instruments
        self.member_type = member_type
        self.faculty = faculty
        self.email_address = email_address
        self.notes = notes
        self.shirt_size = shirt_size
        self.sign_up_date = sign_up_date
    
    def __str__(self):
        if self.member_type == MemberType.UNDERGRAD or self.member_type == MemberType.GRADUATE:
            return """Member: {id}
    Name: {first_name} {last_name}
    Email: {email_address}
    Type: {member_type}
    Faculty: {faculty}
    Student Number: {student_id}
    Primary Instrument: {primary_instrument}
    Other Instruments: {other_instruments}
    Shirt Size: {shirt_size}
    Sign Up Date: {date}
    Notes: {notes}""".format(
            id = self.member_id,
            first_name = self.first_name,
            last_name = self.last_name,
            email_address = self.email_address,
            member_type = getMemberTypeString(self.member_type),
            faculty = getFacultyNameString(self.faculty),
            student_id = self.student_number,
            primary_instrument = self.primary_instrument,
            other_instruments = str.join(", ", self.other_instruments),
            shirt_size = getShirtSizeString(self.shirt_size),
            date = self.sign_up_date,
            notes = self.notes)
        else:
            return """Member: {id}
    Name: {first_name} {last_name}
    Email: {email_address}
    Type: {member_type}
    Primary Instrument: {primary_instrument}
    Other Instruments: {other_instruments}
    Shirt Size: {shirt_size}
    Sign Up Date: {date}
    Notes: {notes}""".format(
            id = self.member_id,
            first_name = self.first_name,
            last_name = self.last_name,
            email_address = self.email_address,
            member_type = getMemberTypeString(self.member_type),
            primary_instrument = self.primary_instrument,
            other_instruments = str.join(", ", self.other_instruments),
            shirt_size = getShirtSizeString(self.shirt_size),
            date = self.sign_up_date,
            notes = self.notes)
               