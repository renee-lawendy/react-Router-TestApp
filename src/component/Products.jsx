import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'

export default function Products() {
    const products = useLoaderData()
  return (
    <div className='products'>
{products.map(({id,title,price})=>{ return(
    <Link to={`${id.toString()}`} key={id}>
        <p>{title}</p>
        <span>{price}</span>
    </Link>)
})}
    </div>
  )
}
export async function productLoader(){
let response= await fetch ('https://fakestoreapi.com/products?limit=5');
if(response === 404){
    throw Error("couldn't fetch the products")
   
}
return response.json()
}
