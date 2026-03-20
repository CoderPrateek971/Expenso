# 💰 Expense Tracker (React)

A simple **Expense Tracker Web Application** built using **React.js**.
This app allows users to track their income and expenses, view their total balance, and manage transactions easily.

---

## 🚀 Features

* Add new transactions (Income / Expense)
* View total balance
* Automatically calculate total income and expenses
* Delete transactions
* Login and Signup forms with validation
* Clean and simple user interface

---

## 🛠️ Tech Stack

* **React.js**
* **React Router**
* **React Hook Form**
* **JavaScript (ES6)**
* **CSS**

---

## 📂 Project Structure

## 📂 Project Structure
```
Expense-Tracker/
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTransaction.jsx
│   │   │   ├── Balance.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── IncomeExpenses.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── TransactionList.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── GlobalState.jsx
│   │   │   └── AppReducer.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── index.html
│
└── README.md
```
---

## ⚙️ Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/expense-tracker.git
```

### 2. Go to the project directory

```
cd expense-tracker
```

### 3. Install dependencies

```
npm install
```

### 4. Run the application

```
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 📌 How It Works

* Users can add a transaction with **amount, type, and description**
* If the transaction type is **credit**, it adds to the balance
* If the transaction type is **debit**, it subtracts from the balance
* The app updates:

  * Total Balance
  * Total Income
  * Total Expenses

---

## 🔮 Future Improvements

* Add backend using **Node.js and Express**
* Store data in **MongoDB**
* Implement **authentication system**
* Add **charts and analytics for expenses**
* Deploy the app online

---

## 👨‍💻 Author

**Prateek Garg**
