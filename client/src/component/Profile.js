import React from 'react';

function Profile({user}){
  return (
    <div>
      Name: {user.name}
    </div>
  )
}

export default Profile