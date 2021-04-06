# Angular Dev Test

Please refer to the [main repository README](../README.md) for a general introduction.

This directory contains the Dev Test written using Angular.

## Before your scheduled test:

* Clone this repository and familiarize yourself with the project structure, its dependencies and existing code.
* Install the dependencies and ensure you can serve the application locally and run the tests.
* Send any questions to the recruiter via email.

## During your scheduled test:

* Feature requirements will be sent at the beginning of the scheduled test.
* A WebEx/Zoom with our engineers will be setup for you to ask any questions.
* You will have 1 hour to complete as many of the features with quality.
* At the end of the 1 hour session you will have 30 minutes to discuss your work with the engineers.

## Setup

This is an Angular 11 project. You will need to have the following dependencies installed:

| Dependency | Version | Link(s) |
|------------|---------|---------|
| Node | ~ 14.15 | [NodeJS](https://nodejs.org/en/) |
| NPM | ^ 6.14 | [NodeJS](https://nodejs.org/en/) (bundled with NodeJS) |
| Angular | 11 | [Angular CLI](https://cli.angular.io/) |

Once you have these installed, you can build the project via a terminal window using this command:

```commandline
npm install
```

This will download all dependencies and save them to the local `node_modules` directory. 

Since the build process is run entirely from a terminal, there are no restrictions to what IDE or editor you can use. Feel free to use whatever editor you are most comfortable with, but make sure to add any IDE specific configuration files to the project `.gitignore` file.

## Mock Backend

A small REST API is provided which serves some dummy test data for use in developing client-server interactions. This server can be found in the `../server` directory (one level above this one.) Instructions on how to run this mock server are included in the [main repository README](../README.md).

> **NOTE:** the mock server _must_ be running in a separate terminal window for the e2e tests.

## Development server

To serve the application, run `npm start` after completing your setup. If successful, you will see a message indicating that the application is available at `http://localhost:4200/`. The application will automatically rebuild and reload when it detects any filesystem changes.

Note that this command will **not** start the mock server. You must have the mock running in a separate terminal window for the API calls to succeed. Calls to the mock backend are proxied through port 4200.

## Other commands

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

A convenience script in the package.json is provided for production builds: `npm run build`.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io). The framework used in this project is [Jasmine](https://jasmine.github.io/).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 

> **IMPORTANT**. You must have the Chrome browser installed to run the e2e tests.

> **IMPORTANT.** You must have the mock backend running in a separate terminal in order for the e2e tests to work successfully. 

The e2e directory has the skeleton for a page object and an e2e test spec.

Jasmine matchers are used for the examples: https://jasmine.github.io/2.0/introduction.html

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
