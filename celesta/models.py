from django.db import models

class Student(models.Model):
    class MemberType(models.IntegerChoices):
        UNDERGRAD = 1
        GRADUATE = 2
        ALUMNI = 3
        OTHER = 4

    class Faculty(models.IntegerChoices):
        ARTS = 1
        ENGINEERING = 2
        ENVIRONMENT = 3
        HEALTH = 4
        MATHEMATICS = 5
        SCIENCE = 6

    class ShirtSize(models.IntegerChoices):
        XS = 1
        S = 2
        M = 3
        L = 4
        XL = 5
        XXL = 6

    first_name = models.CharField(max_length=225)
    last_name = models.CharField(max_length=225)
    email = models.EmailField()
    member_type = models.IntegerField(choices=MemberType.choices)
    faculty = models.IntegerField(choices=Faculty.choices)
    shirt_size = models.IntegerField(choices=ShirtSize.choices)

    def _str_(self):
        return self.email
