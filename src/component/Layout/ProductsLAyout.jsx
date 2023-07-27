import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProductsLAyout() {
  return (
    <div className="products-layout">
    <h2>products</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
    
    <Outlet />
  </div>
)
  
}
