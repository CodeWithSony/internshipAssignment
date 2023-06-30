import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const user = localStorage.getItem("name")
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.clear();
        navigate("/home");
        
    }
  return (
    <>

   <h1>Welcome to Home page {user}</h1>
   <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home
