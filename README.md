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

- Add a new user by clicking the "Add User" button and filling out the form with details including username, first name, last name, email, phone number, status, and date of birth.
- Edit an existing user by navigating to the user list, selecting the user you want to edit, and clicking the "Edit" button. Update the user details as needed and save the changes.
- Delete a user by navigating to the user list and clicking the "Delete" button next to the user's name. Confirm the deletion when prompted.
- Pagination, Searching and Sorting: Use the pagination controls and sorting options available in the user list to navigate through and manage the list of users.

## Technologies Used
- **Angular**: A platform and framework for building client-side applications using HTML, CSS, and TypeScript.
- **TypeScript**: A statically typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
- **SCSS**: A CSS preprocessor that extends CSS with variables, nested rules, and mixins for more flexible and maintainable styling.
- **RxJS**: A library for reactive programming using Observables, allowing for easy composition of asynchronous or callback-based code.
- **GraphQL**: A query language for APIs and a server-side runtime for executing queries by providing a complete and understandable description of the data.
- **HTML5 & CSS3**: Markup and styling technologies used to create the structure and presentation of web pages.
