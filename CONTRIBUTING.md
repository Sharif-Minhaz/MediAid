# Contributing to MediAid

Thank you for considering contributing to MediAid! We welcome any contributions that can help improve the project and make it better for everyone. This document will guide you on how to contribute to this project effectively.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Contributing](#contributing)
  - [Issues](#issues)
  - [Pull Requests](#pull-requests)
- [Development Guidelines](#development-guidelines)
  - [Folder Structure](#folder-structure)
  - [Technologies Used](#technologies-used)
  - [Code Style](#code-style)
  - [Testing](#testing)
- [License](#license)

## Getting Started

### Prerequisites

To contribute to this project, you'll need to have the following software installed on your system:

- Node.js (>= 12.x)
- MongoDB (>= 4.x)

### Setting Up the Development Environment

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Navigate to the `client` folder and run `npm install` to install the client-side dependencies.
4. Navigate to the `server` folder and run `npm install` to install the server-side dependencies.
5. Rename the `default.env` file to `.env` in both the `client` and `server` folders.
6. Update the `.env` files with your specific configuration settings.
7. Start the client development server by running `npm run dev` in the `client` folder and press `o` on the keyboard to run it in your default browser.
8. Start the server by running `npm run serve` in the `server` folder.

Now, you should have the development environment set up and running!

## Contributing

### Issues

If you encounter any bugs, have feature requests, or want to suggest improvements, please check the [existing issues](https://github.com/sharif-minhaz/mediaid/issues) before creating a new one. If your issue or suggestion has already been reported, you can provide additional information or show your support by adding a thumbs-up reaction to the existing issue.

To create a new issue, please include the following details:

- A clear and descriptive title
- Steps to reproduce the issue (if applicable)
- Expected behavior
- Actual behavior
- Any error messages or screenshots (if applicable)
- Environment details (e.g., operating system, browser version)

### Pull Requests

We appreciate your contributions to this project! If you want to add a new feature, fix a bug, or improve the codebase, follow these steps:

1. Ensure that your changes are consistent with the project's goals and coding style.
2. Create a new branch for your changes: `git checkout -b my-branch`.
3. Make your changes and test them thoroughly.
4. Commit your changes: `git commit -m "Add my changes"`.
5. Push your changes to your forked repository: `git push origin my-branch`.
6. Open a pull request against the `master` branch of the original repository.

We will review your pull request as soon as possible and provide any necessary feedback.

## Development Guidelines

### Folder Structure

The project follows a Model-View-Controller (MVC) architecture. The folder structure is as follows:

client/<br>
├── public/<br>
├── src/<br>
│ ├── components/<br>
│ ├── features/<br>
│ ├── pages/<br>
│ └── ...<br>
└── ...<br>

server/<br>
├── controllers/<br>
├── models/<br>
├── routes/<br>
└── ...<br>

### Directories
- The `client` folder contains the client-side code, built using the MERN stack.
- The `server` folder contains the server-side code, implementing the API endpoints and business logic.

### Technologies Used

- MERN stack (MongoDB, Express.js, React, Node.js)
- Redux and Redux Toolkit Query for state management and data Fetching
- Mongoose as the MongoDB object modeling tool
- Material-UI for the user interface

### Code Style

We follow a consistent code style throughout the project. Some key guidelines include:

- Use meaningful variable and function names.
- Follow the JavaScript/React style guide (e.g., [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)).
- Use indentation with 4 spaces.
- Write clear and concise comments when necessary.

### Testing

The project currently not includes any suite of tests.

## License

By contributing to this project, you agree that your contributions will be licensed under the [LICENSE](LICENSE) of the project.

---

We appreciate your time and efforts in contributing to MediAid! If you have any questions or need further assistance, feel free to reach out to the project maintainers.

Happy coding!
