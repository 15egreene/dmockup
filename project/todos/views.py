from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
# from .serializers import TodoSerializer
from .serializers import *
# from .models import Todo
from .models import *

# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
