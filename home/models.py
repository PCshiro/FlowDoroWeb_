
from django.db import models

class Tasks(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    num_pomodoro = models.IntegerField(default=0, null=True, blank=True)
    project = models.CharField(max_length=50, null=True, blank=True)

    # estado = models.IntegerField(default=1, null=True, blank=True)