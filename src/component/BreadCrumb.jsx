import { useLocation ,Link} from "react-router-dom"
import React from 'react'

export default function BreadCrumb() {
    const location = useLocation()
   
    let currentLocation =""
    let crumbs = location.pathname.split("/")
    .filter((crumb)=>{return crumb!==""})
    .map((crumb)=>{ currentLocation+= `/${crumb}`
         return ( <div key={crumb} className="crumb"><Link to={currentLocation}>{crumb}</Link></div>)})
  return (
    <div className="breadcrumbs">{crumbs}</div>
    
  )
}
