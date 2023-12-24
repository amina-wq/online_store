from rest_framework import permissions


class UserPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        if view.action in ["list", "retrieve"]:
            return True
        if view.action in ["destroy", "create", "update"]:
            return bool(request.user and request.user.is_staff)
        return False

    def has_object_permission(self, request, view, obj):
        if view.action in ["retrieve"]:
            return True
        if view.action in ["destroy", "update"]:
            return bool(request.user and request.user.is_staff)
        return False
