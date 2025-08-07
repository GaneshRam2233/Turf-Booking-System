import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className='homefooter'>
                <div className="foot">
                    <h3>Turf Booking Sytem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatem similique minima suscipit corrupti nisi natus nobis cum architecto id fugit fugiat praesentium vero sint!</p>
                </div>
                <div className="foot">
                    <h3>About Us</h3>
                    <Link to=''>link1</Link>
                    <Link to=''>link2</Link>
                    <Link to=''>link3</Link>
                    <Link to=''>link4</Link>
                </div>
                <div className="foot">
                    <h3>Contact Us</h3>
                    <Link to=''>link1</Link>
                    <Link to=''>link2</Link>
                    <Link to=''>link3</Link>
                    <Link to=''>link4</Link>
                </div>
                <div className="foot">
                    <h3>Careers</h3>
                    <Link to=''>link1</Link>
                    <Link to=''>link2</Link>
                    <Link to=''>link3</Link>
                    <Link to=''>link4</Link>
                </div>
                <div className="foot">
                    <h3>Links</h3>
                    <Link to=''>link1</Link>
                    <Link to=''>link2</Link>
                    <Link to=''>link3</Link>
                    <Link to=''>link4</Link>
                </div>
                <div className="footcopy">
                    <p>&copy; 2025 Copyright: <a href='mailto: ram@gmail.com'>ram@gmail.com</a> </p>
                </div>
            </footer> 
    </>
  )
}

export default Footer
