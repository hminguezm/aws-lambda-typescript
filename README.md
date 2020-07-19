# aws-lambda-typescript
A [Serverless](https://serverless.com) application running with [serverless-offline](https://www.npmjs.com/package/serverless-offline) and [Docker](https://docker.com/).

# Requirements

## .env file

The application includes several docker-compose configuration .env file for local environment

# Running with serverless

```
serverless invoke local --function functionName
```
e.g

```
serverless invoke local --function version
```
 or
```
serverless offline
```

# Running with Docker

## Run with default environment file

```
docker-compose up -d --build
```

## Run with environment file

```
docker-compose -f docker-compose.yml up -d --build
```

## Running a new container every time and then log output (default environment):

```
docker-compose up -d --build --force-recreate; docker-compose logs -f
```

## Running a new container every time and then log output (with environment):
```
docker-compose -f docker-compose.yml up -d --build --force-recreate; docker-compose -f docker-compose.yml logs -f
```

# Deploy at AWS

For make an deploy at AWS, should be make config your credential, at this link can see as config that (https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/).

```
serverless deploy
```

## Reference Links

+ [Serverless framework documentation](https://serverless.com/framework/docs/)
+ [docker-compose Documentation](https://docs.docker.com/compose/)
