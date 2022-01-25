from django.db import models
from django.conf import settings


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    contact = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    picture = models.ImageField(blank=True)

class Trip(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

