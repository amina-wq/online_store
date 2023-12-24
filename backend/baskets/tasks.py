from celery import shared_task
from django.core.mail import send_mail


@shared_task
def send_registration_email(user_email):
    subject = "Welcome to BasketShop"
    message = "Thank you for registering on BasketShop."
    from_email = "zhuravkov.mai@gmail.com"
    recipient_list = [user_email]

    send_mail(
        subject,
        message,
        from_email,
        recipient_list,
        auth_user="zhuravkov.mai@gmail.com",
        auth_password="apmt yhzc gyhb nbye",
    )
