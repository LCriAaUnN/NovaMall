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
            return Response(status.HTTP_200_OK)
        else:
            return Response(status.HTTP_400_BAD_REQUEST)
    
    # def checkout(self,request):
    #     user = request.user
    #     cart = Cart.objects.filter(user=user)
    #     if request.method == "POST":
    #         productIDs = request.data.get("order_list")
    #         if productIDs is not None:
    #             for productID in productIDs:
    #                 product = Product.objects.get(id=productID)
    #                 Order.objects.create(product_id=product.id, price=product.price, user=user)
    #                 Cart.objects.filter(product_id=product.id, user=user).delete()
    #         return Response(status=status.HTTP_200_OK)
        

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