from django.db.models import Q
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from ShopPage.models import Product
from ShopPage.serializer import ProductSerializer

class ProductSearchView(generics.ListAPIView):
  serializer_class = ProductSerializer
  permission_classes = [AllowAny]

  def get(self, request, *args, **kwargs):
    searchTerm = kwargs['searchTerm']
    min = kwargs['min']
    max = kwargs['max']
    cagetory = kwargs['cagetory']
    try:
      searchTerm_int = int(searchTerm)
    except ValueError:
      searchTerm_int = None
    if cagetory == 'All':
        products = Product.objects.filter((Q(name__icontains=searchTerm) | Q(id=searchTerm_int)) & Q(price__gte=min) & Q(price__lte=max))
    else:
        products = Product.objects.filter((Q(name__icontains=searchTerm) | Q(id=searchTerm_int)) & Q(price__gte=min) & Q(price__lte=max) & Q(catagory=cagetory))
    product_serializer = ProductSerializer(products, many=True)
    return Response(product_serializer.data)

    
  
