import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");   
    window.location.reload();                 
  }

  return (
    <div className='navbar'>
        <ul className='ul_navbar'>
            <div className='nav'>
            <li>
            <Link to='/home'>Home</Link>
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
            <button onClick={handleLogout}>Logout</button>
            </li>
            </div>
        </ul>
        
    </div>
  )
}

export default Navbar