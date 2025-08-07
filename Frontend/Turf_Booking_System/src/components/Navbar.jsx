// import { Contact } from 'lucide-react'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../pages/Contact'

const Navbar = () => {

    const [showContact,setShowContact] = useState(false)

    return (
        <>
            <nav>
                <div className="title">
                    <img src="/src/assets/Turf_pic_17.png" alt="Logo" />
                    <h1> Turf Booking System</h1>
                </div>
                <ul className='aboutul'>
                    <Link  >About Us</Link>
                    <Link onClick={()=>setShowContact(true)} >Contact Us</Link>
                </ul>
                <ul className='registerul'>
                    <Link to="/register/customer" id='registerbtn' >Register Customer</Link>
                    <Link to="/login" id='loginbtn' >Login</Link>
                </ul>
            </nav>
            { showContact && <Contact close={setShowContact} /> }
        </>
    )
}

export default Navbar
