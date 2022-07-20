import React from 'react'
import './compStyles/Products.css';

const Products = () => {
  return (
    <div className='prodBod'>
        <h1>Our Products</h1>
        <h5>(Don't want to look for it? We hear you.)</h5>

        
        <button><label>Search:</label></button><input type ="text" name="comments" placeholder="ex. Smart TV"/>
    </div>
  )
}

export default Products