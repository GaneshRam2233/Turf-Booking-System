import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, UserRound, Lock } from 'lucide-react';

const Customlogin = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [showPass, setShowPass] = useState(false)
    // let [message, setMessage] = useState('') // to show error message - wrong password

    let navigate = useNavigate()

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await axios.get(`http://localhost:8080/clogin?email=${email}&password=${password}`)
            // alert(res.data) // it shows every response in alert
            let result = res.data.slice(0, res.data.indexOf("&"))
            alert(result)
            // if (res.data === "Login Successfull") {
            if (result === "Login Successfull") {
                // setMessage('') // clearing the wrong password message
                // alert(res.data)
                let data = res.data
                localStorage.setItem("currentUserId", data.slice(data.indexOf("&") + 1, data.length))
                navigate("/customer/home")
            }
            // else {
            //     setMessage(res.data)
            // }
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            {/* <div className="customlog"> */}
            {/* <div className="inner"> */}
            {/* <div className="left"> */}
            {/* <img src="" alt="" /> */}
            {/* </div> */}
            <div className="login">
                <h1>Customer Login</h1>
                <form action="" onSubmit={handleSubmit} >

                    <label htmlFor="email">Email </label>
                    <div className="login-inputWrap">
                        <UserRound id='userIcon' />
                        <input id='email' placeholder='Enter your Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' />
                    </div>
                    <label htmlFor="pass">Password </label>
                    <div className="login-inputWrap">
                        <Lock id='userIcon' />
                        <input id='pass' placeholder='Enter Password' type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete='off' />
                        {(showPass) ? <Eye id='passIcon' onClick={() => setShowPass(false)} /> : <EyeOff id='passIcon' onClick={() => setShowPass(true)} />}
                    </div>

                    {/* <div className="passError" style={{ color: 'red' }}>  -> inline css in React 
                                {message}  -> to show error message - wrong password 
                            </div> */}

                    <button type='submit'>Login</button>

                    <footer>
                        <p>don't have an account?</p>
                        <Link to='/register/customer' >Signup</Link>
                    </footer>
                </form>
            </div>
            {/* </div> */}
            {/* </div> */}
        </>
    )
}

export default Customlogin
