from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

from ..profiles.models import Profile
from .models import New
from .serializers import NewsDetailSerializer, NewsListSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import viewsets, response, permissions
from django.db import connection


class NewsList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        queryset = (New.objects.filter(author=request.user.pk).order_by('-create_date', 'id').select_related()
                    if request.query_params.get('OnlyMy')
                    else New.objects.all().order_by('-create_date', 'id').select_related())
        return Response(NewsListSerializer(queryset, many=True).data)

    def post(self, request):
        upd_profile = New.objects.get(id=request.data.get('id'))

        if not upd_profile:
            return Response()

        profile_fields = [a.attname for a in New._meta.fields]
        for field in request.data:
            if field in profile_fields and request.data.get(field):
                upd_profile.__setattr__(field, request.data.get(field))

        upd_profile.save()

        return Response(NewsListSerializer(New.objects.get(id=request.data.get('id'))).data)


class NewsCreateView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        data = request.data
        new_new = New(
            title=data.get('title'),
            text=data.get('text'),
            image=data.get('image'),
            author=Profile.objects.get(id=request.user.pk)
        )

        new_new.save()
        return Response(NewsListSerializer(new_new).data)


class NewsUpdateView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NewsDetailSerializer
    queryset = New.objects.all()
    permission_classes = (IsAuthenticated, IsAdminUser, IsOwnerOrReadOnly)
