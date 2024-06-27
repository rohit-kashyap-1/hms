import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
export default function Dashboard() {
  const [doctors, setDoctors] = useState([])

  useEffect(function () {
    fetch('http://localhost:3000/doctors').then(response => response.json()).then(function (data) {
      setDoctors(data)
    })
  }, [])
  return (
    <div>
      <div className='container-fluid'>

        <div className='d-flex justify-content-between align-items-end py-3'>
          <div>
            <h2>Hospital Management System</h2>
            <p className='mb-0'>Doctors and patients management sytem</p>
          </div>
          <div>
            <Link to={'/add-doctor'} className='btn btn-success'><i className='glyphicon glyphicon-plus'></i> Add Doctor</Link>
          </div>
        </div>

        <div className='row'>
          <Header />
          <div className='col-md-9' data-bs-theme="dark">
            <table className='table table-dark bg-dark table-stripped rounded overflow-hidden'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Graduation</th>
                  <th>Training</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {(doctors.length !== 0) ? doctors.map(function (item) {
                  return <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.degree}</td>
                    <td>{item.hospital}</td>
                    <td>{item.city}</td>
                  </tr>
                }) : ''}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
