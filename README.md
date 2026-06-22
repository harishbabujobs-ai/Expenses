# Expense Tracker API

A simple Expense Tracker REST API built with Node.js, Express and MongoDB. This repository implements user registration and login with JWT authentication and basic CRUD for expenses. Suitable for portfolio demos and learning full-stack APIs.

## Features

- User registration with password policy (min 8 chars, 1 uppercase, 1 number, 1 special character)
- Login issue JWT (expires in 7 days)
- Protected expense routes requiring `Authorization: Bearer <token>`
- MongoDB via Mongoose

## Quick start

1. Install dependencies

```bash
cd expense-tracker-api
npm install
```

2. Create a `.env` file at the project root with:

```
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<a-strong-secret>
```

3. Start the server

```bash
PORT=5000 npm start
# or for development
npm run dev  # if you add a dev script for nodemon
```

## API endpoints

Authentication:
- POST /api/auth/register
  - body: { name, email, password }
  - password rules: at least 8 chars, 1 uppercase, 1 number, 1 special character
- POST /api/auth/login
  - body: { email, password }
  - returns: { token }

Protected (examples):
- GET /api/expenses
- POST /api/expenses
- PUT /api/expenses/:id
- DELETE /api/expenses/:id

Include header: `Authorization: Bearer <token>` for protected endpoints.

## Testing with Postman
1. Start server and set `baseUrl` to `http://localhost:5000`.
2. Register a user via POST /api/auth/register.
3. Login and copy `token` from response.
4. Use the token in `Authorization` header to access protected endpoints.

## Notes for portfolio
- Add screenshots or a short demo GIF of the API working with Postman.
- Link to the live repo: `https://github.com/harishbabujobs-ai/Expenses`
- Mention stack: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Contact
Harish Babu — harishbabu.jobs@gmail.com

---

This README was added to the repository so you can showcase the project in your portfolio. Feel free to ask me to expand the README with setup screenshots, deploy steps, or a live demo link.
