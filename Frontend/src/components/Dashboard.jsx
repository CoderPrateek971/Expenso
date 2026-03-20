import React from 'react'
import dashboard_image from "../assets/images/dashboard_image.png"
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <div>

    <div className='navbar' style={{
      margin:"0px"
    }}>
        <ul className='ul_navbar'>
            
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
    <div className='dashboard'>
        <img src={dashboard_image} alt="image" />
    </div>
    </div>
  )
}

export default Dashboard