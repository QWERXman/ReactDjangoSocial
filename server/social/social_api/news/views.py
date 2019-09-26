from rest_framework.response import Response
from rest_framework.views import APIView
from .models import New


class NewsView(APIView):
    def get(self, request):
        news = New.objects.all()
        return Response({"news": news})
