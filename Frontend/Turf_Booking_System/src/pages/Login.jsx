import React, { useState } from 'react'
import Customlogin from './Customlogin'
import AdminLogin from './AdminLogin'

const Login = () => {

  const [isCustomer, setIsCustomer] = useState(true)


  return (
    <>
      <div className="login-outer">
        <div className="login-title">
          <h1>Turf Booking System</h1>
          <div className="login-toggle">
            <button className={isCustomer ? 'active' : ''} onClick={() => setIsCustomer(true)} >Customer</button>
            <button className={!isCustomer ? 'active' : ''} onClick={() => setIsCustomer(false)} >Admin</button>
          </div>
        </div>
        <div className="login-inner">
          <img src="/src/assets/Turf_pic_12.jpg" alt="" />
          {
            isCustomer ? <Customlogin /> : <AdminLogin />
          }
        </div>
      </div>
    </>
  )
}

export default Login
