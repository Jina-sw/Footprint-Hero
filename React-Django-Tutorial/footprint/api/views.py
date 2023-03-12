from django.shortcuts import render

from .serializers import ReactSerializer
from rest_framework.views import APIView
from .models import Student
from rest_framework.response import Response


class ReactView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):
        detail = [{"name":detail.name,"email":detail.email,"document":detail.document,"phone":detail.phone}
        for detail in Student.objets.all()]
        return Response(detail)
    
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
