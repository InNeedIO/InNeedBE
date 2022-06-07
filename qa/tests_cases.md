# As a User I create an account
POST /api/users
```json
Example Value
Schema
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

# As a Needy I want to search for House Offering

# As a Needy I want to apply for Job Offering

# As a Needy I want to apply for House Offering 

# As a Needy I want to search for my Job Offering applications

# As a Needy I want to search for my House Offering applications

# As a Helper I want to publish a Job Offering

# As a Helper I want to publish a House Offering

# As a Helper I want to select all my Job Offerings

# As a Helper I want to select ally my House Offerings

# As a Helper I want to delete my Job Offering

# As a Helper I want to delete my House Offering