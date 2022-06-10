# As a User I create an account
POST /api/users
```json

{
  "description": "test description",
  "first_name": "Test1",
  "last_name": "User2",
  "password": "password",
  "roles": [
    "user"
  ],
  "username": "test-user2"
}
```

# As a User I log into the application
POST /api/login
```json
{
  "username": "test-user",
  "password": "password"
}

```

# As a Needy I want to search for Job Offering
GET /api/jobOfferings

# As a Needy I want to search for House Offering
GET /api/housingOfferings

# As a Needy I want to apply for Job Offering
POST /api/jobApplicants
```json
{
  "job_offering_id": {
    "id": "cl48b5fsb002901s6f30n993i"
  },
  "user_id": {
    "id": "cl48aisc3000001s6m2focpc1"
  }
}

```

# As a Needy I want to apply for House Offering 
POST /api/housingApplicants
```json
{
  "housing_offering_id": {
    "id": "cl48b77k6004201s67s58d3yk"
  },
  "user_id": {
    "id": "cl48aisc3000001s6m2focpc1"
  }
}

```

# As a Needy I want to search for my Job Offering applications
GET /api/jobApplicants?where%5Buser_id%5D[id]={id}

# As a Needy I want to search for my House Offering applications
GET /api/housingApplicants?where%5Buser_id%5D[id]={id}

# As a Helper I want to publish a Job Offering
POST /api/jobOfferings
```json
{
        "author_id": {
          "id": "cl48aisc3000001s6m2focpc1"
        },
        "city": "test-city",
        "description": "test description",
        "max_salary": 7500,
        "min_salary": 2000,
        "position_level": "position",
        "title": "job offering",
        "working_mode": "remote"
}

```

# As a Helper I want to publish a House Offering
POST /api/housingOfferings
```json
{
        "address": "test-address",
        "author_id": {
          "id": "cl48aisc3000001s6m2focpc1"
        },
        "city": "test-city",
        "description": "test description",
        "price": 5000,
        "rooms_number": 2,
        "size": 35,
        "title": "test-title"
}

```

# As a Helper I want to select all my Job Offerings
GET /api/jobOfferings?where%5Bauthor_id%5D[id]={id}

# As a Helper I want to select all my House Offerings
GET /api/housingOfferings?where%5Bauthor_id%5D[id]={id}

# As a Helper I want to delete my Job Offering
DELETE /api/jobOfferings/{id}

# As a Helper I want to delete my House Offering
DELETE /api/housingOfferings/{id}