import React from 'react'

const IncomeExpenses = (props) => {
  return (
    <div>
        <h3 className='heading'>Income</h3>
        <div>Income:  {props.income}</div>
        <div>Expense:  {props.expense}</div>
        </div>
  )
}

export default IncomeExpenses