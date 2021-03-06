# Generated by Django 2.2.5 on 2019-09-27 18:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('social_api', '0005_auto_20190926_2049'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('login', models.CharField(max_length=100, unique=True)),
                ('first_name', models.CharField(max_length=100)),
                ('second_name', models.CharField(max_length=256)),
                ('photo', models.CharField(blank=True, max_length=256)),
                ('registration_date', models.DateField(auto_now_add=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AlterField(
            model_name='new',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='news', to='social_api.User'),
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
    ]
