from django.db import models
from User.models import User
from django.db.models import JSONField

# Create your models here.
class Order(models.Model):
    productIDs = JSONField()
    price = models.FloatField()
    status_choices = (
        (0, "not Paid"),
        (1, "Paid"),
        (2, "Shipping"),
        (3, "Delivered"),
    )
    status = models.SmallIntegerField(choices=status_choices, default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")

