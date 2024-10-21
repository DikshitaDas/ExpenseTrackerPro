# ![Expense Tracker Pro](https://img.icons8.com/color/48/000000/budget.png) **Expense Tracker Pro**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) 
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) 
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Nodemailer](https://img.shields.io/badge/Nodemailer-yellow?style=for-the-badge&logo=mail&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-blue?style=for-the-badge)

---

## 📖 Introduction

**Expense Tracker Pro** is a powerful web application built on the MERN stack (MongoDB, Express.js, React.js, Node.js) that simplifies personal finance management. Track your income and expenses with ease and gain insights into your financial habits!

---

## 🌟 Features

- ![Login](https://img.icons8.com/color/48/000000/key.png) **User Authentication:** Secure login, registration, and password reset using JWT and bcrypt.
- ![Add Income](https://img.icons8.com/color/48/000000/plus-math.png) **Add Income:** Easily add income and automatically update your balance.
- ![Add Expense](https://img.icons8.com/color/48/000000/minus.png) **Add Expenses:** Record expenses and keep your finances in check.
- ![Transactions](https://img.icons8.com/color/48/000000/view-details.png) **View Transactions:** Access a comprehensive history of all transactions.
- ![Edit/Delete](https://img.icons8.com/color/48/000000/delete.png) **Edit/Delete Transactions:** Modify or remove transactions as needed.
- **Forgot/Reset Password:** Secure email integration for password reset requests.

---

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DikshitaDas/ExpenseTrackerPro.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ExpenseTrackerPro
   ```

3. **Install the required dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables in a `.env` file:**
   ```
   MONGO_URI=your_mongo_db_connection_string
   jwt_salt=your_jwt_secret
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

---

## 🛠️ Technologies Used

- ![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) **Node.js**: Backend environment to run JavaScript.
- ![Express.js](https://img.icons8.com/color/48/000000/express.png) **Express.js**: Framework for building robust APIs.
- ![MongoDB](https://img.icons8.com/color/48/000000/mongodb.png) **MongoDB**: NoSQL database for storing user data and transactions.
- **JWT**: Secure authentication and session management.
- **Nodemailer**: For sending password reset emails.
- ![Bcrypt](https://img.icons8.com/color/48/000000/lock-2.png) **Bcrypt**: For hashing user passwords securely.

---

## 📋 API Endpoints

### Auth Routes

| Route                  | Method | Description                      |
|------------------------|--------|----------------------------------|
| `/register`            | POST   | Register a new user             |
| `/login`               | POST   | User login with JWT token       |
| `/forgotpw`     | POST   | Request password reset           |
| `/resetpw`      | POST   | Reset password with code         |

### Transactions Routes

| Route                   | Method | Description                    |
|-------------------------|--------|--------------------------------|
| `/addIncome`            | POST   | Add new income                 |
| `/addExpense`           | POST   | Add new expense                |
| `/`                      | GET    | View all transactions          |
| `/:transaction_id`      | DELETE | Delete a transaction           |

---

## 🔮 Future Enhancements

-**Data Visualization**: Graphs to visualize spending patterns.
-**Monthly Reports**: Auto-generated reports summarizing expenses and income.

---

## 📝 License

This project is licensed under the MIT License.

