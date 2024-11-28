
# User Management System

A RESTful API for user registration and authentication, built with **Node.js**, **Express**, and **MongoDB**.

## Features
- User registration with input validation.
- Secure password hashing using bcrypt.
- JSON Web Token (JWT) authentication.
- Modular structure for scalability.

## Project Structure

```
├── controllers/
│   └── user.controller.js   # Handles business logic for user operations
├── models/
│   └── user.model.js        # Mongoose schema for user data
├── routes/
│   └── user.route.js        # Defines routes for user-related endpoints
├── services/
│   └── user.service.js      # Service layer for database interactions
├── app.js                   # Main server file
└── README.md                # Project documentation
```

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```
     MONGO_URI=mongodb://localhost:27017/your_database_name
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```

4. Run the server:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000`.

---

## API Endpoints

### Base URL
`http://localhost:3000`

### User Routes

#### Register a User
**POST** `/api/users/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "_id": "64e2b0cf...",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  },
  "token": "jwt_token"
}
```

**Validation Errors:**
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

---

## Code Overview

### `user.route.js`
Defines the `/register` endpoint for user registration. Validates input fields using `express-validator`.

### `user.service.js`
Handles the logic for user registration, including:
- Validation of required fields.
- Storing user information in the database.

### `user.model.js`
Mongoose schema for the user, including:
- Validation for fields like `email`, `firstname`, and `lastname`.
- Password hashing using a static method.
- JWT token generation and password comparison methods.

### `user.controller.js`
Processes the `/register` request, validates input, hashes the password, and invokes the service layer to create a new user. Generates a JWT token upon successful registration.

---

## Dependencies
- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Library for password hashing.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JWT implementation.
- [express-validator](https://express-validator.github.io/) - Middleware for request validation.

---

## Future Improvements
- Add user login functionality.
- Implement role-based access control.
- Add unit and integration tests.

---

## Contributing
Feel free to submit issues or pull requests to enhance this project!

---

## License
This project is licensed under the MIT License.
