# E-Commerce-Follow-Along

### Milestone 1: Project Overview

### Welcome to the Follow Along Project: Milestone 1!

This project is a full-fledged E-Commerce Application developed from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It delivers a robust, scalable, and efficient solution by incorporating RESTful APIs for seamless communication between the frontend and backend. The application implements database schemas for structured data management and ensures secure authentication mechanisms for user interaction, providing a secure and optimized experience for users.

### Introduction to the E-Commerce Platform
The e-commerce application you’ll build will allow customers to:
- **Browse Products**: Display products with essential details like name, price, description, and availability.
- **Add to Cart**: Users can add products to their shopping cart for checkout.
- **User Authentication**: Users will need to log in or register to make purchases and view order history.
- **Place Orders**: Users can place orders after filling their cart, with payment and delivery information.
- **Admin Features**: Admins will be able to manage products, view orders, and handle customers.

### Project Overview
This e-commerce application is designed to provide a seamless user experience while demonstrating essential backend and frontend integrations using the **MERN stack**.

### Key Features of the Project:
- **REST API Creation**: Build scalable APIs to interact with the client-side and handle user authentication, product management, and order handling.
- **Authentication**: Implement secure login and registration features for user authentication.
- **Database Schema Design**: Learn how to create structured data models for products, users, and orders using MongoDB.
- **Backend Development**: Set up robust server-side logic using Node.js and Express.js.
- **Frontend Development**: Use React to build the user interface for a smooth and interactive experience.

---

### Core Concepts Covered:

#### **MERN Stack Overview**
The **MERN stack** is a set of technologies used for building full-stack web applications:
- **MongoDB**: A NoSQL database for storing data in a flexible JSON-like format.
- **Express.js**: A minimalist web framework for Node.js that simplifies backend API development.
- **React.js**: A JavaScript library for building dynamic user interfaces.
- **Node.js**: A JavaScript runtime used for executing JavaScript code server-side.

MERN is favored for its **JavaScript-only** approach, which means you use the same language (JavaScript) for both the frontend and the backend, streamlining the development process.

---

#### **Database Schema Design (MongoDB)**
In MongoDB, schema design is about defining the structure and relationships of data within the database. For this e-commerce platform, you'll design schemas for different entities such as:
- **User**: Stores user details like email, password (hashed), role (customer/admin), and order history.
- **Product**: Stores product information including name, description, price, stock quantity, and image.
- **Order**: Tracks order information, including customer details, ordered items, order status, and payment information.

For example, the **Product Schema** might look like this:

```js
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String }
});
```

---

#### **Authentication & Authorization**
- **Authentication** is the process of verifying the identity of a user. In the e-commerce app, users will need to log in or register to interact with certain features like placing orders and viewing order history.
  - **Login**: Users authenticate themselves by providing credentials (email and password). If valid, they are granted a session token (JWT - JSON Web Token).
  - **Registration**: Users can create an account by providing details such as email, password, and basic profile information.

- **Authorization** ensures that users can access only the resources they are permitted to. For example:
  - **Customers**: Can view products, add them to the cart, and place orders.
  - **Admins**: Can manage the product catalog, view customer orders, and process transactions.

A common approach for handling authentication is using **JWT (JSON Web Token)**:
- Upon successful login, the server generates a JWT, which is sent back to the client.
- The client stores this token (often in localStorage) and includes it in subsequent requests to verify their identity.

Example of how JWT is used for login:
```js
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
```

Authorization in the backend can be implemented using **middleware** to check if the request contains a valid JWT token before accessing protected routes.

---

Let’s get started with building your e-commerce platform! 🚀

It looks like you're summarizing a **project milestone report** for your **e-commerce project**. Here's a polished version with a professional tone and improved formatting:

---

### **Milestone 2: Project Setup and Login Page**

In this milestone, we focused on establishing the foundational front-end setup and implementing the login page for the application. Below are the key achievements:

---

#### **1. Front-End Framework**
- Set up the project using **React** with **Vite** to ensure a modern and efficient development workflow.

---

#### **2. Folder Structure**
- Organized the `src` folder into well-defined directories:
  - **components**: For reusable UI components.
  - **pages**: For individual application pages (e.g., Login, Signup).
  - **assets**: For static files such as images and icons.
- This structure promotes scalability and maintainability as the project grows.

---

#### **3. Login Page Implementation**
- Developed the **Login Page (`Login.jsx`)**, which includes:
  - Input fields for email and password.
  - Basic validation logic to ensure proper user input.
  - Visibility toggle for the password field using intuitive icons.
- The user interface ensures a clean and user-friendly design.

---

#### **4. Routing**
- Integrated **React Router** to enable navigation within the application.
- Added routes for:
  - `/login`: Login page.

---

#### **5. Styling**
- Applied basic styling using **CSS** (`App.css`) to achieve:
  - A professional and visually appealing interface.
  - Consistency across different elements of the login page.

---

#### **6. Git Integration**
- Initialized version control and added new files to the repository.
- Committed the progress to the project's **GitHub repository**, ensuring proper tracking of changes.

---

### **Outcome**
This milestone establishes a solid foundation for the front-end interface and interaction logic. The login page serves as a key component, enabling user authentication in future development phases.

---