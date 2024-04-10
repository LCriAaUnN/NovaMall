from django.urls import path
from . import views

urlpatterns = [
  path('categories/', views.CategoryList.as_view(), name='category_list'),

  path('products/', views.ProductList.as_view(), name='product_list'),

  path('products/<int:pk>/', views.ProductDetail.as_view(), name='product_detail'),

  path('events/', views.EventList.as_view(), name='event_list'),

  path('search/products/', views.ProductSearch.as_view(), name='product_search')
]
