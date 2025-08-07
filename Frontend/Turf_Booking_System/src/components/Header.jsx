import React from 'react'

const Header = () => {
    return (
        <>
            <header className='homeheader'>
                <div className="left">
                    <h2>Seamless Turf Booking at Your Fingertips Discover, Schedule, and Play on Top Sports Grounds Near You.</h2>
                    <img src="/src/assets/Turf_pic_8.jpg" alt="" />
                    {/* <img src="/src/assets/Turf_pic_3.jpg" alt="image not found" /> */}
                    <p>Book, Play, Win - Turf Life!</p>
                </div>
                <div className="right">
                    {/* <img src="/src/assets/Turf_pic_3.jpg" alt="image not found" /> */}
                    <img src="/src/assets/Logo_ThePowerTurf.png" alt="" />
                </div>
            </header>
        </>
    )
}

export default Header
