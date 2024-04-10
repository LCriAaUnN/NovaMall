from rest_framework import serializers
from .models import Category, Product, Event

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ['id', 'name', 'image_url']

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ['id', 'title', 'price', 'image_url', 'category']  

class EventSerializer(serializers.ModelSerializer):
  class Meta:
    model = Event
    fields = ['id', 'image_url', 'alt_text', 'caption', 'description']
