import React, { useEffect, useState } from 'react'
import NavAdmin from '../components/NavAdmin'

const AllCustomers = () => {

    const [customers, setCustomers] = useState([])

    const getData = async () => {
        let fetchedData = await fetch("http://localhost:8080/getAllCustomers")
        let data = await fetchedData.json()
        console.log(data)
        setCustomers(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <NavAdmin />
            <div className="customer-outer">
                <div className="customer-inner">
                    <h1>All Customers Details</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Phone No.</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        {
                            customers.map((ele, index) => {
                                return (
                                    <tr key={index} className="customer-card">
                                        <td>{ele.cname}</td>
                                        <td>{ele.cemail}</td>
                                        <td>{ele.cphone}</td>
                                        <td>{ele.caddress}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default AllCustomers
