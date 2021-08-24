import React from 'react';

function Profile({user}){
  return (
    <>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Password: {user.password}</div>
    </>
  )
}

export default Profile