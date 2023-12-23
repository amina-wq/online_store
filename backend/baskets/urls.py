from django.urls import path, include
from rest_framework import routers
from baskets.views import BasketsViewSet


router = routers.DefaultRouter()
router.register(r'baskets', BasketsViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
]
