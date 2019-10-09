from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'second_name', 'avatar', 'user_id', 'birthday', 'status', 'city')
