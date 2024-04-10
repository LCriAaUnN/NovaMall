from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image_url = models.URLField(max_length=200, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')

    def __str__(self):
        return self.title

class Event(models.Model):
    caption = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(max_length=200)
    alt_text = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.caption

# Create your models here.
