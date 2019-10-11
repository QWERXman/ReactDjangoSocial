from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Profile(models.Model):
    name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=256, null=True)
    avatar = models.CharField(max_length=256, null=True)
    status = models.CharField(max_length=256, null=True)
    birthday = models.DateField(null=True)
    city = models.CharField(max_length=256, null=True)
    registration_date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='profiles', on_delete=models.CASCADE)

    def __str__(self):
        return '{} {}'.format(self.name, self.second_name)