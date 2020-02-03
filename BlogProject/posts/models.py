from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    imageUrl = models.TextField(blank=True, null=True)
    date_posted = models.DateTimeField(default=timezone.now)

