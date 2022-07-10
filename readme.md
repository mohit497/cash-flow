# Cash Flow
## Manage your store better

[DEMO](https://cash-flow-docker.herokuapp.com)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Cash Flow is simple Point of Sale Software

## FEATURES
- Get everyday sales
- Track Product movement
- Get Sales summary
- Prevent product theft
- Manage your store better
- Get inventory view and everyday cash analysis

## Tech
- [ReactJs] - HTML enhanced for web apps! - frontend
- [Hasura] - Graphql Engine
- [PostGres] - Database
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [NestJs] - Backend 

## Installation

Cash Flow requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
docker-compose up
```

You can access your application on [http://localhost:8080]

## development

update ./server/env.local to HASURA_ENDPOINT= `http://localhost:8080`



```sh
npm i
docker-compose -f docker-compose.dev.yml up // migrate database schema
npm run mig:local
npm run start
```

You can access you local server on [http://localhost:3000]
