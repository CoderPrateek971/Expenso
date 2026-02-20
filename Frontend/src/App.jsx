import { useState } from 'react'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import IncomeExpenses from './components/IncomeExpenses'
import './App.css'
import TransactionList from './components/TransactionList';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Flower', amount: -20 , type : "debit"},
    { id: 2, text: 'Salary', amount: 300 , type : "credit"},
    { id: 3, text: 'Book', amount: -10 , type : "debit"},
  ]);
  
  const amounts = transactions.map(t => t.amount);
  const totalBalance = amounts.reduce((acc, curr) => acc + curr, 0);
  const Income = amounts.filter((amount)=> amount>0);
  const TotalIncome = Income.reduce((acc,curr)=> acc+(curr),0);
  const expense = amounts.filter((amount)=> amount<0);
  const TotalExpense = expense.reduce((acc,curr)=> acc+(-curr),0);
  
  const addTransaction = (transaction) => {
    
    const nextId =
    transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
    
    const newTx = {
      id: nextId,
      ...transaction
    };
    
    setTransactions([...transactions, newTx]);
  };
  
  const deleteTransaction=(id)=>{
    setTransactions(transactions.filter(t => t.id !== id))
  }
  const myRouter= createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
        <Navbar/>
        <Home balance={totalBalance} income={TotalIncome} expense={TotalExpense} />
        </div>
      },
      {
        path:"/TransactionList",
        element:
        <div>
        <Navbar/>
        <TransactionList list={transactions} delete={deleteTransaction}/>
        </div>
      },
      {
        path:"/AddTransaction",
        element:
        <div>
        <Navbar/>
        <AddTransaction new_transaction = {addTransaction} /> 
        </div>
      },
      {
        path:"/Login",
        element:
        <div>
        <Navbar/>
        <Login /> 
        </div>
      },
      {
        path:"/SignUp",
        element:
        <div>
        <Navbar/>
        <SignUp /> 
        </div>
      },
      
    ]
  )

  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default App;
