from ..models import Expense, Category
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny, DjangoModelPermissions
from rest_framework.authentication import BasicAuthentication
from rest_framework.response import Response
from rest_framework import generics
from .serializers import UserSerializer, ExpenseSerializer, CategorySerializer
from django.contrib.auth.models import User


class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class UserGetView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class ExpenseCreateView(generics.CreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = (DjangoModelPermissions,)


class ExpenseReadView(generics.RetrieveAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = (AllowAny,)


class ExpenseUpdateView(generics.UpdateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = (AllowAny,)


class ExpenseDeleteView(generics.DestroyAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = (AllowAny,)


class ExpenseListView(generics.ListAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = (AllowAny,)


class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)


class CategoryReadView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)


class CategoryUpdateView(generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)


class CategoryDeleteView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny,)
