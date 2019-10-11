from django.urls import path
from .views import NewsList, NewsCreateView, NewsUpdateView

app_name = "news"

urlpatterns = [
    path('', NewsList.as_view()),
    path('create/', NewsCreateView.as_view()),
    path('update/', NewsUpdateView.as_view()),
]