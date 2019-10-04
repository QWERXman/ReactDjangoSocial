from django.urls import path
from .views import NewsCreateView, NewsListView, NewsUpdateView

app_name = "news"

urlpatterns = [
    path('', NewsListView.as_view()),
    path('create/', NewsCreateView.as_view()),
    path('update/<int:pk>/', NewsUpdateView.as_view()),
]