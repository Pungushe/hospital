# Generated by Django 4.0.3 on 2022-04-12 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=40)),
                ('age', models.CharField(max_length=3)),
                ('gender', models.CharField(choices=[('М', 'М'), ('Ж', 'Ж')], max_length=100, null=True)),
                ('note', models.TextField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Пациент',
                'verbose_name_plural': 'Пациенты',
            },
        ),
    ]