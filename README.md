# December Labs - PIS 2020

# Setup
## Define `$PARENT_PWD` env var

This can be hardcoded with the root dev folder.

UNIX users can add this to .bash_profile

    export PARENT_PWD="$(dirname "$(pwd)")"

## Copy `.env.example` and rename to `.env`

Add corresponding config values

## Copy `docker-compose.example.yml` and rename to `docker-compose.yml`

# Running
Before running the project you must create the custom network for the containers. To do so, run

    docker network create pis-septemberlabs

To run the project simply run

    docker-compose up

This will spin up the `api` and `mysql` instances.
To spin up the instances with a new build add the `--build` flag as so

    docker-compose up --build

## First run
The first run will fail because the db is not created.

To fix this, after running `docker-compose up`, run

    docker exec -it capacitacion-docker_api_1 sh

_The container name might be different_

Once inside the container run

    npm run sequelize db:create
    npm run migrate

After this exit the container and run

    docker-compose restart

This will restart the containers and now we should be seeing this

    pis-septemberlabs_api_1     | Executing (default): SELECT 1+1 AS result
    pis-septemberlabs_api_1     | CONNECTION ESTABLISHED SUCCESSFULLY
    pis-septemberlabs_api_1     | Server is listening on 5000

## Running all the projects at once

This is the API part of the `SeptemberLabs` project.

_NOTE: This assumes the setup for the other projects is done. It won't work otherwise_

In order to run the API, webapp and admin all together simply run

    docker-compose -f docker-compose.yml -f ../capacitacion-webapp/docker-compose.yml -f ../capacitacion-admin/docker-compose.yml up

For this to work you have to be running everything form this folder. If you want to change folders change the paths appropiately.

If you want to stop everything `^C` in the interactive terminal and wait for everything to shutdown, or run

    docker-compose -f docker-compose.yml -f ../capacitacion-webapp/docker-compose.yml -f ../capacitacion-admin/docker-compose.yml down

# Migrations
## Creating migrations
To create migrations run

    npm run migration-generate

This will create a migration file in `src/db/migrations`.

Add the migration code to the file.

## Running migrations
This was already done as a part of the first run setup.

To run migrations run

    npm run migrate

## Using the sequelize-cli
To use the sequelize-cli I\'ve created a `sequelize` command to make it's use easier.

Simply run

    npm run sequelize <desired sequelize-cli command>
