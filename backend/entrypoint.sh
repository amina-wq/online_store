python manage.py collectstatic --noinput

python manage.py migrate

uvicorn config.asgi:application --reload --host 0.0.0.0
