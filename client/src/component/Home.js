import React, {useState} from 'react';
import Car from './Car';

function Home({cars, handleAddToCart, setCars, user}){
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    car_name: "",
    image: "",
    price: "",
    user_id: user.id
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((newCar) => setCars((cars)=>[...cars, newCar]));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Car Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter car name"
            name="car_name"
            value={formData.car_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter image_url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button>{isLoading ? "Loading..." : "Add new car"}</button>
        <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div>
      </form>
      <div>
        {cars.map(car=>{
          return <Car key={car.id} car={car} click={handleAddToCart} setCars={setCars} cars={cars} />
        })}
      </div>
    </>
  )
}

export default Home