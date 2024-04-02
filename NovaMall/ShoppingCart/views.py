from django.http import HttpResponse
from django.shortcuts import render
from ShoppingCart.models import Cart
from Order.models import Order
from ShopPage.models import Product
# Create your views here.
def ViewCart(request):
    user = request.user
    cart = Cart.objects.filter(user=user)
    return render(request, "shopping_cart.html", {"cart": cart})

def ViewDetail(request):
    product_id = request.GET.get("product_id")
    product = Product.objects.get(id=product_id)
    return render(request, str(product_id)+ "_detail.html", {"product": product})

def AddToCart(request):
    user = request.user
    product_id = request.GET.get("product_id")
    product = Product.objects.get(id=product_id)
    price = product.price
    Cart.objects.create(product_id=product_id, price=price, user=user)
    return HttpResponse()

def RemoveFromCart(request):
    user = request.user
    product_id = request.GET.get("product_id")
    Cart.objects.filter(product_id=product_id, user=user).delete()
    cart = Cart.objects.filter(user=user)
    return render(request, "shopping_cart.html", {"cart": cart})

def Checkout(request):
    user = request.user
    productIDs = request.GET.get("order_list")
    if productIDs is not None:
        for productID in productIDs:
            product = Product.objects.get(id=productID)
            Order.objects.create(product_id=product.id, price=product.price, user=user)
            Cart.objects.filter(product_id=product.id, user=user).delete()
    return render(request, "payment.html")