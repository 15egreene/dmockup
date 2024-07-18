from django.db import models
# Create your models here.


class Todo(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    completed = models.BooleanField(default=False)
    profile_pic = models.ImageField(null=True, blank=True)



