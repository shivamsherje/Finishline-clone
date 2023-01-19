import React from 'react'
import brand from "../Assets/brands.png"
import "./Brands.css"
const Brands = () => {
  return (
    <div>
      <h1 className='title'>BRANDS</h1>
      <br/>
      <div>
        <img src={brand}/>
      </div>
    </div>
  )
}

export default Brands
