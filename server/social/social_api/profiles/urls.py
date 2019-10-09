from django.urls import path
from .views import CurrentUser

app_name = "profile"

urlpatterns = [
    path('current_user/', CurrentUser.as_view()),
    # path('update/<int:pk>/', NewsUpdateView.as_view()),
]