from django.db import models
from User.models import User
# Create your models here.
class Cart(models.Model):
    product_id = models.IntegerField()
    price = models.FloatField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="carts")
