# Generated by Django 2.2.5 on 2019-09-25 18:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_api', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='News',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
