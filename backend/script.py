import requests
from faker import Faker


api_endpoint = "http://127.0.0.1/api/v1/baskets/"


def generate_fake_data():
    fake = Faker()
    fake_data = {
        "category": [
            {
                "name": "oval"
            }
        ],
        "title": fake.word(),
        "description": fake.sentence(),
        "price": fake.pyfloat(min_value=1.0, max_value=1000.0, right_digits=2),
        "image": fake.image_url(),
    }
    return fake_data


def post_fake_data(data):
    try:
        response = requests.post(
            api_endpoint,
            json=data,
            headers={
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMzQ5NTEwLCJpYXQiOjE3MDMzNDg2MTAsImp0aSI6ImQyMTkzZmE2MDM5YTQwYWViYjBhMjA1NDNjMzVhNDUxIiwidXNlcl9pZCI6MX0.Md7xjsK8y23qijP2au2J6GE0hylZg-mL7sHLU_HPbNo",
            }
        )
        response.raise_for_status()
        print("POST request successful!")
        print("Response:", response.json())
    except requests.exceptions.RequestException as e:
        print("POST request failed:", e)


if __name__ == "__main__":
    for _ in range(50):
        fake_data = generate_fake_data()
        post_fake_data(fake_data)
