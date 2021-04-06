# Front-end Dev Test

In this round of the interview process you will be asked to interpret product requirements and build simple features. You will use this project repo for your development and be asked to discuss your work when finished. Requirements will be sent on the day of your scheduled test. Before your test, please familiarize yourself with this repository and make sure that you are able to follow the basic setup and run instructions.

This repository contains four independent code bases:

| Directory | Code Base |
|-----------|-----------|
| `angular` | Angular 11 |
| `no-framework` | Pure HTML + CSS + Javascript |
| `react`    | ReactJS |
| `vue`      | VueJS |

**Use the code base you are most comfortable with.** All of the UIs are functionally the same; they only differ in the language and frameworks used.

## Before your scheduled test:

* Clone this repository and familiarize yourself with the project structure, its dependencies and existing code.
* Install the dependencies and ensure you can serve the application locally and run the tests.
* Send any questions to the recruiter via email.

**Note:** Each individual code base includes its own README with documentation specific to that langauge and framework.

## During your scheduled test:

* Feature requirements will be sent at the beginning of the scheduled test.
* A WebEx/Zoom with our engineers will be setup for you to ask any questions.
* You will have 1 hour to complete as many of the features with quality.
* At the end of the 1 hour session you will have 30 minutes to discuss your work with the engineers.

## Mock backend

This repository contains a mock backend that serves simple static data, which gives your API queries a legitimate target. This backend is located in the `server/` directory.

To run the server, you must first install the following utilities:

| Utility | Version | Link(s) |
|------------|---------|---------|
| Node | ~ 14.15 | [NodeJS](https://nodejs.org/en/) |
| NPM | ^ 6.14 | [NodeJS](https://nodejs.org/en/) (bundled with NodeJS) |

Then navigate to the `server` directory and run:

```commandline
npm install
```

This will install the necessary dependencies. To run the start the mock server, run the following command from within the `server` directory:

```commandline
npm run start
```

You will need to leave this terminal window running in the background; the server will terminate when you exit the terminal instance.
