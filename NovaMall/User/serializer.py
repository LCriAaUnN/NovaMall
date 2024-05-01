from django.contrib.auth.models import User
from rest_framework import serializers
#from User.models import User

# The UserSerializer class is used to serialize the User model.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id",  "email", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user