from rest_framework import serializers
from django.utils import timezone
from .models import Basket, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BasketSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)

    def create(self, validated_data):
        categories = validated_data.pop("category")
        basket = Basket.objects.create(**validated_data)
        for category in categories:
            cat, created = Category.objects.get_or_create(**category)
            basket.category.add(cat.id)
        return basket

    class Meta:
        model = Basket
        fields = "__all__"
