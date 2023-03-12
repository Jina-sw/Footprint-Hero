from django.urls import path,include
from .views import ReactView
from django.contrib import admin
from django.urls import re_path as url 


urlpatterns = [
   # path('home',create_student, name = 'create_student')
    path('admin/', admin.site.urls),
    path('home/',ReactView.as_view(), name = "something"),

]
