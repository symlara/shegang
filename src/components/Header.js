import React from 'react'
import { Link } from 'react-router-dom';
import { useUserContext } from "../context/userContext";



const Header = () => {
  const { user, logoutUser } = useUserContext();




  return (
    <div>
      <nav>
          <h3>
            <Link className='pr-3 font-bold text-2xl' to="/">SheGang</Link>
              <Link to="/chat">Chat</Link>
          </h3>
          <div>
              {user ? (
              <>
              <Link to="/profile">Profile</Link>
              <button className='btn' onClick={logoutUser} >Logout</button>
              </> 
              ) : (  
              <>
              {/* <Link to="/register">Register</Link> */}
              <Link to="/login">Login/Signup</Link>
              </>
              )}
          </div>
      </nav>
        <div className='topnav' id="myTopnav">

        </div>
    </div>

    
  )
}

export default Header;