from django.db import models
import string
import random

# Create your models here.


#decide the fields we want in our room 
#the pieces of information we want to store for each group
class Student(models.Model):
    #charfield stores a bunch of characters
    # max_length --> what is the maximum length the field can be 
    #can also set a default value as well
    #typing in the constraints of that specific field
    #electrical_bill = models.CharField(max_length = 8, default = "")
    #gas_bill = models.CharField(max_length = 8, default = "")
    #oil_bill = models.CharField(max_length = 8, default = "")
    #mileage_bill = models.CharField(max_length = 8, default = "")
    #flight_4_under = models.CharField(max_length = 8, default = "")
    #flight_4_over = models.CharField(max_length = 8, default = "")

   # newspaper = models.BooleanField(null = False, default = False)
    #recycle = models.BooleanField(null = False, default = False)
    
    #code = models.CharField(max_length = 8, default = "",unique = True)
    #host = models.CharField(max_length = 50, unique = True )
    #guest_can_pause = models.BooleanField(null = False, default = False)
    #votes_to_skip = models.IntegerField(null = False, default = 2)
    #whenever create a new room, it will automatically add the date and time 

    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 254)
    document = models.CharField(max_length = 20)
    phone = models.CharField(max_length = 20)


    created_at = models.DateTimeField(auto_now_add = True)

    #can also add methods to the model
    #def is_host_this():