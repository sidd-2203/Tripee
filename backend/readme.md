# Backend API Documentation

## Overview
This backend API provides user registration and login functionalities. Below are the details of the available routes, their inputs, and outputs.

## Routes

### 1. Register User

**Endpoint:** `/users/register`  
**Method:** `POST`

**Description:** This endpoint registers a new user.

**Input:**
- `email` (string): The user's email address. Must be a valid email.
- `fullname` (object):
  - `firstname` (string): The user's first name. Must be at least 3 characters long.
  - `lastname` (string): The user's last name. Optional.
- `password` (string): The user's password. Must be at least 6 characters long.

**Example Request:**
```json
{
  "email": "john.doe@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}

```

**Example Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### 2. Login User

**Endpoint:** `/users/login`  
**Method:** `POST`

**Description:** This endpoint login an existing user.

**Input:**
- `email` (string): The user's email address. Must be a valid email.
- `password` (string): The user's password. Must be at least 6 characters long.

**Example Request:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}

```

**Example Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```