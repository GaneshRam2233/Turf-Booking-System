import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, UserRound, Lock } from 'lucide-react';

const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let res = await axios.get(`http://localhost:8080/alogin?email=${email}&password=${password}`)

        alert(res.data)
        if (res.data === "Login Successfull") {
            navigate("/admin/home")
        }
    }

    return (
        <>
            {/* <div className="outer"> */}
            {/* <div className="inner"> */}
            {/* <div className="left"> */}
            {/* <img src="" alt="" /> */}
            {/* </div> */}
            <div className="login">
                <h1>Admin Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <div className="login-inputWrap">
                        <UserRound id='userIcon' />
                        <input placeholder='Enter Admin Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <label htmlFor="">Password</label>
                    <div className="login-inputWrap">
                        <Lock id='userIcon' />
                        <input placeholder='Enter Admin Password' type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
                        {(showPass) ? <Eye id='passIcon' onClick={() => setShowPass(false)} /> : <EyeOff id='passIcon' onClick={() => setShowPass(true)} />}
                    </div>

                    <button type='submit' >Login</button>

                    {/* <footer>
                                <p>Don't have an account</p>
                                <Link to="/admin/register" >Sign Up</Link>
                            </footer> */}
                </form>
            </div>
            {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default AdminLogin
