from django.contrib import admin
from .models import Basket, Category, BasketCategory


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    search_fields = ('name',)


class BasketCategoryInline(admin.TabularInline):
    model = BasketCategory
    autocomplete_fields = ('category',)


@admin.register(Basket)
class BasketAdmin(admin.ModelAdmin):
    inlines = (BasketCategoryInline,)
    list_display = ('title', 'description', 'date_time')
    list_filter = ('category',)
    search_fields = ('title',)
