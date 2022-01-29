from django.urls import path
from . import views
from rest_framework.authtoken import views as auth_views

urlpatterns = [
    # path('expenses/add/', views.ExpenseCRUDView.as_view(), name='expense_add'),
    # path('expenses/delete/<pk>/', views.ExpenseCRUDView.as_view(), name='expense_delete'),
    # path('expense/update/<pk>/', views.ExpenseCRUDView.as_view(), name='expense_update'),
    # path('expenses/', views.ExpenseListView.as_view(), name='expense_list'),
    # path('expenses/<pk>/', views.ExpenseCRUDView.as_view(), name='expense_detail'),
    path('account/register/', views.UserCreateView.as_view(), name='register_user'),
    path('user/login/', views.CustomAuthToken.as_view(), name='user_login'),
    path('user/logout/<pk>/', views.UserLogout.as_view(), name='user_logout'),

    # Expense endpoints

    path('expenses/delete/<pk>/', views.ExpenseDeleteView.as_view(), name='delete_expense'),
    path('expenses/update/<pk>/', views.ExpenseUpdateView.as_view(), name='update_expense'),
    path('expenses/list/', views.ExpenseListView.as_view(), name='list_expenses'),
    path('expenses/add/', views.ExpenseCreateView.as_view(), name='create_expense'),
    path('expenses/<pk>/', views.ExpenseReadView.as_view(), name='read_expense'),

    # Category endpoints

    path('category/list/', views.CategoryListView.as_view(), name='category_list'),
    path('category/add/', views.CategoryCreateView.as_view(), name='category_create'),
    path('category/<pk>/', views.CategoryReadView.as_view(), name='category_read'),
    path('category/update/<pk>/', views.CategoryUpdateView.as_view(), name='category_update'),
    path('category/delete/<pk>/', views.CategoryDeleteView.as_view(), name='category_delete'),

    # Get auth token

]
app_name = 'tracker'
