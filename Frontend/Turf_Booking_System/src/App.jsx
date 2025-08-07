import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Customregister from './pages/Customregister'
import Customlogin from './pages/Customlogin'
import CustomerHome from './pages/customerHome'
import Adminregister from './pages/Adminregister'
import AdminLogin from './pages/AdminLogin'
import Login from './pages/Login'
import AdminHome from './pages/AdminHome'
import AddGround from './pages/AddGround'
import AllGrounds from './pages/AllGrounds'
import AllCustomers from './pages/AllCustomers'
import Ground from './pages/Ground'
import Mywallet from './pages/Mywallet'
import MyBookings from './pages/MyBookings'
import AllBookings from './pages/AllBookings'

const App = () => {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/admin/register' element={<Adminregister/>} ></Route>
          <Route path='/register/customer' element={<Customregister/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
          {/* <Route path='/customer/login' element={<Customlogin/>} ></Route> */}
          {/* <Route path='/admin/login' element={<AdminLogin/>}></Route> */}
          <Route path='/admin/home' element={<AdminHome/>} ></Route>
          <Route path='/customer/home' element={<CustomerHome/>}></Route>
          <Route path='/ground/:groundId' element={<Ground/>} ></Route>
          <Route path='/addground' element={<AddGround/>} ></Route>
          <Route path='/viewAllGrounds' element={<AllGrounds/>} ></Route>
          <Route path='/viewAllCustomers' element={<AllCustomers/>} ></Route>
          <Route path='/viewAllBookings' element={<AllBookings/>} ></Route>
          <Route path='/myBookings' element={<MyBookings/>} ></Route>

          <Route path='/mywallet' element={<Mywallet/>} ></Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
