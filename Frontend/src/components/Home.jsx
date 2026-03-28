import React from 'react'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses'
import { useLocation } from "react-router-dom";

const Home = (props) => {


  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [location.pathname]);


  return (
    <div className='home'>
      <div className='sub_home'>
        <Balance balance={props.balance} />
      </div>
      <div className='sub_home'>
        <IncomeExpenses income={props.income} expense={props.expense} />
      </div>
    </div>
  )
}

export default Home