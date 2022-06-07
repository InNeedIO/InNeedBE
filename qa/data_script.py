import random
import requests as r
import faker as f
import json
from helpers import *
from qa.token import bearer_token

f = f.Faker()
url = "https://cl22cah7a95835501s60isefhuq-server-vn57etnuya-ue.a.run.app/api"
access_token = {"Authorization": bearer_token()}
auth_url = f"{url}/login"
users_url = f"{url}/users"
housing_offering_url = f"{url}/housingOfferings"
housing_applicant_url = f"{url}/housingApplicants"
job_offering_url = f"{url}/jobOfferings"
job_applicant_url = f"{url}/jobApplicants"


def users_payload(username):
    user_roles = ["helper", "needy"]
    role = random.choice(user_roles)
    return {
        "description": f.slug(),
        "first_name": f.first_name(),
        "last_name": f.last_name(),
        "password": "test_password",
        "roles": role,
        "username": username
    }


def housing_offering_payload(id):
    city = f.city()
    return {
        "address": f.street_address(),
        "author_id": {"id": id},
        "city": city,
        "description": f"{f.slug()}{id}",
        "price": random.randint(1000, 10000),
        "rooms_number": random.randint(1, 5),
        "size": random.randint(15, 100),
        "title": f"{city}_{f.slug()}"
    }


def job_offering_payload(id):
    job = f.job()
    working_modes = ["remote", "on site", "hybird"]
    position_levels = ["intern", "junior", "regular", "senior", "expert"]
    working_mode = random.choice(working_modes)
    position_level = random.choice(position_levels)
    return {
        "author_id": {"id": id},
        "city": f.city(),
        "description": f"{job}_{id}",
        "max_salary": random.randint(5000, 10000),
        "min_salary": random.randint(1000, 4999),
        "position_level": position_level,
        "title": job,
        "working_mode": working_mode
    }


def get_user_id(username):
    get_users_url = f"{users_url}?where%5Busername%5D[equals]={username}"
    get_users = r.get(get_users_url, headers=access_token)
    tmp = json.loads(get_users.text)
    return str(tmp[0]["id"])


def get_job_offering_id(id):
    get_job_offering_url = f"{job_offering_url}?where%5Bauthor_id%5D[id]={id}"
    get_job_offering = r.get(get_job_offering_url, headers=access_token)
    tmp = json.loads(get_job_offering.text)
    return str(tmp[0]["id"])


def get_housing_offering_id(id):
    get_housing_offering_url = f"{housing_offering_url}?where%5Bauthor_id%5D[id]={id}"
    get_housing_offering = r.get(get_housing_offering_url, headers=access_token)
    tmp = json.loads(get_housing_offering.text)
    return str(tmp[0]["id"])


def main():
    username = f.simple_profile()['username']
    # auth = r.post(auth_url, data = auth_payload, headers=access_token)
    # get_users = r.get(users_url, headers=access_token)
    # for i in range(3):
    #     username = f"test_user_{timestamp()}"
    #     r.post(users_url, data=users_payload(username))
    #     id = get_user_id(username)
    #     # r.post(housing_offering_url, json=housing_offering_payload(id), headers=access_token)
    #     r.post(job_offering_url, json=job_offering_payload(id), headers=access_token)
    a = users_payload(username)
    b = job_offering_payload(123)
    c = housing_offering_payload(123)

    print(a)
    print(b)
    print(c)


if __name__ == "__main__":
    main()
