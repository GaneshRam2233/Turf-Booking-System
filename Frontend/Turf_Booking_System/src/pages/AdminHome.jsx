import React from 'react'
import NavAdmin from '../components/NavAdmin'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AdminHome = () => {
  return (
    <>
      <NavAdmin />
      <Header />
      <div className="ahome-outer">
        <h1>Welcome Admin</h1>
      </div>
      <div className="ahome-outer2">
        <div className="ahome-inner2">
          <h3>Add Ground</h3>
          <h3>View all Grounds and Customers details</h3>
          <h3>View and verify Bookings</h3>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminHome
