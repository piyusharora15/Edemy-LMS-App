# Edemy - Full-Stack Learning Management System

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Edemy is a comprehensive e-learning platform developed using the MERN stack. Inspired by platforms like Udemy, it provides a seamless experience for both educators and students. Educators can create, manage, and monetize their courses, while students can enroll, learn, and track their progress.


---

## Features

Edemy is designed with distinct user roles, providing a tailored experience for both students and educators.

### 🎓 For Students
* **Course Discovery:** Browse a dynamic catalog of available courses.
* **Secure Authentication:** Easy and secure sign-up and sign-in process handled by Clerk.
* **Seamless Enrollment:** Enroll in courses securely using Stripe for payment processing.
* **My Courses:** Access a personal dashboard to view and continue all enrolled courses.
* **Course Consumption:** View course content, including video lectures and curriculum details.

### 👨‍🏫 For Educators
* **Secure Authentication:** Role-based authentication to access the educator-specific portal.
* **Course Creation:** An intuitive multi-step interface to create new courses, upload video content, and structure curriculum into chapters and lectures.
* **Educator Dashboard:** A dedicated dashboard providing valuable insights, including:
    * **Total Earnings:** Track revenue generated from course sales.
    * **Student Analytics:** View the total number of students enrolled across all courses.
* **Course Management:** Edit and manage existing courses to keep content up-to-date.



## 🛠️ Tech Stack

This project is a full-stack application built with the following technologies:

| Category          | Technology                                                                                                |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| **Frontend** | React.js, Tailwind CSS, Axios                                                                             |
| **Backend** | Node.js, Express.js                                                                                       |
| **Database** | MongoDB with Mongoose ODM                                                                                 |
| **Authentication**| Clerk (for user management and role-based access control)                                                 |
| **Payments** | Stripe API & Webhooks                                                                                     |
| **Deployment** | Vercel (for both frontend and serverless backend functions)                                               |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later)
* npm
* Git
* A MongoDB Atlas account (or a local MongoDB instance)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/piyusharora15/Edemy-LMS-App.git](https://github.com/piyusharora15/Edemy-LMS-App.git)
    cd Edemy-LMS-App
    ```

2.  **Setup the Backend (`server` directory):**
    ```sh
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add the environment variables from the example below.

3.  **Setup the Frontend (`client` directory):**
    ```sh
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory and add the environment variables from the example below.

### Environment Variables

You will need to create a `.env` file in both the `client` and `server` directories.

#### 📁 `server/.env`
```env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=4000
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
