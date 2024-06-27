
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify'
export default function AddDoctor() {

  let [name,setName] = useState('')
  let [degree,setDegree] = useState('')
  let [hospital,setHospital] = useState('')
  let [city,setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name===''){
      return toast.info('Enter name')
    }
    if(degree===''){
      return toast.info('Enter degree name')
    }
    if(hospital===''){
      return toast.info('Enter hospital name')
    }
    if(city===''){
      return toast.info('Enter city')
    }

    let data  = {name:name,degree:degree,hospital:hospital,city:city}

    fetch('http://localhost:3000/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(function(data){
      toast.success('Doctor has been added')
      window.location ='/doctors'
    });
  }
  return (
    <div>
      <div>
        <div className='container-fluid'>

          <div className='d-flex justify-content-between align-items-end py-3'>
            <div>
              <h2>Add A New Doctor</h2>
              <p className='mb-0'>Doctors and patients management sytem</p>
            </div>
            <div>
            </div>
          </div>

          <div className='row'>
            <Header />
            <div className='col-md-9' data-bs-theme="">
              <form method='POST' action='' className='bg-light p-4 rounded' onSubmit={handleSubmit}>
                <h4>ADD a New Doctor</h4>
                <hr />
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='mb-3'>
                      <label className='form-label'>Name</label>
                      <input type='text' className='form-control' placeholder='Enter doctor name' value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-3'>
                      <label className='form-label'>Graduation</label>
                      <input type='text' className='form-control' placeholder='eg. MBBS' value={degree} onChange={(e)=>{setDegree(e.target.value)}} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-3'>
                      <label className='form-label'>Training in Hospital</label>
                      <input type='text' className='form-control' placeholder='eg. AIIMS Delhi'  value={hospital} onChange={(e)=>{setHospital(e.target.value)}} />
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='mb-3'>
                      <label className='form-label'>City</label>
                      <input type='text' className='form-control' placeholder='eg. Delhi' value={city} onChange={(e)=>{setCity(e.target.value)}} />
                    </div>
                  </div>
                </div>
                <button className='btn btn-success'>Submit</button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
