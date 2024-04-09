from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import UserSerializer
# from ..ShopPage.models import Product
# from ..ShopPage.serializer import ProductSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDelete(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ListUsersView(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.objects.exclude(username="NovaMall")


# class ListProductsView(generics.ListAPIView):
#     serializer_class = ProductSerializer
#     permission_classes = [IsAuthenticated]
#     queryset = User.objects.all()

#     def perform_create(self, serializer):
#         if serializer.is_valid():
#             serializer.save(owner=self.request.user)
#         else: 
#             print(serializer.errors)

