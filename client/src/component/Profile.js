import React from 'react';

function Profile({user}){
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Password: {user.password}</div>
    </div>
  )
}

export default Profile