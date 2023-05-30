from enum import Enum

# These must never ever change

class Faculty(Enum):
    ARTS = 1
    ENGINEERING = 2
    ENVIRONMENT = 3
    HEALTH = 4
    MATHEMATICS = 5
    SCIENCE = 6

class MemberType(Enum):
    UNDERGRAD = 1
    GRADUATE = 2
    ALUMNI = 3
    OTHER = 4

class ShirtSize(Enum):
    XS = 1
    S = 2
    M = 3
    L = 4
    XL = 5
    XXL = 6
