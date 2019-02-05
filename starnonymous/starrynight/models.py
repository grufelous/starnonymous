from django.db import models

class Star(models.Model):
    star_label = models.CharField('star label', max_length=400)
    star_time = models.DateTimeField('star born')
