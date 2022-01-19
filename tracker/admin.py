from django.contrib import admin
from .models import Expense, Category


@admin.register(Expense)
class ExpensesAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'type']
    list_filter = ['type', 'date']
    search_fields = ['name', 'category']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
