### Join My Project

#### Build Steps

##### 1. Build Docker Images
`docker-compose build`

##### 2. Start Docker Containers
`docker-compose up -d`

##### 3. Open shell in Docker container
`docker exec -it web_api_1 /bin/bash`

##### 4. Migrate the Database
`./manage.py migrate`

##### 5. Create an Admin user
`./manage.py createsuperuser`

JustMyProject API : `localhost:8000/api/projects`
JustMyProject Admin : `localhost:8000/admin`