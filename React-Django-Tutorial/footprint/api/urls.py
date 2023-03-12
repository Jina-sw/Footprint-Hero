from django.urls import path
from .views import create_student

urlpatterns = [
    path('home',create_student, name = 'create_student')
]
