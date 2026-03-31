# 💰 Expenso – Full Stack Expense Tracker

A modern **full-stack Expense Tracker Web Application** built using **React, Node.js, Express, and MongoDB**.  
It helps users manage their income and expenses securely with **user-specific data and authentication**.

---

## 🚀 Live Demo
🌐  [expenso-delta.vercel.app](https://expenso-delta.vercel.app/)

---

## 📸 Preview
🔗Demo Video: https://drive.google.com/file/d/1VHmHlPyhBYp-K9si6WKiWCS1vS--vYyb/view?usp=sharing

---

## ✨ Features

### 🔐 Authentication
- User Signup & Login  
- JWT-based Authentication  
- Secure Logout  

### 📊 Dashboard
- View **Total Balance**  
- Track **Total Income & Expenses**  
- Clean UI (optimized for desktop)  

### 💸 Transactions
- Add Income / Expense  
- View transaction history  
- Delete transactions  
- Real-time balance updates  

### 👤 User-Specific Data
- Each user sees only their own transactions  
- Secure backend data handling  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- React Router  
- React Hook Form  
- Axios  
- CSS  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- CORS & Environment Variables  

### Deployment
- Vercel (Frontend)  
- Render (Backend)  

---

## 📂 Project Structure

```bash
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
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/expense-tracker.git
```

### 2. Navigate to project folder
```bash
cd expense-tracker
```

### 3. Install dependencies

#### Frontend
```bash
cd Frontend
npm install
npm run dev
```

#### Backend
```bash
cd Backend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the **Backend** folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📌 How It Works

- Users authenticate using JWT  
- Each request is verified on the backend  
- Transactions are stored in MongoDB with a **user reference**  
- Balance is calculated dynamically:
  - Income → Added  
  - Expense → Subtracted  

---

## ⚠️ Challenges Faced

- Connecting frontend with backend APIs  
- Implementing secure JWT authentication  
- Fixing a major bug where **all users were seeing the same data**  
  → Solved using **user-specific queries in MongoDB**

---

## 🔮 Future Improvements

- Mobile responsiveness  
- Edit transactions  
- Charts & analytics  
- Dark mode  

---

## 👨‍💻 Author

**Prateek Garg** 

🔗Linkedn : https://www.linkedin.com/in/prateek-garg-coder/

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!
