from django.urls import path
from . import views

urlpatterns = [
    path('routes/', views.getRoutes),
    path('add-event/', views.createNewEvent),
    path('events/', views.getEvents),
    path('event/<str:pk>/', views.getSingleEvent),
    path('featured-events/', views.getFeaturedEvents),
    path('send-message/', views.sendMessage),
    path('contact-messages/', views.getContactMessages),
]