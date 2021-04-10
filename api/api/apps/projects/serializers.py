from .models import Project
from rest_framework import serializers

# Serializers define the API representation.


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['name', 'start_date', 'complexity',
                  'technologies', 'description', 'project_url']
