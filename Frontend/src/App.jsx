import { useState, useEffect } from 'react'
import AddTransaction from './components/AddTransaction'
import './App.css'
import TransactionList from './components/TransactionList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute.jsx";



function App() {
  const [transactions, setTransactions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [amount, setAmount] = useState();
  const [text, setText] = useState("");


  const amounts = transactions.map(t => t.amount);
  const totalBalance = amounts.reduce((acc, curr) => acc + curr, 0);
  const Income = amounts.filter((amount) => amount > 0);
  const TotalIncome = Income.reduce((acc, curr) => acc + (curr), 0);
  const expense = amounts.filter((amount) => amount < 0);
  const TotalExpense = expense.reduce((acc, curr) => acc + (-curr), 0);


  const addTransaction = (transaction) => {

    axios.post("https://expenso-osyg.onrender.com/api/v1/transactions", transaction, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setTransactions((prev) => [...prev, response.data.data])
      })
      .catch((error) => {
        console.log("error:", error)
      })

  }



  const deleteTransaction = (id) => {
    axios.delete(`https://expenso-osyg.onrender.com/api/v1/transactions/${id}`, {
      headers: {
        Authorization: token
      }
    })
      .then(() => {
        setTransactions(prev => prev.filter(t => t._id !== id))
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Dashboard />
        </div>
      )
    },

    {
      path: "/home",
      element: token ? (
        <ProtectedRoute>
          <Navbar setToken={setToken} />
          <Home
            balance={totalBalance}
            income={TotalIncome}
            expense={TotalExpense}
            fetchTransactions={fetchTransactions} 
          />
        </ProtectedRoute>
      ) : (
        <Dashboard />
      )
    },

    {
      path: "/TransactionList",
      element: token ? (
        <ProtectedRoute>
          <Navbar  setToken={setToken}/>
          <TransactionList
            list={transactions}
            delete={deleteTransaction}
            token={token} 
          />
        </ProtectedRoute>
      ) : (
        <Dashboard />
      )
    },

    {
      path: "/AddTransaction",
      element: token ? (
        <ProtectedRoute>
          <Navbar setToken={setToken} />
          <AddTransaction new_transaction={addTransaction} />
        </ProtectedRoute>
      ) : (
        <Dashboard />
      )
    },

    {
      path: "/Login",
      element: (
        <div>
          <Login setToken={setToken}/>
        </div>
      )
    },

    {
      path: "/SignUp",
      element: (
        <div>
          <SignUp />
        </div>
      )
    }
  ]);

 const fetchTransactions = () => {

    if (!token) {
      console.log("No token found ❌");
      return;
    }

    axios.get("https://expenso-osyg.onrender.com/api/v1/transactions", {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setTransactions(response.data.data)
      })
      .catch((error) => {
        console.log("error : ", error);
      })

  };

  useEffect(() => {
    fetchTransactions();
  }, [token]);




  return (
    <div className='app'>


      <RouterProvider router={myRouter} />

    </div>
  )
}

export default App;
