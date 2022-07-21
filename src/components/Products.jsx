import React from 'react'
import './compStyles/Products.css';

const Products = () => {
  return (
    <div className='prodBod'>
        <h1>Our Products</h1>
        <h5>(Don't want to look for it? We hear you.)</h5>
        
        <div className='searchBar'>
        <form>
        <input className ='searchButton'type="Submit" name="search" value="search"/>
        
        
        <input className = 'actualSearchBar'type ="text" name="comments" placeholder="ex. Smart TV"/>
        </form>
        </div>

        <div className='products'>
          <div><img src={'./images/smarToven.png'} /></div>
          <div>d</div>
          <div>d</div>
          <div>d</div>
          <div>r</div>
          <div>z</div>
          <div>z</div>
          <div>z</div>
          <div>z</div>
          <div>z</div>
          <div>z</div>
          <div>z</div>
        </div>
    </div>
  )
}

export default Products