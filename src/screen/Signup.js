import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Signup() {

    const navigate = useNavigate()

    const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser",{
            method: 'POST',
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation})
        })
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter Valid credentials")
        }
        if(json.success){
            navigate('/Login')
        }
    }
    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
    <div className="offset-lg-3 col-lg-6">
      <form onSubmit={handleSubmit}>
      <div className="card">
            <div className="card-header">
                <h1>User SignUp</h1>
            </div>
            <div className="card-body">
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation}  onChange={onChange} id="exampleInputPassword1"/>
  </div>
  </div>
  <div className="card-footer">
                <button type="submit" className="btn btn-info">SignUp</button>    | 
                <Link to={'/login'} className="btn btn-danger">Already a User</Link> |
                <Link to={'/'} className="btn btn-danger">Close</Link>
            </div>
  </div>
</form>
</div>

    </>
  )
}
