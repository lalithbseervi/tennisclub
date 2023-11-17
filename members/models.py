from django.db import models

# Create your models here.
class Member(models.Model):
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    contactNumber = models.IntegerField()
    joinDate = models.DateField()
    def __str__(self):
        return f"{self.firstname} {self.lastname}"