import React from 'react'

const Balance = (props) => {
  return (
    <div>
        <h3 className='heading'>Balance</h3>
        <div>{props.balance}</div>

    </div>
  )
}

export default Balance