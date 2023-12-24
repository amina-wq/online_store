from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from baskets.serializers.v1.auth import UserRegistrationSerializer
from baskets.tasks import send_registration_email


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            send_registration_email.delay(user.email)

            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token

            return Response(
                {
                    "access_token": str(access_token),
                    "refresh_token": str(refresh),
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
