# will take our model 
#serializer used to convert complex data to python
#translate into a json response
 
from rest_framework import serializers
#takes class Room from models file 
from .models import Student

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id','name','email','document','phone']