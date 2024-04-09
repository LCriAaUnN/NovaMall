from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=32)
    price = models.FloatField()
    image = models.ImageField()
    catagory = models.CharField(max_length=32)
    description = models.CharField(max_length=128)
    count = models.IntegerField()
    