from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('home/', views.home, name='home'),
    path('school/levels/', views.levels, name='levels'),
]