import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavAdmin = () => {

    let navigate = useNavigate()

    let logout = ()=>{
        navigate("/")
    }

    return (
        <>
            <nav className='nav-admin'>
                <h1>Turf Booking System</h1>
                <ul className='aboutul'>
                    <Link to="/admin/home" >Home</Link>
                    <Link to="/contact" >Contact Us</Link>
                </ul>
                <ul className='links-ul'>
                    <Link to="/addground" >Add Ground</Link>
                    <Link to="/viewAllGrounds" >View All Grounds</Link>
                    <Link to="/viewAllCustomers" >View All Customers</Link>
                    <Link to="/viewAllBookings" >View All Bookings</Link>
                    <Link to="/" /* onClick={logout} */>Logout</Link>
                </ul>
            </nav>
        </>
    )
}

export default NavAdmin
