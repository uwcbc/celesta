from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id','first_name', 'last_name', 'email', 'member_type', 'faculty', 'shirt_size')