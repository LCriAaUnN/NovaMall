from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from ShoppingCart.models import Cart
from ShoppingCart.serializer import CartSerializer
from Order.models import Order
from ShopPage.models import Product

# CreateAPIView
# ListAPIView
class CartView(generics.ListCreateAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)
    
    def delete(self, request, id):
        user = request.user
        Cart.objects.filter(id=id, user_id=user).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def post(self, request, id):
        user = request.user
        product_id = id
        product = Product.objects.get(id=product_id)
        price = product.price
        if product.count > 0:
            Cart.objects.create(product_id=product_id, product_name=product.name, price=price, user=user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)