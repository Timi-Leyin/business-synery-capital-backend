<h1 align="center">Node.js Express MongoDB TypeScript Backend Template</h1>

<p align="center">
  Create robust and scalable backend applications effortlessly with this Node.js Express MongoDB TypeScript Backend Template. Kickstart your server-side projects with a solid foundation and a modern stack.
</p>

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Express.js Framework:** Utilize the simplicity and flexibility of Express.js for efficient routing and middleware handling.
- **MongoDB Integration:** Seamlessly connect to MongoDB for flexible and scalable data storage.
- **TypeScript Advantage:** Leverage TypeScript's type checking for cleaner and more maintainable code.
- **Middleware and Plugins:** Incorporate essential middleware such as bcrypt, cors, and session management.
- **Structured Project:** Follow a well-organized project structure to keep your code maintainable.
- **Authentication:** Manage user authentication with JSON Web Tokens (JWT).
- **Automatic Restart:** Use nodemon for automatic server restarts during development.
- **API Documentation:** Generate API documentation using Swagger for a well-documented API.

## Prerequisites

- Node.js (>=14.0.0)
- MongoDB instance

## Getting Started

1. Clone this repository.
2. Install project dependencies using `npm install` or `yarn`.
3. Create a `.env` file based on the provided `.env.example` and configure your environment variables.
4. Run the server using `npm start` or `yarn start`.
5. Access the API at `http://localhost:3000`.

## Project Structure
```shell
my-backend-template/
├── src/
│ ├── app.ts
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── services/
├── prisma/
│ ├── schema.prisma
├── static/
├── .gitignore
├── .env.
├── env.d.ts
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
```
## Environment Variables

- `NODE_ENV`: Specify the environment mode (development or production).
- `PORT`: Port for the server to run on.
- `MONGODB_URI`: URI for connecting to the MongoDB instance.
- `SECRET_KEY`: Secret key for JWT authentication.

## Nodemon Configuration

The server is configured to restart automatically during development using nodemon. The configuration is specified in the `nodemon.json` file.
