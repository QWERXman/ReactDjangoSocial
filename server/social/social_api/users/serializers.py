from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

from ..models import Profile


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(min_length=6, max_length=100, write_only=True)
    password2 = serializers.CharField(min_length=6, max_length=100, write_only=True)
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])

    def validate(self, attrs):
        data = super(UserSerializer, self).validate(attrs)
        if not data['password'] or not data['password2'] or data['password'] != data['password2']:
            raise serializers.ValidationError('Password mismatch')
        del data['password2']
        return data

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'])

        user.set_password(validated_data['password'])
        user.save()
        
        user_profile = Profile(
            name=validated_data['username'],
            user_id=user
        )

        user_profile.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'password2')