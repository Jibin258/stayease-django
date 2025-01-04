from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('normal-enquiry', views.normal_enquiry, name='normal_enquiry'),
]
