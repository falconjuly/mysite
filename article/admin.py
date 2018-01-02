from django.contrib import admin
from .models import ArticleColumn

# Register your models here.

class ArticleColumnAdmin(admin.ModelAdmin):
    list_display = ('column', 'created', 'user')
    list_filter = ('column',)

admin.site.register(model_or_iterable=ArticleColumn, admin_class=ArticleColumnAdmin)