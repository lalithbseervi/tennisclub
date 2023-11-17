from . import views
from django.urls import path

urlpatterns = [
    path("", views.index, name="index"),
    path('members/', views.members, name='members'),
    path('members/details/<int:id>', views.details, name='details'),
]