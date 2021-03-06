import React, {useState} from 'react';
import Car from './Car';

function Home({cars, handleBuyNow, setCars, user}){
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
    <div>
      <div className="home-inner">
        <h2 className='form-label'>
          Add New Car
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Car Name"
              name="car_name"
              value={formData.car_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image_URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <button>{isLoading ? "Loading..." : "Add new car"}</button>
          <div>
          {errors.map((err) => (
            [<span className='error'>!{err}</span>, <br/>]
          ))}
          </div>
        </form>
      </div>
      <div className="row">
        {cars.filter(car=>car.user.id !== user.id).map(car=> {return <Car key={car.id} car={car} handleBuyNow={handleBuyNow} setCars={setCars} user={user} />})}
      </div>
    </div>
  )
}

export default Home