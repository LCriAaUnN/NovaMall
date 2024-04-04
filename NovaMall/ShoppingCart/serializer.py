from rest_framework import serializers
from ShoppingCart.models import Cart

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ["id", "product_id", "price", "user"]