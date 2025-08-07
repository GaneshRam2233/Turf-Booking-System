import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mywallet from '../pages/Mywallet'
import Contact from '../pages/Contact'
import { Wallet } from 'lucide-react';

const Navbarcust = () => {

    const [showWallet, setShowWallet] = useState(false)
    const [showContact, setShowContact] = useState(false)

    let toggleShow = () => {
        // setShowWallet((pre)=>!pre)
        setShowWallet(true)
        console.log(showWallet)
    }

    let handleLogout = () => {
        localStorage.setItem("currentUserId", "")
    }

    return (
        <>
            <nav>
                <h1>Turf Booking System</h1>
                <ul className='aboutul'>
                    <Link to="/customer/home" >Home</Link>
                    <Link to="/about" >About Us</Link>
                    <Link onClick={() => setShowContact(true)} >Contact Us</Link>
                </ul>
                <ul className='registerul'>
                    <Link onClick={toggleShow} id='mywalletbtn' > <Wallet/> My Wallet</Link>
                    {/* <button onClick={toggleShow} >Wallet</button> */}
                    <Link to="/myBookings" id='bookedturfsbtn' >Booked Turfs</Link>
                    <Link to="/" onClick={handleLogout} >Logout</Link>
                </ul>
                {
                    showWallet && <Mywallet close={() => setShowWallet(false)} />
                }

            </nav>
            {showContact && <Contact close={setShowContact} />}
        </>
    )
}

export default Navbarcust
