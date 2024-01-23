# integration-tests &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/escobard/cloud-apps#pull-requests)

An integration test boilerplate, designed as a starting point for your tests, built with JavaScript ES6+, Jest and Supertest.

Create and run a new test in a few steps:

#### 1. Create test

#### 2. Apply the URL of the API you want to test

#### 3. Run the tests

The diagram below outlines a network created with Docker Compose, showcasing the connections between the tests, an API and a Database:

TODO - add docker network diagram

Within [the aws-cloud-apps repository](https://github.com/escobard/aws-cloud-apps), you will find an example of the integration tests running in combination with a GraphQL API and PostgreSQL Database.

![System overview](docs/diagrams/system_overview.png)

# Table of contents

* [Quickstart](https://github.com/escobard/integration-tests?tab=readme-ov-file#quickstart)
* [Core concepts](https://github.com/escobard/integration-tests?tab=readme-ov-file#core-concepts
* [How to contribute](https://github.com/escobard/integration-tests?tab=readme-ov-file#how-to-contribute)
* [Tools and frameworks](https://github.com/escobard/integration-tests?tab=readme-ov-file#tools-and-frameworks)
* [License](https://github.com/escobard/integration-tests?tab=readme-ov-file#license)

## Quickstart

### Run test application with NPM

[Node.js v20.9.0+](https://nodejs.org/en/) must be installed.

Tests for any RESTFul API can be built following the steps provided in [the summary of this README.](#graphql-integration-tests).

The following npm scripts are available:

### Run a single test

`npm run test nameOfTestFile`

### Run all available tests

`npm run test`

### Run all available tests in order

Tests will run in the order outlined in the [/tests/testInOrder.test.js](/tests/testInOrder.test.js) file.

`npm start`

### Run tests in watch mode 

Re-reruns tests when a test file is updated. It is recommended to use watch mode when developing tests. Find out more at [Jest's watch mode documentation](https://jestjs.io/docs/en/cli#--watch).

### Run tests in a Docker container

[Docker](https://www.docker.com/) must be installed. Use this approach if you want to run the tests in a container, without installing Node.js. It is common to use this approach in a CI/CD pipeline.

`docker build -t your-user-name/integration-tests:latest -f docker/Dockerfile.ci .`
`docker run --name integration-tests -t your-user-name/integration-tests:latest`

## Core concepts

1. [Serve as a starting point for complex integration test use cases](https://github.com/escobard/integration-tests?tab=readme-ov-file#serve-as-a-starting-point-for-complex-integration-test-use-cases)
2. [Provide simple, modular code structures & design patterns](https://github.com/escobard/integration-tests?tab=readme-ov-file#provide-simple-modular-code-structures--design-patterns)
3. [Leverage data driven tests with Jest](https://github.com/escobard/integration-tests?tab=readme-ov-file#leverage-data-driven-tests-with-jest)
4. [Follow the automation test pyramid principles](https://github.com/escobard/integration-tests?tab=readme-ov-file#follow-the-automation-test-pyramid-principles)
5. [Run tests in a Docker container for CI/CD](https://github.com/escobard/integration-tests?tab=readme-ov-file#run-tests-in-a-docker-container-for-cicd)

### Serve as a starting point for complex integration test use cases

When APIs expand past single CRUD operations, developers tend to seek a way to validate that old endpoints continue to work as expected, while new endpoints are developed. As new endpoints are developed, it becomes more challenging to validate old endpoints. Integration tests are a great way to validate that an API continues to work as expected, as it grows in complexity.

Leveraging [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest), this repository provides a starting point for complex integration test use cases. The tests are designed to be modular, allowing developers to easily add new tests and endpoints as APIs grow in complexity.

### Provide simple, modular code structures & design patterns

Leveraging Jest's setup and teardown functionality, global imports minimize inline imports, allowing test syntax complexity to remain low. API endpoints can (optionally) be configured globally before setup and teardown, facilitating readability and re-usability as the number of tests grow. By using Jest's run-in-band functionality, changing the order in which tests are run can be easily changed by swapping the order of the tests imported in [/tests/testInOrder.test.js](/tests/testInOrder.test.js).

### Leverage data driven tests with Jest

### Follow the automation test pyramid principles

### Run tests in a Docker container for CI/CD

## Tools and frameworks

[Node.js](https://nodejs.org/en)
[Jest](https://jestjs.io/)  
[Supertest](https://www.npmjs.com/package/supertest)    
[Docker](https://www.docker.com/)

## How to contribute

### Commits

Our commits follow the [Angular commit styleguide](https://gist.github.com/brianclements/841ea7bffdb01346392c). Each commit should be carefully thought out and only contain files affected within the scope of the commit message.

### Branching

A branch's name should reference a story and the type of work being committed.

### Pull Requests

Each pull request must pass a review from another contributor and all automated tests.

### Issues

Feel free to open an issue ticket, please leave a screenshot and a detailed instructions on how to replicate the issue.

## License

This repository is protected under the [MIT License](https://choosealicense.com/licenses/mit/).
