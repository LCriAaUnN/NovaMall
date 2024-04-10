from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from ShopPage.models import Product
from rest_framework.permissions import AllowAny
from ShopPage.models import Product 
from ShopPage.serializer import ProductSerializer

class ProductView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    # def get_queryset(self):
    #     return Product.objects.all()

    def get(self, id):
        return Product.objects.get(id=id)