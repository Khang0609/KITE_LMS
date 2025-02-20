from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('' , views.score, name='score'),
    path('capacity/', views.capacity, name='capacity'),
]