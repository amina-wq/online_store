from django.utils.decorators import method_decorator
from rest_framework import viewsets
from django.views.decorators.cache import cache_page

from baskets.models import Basket
from baskets.serializers.v1.baskets import BasketSerializer
from baskets.permissions import UserPermissions


class BasketsViewSet(viewsets.ModelViewSet):
    queryset = Basket.objects.prefetch_related("category").all()
    serializer_class = BasketSerializer
    permission_classes = (UserPermissions,)

    @method_decorator(cache_page(60 * 15))
    def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
