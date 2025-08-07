import React, { useEffect, useRef, useState } from 'react'
import { Contact as ContactIcon, Mail, X } from 'lucide-react'

const Contact = (props) => {

    const [admins, setAdmins] = useState([])

    let outerRef = useRef()

    const getData = async () => {
        let fetchedData = await fetch("http://localhost:8080/getAllAdmins")
        let data = await fetchedData.json()
        console.log(data)
        setAdmins(data)
    }

    useEffect(() => {
        getData()
    }, [])

    let outerClose=(e)=>{
        if(outerRef.current === e.target){
            props.close(false)
        }
    }

    return (
        <>
            <div ref={outerRef} onClick={outerClose} className="contact-outer">
                <p><X id='close' onClick={()=>props.close(false)} /></p>
                <div className="contact-inner">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone No.</th>
                                <th>Email Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                admins.map((ele, i) => {
                                    return (
                                        <tr key={i} >
                                            <td>{ele.firstname + " " + ele.lastname}</td>
                                            <td><ContactIcon/> {ele.contact}</td>
                                            <td> <Mail/> {ele.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="contact-outer2">

            </div>
        </>
    )
}

export default Contact
