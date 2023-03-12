# will take our model 
#translate the room into a json response 
from rest_framework import serializers
#takes class Room from models file 
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code','host','guest_can_pause',
                  'votes_to_skip','created_at')