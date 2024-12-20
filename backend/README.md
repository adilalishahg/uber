
# Uber Management System

A RESTful API for Uber registration and authentication, built with **Node.js**, **Express**, and **MongoDB**.

## Features
- User registration with input validation.
- Secure password hashing using bcrypt.
- User login with email and password verification.
- JSON Web Token (JWT) authentication.
- Retrieve user profile for authenticated users.
- Logout functionality with token blacklisting.
- Modular structure for scalability.

## Project Structure

```
├── controllers/
│   └── user.controller.js       # Handles business logic for user operations
│   └── captain.controller.js       # Handles business logic for captain operations
├── models/
│   ├── user.model.js            # Mongoose schema for user data
│   ├── captain.model.js            # Mongoose schema for captain data
│   └── blacklistToken.model.js  # Schema for managing blacklisted tokens
├── routes/
│   └── user.route.js            # Defines routes for user-related endpoints
│   └── captain.route.js            # Defines routes for captain-related endpoints
├── services/
│   └── user.service.js          # Service layer for user database interactions
│   └── captain.service.js          # Service layer for captain database interactions
├── middlewares/
│   └── auth.middleware.js       # Middleware for authentication and token validation
├── app.js                       # Main server file
└── README.md                    # Project documentation
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
| Field       | Type   | Required | Validation Rules                          |
|-------------|--------|----------|-------------------------------------------|
| `email`     | String | Yes      | Must be a valid email format              |
| `password`  | String | Yes      | Must be at least 3 characters long        |
| `username`  | Object | Yes      | Must contain `firstname` and `lastname`   |
| `firstname` | String | Yes      | Must be at least 2 characters long        |
| `lastname`  | String | Yes      | Must be at least 2 characters long        |

**Example Request:**
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

#### Login a User
**POST** `/api/users/login`

**Request Body:**
| Field       | Type   | Required | Validation Rules                           |
|-------------|--------|----------|-------------------------------------------|
| `email`     | String | Yes      | Must be a valid email format              |
| `password`  | String | Yes      | Must be at least 3 characters long        |

**Example Request:**
```json
{
  "email": "user@example.com",
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

#### Retrieve User Profile
**GET** `/api/users/profile`

**Headers:**
| Key            | Value           |
|-----------------|-----------------|
| `Authorization`| `Bearer <token>`|

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
  }
}
```

#### Logout a User
**GET** `/api/users/logout`

**Headers:**
| Key            | Value           |
|-----------------|-----------------|
| `Authorization`| `Bearer <token>`|

**Response:**
```json
{
  "message": "User logged out"
}
```
### Captain Routes

#### Register a Captain
**POST** `/api/captains/register`

**Request Body:**
| Field           | Type   | Required | Validation Rules                          |
|-----------------|--------|----------|-------------------------------------------|
| `email`         | String | Yes      | Must be a valid email format              |
| `password`      | String | Yes      | Must be at least 3 characters long        |
| `fullname`      | Object | Yes      | Must contain `firstname` and `lastname`   |
| `firstname`     | String | Yes      | Must be at least 2 characters long        |
| `lastname`      | String | Yes      | Must be at least 2 characters long        |
| `vehicle`       | String | Yes      | Must contain `color`,`plate`,`capacity`
                                      | ,`vehicleType` and `model`                |
                                  
| `color`         | String | Yes      | Must be at least 2 characters long        |
| `plate`         | String | Yes      | Must be at least 2 characters long        |
| `capacity`      | Number | Yes      | Must be at least 2 number long            |
| `vehicleType `  | String | Yes      | Must be in 'car' 'motorcycle' 'cycle'     |

**Example Request:**
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 5,
    "vehicleType": "car",
  }
}
```

**Response:**
  
```json
{
  "captain": {
    "_id": "64e2b0cf...",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    "password":"password",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 5,
      "vehicleType": "car",
    }
  },
  "token": "jwt_token"
}
```
#### Login a Captain
**POST** `/api/captains/login`

**Request Body:**
| Field       | Type   | Required | Validation Rules                           |
|-------------|--------|----------|-------------------------------------------|
| `email`     | String | Yes      | Must be a valid email format              |
| `password`  | String | Yes      | Must be at least 3 characters long        |

**Example Request:**
```json
{
  "email": "captain@example.com",
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
    "email": "captain@example.com",
    "password":"passwords",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 5,
      "vehicleType": "car",
    }
  },
  "token": "jwt_token"
}
```

#### Retrieve User Profile
**GET** `/api/users/profile`

**Headers:**
| Key            | Value           |
|-----------------|-----------------|
| `Authorization`| `Bearer <token>`|

**Response:**
```json
{
  "user": {
    "_id": "64e2b0cf...",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "password":"passwords",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 5,
      "vehicleType": "car",
    }
  }
}
```

#### Logout a Captain
**GET** `/api/captains/logout`

**Headers:**
| Key            | Value           |
|-----------------|-----------------|
| `Authorization`| `Bearer <token>`|

**Response:**
```json
{
  "message": "Captain logged out"
}
```


---

## Code Overview

### `user.route.js`
Defines the following endpoints:
- `/register`: For user registration with input validation.
- `/login`: For user login with email and password verification.

### `user.service.js`
Handles the logic for user registration and login.

### `blacklistToken.model.js`
Mongoose schema for managing blacklisted tokens to ensure invalidated tokens cannot be reused.  
- Tokens are automatically removed after 24 hours using the `expires` field.

### `user.model.js`
Mongoose schema for the user, including:
- Validation for fields like `email`, `firstname`, and `lastname`.
- Password hashing using a static method.
- JWT token generation and password comparison methods.

### `user.controller.js`
Processes the `/register` and `/login` requests, validates input, hashes the password, and invokes the service layer for database operations. Generates a JWT token upon successful login.


### `captain.route.js`
Defines the following endpoints:
- `/register`: For captain registration with input validation.
- `/login`: For captain login with email and password verification.

### `captain.service.js`
Handles the logic for captain registration and login. 

### `captain.model.js`
Mongoose schema for the captain, including:
- Validation for fields like `email`, `firstname`, and `lastname`.
- Password hashing using a static method.
- JWT token generation and password comparison methods.

### `captain.controller.js`
Processes the `/register`,`/profile`,`logout` and `/login` requests, validates input, hashes the password, and invokes the service layer for database operations. Generates a JWT token upon successful login.


---

## Dependencies
- [Express](https://expressjs.com/) - Web framework for Node.js.
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Library for password hashing.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - JWT implementation.
- [express-validator](https://express-validator.github.io/) - Middleware for request validation.

---

## Future Improvements
- Implement role-based access control.
- Add role-based access control.
- Add unit and integration tests.
- Enhance token expiration and refresh token mechanisms.

---

## Contributing
Feel free to submit issues or pull requests to enhance this project!

---

## License
This project is licensed under the MIT License.
