from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_on') # поля, які ви хочете побачити в адмін-панелі
    search_fields = ('title',)