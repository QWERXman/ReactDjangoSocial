# Generated by Django 2.2.5 on 2019-10-13 19:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('social_api', '0009_auto_20191009_2208'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='user_id',
            new_name='user',
        ),
    ]
