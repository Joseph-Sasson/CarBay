import React, {useState} from 'react';

function Profile({user, setUser}){
  const [errors, setErrors] = useState([]);
  // const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [userForm, setUserForm] = useState({
    name: user.name,
    email: user.email
    // password: user.password,
  })

  const handleChange = e =>{
    const name = e.target.name
    const value = e.target.value
    setUserForm({
      ...userForm, [name]:value
    })
  }

  const submitChange = (e) =>{
    if (window.confirm("Are you sure you want to update this account?"))
    fetch(`/users/${user.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userForm)
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });}

  const handleDelete = () =>{
    if (window.confirm("Are you sure you want to delete this account?"))
    fetch(`/users/${user.id}`,{
    method: "DELETE",
      }).then((r)=>{
        if (r.ok){
          setUser(null)
    }})}

  return (
    <div className = "auth-inners">
      <h2 id = 'header'>Profile Information</h2>
      <ul className = 'account-info' >
        <li className = 'account-list'>Name:
          <input 
            type = 'text'
            name = 'name'
            value = {userForm.name}
            onChange = {handleChange}
          />
        </li>
        <li className = 'account-list'>Email Address:
        <input 
            type = 'text'
            name = 'email'
            value = {userForm.email}
            onChange = {handleChange}
          />
        </li>
        {/* <li className = 'account-list'>Password:
          <input
          type={isRevealPwd ? "text" : "password"}
          name = 'password'
          value = {userForm.password}
          onChange = {handleChange}
          />
          <br/>
          <i onClick={() => setIsRevealPwd(!isRevealPwd)}>Show Password</i>
        </li> */}
      </ul>
      <button onClick = {handleDelete}>Delete Account</button>
      <button className = 'change-button' onClick = {submitChange}>Update Account</button>
      <div>
        {errors.map((err) => (
          <span>!{err}</span>
        ))}
      </div>
    </div>
  )
}

export default Profile