import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import ForgetPassword from './components/ForgetPassword'
import SetPassword from './components/SetPassword'

export default function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/forgetpassword' element={<ForgetPassword/>}/>
  <Route path='/setpassword' element={<SetPassword/>}/>
 </Routes>
 </BrowserRouter>
 </>
  )
}
