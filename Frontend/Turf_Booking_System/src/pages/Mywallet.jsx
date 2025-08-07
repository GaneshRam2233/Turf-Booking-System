import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Mywallet = (props) => {

    const [wallet, setWallet] = useState(0)
    const [amount, setAmount] = useState('')

    const closeRef = useRef()

    const getData = async () => {
        let id = localStorage.getItem("currentUserId")
        let fetchedData = await fetch(`http://localhost:8080/getWallet/${id}`)
        let data = await fetchedData.json()
        console.log(data)
        setWallet(data)
    }
    useEffect(()=>{
        getData()
    })

    let closeWallet = (e) => {
        if (closeRef.current == e.target) {
            props.close()
        }
    }

    let handleUpdate = async () => {
        if (amount === '' || amount.includes("e")) {
            alert("Invalid Amount")
            setAmount('');
        }
        else {
            // setWallet(parseInt(wallet) + parseInt(amount))

            let id = localStorage.getItem("currentUserId")
            console.log(id)
            await axios.get(`http://localhost:8080/addToWallet/${id}?wallet=${amount}`)
            console.log(`http://localhost:8080/addToWallet/${id}?wallet=${amount}`)

            getData()
            setAmount('')
        }
    }

    return (
        <>
            <div ref={closeRef} onClick={closeWallet} className="wallet-outer">
                <div className="clearShow">
                    <p onClick={props.close} >X</p>
                </div>
                <div className="wallet-inner">
                    <div className="wallet-head">
                        <h2>My Wallet</h2>
                        <p>Wallet Balance : Rs {wallet}</p>
                    </div>
                    <div className="add-wallet">
                        <h2>Add Money in Wallet</h2>
                        <div className="amount">
                            <p>Amount</p>
                            <input placeholder='Enter Amount' type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                            <button onClick={handleUpdate} >Update Wallet</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mywallet
