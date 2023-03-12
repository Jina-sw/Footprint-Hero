from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Student

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_except 

#@csrf_exempt
def create_student(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        document = request.POST.get('document')
        phone = request.POST.get('phone')

        new_student = Student(name = name,email = email, document = document, phone = phone)
        return JsonResponse({'message':'success'})
    else:
        return JsonResponse({'error':'invalid request method'})


# Create your views here.

#allows us to create a room and look at all the different types of rooms 
#class RoomView(generics.CreateAPIView):
    #returns all of the room objects 
 #   queryset = Room.objects.all()
  #  serializer_class = RoomSerializer 


