import React from 'react'


const TransactionList = (props) => {
  return (
    <div className='transaction_List'>
        <h3 className="heading">Transaction List</h3>
        <ul>
            {props.list.map((task,index)=>(
                    <div >
                        <li key={index}>{task.text} <span className={task.amount>0?"green":"red"}>{task.amount}</span>           
                        <span className='transaction_List_button'>
                          <button onClick={() => props.delete(task.id)}>Delete</button>
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