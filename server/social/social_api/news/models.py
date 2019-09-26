from django.db import models


class New(models.Model):
    id = models.IntegerField(primary_key=True, unique=True, editable=False)
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=256)
    image = models.CharField(max_length=256)
    create_date = models.DateField(auto_now_add=True)
    last_edit_date = models.DateField(auto_now=True)
    author = models.ForeignKey('User', related_name='news', on_delete=models.CASCADE)

    def __str__(self):
        return self.title