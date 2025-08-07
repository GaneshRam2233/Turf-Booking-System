import React, { useRef, useState } from 'react'
import NavAdmin from '../components/NavAdmin'
import axios from 'axios'

const AddGround = () => {

    const [groundName, setGroundName] = useState('')
    const [groundDescript, setGroundDescript] = useState('')
    const [groundWidth, setGroundWidth] = useState('')
    const [groundLength, setGroundLength] = useState('')
    const [groundHeight, setGroundHeight] = useState('')
    const [groundPrice, setGroundPrice] = useState('')
    const [groundImage, setGroundImage] = useState('')

    const imageRef = useRef(null)

    let handleSubmit = async (e) => {
        e.preventDefault()

        const groundDetails = {
            "groundname": groundName,
            "grounddescription": groundDescript,
            "groundwidth": groundWidth,
            "groundlength": groundLength,
            "groundheight": groundHeight,
            "groundprice": groundPrice
        }

        const data = new FormData();
        data.append("groundImage", groundImage); // match the name expected in Spring
        data.append("ground", new Blob([JSON.stringify(groundDetails)], { type: "application/json" }));
        // Blob is required if we send form data with file and json to make server understand it is json , without Blob the server considers it as a plain string

        try {
            const response = await axios.post("http://localhost:8080/addGround", data, { headers: { "Content-Type": "multipart/form-data" } });
            console.log(response.data);
            if (response.data) {
                alert("Ground Uploaded Successfully")

                setGroundName('')
                setGroundDescript('')
                setGroundWidth('')
                setGroundLength('')
                setGroundHeight('')
                setGroundPrice('')
                setGroundImage(null) // set the state variable to null
                imageRef.current.value="" // set the value shown in browser to empty
            }
            else {
                alert("Error uploading Ground...Try Again")
            }

        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <NavAdmin />
            <div className="add-ground">
                <div className="inner">
                    <h1>Enter Ground Details</h1>
                    <form className='form' action="" onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div className="inp1">
                                <label htmlFor="">Ground Name</label>
                                <input placeholder='Enter Ground Name' type="text" value={groundName} onChange={(e) => setGroundName(e.target.value)} />
                            </div>
                            <div className="inp2">
                                <label htmlFor="">Ground Description</label>
                                <textarea placeholder='Enter Ground Description' value={groundDescript} onChange={(e) => setGroundDescript(e.target.value)} name="" id="" style={{ height: '100px', width: '400px', resize: 'none' }} ></textarea>
                            </div>
                            <div className="inp3">
                                <label htmlFor="">Ground Width</label>
                                <input placeholder='Enter Ground Width' type="text" value={groundWidth} onChange={(e) => setGroundWidth(e.target.value)} />
                            </div>
                            <div className="inp4">
                                <label htmlFor="">Ground Length</label>
                                <input placeholder='Enter Ground Length' type="text" value={groundLength} onChange={(e) => setGroundLength(e.target.value)} />
                            </div>
                            <div className="inp5">
                                <label htmlFor="">Ground Height</label>
                                <input placeholder='Enter Ground Height' type="text" value={groundHeight} onChange={(e) => setGroundHeight(e.target.value)} />
                            </div>
                            <div className="inp6">
                                <label htmlFor="">Price</label>
                                <input placeholder='Enter Ground Price' type="text" value={groundPrice} onChange={(e) => setGroundPrice(e.target.value)} />
                            </div>
                            <div className="inp7">
                                <label htmlFor="">Select Ground Image</label>
                                <input type="file" onChange={(e) => setGroundImage(e.target.files[0])} ref={imageRef} />
                            </div>
                        </div>

                        <button type='submit' >Add Ground</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddGround
