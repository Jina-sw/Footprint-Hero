from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
def main(request):
    return HttpResponse("Hello")

#can also use post delete for endpoints 
@api_view(['GET'])
def getData(request):
    person = {'name':'Denis', 'age':28}
    return Response(person)
