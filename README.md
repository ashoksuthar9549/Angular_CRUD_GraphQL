# Angular CRUD Application

## Login Credentials

To access the application, use the following login credentials:

- **Email**: `amit.shah@brainvire.com`
- **Password**: `Brain@1234`

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
6. [Technologies Used](#technologies-used)

## Project Overview

This is an Angular-based CRUD (Create, Read, Update, Delete) application designed to manage user information. The application supports operations such as adding new users, editing existing user details, and deleting users. It utilizes reactive forms for handling form input and includes validation rules to ensure data integrity. The backend is powered by a GraphQL API, which provides a flexible and efficient way to fetch and manipulate data.

## Features

- **Add User**: Create a new user with details like username, first name, last name, email, phone number, status, and date of birth.
- **Edit User**: Update existing user details.
- **Change User Status**: Update existing user status as Active or Inactive.
- **Delete User**: Remove users from the system.
- **User List**: Display a list of all users with pagination, searching and sorting options.
- **Form Validation**: Built-in validation for fields such as email format, required fields, and 10-digit phone numbers.
- **GraphQL API**: Backend API built with GraphQL to provide efficient data querying and manipulation.

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ashoksuthar9549/Angular_CRUD_GraphQL.git
   cd Angular_CRUD_GraphQL

2. **Install dependencies:**:

   ```bash
   npm install

3. **Run the development server:**:

   ```bash
   ng serve

## Usage
Once the application is running, you can perform the following actions:

Add a new user by clicking the "Add User" button and filling out the form.
Edit an existing user by clicking the "Edit" button next to a user's name.
Delete a user by clicking the "Delete" button next to a user's name.
View user details by clicking on the "Details" button next to a user's name.
Pagination and Sorting options are available to manage the user list.
