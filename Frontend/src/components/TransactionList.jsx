import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionList = () => {

  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        "https://expenso-osyg.onrender.com/api/v1/transactions",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log("FETCHED:", res.data.data);

      setTransactions(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [token]);

  return (
    <div className='transaction_List' style={{ marginTop: "185px" }}>
      <h3 className="heading">Transaction List</h3>
      <ul>
        {transactions.map((task) => (
          <li key={task._id}>
            {task.text}
            <span className={task.amount > 0 ? "green" : "red"}>
              {task.amount}
            </span>

            <span className='transaction_List_button'>
              <button>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;