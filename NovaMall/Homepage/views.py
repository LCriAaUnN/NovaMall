from django.db.models import Q
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
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['title', 'category__name']
  ordering_fields = ['price', 'title']
  ordering = ['price', 'title']

  def get_queryset(self):
    queryset = super().get_queryset()
    min_price = self.request.query_params.get('min_price')
    max_price = self.request.query_params.get('max_price')
    if min_price is not None and max_price is not None:
      queryset = queryset.filter(price__gte=min_price, price__lte=max_price)
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
  filter_backends = [filters.SearchFilter, filters.OrderingFilter]
  search_fields = ['title', 'id']
  ordering_fields = ['price', 'title']
  ordering = ['price', 'title']
  
