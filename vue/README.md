# Vue Dev Test

Please refer to the [main repository README](../README.md) for a general introduction.

This directory contains the Dev Test written using Vue.

## Before your scheduled test:
* Clone this repository and familiarize yourself with the project structure, its dependencies and existing code.
* Install the dependencies and ensure you can serve the application locally and run the tests.
* Send any questions to the recruiter via email.

## During your scheduled test:
* Feature requirements will be sent at the beginning of the scheduled test.
* A WebEx/Zoom with our engineers will be setup for you to ask any questions.
* You will have 1 hour to complete as many of the features as you can with quality.
* At the end of the 1 hour session you will have 30 minutes to discuss your work with the engineers.

## Setup
This is a Vue2 project. You will need to have the following dependencies installed:

| Dependency | Version | Link(s) |
|------------|---------|---------|
| Node | ~ 14.15 | [NodeJS](https://nodejs.org/en/) |
| NPM | ^ 6.14 | [NodeJS](https://nodejs.org/en/) (bundled with NodeJS) |
| Yarn | ^ 1.22.5 | [Yarn](https://yarnpkg.com/getting-started/install) |

Once you have these installed, navigate to the `vue` directory in a terminal window and run:

```yaml
yarn install
```
This will download all dependencies and save them to the local `node_modules` directory.

Since the build process is run entirely from a terminal, there are no restrictions to what IDE or editor you can use. Feel free to use whatever editor you are most comfortable with, but make sure to add any IDE specific configuration files to the project `.gitignore` file.

## Development server
To serve the application, run `yarn serve` after completing your setup. If successful, you will see a message indicating that the application is available at `http://localhost:8080/`. The application will automatically rebuild and reload when it detects any filesystem changes.

Note that this command will **not** start the mock server. You must have the mock running in a separate terminal window for the API calls to succeed. Calls to the mock backend are proxied through port 8080.

## Running unit tests
Run `yarn test:unit` to execute the unit tests via [Jest](https://jestjs.io/).

## Running e2e tests
Run `yarn test:e2e` to execute the unit tests via [Cypress](https://www.cypress.io/).
