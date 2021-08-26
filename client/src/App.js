import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Profile from "./component/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([])
  const [myCars, setMyCars] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(()=>{
    fetch(`/cars`)
    .then(res=>res.json())
    .then(setCars)
  },[])

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?"))
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const handleAddToCart = (car) =>{
    if (!myCars.includes(car)){
      const newMyCar = [...myCars, car]
      setMyCars(newMyCar)
    }}

    const handleRemoveFromCart = (car) =>{
      const newMyCar = [...myCars].filter(myCar=>car.id !== myCar.id)
      setMyCars(newMyCar)
    }

    function onSearchChange (e){
      setSearch(e.target.value)
    }
  
    const searchDisplay = cars.filter((car)=>{
      return (car.car_name.toLowerCase().includes(search.toLowerCase()))
    })

  if (!user) {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>
                CarBay
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/signup"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
              <Switch>
                <Route
                  path="/login"
                  component={() => <Login setUser={setUser} />}
                />
                <Route
                  path="/signup"
                  component={() => <Signup setUser={setUser} />}
                />

                <Route path="/" component={() => <Login setUser={setUser} />} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              CarBay
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <input className = "search-bar" type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>
                <li className="nav-item">
                  <Link className="nav-link" to={"/cart"}>
                    Shopping Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"} onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route path="/home" component={()=><Home cars={searchDisplay} handleAddToCart={handleAddToCart} setCars={setCars} user={user}/>}/>
              <Route
                path="/profile"
                component={() => <Profile user={user} setUser={setUser} />}
              />
              <Route path="/cart" component={()=><Cart cars={myCars} handleRemoveFromCart={handleRemoveFromCart}/>} />
              <Route path="/" component={()=><Home cars={searchDisplay} handleAddToCart={handleAddToCart} setCars={setCars} user={user}/>}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
