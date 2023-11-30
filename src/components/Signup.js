import axios from 'axios'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {

    const [email, setemail]=useState()
    const [password ,setpassword]=useState()

    function handle_signup(){
        axios.post('http://localhost:4000/signup', {
            email:email,
            password:password
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
  return (
    <>
    <h2>Signup</h2>
    <input type="text" placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
    <input type="password" placeholder='enter password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
    <button onClick={handle_signup}>Signup</button><br/>
    <Link to='/signin'>Signin</Link>
    </>
  )
}
