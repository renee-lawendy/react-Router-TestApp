import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
 //  use param in case of use Effect
    const product = useLoaderData()
    
    return (
        <div className='product-details'>
        <h3>the product name :{product.title}</h3>
        <p>product price :{product.price}</p>
        <p> desc:{product.description}</p>
        <div className="product-img">
        <img src={product.image} alt="" /></div>
        
        </div>
  )
}
export async function productDetailsLoader({params}){
    const {id}= params
let res = await fetch(`https://fakestoreapi.com/products/${id}`)
if(res === 404){
    throw Error("this product dosen't exist")
}
return res.json()
}
