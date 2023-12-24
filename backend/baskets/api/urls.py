from django.urls import path, include

urlpatterns = [
    path("v1/", include("baskets.api.v1.urls")),
]
