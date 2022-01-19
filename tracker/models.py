from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractBaseUser
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from django.core.exceptions import ObjectDoesNotExist
from django.db.models.signals import post_save
from django.conf import settings
from django.contrib.auth.models import User

AUTH_USER_MODEL = settings.AUTH_USER_MODEL


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


@receiver(post_save, sender=AUTH_USER_MODEL)
def create_auth_token(sender, created=False, **kwargs):
    if AUTH_USER_MODEL:
        Token.objects.create(user=User.objects.latest('id'))
    else:
        raise ObjectDoesNotExist

