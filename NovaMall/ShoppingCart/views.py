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

    def view_cart(self, request):
        user = request.user
        cart = Cart.objects.filter(user=user)
        cart_serializer = CartSerializer(cart, many=True)
        return Response(cart_serializer.data)
    
    def add_to_cart(self, request):
        user = request.user
        if request.method == "POST":
            product_id = request.GET.get("product_id")
            product = Product.objects.get(id=product_id)
            price = product.price
            Cart.objects.create(product_id=product_id, price=price, user=user)
            return Response(status=status.HTTP_200_OK)
    
    def remove_from_cart(self, request):
        user = request.user
        if request.method == "DELETE":
            product_id = request.data.get("product_id")
            Cart.objects.filter(product_id=product_id, user=user).delete()
            return Response(status=status.HTTP_200_OK)
    
    def checkout(self,request):
        user = request.user
        if request.method == "POST":
            productIDs = request.data.get("order_list")
            if productIDs is not None:
                for productID in productIDs:
                    product = Product.objects.get(id=productID)
                    Order.objects.create(product_id=product.id, price=product.price, user=user)
                    Cart.objects.filter(product_id=product.id, user=user).delete()
            return Response(status=status.HTTP_200_OK)
        

# def ViewCart(request):
#     user = request.user
#     cart = Cart.objects.filter(user=user)
#     cart_serializer = CartSerializer(cart, many=True)
#     return Response(cart_serializer.data)

# def ViewDetail(request):
#     if request.method == "GET":
#         product = request.GET.get("product")
#         product = Product.objects.get(id=product_id)
#         return render(request, str(product_id)+ "_detail.html", {"product": product})

# def AddToCart(request):
#     user = request.user
#     product_id = request.GET.get("product_id")
#     product = Product.objects.get(id=product_id)
#     price = product.price
#     Cart.objects.create(product_id=product_id, price=price, user=user)
#     return HttpResponse()

# def RemoveFromCart(request):
#     user = request.user
#     product_id = request.GET.get("product_id")
#     Cart.objects.filter(product_id=product_id, user=user).delete()
#     cart = Cart.objects.filter(user=user)
#     return render(request, "shopping_cart.html", {"cart": cart})

# def Checkout(request):
#     user = request.user
#     productIDs = request.GET.get("order_list")
#     if productIDs is not None:
#         for productID in productIDs:
#             product = Product.objects.get(id=productID)
#             Order.objects.create(product_id=product.id, price=product.price, user=user)
#             Cart.objects.filter(product_id=product.id, user=user).delete()
#     return render(request, "payment.html")