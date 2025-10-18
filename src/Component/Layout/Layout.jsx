import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../NavBar/Navbar'

export default function Layout() {
  return <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
}
