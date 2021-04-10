from django.db import models


class Project(models.Model):
    COMPLEXITY_CHOICES = [('Beginner', 'Beginner'), ('Intermediate',
                                                     'Intermediate'), ('Advanced', 'Advanced'), ]

    name = models.CharField(max_length=60)
    start_date = models.DateField()
    complexity = models.CharField(max_length=50, choices=COMPLEXITY_CHOICES)
    technologies = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    project_url = models.URLField()
