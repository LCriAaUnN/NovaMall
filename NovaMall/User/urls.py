from django.urls import path
from . import views

urlpatterns = [
    path("list/", views.ListUsersView.as_view(), name="user-list"),
    path("delete/<int:pk>/", views.UserDelete.as_view(), name="user-delete"), 
    path("profile/", views.UserProfileView.as_view(), name="user-profile"),
    path('edit/', views.EditUserView.as_view(), name='edit_user'),
]
