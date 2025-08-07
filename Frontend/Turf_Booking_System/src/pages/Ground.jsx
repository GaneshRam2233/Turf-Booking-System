import React, { useEffect, useState } from 'react'
import Navbarcust from '../components/Navbarcust'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Ground = () => {

  const params = useParams()
  const { groundId } = params

  const [ground, setGround] = useState({})

  const [bookedDate, setBookedDate] = useState('')
  const [bookedTime, setBookedTime] = useState('')

  const getData = async () => {
    let fetchedData = await fetch(`http://localhost:8080/getGround/${groundId}`)
    let data = await fetchedData.json()
    console.log(data)
    setGround(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleBookNow = async (e) => {
    e.preventDefault()
    // console.log("handle")
    let booking = {
      "bookeddate": bookedDate,
      "bookedtime": bookedTime,
      // "status" : "pending",
      "groundId": ground.gid,
      "customerId": parseInt(localStorage.getItem("currentUserId"))
    }
    console.log(booking)

    let res = await axios.post("http://localhost:8080/createBooking", booking)
    console.log(res.data)
    alert(res.data)
    if (res.data === "Booked Successfully") {
      setBookedDate('')
      setBookedTime('')
    }
  }

  return (
    <>
      <Navbarcust />
      <div className="g-outer">
        <h1>{ground.groundname}</h1>
        <div className="g-inner">
          <div className="left">
            <img src={ground.groundimagepath} alt="" />
          </div>
          <div className="right">
            <div className="descript">
              <h3>Description:</h3>
              <p>  {ground.grounddescription}</p>
            </div>
            <div className="dimension">
              <p>Width : {ground.groundwidth} ft</p>
              <p>Length : {ground.groundlength} ft</p>
              <p>Height : {ground.groundheight} ft</p>
            </div>
            <p>Price : ₹{ground.groundprice}</p>
            <form action="" onSubmit={handleBookNow}>
              <div className="bookdate">
                <label htmlFor='date' >Booking Date :</label>
                <input type="date" id='date' onChange={(e) => setBookedDate(e.target.value)} required />
              </div>
              <div className="booktime">
                <label>Booking Time Slot :</label>
                <select name="" id="" onChange={(e) => setBookedTime(e.target.value)} required  >
                  <option value="" disabled selected >Select Time Slot</option>
                  <option value="9:00AM - 10:00AM" >9:00AM - 10:AM</option>
                  {/* <option value="">10:00AM - 11:00AM</option> */}
                  <option value="11:00AM - 12:00PM">11:00AM - 12:00PM</option>
                  {/* <option value="">12:00PM - 1:00PM</option> */}
                  <option value="1:00PM - 2:00PM">1:00PM - 2:00PM</option>
                  <option value="3:00PM - 4:00PM">3:00PM - 4:00PM</option>
                </select>
              </div>
              <button type='submit' >Book Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ground
