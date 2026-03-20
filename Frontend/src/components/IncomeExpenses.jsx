import React from 'react'

const IncomeExpenses = (props) => {
  return (
    <div className='income' >
        <h3 className='heading'>Income</h3>
        <div>Income:  {props.income}</div>
        <br />
        <div>Expense:  {props.expense}</div>
        </div>
  )
}

export default IncomeExpenses