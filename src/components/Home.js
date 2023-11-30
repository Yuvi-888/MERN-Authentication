import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function Home() {

  const navigate=useNavigate()

  useEffect(()=>{
    const token=localStorage.getItem('TOKEN')
    if(!token){
      navigate('/signin')
    }
  },[])

  function handle_logout(){
    localStorage.clear('TOKEN')
    navigate('/signin')
  }

  return (
 <>
 <div className="navbar">
 <h2 className='app_heading'>MyHome</h2>
 <button onClick={handle_logout} className='logout_btn'>Logout</button>
 </div>
 </>
  )
}
