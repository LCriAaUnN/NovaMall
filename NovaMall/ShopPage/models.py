from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=32)
    price = models.FloatField()
    description = models.CharField(max_length=128)
    image = models.ImageField()
    count = models.IntegerField()
    