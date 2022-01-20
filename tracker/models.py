from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_save
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = None
    email = models.EmailField('email address', unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    Manager = CustomUserManager()

    def __str__(self):
        return self.email


class Expense(models.Model):
    EXPENSE_TYPES = (('debit', 'DEBIT'), ('credit', 'CREDIT'))

    name = models.CharField(max_length=255, blank=False)
    description = models.CharField(max_length=512, blank=True)
    category = models.ForeignKey('Category', related_name='expenses', on_delete=models.CASCADE)
    type = models.CharField(max_length=10, choices=EXPENSE_TYPES, blank=False)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return f'Expense #{self.id} {self.name}'


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True, blank=False)
    description = models.CharField(max_length=512, blank=False)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f'{self.name} Category'


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)