from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class UserManager(BaseUserManager):
    def create_user(self,  login, first_name, second_name, email, password):
        if not login:
            raise ValueError('Users must have a login')
        if not first_name:
            raise ValueError('Users must have a first name')
        if not password:
            raise ValueError('Users must have a password')

        user = self.model(
            login=login,
            first_name=first_name,
            second_name=second_name,
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,  login, first_name, second_name, email, password):
        user = self.create_user(login, first_name, second_name, email, password)
        user.is_admin = True
        return user


class User(AbstractBaseUser):
    login = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=256)
    photo = models.CharField(max_length=256, blank=True)
    registration_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    readonly_fields = ['login']

    objects = UserManager()

    REQUIRED_FIELDS = ['login', 'first_name']
    USERNAME_FIELD = 'login'
    EMAIL_FIELD = 'email'

    def __str__(self):
        return '{} {}'.format(self.first_name, self.second_name)

    @property
    def is_staff(self):
        return self.is_admin
