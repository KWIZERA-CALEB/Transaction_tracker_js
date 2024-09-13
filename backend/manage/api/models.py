from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=255),
    description = models.TextField(),
    uploaded = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title,