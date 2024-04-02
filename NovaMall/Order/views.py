from django.shortcuts import render
from Order.models import Order

# Create your views here.
def ViewOrder(request):
    user = request.user
    orders = Order.objects.filter(user=user)
    return render(request, "order.html", {"orders": orders})

def CancelOrder(request):
    user = request.user
    order_id = request.GET.get("order_id")
    Order.objects.filter(id=order_id, user=user).delete()
    orders = Order.objects.filter(user=user)
    return render(request, "order.html", {"orders": orders})

def PayOrder(request):
    user = request.user
    order_id = request.GET.get("order_id")
    order = Order.objects.get(id=order_id, user=user)
    order.status = 1
    order.save()
    return render(request, "payment.html", {"order": order})