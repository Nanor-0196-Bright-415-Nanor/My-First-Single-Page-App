
import { Link } from 'react-router-dom/dist'
import React, { useState, useEffect } from 'react'
import "../server"

function Vans() {
  const [vans,setVans] = useState([])

 useEffect(()=> {
   fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  },[])

  return (
    <>
   
    <div className='vans'  >
    
   {
 vans.map(item => {
  return (
    <Link to={`/vans/${item.id}`} key={item.id}> 
    <div className='vans__info'> 
    <img src={item.imageUrl} className='van__img'/>
    <h2 className='van__name'>  {item.name} <div className='van__price'> ${item.price}  </div>
    </h2>
    </div>
    </Link>
  )
 })
   }
    </div>
     <p className='van__footer'>@Footer</p>
     </>
  )
}

export default Vans
