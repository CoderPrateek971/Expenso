import React from 'react'


const TransactionList = (props) => {
  return (
    <div className='transaction_List' style={{ marginTop: "185px" }}>
        <h3 className="heading">Transaction List</h3>
        <ul>
            {props.list.map((task,index)=>(
                    <div >
                        <li key={index}>{task.text} <span className={task.amount>0?"green":"red"}>{task.amount}</span>           
                        <span className='transaction_List_button'>
                          <button onClick={() =>{console.log("button clicked with id: ", task._id); 
                          props.delete(task._id)}}>Delete</button>
                          </span>
                        </li>
                        <br />
                    </div>
                    
                
            ))}
        </ul>
    </div>
  )
}

export default TransactionList