import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function ForgetPassword() {

    const navigate=useNavigate()

    const [email, setemail]=useState()

    function handle_sendotp(){
        console.log(email)
        axios.post('http://localhost:4000/sendotp', {
            email:email,
        })
        .then((res)=>{
            console.log(res.data)
            if(res.data.message==='otp sent'){
                navigate('/setpassword')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
   <> 
    <input className='email_input' type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' /><br/>
    <button onClick={handle_sendotp} className='sendotp_btn'>Send OTP</button>
   </>
  )
}
