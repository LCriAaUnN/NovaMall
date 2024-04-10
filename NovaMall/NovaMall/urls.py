"""
URL configuration for NovaMall project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from ShoppingCart.views import CartView
from Order.views import OrderView
from ShopPage.views import ProductView
from ShopPage.views import ProductCagetoryView
from User.views import CreateUserView
from Homepage.views import ProductSearchView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    # shopping cart
    path('cart/', CartView.as_view(), name="cart"),
    path('cart/delete/<int:id>/', CartView.as_view(), name="delete_item"),
    path('cart/add/<int:id>/', CartView.as_view(), name="add_to_cart"),
    # order
    path('order/', OrderView.as_view(), name="order"),
    path('order/create/', OrderView.as_view(), name="create_order"),
    path('order/update/', OrderView.as_view(), name='update_order'),
    # product
    path('products/<str:navbarCategory>/', ProductCagetoryView.as_view(), name='homepage_products'),
    path('product/<int:id>/', ProductView.as_view(), name="product"),
    # search
    path('search/<str:searchTerm>/<int:min>/<int:max>/<str:cagetory>/', ProductSearchView.as_view(), name='search'),
    path('user/register/', CreateUserView.as_view(), name="register"),
    path("token/", TokenObtainPairView.as_view(), name="get_token"),
    path("token/refresh/", TokenRefreshView.as_view(), name="refresh_token"),
    path("auth/", include("rest_framework.urls")),
    path("user/", include("User.urls")),
]
