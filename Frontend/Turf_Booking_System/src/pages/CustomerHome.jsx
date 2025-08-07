import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbarcust from '../components/Navbarcust'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

const CustomerHome = () => {

    const [grounds, setGrounds] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        let fetchedData = await fetch("http://localhost:8080/getAllGrounds")
        let data = await fetchedData.json()
        console.log(data)
        setGrounds(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Navbarcust />
            <Header />
            <div className="chome-outer">
                <h1>Welcome Home Customer, Grounds available for Booking</h1>
                <div className="chome-inner">
                    {
                        grounds.map((ele) => {
                            return (
                                <div key={ele.gid} className="ground-card">
                                    <Link to={`/ground/${ele.gid}`}>
                                        <img src={ele.groundimagepath} alt="ground image" />
                                        <div className="card-texts">
                                            <h2>{ele.groundname}</h2>
                                            <h3>{ele.grounddescription}.</h3>
                                            <p>width : {ele.groundwidth}ft</p>
                                            <p>Length : {ele.groundlength}ft</p>
                                            <p>Height : {ele.groundheight}ft</p>
                                        </div>
                                    </Link>
                                    <div className="card-foot">
                                        <h3>Price : ₹{ele.groundprice} (1hr) </h3>
                                        <button onClick={()=>{ alert("Enter Date and Time to Book"); navigate(`/ground/${ele.gid}`)}} >Book Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CustomerHome
