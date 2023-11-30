import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
    
    const navigate=useNavigate()
    
    const [email, setemail]=useState()
    const [password ,setpassword]=useState()


    function handle_signin(){
        axios.post('http://localhost:4000/signin', {
            email:email,
            password:password
        })
        .then((res)=>{
            console.log(res.data.message)
            if(res.data.message==='user not found'){
                alert('user not found')
            }
            if(res.data.message==='password wrong'){
                alert('password wrong')
            }
            if(res.data.message==='user found'){
                // move to home page
                navigate('/')
                localStorage.setItem('TOKEN', res.data.token)
                localStorage.setItem('EMAIL', res.data.email)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
     
  return (
    <>
    <h2>Signin</h2>
    <input type="text" placeholder='enter email' value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
    <input type="password" placeholder='enter password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
    <button onClick={handle_signin}>Signin</button><br/>
    <Link to='/signup'>Signup</Link><br/>
    <Link to='/forget-password'>Forget password?</Link>
    </>
  )
}
