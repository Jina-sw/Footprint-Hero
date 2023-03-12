from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# Create your views here.

#allows us to create a room and look at all the different types of rooms 
class RoomView(generics.CreateAPIView):
    #returns all of the room objects 
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


