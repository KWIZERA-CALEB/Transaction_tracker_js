# Generated by Django 5.0.6 on 2024-09-14 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('manage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='event',
            name='title',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
