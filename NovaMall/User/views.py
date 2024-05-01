from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializer import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from ShopPage.models import Product
from ShopPage.serializer import ProductSerializer

# Create your views here.
# This file contains the views for the User app. The views are used to handle the requests made to the API.
# The views are used to perform CRUD operations on the User and Product models.
# The views are created using the Django Rest Framework's generic views.

class CreateUserView(generics.CreateAPIView):
    # This view is used to create a new user. It uses the CreateUserSerializer to serialize the data.
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDelete(generics.DestroyAPIView):
    # This view is used to delete a user. It uses the UserSerializer to serialize the data.
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class ListUsersView(generics.ListAPIView):
    # This view is used to list all the users. It uses the UserSerializer to serialize the data.
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return User.objects.exclude(username="NovaMall")

class UserProfileView(generics.ListAPIView):
    # This view is used to get the profile of the user. It uses the UserSerializer to serialize the data.
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user =  self.request.user
        return User.objects.filter(username=user)

class EditUserView(generics.UpdateAPIView):
    # This view is used to edit the user. It uses the UserSerializer to serialize the data.
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user = self.request.user
        return User.objects.get(id=user.id)


class ListProductsView(generics.ListAPIView):
    # This view is used to list all the products. It uses the ProductSerializer to serialize the data.
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    queryset = Product.objects.all()


class ProductDelete(generics.DestroyAPIView):
    # This view is used to delete a product. It uses the ProductSerializer to serialize the data.
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

