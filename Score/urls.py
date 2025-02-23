from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('' , views.score, name='score'),
    path('hanh-kiem/' , views.HanhKiem, name='hanh-kiem'),
    path('bieu-do/', views.BieuDo, name='bieu-do'),
    path('capacity/', views.capacity, name='capacity'),
]