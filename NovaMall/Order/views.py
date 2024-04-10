from rest_framework import generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import json
from Order.models import Order
from ShoppingCart.models import Cart
from Order.serializer import OrderSerializer

class OrderView(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Order.objects.filter(user=user)

    def post(self, request):
        if request.path == '/order/create/':
            user = request.user
            carts = Cart.objects.filter(user=request.user)
            products_data = [
                {
                    'id': cart.product_id,
                    'name': cart.product_name,
                    'price': cart.price
                }
                for cart in carts
            ]
            product_ids_data = json.dumps(products_data)
            totalPrice = 0
            for cart in carts:
                totalPrice += cart.price
            Order.objects.create(productIDs=product_ids_data, price=totalPrice, status=0, user=user)
            carts.delete()
        elif request.path == '/order/update/':
            order = Order.objects.filter(user=request.user).order_by('-id').first()
            order.status = 1
            order.save()
        
        return Response(status=status.HTTP_200_OK)
        