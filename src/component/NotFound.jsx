import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>page not found</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis.</p>
    <p>Got to <Link to={"/"} > home page</Link>.</p>
    </div>
  )
}
