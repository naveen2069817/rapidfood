import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

    const [credentials, setcredentials] = useState({email:"",password:"",})
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method: 'POST',
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter Valid credentials")
        }
        if(json.success){
          localStorage.setItem('userEmail',credentials.email)
          localStorage.setItem('authToken',json.authToken)
          console.log(localStorage.getItem("authToken"))
          navigate('/')
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
                <h1>User Login</h1>
            </div>
            <div className="card-body">
      
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  </div>
  <div className="card-footer">
                <button type="submit" className="btn btn-info">Login</button>    | 
                <Link to={'/Signup'} className="btn btn-danger">New User</Link>  |
                <Link to={'/'} className="btn btn-danger">Close</Link>
            </div>
  </div>
</form>
</div>

    </>
  )
}

