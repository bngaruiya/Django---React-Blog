from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100, blank=False)
    content = models.TextField(blank=False)
    imageUrl = models.TextField(blank=True, null=True)
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE, null=True)

    