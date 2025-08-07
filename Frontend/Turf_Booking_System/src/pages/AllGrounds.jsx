import React, { useEffect, useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import axios from 'axios'

const AllGrounds = () => {

    const [grounds, setGrounds] = useState([])

    let getData = async () => {
        let fetchedData = await fetch("http://localhost:8080/getAllGrounds")
        let data = await fetchedData.json()
        console.log(data)
        setGrounds(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = async (gid)=>{
        await axios.delete(`http://localhost:8080/deleteGround/${gid}`)
        getData()
    }

    return (
        <>
            <NavAdmin />
            <div className="grounds-outer">
                <div className="grounds-inner">
                    <div className="grounds-heading">
                        <h1>All Grounds</h1>
                    </div>
                    <table   >
                        <thead>
                            <tr id='thead'>
                                <th>Ground</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Length</th>
                                <th>Width</th>
                                <th>Height</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                grounds.map((element, index) => {
                                    return (
                                        <tr className="ground-card" key={index} >
                                            <td><img src={element.groundimagepath} alt="" height={200} /></td>
                                            <td>{element.groundname}</td>
                                            <td>{element.grounddescription}</td>
                                            <td>{element.groundlength} .ft</td>
                                            <td>{element.groundwidth} .ft</td>
                                            <td>{element.groundheight} .ft</td>
                                            <td>₹{element.groundprice}</td>
                                            <td><button onClick={()=>handleDelete(element.gid)} >Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {/* {
                        grounds.map((element, index) => {
                            return (
                                <div className="groundCard" key={index}>
                                    <h2>Ground Name :{element.groundname}</h2>
                                    <h3>Description :{element.grounddescription}</h3>
                                    <h3>Price : Rs.{element.groundprice}</h3>
                                    <img src={element.groundimagepath} alt="" />
                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
        </>
    )
}

export default AllGrounds
