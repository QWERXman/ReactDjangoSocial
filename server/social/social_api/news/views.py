from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from .models import New
from .serializers import NewsDetailSerializer, NewsListSerializer
from .permissions import IsOwnerOrReadOnly


class NewsListView(generics.ListAPIView):
    serializer_class = NewsListSerializer
    queryset = New.objects.all()
    permission_classes = (IsAuthenticated, )


class NewsCreateView(generics.CreateAPIView):
    serializer_class = NewsDetailSerializer
    permission_classes = (IsAuthenticated, )


class NewsUpdateView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NewsDetailSerializer
    queryset = New.objects.all()
    permission_classes = (IsAuthenticated, IsAdminUser, IsOwnerOrReadOnly )
