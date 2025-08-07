import React, { useEffect, useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import axios from 'axios'

const AllBookings = () => {

    const [bookings, setBookings] = useState([])

    const getData = async () => {
        let fetchedData = await fetch("http://localhost:8080/getAllBookings")
        let data = await fetchedData.json()
        console.log(data)
        setBookings(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleVerify = async (bid) => {
        let res = await axios.get(`http://localhost:8080/verifyBooking/${bid}`)
        if (res.data) {
            getData()
        }
    }

    return (
        <>
            <NavAdmin />
            <div className="allbookings-outer">
                <div className="allbookings-inner">
                    <h1>All Bookings</h1>
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
                                <th>Verify Booking</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((element, index) => {
                                    return (
                                        <tr key={index}>
                                            <td id='image'> <img src={element.ground.groundImage} alt="Ground Image" /> </td>
                                            <td>{element.ground.name}</td>
                                            <td>{element.bid}</td>
                                            <td>{element.customer.cname}</td>
                                            <td>{element.customer.cphone}</td>
                                            {/* <td>nill</td>
                                            <td>nill</td> */}
                                            <td>{element.bookeddate}</td>
                                            <td>{element.bookedtime}</td>
                                            <td>{element.ground.price}</td>
                                            <td>{element.status}</td>
                                            <td>
                                                {
                                                    (element.status === "Pending") ?
                                                        <button id='verifyBtn' onClick={() => handleVerify(element.bid)} >Verify</button>
                                                        : (element.status === "Approved") ? <h3 id='verified' >Verified</h3> : <button id='cantVerifyBtn' >Verify</button>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    (element.status === "Approved")?
                                                    (element.payment === "Completed") ? <h4>{element.payment}</h4> : <p>{element.payment}</p>
                                                    : "-"
                                                }
                                            </td>
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

export default AllBookings
