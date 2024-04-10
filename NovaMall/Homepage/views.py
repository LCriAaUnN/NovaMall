from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import generics, filters
from .models import Category, Product, Event
from .serializers import CategorySerializer, ProductSerializer, EventSerializer

class CategoryList(generics.ListCreateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer 

class ProductList(generics.ListCreateAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  filter_backends = [filters.SearchFilter]
  search_fields = ['title', 'category__name']

  def get_queryset(self):
    queryset = self.queryset
    category = self.request.query_params.get('category')
    if category is not None:
      queryset = queryset.filter(category__name=category)
    return queryset

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer  

class EventList(generics.ListCreateAPIView):
  queryset = Event.objects.all()
  serializer_class = EventSerializer  

class ProductSearch(generics.ListAPIView):
  queryset = Product.objects.all()
  serializer_class = ProductSerializer
  filter_backends = [filters.SearchFilter]
  search_fields = ['title', 'id']
