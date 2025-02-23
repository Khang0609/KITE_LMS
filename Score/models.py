from django.db import models

# Create your models here.
class Score(models.Model):
    subject = models.CharField(max_length=100)
    TX1 = models.FloatField()
    TX2 = models.FloatField()
    TX3 = models.FloatField()
    TX4 = models.FloatField()
    DGGK = models.FloatField()
    DGCK = models.FloatField()
    DTB = models.FloatField()