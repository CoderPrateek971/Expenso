import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import '../App.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const AddTransaction = (props) => {
  const{
    handleSubmit,
    formState:{errors},
  }=useForm();
  
  const navigate = useNavigate();
    const[amount, setAmount]= useState(0);
    const[type,setType]= useState("debit");
    const[name,setName]=useState("") 

    const submitHandler = async (e) => {
      e.preventDefault();
    
      const newTx = {
        text: name,
        amount: type === "debit" ? -Number(amount) : Number(amount),
      };
    
      try {
        await axios.post(
          "https://expenso-osyg.onrender.com/api/v1/transactions",
          newTx,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
    
        navigate("/TransactionList");
    
      } catch (error) {
        console.log(error);
      }
    };
    
    

  return (
    <div className='addTransaction' style={{ marginTop: "185px" }}>
        <h3 className='heading'>Add Transaction</h3>
        <form onSubmit={submitHandler}>
        <label >Enter Amount </label>
        <input type="number" onChange={(e)=>{setAmount(e.target.value)}} value={amount} />
        <br />
        <br />
        <label >Enter Transaction Type </label>
        <input type="radio" id='credit' name='type' value='credit' onChange={(e)=>{setType(e.target.value)}}/>
        <label  htmlFor="credit"> Credit </label>
        <input type="radio" id='debit' name='type' value='debit' onChange={(e)=>{setType(e.target.value)}} />
        <label  htmlFor="debit"> Debit </label>
        <br />
        <br />
        <label>{type === "debit" ? "Paid to" : "Received from"}</label>        <input type="text" value={name} onChange={(e)=>{setName(e.target.value) }}/>
        <br />
        <br />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddTransaction