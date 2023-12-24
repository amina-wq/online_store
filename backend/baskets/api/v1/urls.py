from django.urls import path, include
from rest_framework import routers
from baskets.api.v1.baskets import BasketsViewSet
from baskets.api.v1.auth import UserRegistrationView

router = routers.DefaultRouter()
router.register(r"baskets", BasketsViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("auth/sign_up/", UserRegistrationView.as_view()),
]
