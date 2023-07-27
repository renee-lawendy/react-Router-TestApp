import React from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumb from '../BreadCrumb'

export default function NavBar() {
  return (
    <header>
        <nav>
            <h1>Router</h1>
            <NavLink to ='/'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="info">Info</NavLink>
            <NavLink to="products">Products</NavLink>
        </nav>
<BreadCrumb/>
    </header>
  )
}
