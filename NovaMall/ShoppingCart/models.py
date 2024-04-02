from django.db import models

# Create your models here.
class Cart(models.Model):
    user_id = models.IntegerField()
    product_id = models.IntegerField()
    count = models.IntegerField()
    createTime = models.DateTimeField()