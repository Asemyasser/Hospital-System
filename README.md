# Hospital Management System

A Full-Stack Web Application for managing a hospital system. The project includes features like appointment booking, doctor management, blog posting, service management, and user authentication.

---

## Table of Contents

- [Demo Links](#demo-links)
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Features](#features)
- [Routes Overview](#routes-overview)
- [Screenshots](#screenshots)
- [Contributors](#contributors)
- [License](#license)

---

## Demo Links

- **Client (Frontend)**: [DEMO](https://asemyasser.github.io/Hospital-System/)
- **AdminLTE (Admin Panel)**: [DEMO](https://hospital-system-delta.vercel.app/login) 
- **You can login to the AdminLTE dashboard with** : email: **anas@gmail.com** pass: **anas123**

---

## Introduction

This project is a hospital management system built using the MERN stack. It allows users to:

- Book appointments.
- Manage doctors, blogs, and services.
- Contact the hospital via a contact form.
- Administer the platform using a dashboard.

The system supports authentication and includes a user-friendly admin panel using AdminLTE.

---

## Technologies Used

### Frontend

- React.js
- HTML, CSS, JavaScript
- Bootstrap

### Backend

- Node.js, Express.js
- MongoDB, Mongoose
- EJS (for the admin panel in the `views` folder)

### Other Tools

- AdminLTE for admin dashboard UI
- Font Awesome for icons
- dotenv for environment configuration

---

## Project Structure

```
|-- client/               # Frontend React app
|-- server/               # Backend Node.js, Express server, and adminLTE dashboard files
```

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Install MongoDB and ensure it is running on your machine.

4. Create a `.env` file in the `server` folder:

   ```plaintext
   MONGO_URI=<your-mongo-uri>
   PORT=<your-preferred-port>
   JWT_PRIVATE_KEY=<your-secure-key>
   ```

---

## Environment Variables

Ensure the following variables are set in the `.env` file inside the `server` directory:

- **MONGO_URI**: Connection URI for MongoDB.
- **PORT**: Server port (default: `5000`).
- **JWT_PRIVATE_KEY**=<your-secure-key>

---

## Usage

1. Start the server:

   ```bash
   cd server
   node "your fileName.js" (eg: index.js)
   ```

2. Start the frontend:

   ```bash
   cd client
   npm run dev
   ```

3. Open the application in your browser:

   ```
   Client: http://localhost:"FRONTEND PORT"
   AdminLTE: http://localhost:"SERVER PORT"/login
   ```

---

## Features

- **Authentication**:

  - User login and logout with secure cookies.

- **Appointment Management**:

  - Book, edit, and manage appointments.

- **Doctor Management**:

  - View, add, edit, and delete doctor profiles.

- **Blog Management**:

  - Post and edit blogs for the website.

- **Service Management**:

  - View and edit available hospital services.

- **Contact Form**:

  - Collect and manage messages sent by users.

- **Dashboard**:

  - AdminLTE integrated for admin functionality.

---

## Routes Overview

### API Routes

- `/api/hero`: Manage homepage hero section.
- `/api/appointments`: Manage appointments.
- `/api/workingHours`: Manage working hours.
- `/api/generalSettings`: General settings management.
- `/api/blogPosts`: Blog post CRUD operations.
- `/api/doctors`: Manage doctor profiles.
- `/api/departments`: Department information.
- `/api/services`: Manage hospital services.
- `/api/contact`: Handle contact form submissions.
- `/api/login`: User login.
- `/api/register`: User registration.

### Pages

- `/login`: Login page.
- `/home`: Dashboard homepage (requires authentication).
- `/doctors`: Doctors list (admin view).
- `/blogs`: Blog posts list.
- `/services`: Hospital services list.

---

## Contributors

- [Asem Yasser](https://github.com/Asemyasser)
- [Anas Sayed](https://github.com/Anas-Sayed0)
- [Malak Ahmed](https://github.com/Malaksadekk)
- [Rowan Osama](https://github.com/rowanOhelal)
- [Mahmoud Mohamed](https://github.com/Mahmoud-08)

