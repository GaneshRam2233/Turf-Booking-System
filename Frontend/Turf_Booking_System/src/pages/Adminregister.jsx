import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Adminregister = () => {

    let [firstname, setFirstname] = useState('')
    let [lastname, setLastname] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [gender, setGender] = useState('')
    let [age, setAge] = useState('')
    let [password, setPassword] = useState('')
    let [street, setStreet] = useState('')
    let [city, setCity] = useState('')
    let [pincode, setPincode] = useState('')

    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            "contact": phone,
            gender: gender,
            age: age,
            password: password,
            "address": street,
            city: city,
            pincode: pincode
        }
        let res = await axios.post("http://localhost:8080/asignup", payload)
        if (res.data != null) {
            alert("Admin Registered Successfully")
            navigate("/login")
        }
        else {
            alert("Admin Already Exist,Go to Login")
        }
    }

    // let ageArray=[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
    // let textAreaStyle = { height: '50px', width: '300px', resize: 'none', overflow: 'auto' }

    return (
        <>
            <div className="aregist-outer">
                <div className="aregist-inner">
                    <div className="left">
                        <img src="/src/assets/Turf_pic_21.jpg" alt="" />
                    </div>
                    <div className="right">
                        <h1>Admin Registration</h1>
                        <form action="" onSubmit={handleSubmit} >
                            <div className="fname">
                                <label htmlFor="">First Name</label>
                                <input placeholder='Enter First Name' type="text" value={firstname} onChange={(e) => setFirstname(e.target.value.trim())} />
                            </div>
                            <div className="lname">
                                <label htmlFor="">Last Name</label>
                                <input placeholder='Enter Last Name' type="text" value={lastname} onChange={(e) => setLastname(e.target.value.trim())} />
                            </div>
                            <div className="email">
                                <label htmlFor="">Email Id</label>
                                <input placeholder='Enter Email' type="text" value={email} onChange={(e) => setEmail(e.target.value.trim())} />
                            </div>
                            <div className="contact">
                                <label htmlFor="">Contact No.</label>
                                <input placeholder='Enter your Contact number' type="text" value={phone} onChange={(e) => setPhone(e.target.value.trim())} />
                            </div>
                            <div className="gender">
                                <label htmlFor="">Gender</label>
                                <div className="gender">
                                    <input type="radio" name='gender' id='male' value={gender} onClick={() => setGender("Male")} />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name='gender' id='female' value={gender} onClick={() => setGender("Female")} />
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" name='gender' id='others' value={gender} onClick={() => setGender("others")} />
                                    <label htmlFor="others">Others</label>
                                </div>
                            </div>
                            <div className="age">
                                <label htmlFor="">Age</label>
                                <input placeholder='Enter your Age' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="pass">
                                <label htmlFor="">Password</label>
                                <input placeholder='Enter Password' type="text" value={password} onChange={(e) => setPassword(e.target.value.trim())} />
                            </div>
                            <div className="street">
                                <label htmlFor="">Street</label>
                                <textarea placeholder='Enter Door No. & Street' value={street} onChange={(e) => setStreet(e.target.value.trim())} name="" id=""  ></textarea> {/* style={textAreaStyle} */}
                            </div>
                            <div className="city">
                                <label htmlFor="">City</label>
                                <input placeholder='Enter City' type="text" value={city} onChange={(e) => setCity(e.target.value.trim())} />
                            </div>
                            <div className="pincode">
                                <label htmlFor="">Pincode</label>
                                <input placeholder='Enter Pincode' type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                            </div>

                            <button type='submit'>Register Admin</button>

                            {/* <footer>
                                <p>Already have an account?</p>
                                <Link to="/login" >Login</Link>
                            </footer> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminregister
