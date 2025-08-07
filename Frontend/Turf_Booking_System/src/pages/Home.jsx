import React from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {

    let navigate = useNavigate()

    return (
        <>
            <Navbar />
            <Header/>
            <main className="homemain">
                <section className='sec1'>
                    <div className="left">
                        <h2>Welcome to Turf Booking System</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae rerum accusamus sed, ipsa totam enim quod impedit dignissimos atque praesentium quibusdam reprehenderit laudantium quidem repellat quasi ducimus placeat cum est magni consectetur mollitia similique neque nam. Beatae, laboriosam suscipit?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto provident est iste sint, sunt odio voluptate doloribus vero dignissimos, veniam modi repudiandae quae odit? Excepturi ratione, harum atque, alias neque aliquam deleniti ad facilis suscipit minima fugit rerum consequuntur.</p>
                        <button onClick={()=>navigate("/register/customer")} >Get Started</button>
                    </div>
                    <div className="right">
                        <img src="/src/assets/Turf_pic_9.jpg" alt="" />
                    </div>
                </section>
                <section className='sec2'>
                    <div className="left">
                        <img src="/src/assets/Turf_pic_4.jpeg" alt="" />
                    </div>
                    <div className="right">
                        <h2>Instant Booking & Premium Facilities</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident beatae rerum accusamus sed, ipsa totam enim quod impedit dignissimos atque praesentium quibusdam reprehenderit laudantium quidem repellat quasi ducimus placeat cum est magni consectetur mollitia similique neque nam. Beatae, laboriosam suscipit?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic architecto provident est iste sint, sunt odio voluptate doloribus vero dignissimos, veniam modi repudiandae quae odit? Excepturi ratione, harum atque, alias neque aliquam deleniti ad facilis suscipit minima fugit rerum consequuntur.</p>
                        <button onClick={()=>navigate("/login")} >Get Started</button>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home
