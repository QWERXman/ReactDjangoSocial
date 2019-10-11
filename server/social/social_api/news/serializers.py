from rest_framework import serializers

from ..profiles.models import Profile
from .models import New


class NewsListSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()

    class Meta:
        model = New
        fields = ('id', 'title', 'text', 'image', 'author')


class NewsDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = New
        fields = '__all__'
