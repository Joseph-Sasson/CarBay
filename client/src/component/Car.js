import React from 'react';

function Car({car, handleAddToCart, handleRemoveFromCart}){

  return (
    <div className="car-tile">
      <img alt="Car" src={car.image} width='300' height='250' />
      <div>Car name: {car.car_name}</div>
      <div>Price: {car.price}</div>
      {/* <div>Owner: {car.user.name}</div> */}
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default Car