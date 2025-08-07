import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Customregister = () => {

    let [cName, setCName] = useState('')
    let [cEmail, setCEmail] = useState('')
    let [cPhone, setCPhone] = useState('')
    let [cAddress, setCAddress] = useState('')
    let [cPassword, setCPassword] = useState('')

    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault();
        let payload = {
            "cname": cName,
            "cemail": cEmail,
            "cphone": cPhone,
            "caddress": cAddress,
            "cpassword": cPassword
        }
        try {
            let res = await axios.post("http://localhost:8080/csignup", payload)
            alert("User Registration Successfull", res.data)
        } catch (error) {
            console.log(error);
        }

        setCName('')
        setCEmail('')
        setCPhone('')
        setCPassword('')
        setCAddress('')

        navigate("/login")
    }

    return (
        <>
            <div className="cregist-outer">
                <div className="cregist-inner">
                    <div className="left">
                        <img id='cregistImage' src="/src/assets/Turf_play_pic.png" alt="" />
                        <img id='logo' src="/src/assets/Logo_ThePowerTurf.png" alt="" />
                    </div>
                    <div className="right">
                        <h1>Customer Registration</h1>
                        <form action="" onSubmit={handleSubmit} >
                            {/* <div className="username"> */}
                            <label htmlFor="name">User Name</label>
                            <input type="text" id='name' placeholder='Enter your Name' value={cName} onChange={(e) => setCName(e.target.value.trim())} required autoComplete='off' />
                            {/* </div>
                            <div className="email"> */}
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' required autoComplete='off' placeholder='Enter your Email' value={cEmail} onChange={(e) => setCEmail(e.target.value.trim())} />
                            {/* </div> */}
                            <label htmlFor="phone">Contact No.</label>
                            <input type="tel" id='phone' placeholder='Enter Phone number' value={cPhone} onChange={(e) => setCPhone(e.target.value.trim())} required autoComplete='off' />
                            <label htmlFor="address">Address</label>
                            <textarea name="" id="address" placeholder='Enter your Address' value={cAddress} onChange={(e) => setCAddress(e.target.value)} required autoComplete='off' ></textarea>
                            <label htmlFor="pass">Password</label>
                            <input type="password" id='pass' placeholder='Enter your Password' value={cPassword} onChange={(e) => setCPassword(e.target.value.trim())} required autoComplete='off' />

                            <button type='submit' >Register</button>

                            <footer>
                                <p>Already have an account?</p>
                                <Link to="/login">Login</Link>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customregister
