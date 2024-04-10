from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from ShopPage.models import Product
from rest_framework.permissions import AllowAny, IsAuthenticated
from ShopPage.models import Product 
from ShopPage.serializer import ProductSerializer
from django.core.files.base import ContentFile
import json

class ProductView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get(self, request, id):
        product = Product.objects.get(id=id)
        product_serializer = ProductSerializer(product)
        return Response(product_serializer.data)
    
class ProductCagetoryView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        navbarCategory = kwargs['navbarCategory']
        print(navbarCategory)
        if navbarCategory == 'All':
            products = Product.objects.all()
        else:
            products = Product.objects.filter(catagory=navbarCategory)
        product_serializer = ProductSerializer(products, many=True)
        return Response(product_serializer.data)
    
class ProductAddView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        data = json.loads(request.body)
        image = ContentFile(request.FILES['image'].read())
        # image = request.FILES[data['image']]
        Product.objects.create(name=data['name'], price=data['price'], catagory=data['catagory'], count=data['stock'], image=image, description=data['description'])
        return Response(status=status.HTTP_200_OK)
