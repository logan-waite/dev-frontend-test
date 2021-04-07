# React Dev Test

Please refer to the [main repository README](../README.md) for a general introduction.

This directory contains the Dev Test written using React.

## Before your scheduled test:

* Clone this repository and familiarize yourself with the project structure, its dependencies and existing code.
* Install the dependencies and ensure you can serve the application locally and run the tests.
* Send any questions to the recruiter via email.

## During your scheduled test:

* Feature requirements will be sent at the beginning of the scheduled test.
* A WebEx/Zoom with our engineers will be setup for you to ask any questions.
* You will have 1 hour to complete as many of the features with quality.
* At the end of the 1 hour session you will have 30 minutes to discuss your work with the engineers.

Feel free to change any of the existing code as part of your test.

## Setup

This is a React 17 project using NextJS. You will need to have the following dependencies installed:

| Dependency | Version | Link(s) |
|------------|---------|---------|
| Node | ~ 14.15 | [NodeJS](https://nodejs.org/en/) |
| NPM | ^ 6.14 | [NodeJS](https://nodejs.org/en/) (bundled with NodeJS) |

Once you have these installed, you can build the project via a terminal window using this command:

```commandline
npm install
```

This will download all dependencies and save them to the local `node_modules` directory.

Since the build process is run entirely from a terminal, there are no restrictions to what IDE or editor you can use. Feel free to use whatever editor you are most comfortable with, but make sure to add any IDE specific configuration files to the project `.gitignore` file.

## Mock Backend

A small REST API is provided which serves some dummy test data for use in developing client-server interactions. This server can be found in the `../server` directory (one level above this one.) Instructions on how to run this mock server are included in the [main repository README](../README.md).

## Development server

To serve the application in dev mode, run `npm run dev` after completing your setup. If successful, you will see a message indicating that the application is available at `http://localhost:4400/`. The application will automatically rebuild and reload when it detects any filesystem changes.

Note that this command will **not** start the mock server. You must have the mock running in a separate terminal window for the API calls to succeed. 

## Further help

* [NextJS documentation](https://nextjs.org/docs)
