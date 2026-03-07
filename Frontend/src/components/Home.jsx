import React from 'react'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'

const Home = (props) => {
  return (
    <div className='home'>
      <div className='sub_home'>
        <Balance balance={props.balance}/>
      </div>
      <div className='sub_home'>
        <IncomeExpenses income={props.income} expense={props.expense}/>
      </div>
    </div>
  )
}

export default Home