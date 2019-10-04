from rest_framework import serializers

from .models import New


class NewsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = ('id', 'title', 'text', 'image')


class NewsDetailSerializer(serializers.ModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = New
        fields = '__all__'
