import random
import requests as r
import faker as f
import json
from token_bearer import bearer_token

f = f.Faker()
url = "localhost"
access_token = {"Authorization": bearer_token()}
auth_url = f"{url}/login"
users_url = f"{url}/users"
housing_offering_url = f"{url}/housingOfferings"
housing_applicant_url = f"{url}/housingApplicants"
job_offering_url = f"{url}/jobOfferings"
job_applicant_url = f"{url}/jobApplicants"


def users_payload(username, role):
    # roles: needy, helper
    return {
        "description": f.slug(),
        "first_name": f.first_name(),
        "last_name": f.last_name(),
        "password": "test_password",
        "roles": role,
        "username": username
    }


def housing_offering_payload(user_id):
    city = f.city()
    return {
        "address": f.street_address(),
        "author_id": {"id": user_id},
        "city": city,
        "description": f"{f.slug()}{user_id}",
        "price": random.randint(1000, 10000),
        "rooms_number": random.randint(1, 5),
        "size": random.randint(15, 100),
        "title": f"{city}_{f.slug()}"
    }


def job_offering_payload(user_id):
    job = f.job()
    working_modes = ["Remote", "OnSite", "Hybrid"]
    position_levels = ["Junior", "Mid", "Senior"]
    working_mode = random.choice(working_modes)
    position_level = random.choice(position_levels)
    return {
        "author_id": {"id": user_id},
        "city": f.city(),
        "description": f"{job}_{user_id}",
        "max_salary": random.randint(5000, 10000),
        "min_salary": random.randint(1000, 4999),
        "position_level": position_level,
        "title": job,
        "working_mode": working_mode
    }


def housing_applicant_payload(user_id, offer_id):
    return {
        "authorId": user_id,
        "housingOfferingId": offer_id
    }


def job_applicant_payload(user_id, offer_id):
    return {
        "authorId": user_id,
        "jobOfferingId": offer_id
    }


def get_user_id(username):
    get_users_url = f"{users_url}?where%5Busername%5D[equals]={username}"
    get_users = r.get(get_users_url, headers=access_token)
    tmp = json.loads(get_users.text)
    return str(tmp[0]["id"])


def get_job_offering_id(user_id):
    get_job_offering_url = f"{job_offering_url}?where%5Bauthor_id%5D[id]={user_id}"
    get_job_offering = r.get(get_job_offering_url, headers=access_token)
    tmp = json.loads(get_job_offering.text)
    return str(tmp[0]["id"])


def get_housing_offering_id(user_id):
    get_housing_offering_url = f"{housing_offering_url}?where%5Bauthor_id%5D[id]={user_id}"
    get_housing_offering = r.get(get_housing_offering_url, headers=access_token)
    tmp = json.loads(get_housing_offering.text)
    return str(tmp[0]["id"])


def create_users(users_number):
    for i in range(users_number):
        helper_username = f.simple_profile()['username']
        # create helper
        r.post(users_url, data=users_payload(helper_username, "helper"))
        helper_id = get_user_id(helper_username)
        # create housing offer
        r.post(housing_offering_url, json=housing_applicant_payload(helper_id), headers=access_token)
        # create job offer
        r.post(job_offering_url, json=job_offering_payload(helper_id), headers=access_token)

        # create needy
        needy_username = f.simple_profile()['username']
        r.post(users_url, data=users_payload(needy_username, "needy"))
        needy_id = get_user_id(needy_username)
        # get housing offering id
        housing_offering_id = get_housing_offering_id(helper_id)
        # create housing application
        r.post(housing_applicant_url, json=housing_applicant_payload(needy_id, housing_offering_id), headers=access_token)
        # get job offering id
        job_offering_id = get_job_offering_id(helper_id)
        # create job application
        r.post(job_applicant_url, json=job_applicant_payload(needy_id, job_offering_id), headers=access_token)


def create_needy(needy_number):
    for i in range(needy_number):
        username = f.simple_profile()['username']
        # create user
        r.post(users_url, data=users_payload(username, "needy"))
        user_id = get_user_id(username)
        # create housing application
        r.post(housing_applicant_url, json=housing_offering_payload(user_id), headers=access_token)
        # create job application
        r.post(job_offering_url, json=job_offering_payload(user_id), headers=access_token)


def main():
    create_users(5)


if __name__ == "__main__":
    main()
