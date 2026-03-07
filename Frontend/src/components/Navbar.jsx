import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='ul_navbar'>
            <div className='nav'>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/TransactionList'>Transaction List</Link>
            </li>
            <li>
            <Link to='/AddTransaction'>Add Transaction</Link>
            </li>
            </div>
            <div className='nav'>
            <li>
            <Link to='/Login'>Login</Link>
            </li>
            <li>
            <Link to='/SignUp'>Sign Up</Link>
            </li>
            </div>
        </ul>
        
    </div>
  )
}

export default Navbar