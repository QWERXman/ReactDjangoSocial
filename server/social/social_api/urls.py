from django.conf.urls import url
from django.urls import include
from rest_framework.authtoken.views import obtain_auth_token

from .news.urls import *

app_name = "social_api"

urlpatterns = [
    path('news/', include('social_api.news.urls')),
    url(r'^obtain-auth-token/$', obtain_auth_token)
]
