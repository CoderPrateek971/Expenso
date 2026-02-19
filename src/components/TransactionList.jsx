import React from 'react'
import "./Heading.css"
import './TransactionList.css'

const TransactionList = (props) => {
  return (
    <div>
        <h3 className="heading">Transaction List</h3>
        <ul>
            {props.list.map((task,index)=>(
                    <div>
                        <li key={index}>{task.text} <span className={task.amount>0?"green":"red"}>{task.amount}</span>                           <button onClick={() => props.delete(task.id)}>Delete</button>
                        </li>
                    </div>
                    
                
            ))}
        </ul>
    </div>
  )
}

export default TransactionList