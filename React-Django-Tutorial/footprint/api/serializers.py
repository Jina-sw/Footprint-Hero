# will take our model 
#translate the room into a json response 
from rest_framework import serializers
#takes class Room from models file 
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','electrical_bill','gas_bill','oil_bill',
                  'mileage_bill','flight_4_under', 'flight_4_over','newspaper','recycle','created_at')