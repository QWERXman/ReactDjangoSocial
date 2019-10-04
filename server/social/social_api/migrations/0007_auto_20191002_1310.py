# Generated by Django 2.2.5 on 2019-10-02 10:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('social_api', '0006_auto_20190927_2102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='new',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='news', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='new',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
