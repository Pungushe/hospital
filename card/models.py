from django.db import models


class Patient(models.Model):
    GENDER = (
        ('М', 'М'),
        ('Ж', 'Ж'),
    )
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=40)
    age = models.CharField(max_length=3)
    gender = models.CharField(max_length=100, null=True, choices=GENDER)
    note = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Пациент'
        verbose_name_plural = 'Пациенты'
