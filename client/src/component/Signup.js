import React from 'react';

function Signup(){

  return (
    <form>
      <h3>Sign up</h3>
      <div className="form-group">
        <label>Full name</label>
        <input type="text" className="form-control" placeholder="Enter name" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <div className="form-group">
        <label>Password confirmation</label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <button type="submit" className="btn btn-dark btn-lg btn-block">Sign up</button>
      <p className="forgot-password text-right">
      </p>
    </form>
  )
}

export default Signup