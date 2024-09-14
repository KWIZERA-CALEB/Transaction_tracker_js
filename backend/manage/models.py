from django.db import models

# Create your models here.

class Event(models.Model):
    title = models.CharField(max_length=255, null=True)
    description = models.TextField(null=True)
    featured = models.CharField(max_length=255, null=True, default='no')
    # images = models.ImageField(null=True, upload_to='uploads/')
    uploaded = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    suggestion = models.TextField(max_length=255)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.full_name