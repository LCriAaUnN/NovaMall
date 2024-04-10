from rest_framework import serializers
from Order.models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id", "productIDs", "price", "status", "user"]