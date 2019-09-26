from django.db import models


class User(models.Model):
    id = models.IntegerField(primary_key=True, unique=True, editable=False)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=256)
    photo = models.CharField(max_length=256, blank=True)
    registration_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return '{} {}'.format(self.first_name, self.second_name)