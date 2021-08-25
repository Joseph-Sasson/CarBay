import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./component/Login";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Profile from "./component/Profile";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    if (window.confirm("Are you sure you want to logout?"))
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

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
              <Route path="/home" component={Home} />
              <Route
                path="/profile"
                component={() => <Profile user={user} setUser={setUser} />}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
