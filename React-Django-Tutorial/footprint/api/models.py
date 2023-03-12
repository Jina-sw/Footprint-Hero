from django.db import models
import string
import random

# Create your models here.

def generate_unique_code():
    length = 6

    while True: 
        code = ''.join(random.choices(string.ascii_uppercase, k =length ))
        #make sure that the code is unique
        if Room.objects.filter(code = code).count() == 0:
            break
        return code

#decide the fields we want in our room 
#the pieces of information we want to store for each group
class Room(models.Model):
    #charfield stores a bunch of characters
    # max_length --> what is the maximum length the field can be 
    #can also set a default value as well
    #typing in the constraints of that specific field
    code = models.CharField(max_length = 8, default = "",unique = True)
    host = models.CharField(max_length = 50, unique = True )
    guest_can_pause = models.BooleanField(null = False, default = False)
    votes_to_skip = models.IntegerField(null = False, default = 2)
    #whenever create a new room, it will automatically add the date and time 
    created_at = models.DateTimeField(auto_now_add = True)

    #can also add methods to the model
    #def is_host_this():