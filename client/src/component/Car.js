import React from 'react';

function Car({car, handleBuyNow, setCars, user}){

  const handleDeleteCar = (deletedCar) =>{
    
    setCars((cars)=>cars.filter((car)=>car.id !== deletedCar.id))
  }

  const remove = () =>{
    if (window.confirm("Are you sure you want to delete this car?"))
    fetch(`/cars/${car.id}`,{
    method: "DELETE",
      }).then((r)=>{
        if (r.ok){
          handleDeleteCar(car)
    }})}

  return (
    <div className="row">
      <div className="column">
        <div className = "card">
          <img alt="Car" src={car.image} width='300' height='250' />
          <div>Car name: {car.car_name}</div>
          <div>Price: {car.price}</div>
          {/* <div>Owner: {car.user.name}</div> */}
          <button onClick={()=>handleBuyNow(car)}>Buy now</button>
          <button className = 'change-button' onClick={remove}>Delete car</button>
        </div>
      </div>
    </div>
  )
}

export default Car