import React, { useState } from 'react'
import { validateEmail } from './validation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [isLogin, setIsLogin] = useState(function () {
    return (localStorage.getItem('isLogin')==='true')?true:false
  })

  const admin_email = "r23.tgc@gmail.com"
  const admin_password = "rohit@123"

  if(isLogin===true){
    window.location = '/dashboard'
  }
  const handleSubmit = (e) => {

    e.preventDefault()

    if (validateEmail(email) === null) {
      return toast.error("Enter a valid email address")
    }
    if (email === admin_email && password === admin_password) {
      setIsLogin(true)
      localStorage.setItem('isLogin', true)
    } else {
      toast.error("Email or  Password are incorrect")
      return
    }

  }
  return (
    <div>
      <div className='row'>
        <div className='col-md-4 m-auto'>

          <form action='' method='' className='border rounded p-4 mt-5 bg-dark' onSubmit={handleSubmit}>
            <h4 className='text-light'>Admin Login Form</h4>
            <p className='text-light'>This is only for authorized personel</p>
            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control " id="email" placeholder="Enter email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              <label for="email">Email</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
              <label for="password">Password</label>
            </div>
            <div className=''>
              <button className='btn btn-success '>Login Admin</button>

            </div>
            <small className='text-white'>React App v.1.0</small>
          </form>

        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
