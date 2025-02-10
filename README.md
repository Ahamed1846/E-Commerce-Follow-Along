# E-Commerce-Follow-Along

## Milestone 1: Project Overview

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

## **Milestone 2: Project Setup and Login Page**

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


### **Outcome**
This milestone establishes a solid foundation for the front-end interface and interaction logic. The login page serves as a key component, enabling user authentication in future development phases.

---
Here’s an updated and more polished version of your Milestone 4 summary:

---

## **Milestone 4: Creating User Model and Controller**

In this milestone, the focus was on implementing the **User model** and **controller** to manage user data and related operations in the backend. The following key achievements were made:

### **1. User Model Creation**
- Created a **User schema** using Mongoose to define the structure for storing user information in the **MongoDB** database.
- Key fields include:
  - **name**: User’s full name.
  - **email**: User's unique email address (with validation and uniqueness constraint).
  - **password**: User’s password (hashed and securely stored using **bcrypt**).
  - **timestamps**: Automatically generated created and updated timestamps for the user record.
  
### **2. Password Hashing**
- Implemented **password hashing** using **bcrypt** to ensure secure storage of user passwords. This prevents storing passwords in plaintext.

### **3. User Controller Development**
- Developed the **User controller** to handle user-related operations such as **registration** and **login**.
- Key methods implemented:
  - **createUser()**: Handles user registration by accepting data (name, email, password), validating it, hashing the password, and saving the user to the database.
  - **loginUser()**: Authenticates the user based on their email and password.

### **4. API Endpoints**
- Set up the following **API routes** to handle user operations:
  - **POST /api/users/register**: Endpoint for user registration.
  - **POST /api/users/login**: Endpoint for user login/authentication.

### **5. Error Handling**
- Implemented error handling for common issues:
  - Duplicate email addresses during registration.
  - Invalid credentials during login attempts.
  - General validation errors for missing or malformed input.
  
---

### **Outcome**
This milestone establishes a secure and robust backend infrastructure for managing user data, authentication, and registration. It sets the foundation for implementing features like user authorization and role management, and prepares the project for future expansion.

---

It looks like you’ve outlined a comprehensive breakdown of Milestone 5, focusing on creating the Signup Page for your application. Here's a potential structure for your documentation with a bit more detail and clarity:

---

# Milestone 5: Creating the Signup Page

In this milestone, the goal was to implement a signup page that allows users to register for an account within the application. The key achievements of this phase are:

## 1. **Signup Page Implementation**
   - **Component Created**: Developed the `Signup.jsx` component, which provides the interface for users to input their registration details.
   - **Form Fields**: The form includes the necessary fields for user details:
     - Name
     - Email
     - Password
   - **User Experience**: A clean, user-friendly layout was created to facilitate easy navigation and form submission.

## 2. **Form Validation**
   - **Client-Side Validation**: Introduced validation logic on the frontend to ensure that inputs are correctly formatted:
     - Proper email format.
     - Password strength (e.g., minimum length, special characters).
     - Displayed relevant error messages for invalid inputs to guide the user.

## 3. **Integration with Routing**
   - **React Router Setup**: Configured the signup page with React Router to ensure smooth navigation between pages.
   - **Seamless User Flow**: After successful signup, users are redirected to the appropriate page (e.g., login page or dashboard).

## 4. **Styling**
   - **Consistent Design**: The styling of the signup page was designed to match the overall theme of the application, ensuring a consistent and cohesive user experience.
   - **Responsive Layout**: Ensured that the signup form is mobile-friendly and adapts well to various screen sizes.

## 5. **Code Organization**
   - **Reusable Components**: Refactored the code to create reusable components, which helps in maintaining and scaling the application efficiently.
   - **Modular Structure**: The signup component was split into smaller, manageable sections for better readability and easier updates.

---

**Milestone 6: Secure Backend Endpoint for User Signup**  

### Objective  
Create a secure backend endpoint for user signup, ensuring encrypted password storage and safe user data handling.  

### Goals  
- Encrypt passwords before saving.  
- Securely store user details in the database.  

### Why Encrypt Passwords?  
🔹 **Protect Data** – Safeguards passwords in case of a breach.  
🔹 **Privacy** – Prevents password visibility.  
🔹 **Compliance** – Meets GDPR, PCI-DSS security standards.  
🔹 **Security** – Defends against password theft.  

---

# Milestone 7: Creating the Login Endpoint
In this milestone, we focused on implementing a secure and efficient login endpoint for user authentication. Key achievements include:

1. Login Endpoint Creation:
Developed an API endpoint (/api/users/login) to handle user login requests.
Configured the endpoint to accept user credentials, such as email/username and password.
2. User Retrieval:
Implemented logic to retrieve the corresponding user from the MongoDB database based on the provided email or username.
3. Password Validation:
Utilized bcrypt to compare the hashed password entered by the user with the stored hashed password in the database.
Ensured that only valid credentials allow user authentication while providing appropriate error messages for invalid inputs.
4. Error Handling:
Added robust error handling to return informative responses for scenarios such as:
Non-existent users.
Incorrect passwords.
5. Security Enhancements:
Ensured that sensitive user data, such as passwords, remains protected during authentication. 
Followed industry best practices to prevent common vulnerabilities, such as brute force attacks.

This milestone provides the foundation for user authentication, paving the way for implementing session management and token-based authentication in future milestones.

---

**Milestone 8: Designing the Homepage and Card Component**  

### Objective  
Develop a visually appealing and functional homepage with reusable components for showcasing products.  

### Key Achievements  

🔹 **Card Component** – Designed a reusable card component to display product details dynamically using props:  
&nbsp;&nbsp;&nbsp;&nbsp;✔ Product Name  
&nbsp;&nbsp;&nbsp;&nbsp;✔ Product Image  
&nbsp;&nbsp;&nbsp;&nbsp;✔ Product Price  

🔹 **Homepage Layout** – Created a clean, responsive layout using a grid and flexbox for a consistent user experience.  

🔹 **Component Reusability** – Ensured the card component is modular and adaptable for various application pages.  

🔹 **Code Submission** – Pushed the updated code to the GitHub repository.

---

# Milestone 9: Creating the Product Form
In this milestone, we focused on building a form that allows users to add products, including support for multiple product images. Key achievements include:

1. Product Form Implementation:
Designed and developed a form to capture essential product details, such as:
Product Name
Description
Price
Category
Multiple Product Images (file upload support)
2. Image Upload Handling:
Implemented functionality to allow multiple product images to be uploaded.
Ensured proper validation for image formats and file sizes.
3. Data Management:
Configured state management to handle form inputs efficiently.

Validated user inputs before submission to ensure accurate product data.

---

# Milestone 10: Creating the Product Schema and API Endpoint
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.

1. Product Schema Definition:
Defined a structured product schema using Mongoose to store product data in MongoDB.
Ensured each field has proper validation to maintain data integrity:
Name: Required, string
Description: Required, string
Price: Required, number, with validation for non-negative values
Image URL(s): Required, array of strings for multiple image storage
Category: Required, string
CreatedAt: Automatically generated timestamp
2. Endpoint Creation:
Developed a POST endpoint (/api/products) to accept product details from the frontend.
Implemented validation to ensure only correctly formatted data is stored in the database.
Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
Enforced strict validation to prevent invalid or incomplete product entries.
Returned appropriate error messages for missing or incorrect data inputs.