from django.db import models

class Expense(models.Model):
    EXPENSE_TYPES = (('debit', 'DEBIT'), ('credit', 'CREDIT'))

    name = models.CharField(max_length=255, blank=False)
    description = models.CharField(max_length=512, blank=True)
    category = models.ForeignKey('Category', related_name='expenses', on_delete=models.CASCADE)
    type = models.CharField(max_length=10,choices=EXPENSE_TYPES, blank=False)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return f'Expense #{self.id} {self.name}'


class Category(models.Model):
    name = models.CharField(max_length=255, blank=False)
    description = models.CharField(max_length=512, blank=False)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return f'{self.name} Category'
