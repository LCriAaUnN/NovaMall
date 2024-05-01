from django.urls import path
from . import views

# URL patterns for the User app

urlpatterns = [
    # The URL patterns are used to map the views to the URLs.
    path("list/", views.ListUsersView.as_view(), name="user-list"),
    path("delete/<int:pk>/", views.UserDelete.as_view(), name="user-delete"), 
    path("profile/", views.UserProfileView.as_view(), name="user-profile"),
    path('edit/', views.EditUserView.as_view(), name='edit_user'),
    path('list_products/', views.ListProductsView.as_view(), name='list_products'),
    path('delete_product/<int:pk>/', views.ProductDelete.as_view(), name='delete_product'),
]
