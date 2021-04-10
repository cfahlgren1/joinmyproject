from django.contrib import admin
from .models import Project


class ProjectAdmin(admin.ModelAdmin):
    date_hierarchy = 'start_date'
    search_fields = ('name', 'complexity', 'description', 'technologies')


admin.site.register(Project, ProjectAdmin)
