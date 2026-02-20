import React from 'react'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'

const Home = (props) => {
  return (
    <div>
        <Balance balance={props.balance}/>
        <IncomeExpenses income={props.income} expense={props.expense}/>
    </div>
  )
}

export default Home