import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  let [isLogin, setIsLogin] = useState(function () {
    return (localStorage.getItem('isLogin')==='true')?true:false
  })

  const logout =()=>{
      setIsLogin(false)
      localStorage.removeItem('isLogin')
      window.location ='/login'
  }
  return (

      <div className='col-md-3' data-bs-theme="dark">
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to={'/doctors'}>Doctors</Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to={'/patients'}>Patients</Link>
          </li>
          <li className='list-group-item'>
            <button onClick={logout} className='btn btn-danger'>Logout Admin</button>
          </li>
        </ul>
    </div>
  )
}
