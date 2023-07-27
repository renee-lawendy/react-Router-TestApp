import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function InfoLayout() {
  return (
    <div className="help-layout">

    <h2>Website Help</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

    <nav>
      <NavLink to="question">View the FAQ</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
    </nav>

    <Outlet />

  </div>
  )
}
