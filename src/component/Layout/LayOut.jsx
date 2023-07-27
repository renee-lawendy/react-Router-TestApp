import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'


export default function LayOut() {
  return (
    <div className='root-layout'>
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

