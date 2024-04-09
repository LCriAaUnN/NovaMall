from rest_framework import serializers
from ShopPage.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "name", "price", "catagory", "description", "image", "count"]