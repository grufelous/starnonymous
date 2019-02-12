from django.db import models

class Star(models.Model):
    star_label = models.CharField('star label', max_length=30)
    star_message = models.CharField('star message', max_length=512)
    star_time = models.DateTimeField('star born')
    xCoord = models.CharField('x', max_length=12)
    yCoord = models.CharField('y', max_length=12)

    def __str__(self):
        return self.star_label
