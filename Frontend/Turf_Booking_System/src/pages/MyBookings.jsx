import React, { useEffect, useRef, useState } from 'react'
import Navbarcust from '../components/Navbarcust'
import axios from 'axios'

const MyBookings = () => {

    const [bookings, setBookings] = useState([])

    const cancelRef = useRef()

    const getData = async () => {
        // let fetchedData = await fetch(`http://localhost:8080/getBookingById/2`)
        // let fetchedData = await fetch("http://localhost:8080/getAllBookings")
        let id = parseInt(localStorage.getItem("currentUserId"))
        let fetchedData = await fetch(`http://localhost:8080/getBookingsByCid/${id}`)

        let data = await fetchedData.json()
        console.log(data)
        setBookings(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleCancel = async (bid) => {
        let res = await axios.get(`http://localhost:8080/cancelBooking/${bid}`)
        if (res.data) {
            getData()
        }
    }

    if (cancelRef.current === "Cancelled") {
        cancelRef.current.style.color = "red" // giving red color text for cancelled booking
    }

    const handlePayment = async (bid) => {
        let res = await axios.get(`http://localhost:8080/completePayment/${bid}`)
        alert(res.data)
        if (res.data === "Payment Completed") {
            getData()
        }
    }

    // if (Object.keys(bookings).length != 0) {
    // if (bookings.length != 0) {
    // if(bookings!=null){

    return (
        <>
            <Navbarcust />
            <div className="mybooking-outer">
                <div className="mybooking-inner">
                    <h1>My Bookings</h1>

                    <table >
                        <thead>
                            <tr>
                                <th>Ground</th>
                                <th>Ground Name</th>
                                <th>Booking Id</th>
                                <th>Customer Name</th>
                                <th>Customer Contact</th>
                                <th>Booking Date</th>
                                <th>Booking Time Slot</th>
                                <th>Amount</th>
                                <th>Booking Status</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings.map((ele, index) => {
                                    return (
                                        <tr key={index} className="myBookings-outer">
                                            <td id='image' ><img src={ele.ground.groundImage} alt="Ground Image" /></td>
                                            <td>{ele.ground.name}</td>
                                            <td>{ele.bid}</td>
                                            <td>{ele.customer.cname}</td>
                                            <td>{ele.customer.cphone}</td>
                                            {/* <td>check</td>
                                            <td>check</td> */}
                                            <td>{ele.bookeddate}</td>
                                            <td>{ele.bookedtime}</td>
                                            <td> Rs.{ele.ground.price}</td>
                                            <td ref={cancelRef} > {ele.status} </td>
                                            <td>
                                                {
                                                    (ele.status === "Approved") ?
                                                        ele.payment === "Pending" ? <button id='pay' onClick={(e) => handlePayment(ele.bid)} >Pay Now</button> : <p>{ele.payment}</p>
                                                        : ""
                                                }
                                            </td>
                                            <td> {ele.status === "Pending" ? <button id='cancel' onClick={() => handleCancel(ele.bid)} >Cancel Booking</button> : "-"}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default MyBookings
