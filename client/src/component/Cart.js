import React from 'react';
import Car from './Car';

function Cart({cars, handleRemoveFromCart}){
  return (
    <div>
      {cars.map(car=>{
        return <Car key={car.id} car={car} click={handleRemoveFromCart} />
      })}
    </div>
  )
}

export default Cart