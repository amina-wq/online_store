from django.http import HttpRequest, HttpResponse
from django.utils.decorators import method_decorator
from rest_framework import generics, viewsets
from django.views.decorators.cache import cache_page
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Basket
from .serializers import BasketSerializer
from .permissions import UserPermissions


class BasketsViewSet(viewsets.ModelViewSet):
    queryset = Basket.objects.prefetch_related("category").all()
    serializer_class = BasketSerializer
    permission_classes = (UserPermissions, )

    @method_decorator(cache_page(60 * 15))
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
