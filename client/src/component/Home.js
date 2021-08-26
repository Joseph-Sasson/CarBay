import React from 'react';
import Car from './Car';

function Home({cars, handleAddToCart}){

  return (
    <div>
      {cars.map(car=>{
        return <Car key={car.id} car={car} handleAddToCart={handleAddToCart} />
      })}
    </div>
  )
}

export default Home