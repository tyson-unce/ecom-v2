import React from 'react'
import './compStyles/AppComponent.css';

const AppComponent = () => {
  return (
      <>
      <div className='homeCards'>
          <div></div>
          <img id='ownerPhoto' src={'./images/tysonUnce.jpeg'} alt='Tyson Unce'></img>
          <aside><h2>The man behind the vision</h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestiae maxime voluptatibus nemo necessitatibus praesentium officia illum minus repellat corrupti similique sunt autem quidem, quia amet aliquid suscipit error earum!</aside>
          <div></div>
      </div>
        <section className='productButton'>
      <button>See our products</button>
        </section>
      </>
  )
}

export default AppComponent