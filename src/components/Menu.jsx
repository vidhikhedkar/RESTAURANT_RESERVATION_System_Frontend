import React from 'react'
import { data } from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Explore our handpicked selection of fan favorites and signature creations.
              Crafted by our master chefs using fresh, locally sourced ingredients,
              each dish is a perfect balance of bold flavors, distinct textures,
              and unforgettable taste. Find your next favorite meal right here.</p>
          </div>
          <div className="dishes_container">
            {
              data[0].dishes.map(element => (
                <div className="card" key={element.id}>
                  <img src={element.image} alt={element.title} />
                  <h3>{element.title}</h3>
                  <button>{element.category}</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
