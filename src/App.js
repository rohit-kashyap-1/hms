import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddDoctor from './components/AddDoctor';
import { useState } from 'react';
function App() {
  let [isLogin, setIsLogin] = useState(function () {
    return (localStorage.getItem('isLogin')==='true')?true:false
  })
  return (

    <div className="App">
      <div className='container-xs'>


        {(isLogin===true)?
        <BrowserRouter>
        <Routes>
          <Route exact path='/login'  element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/doctors' element={<Dashboard />} />
          <Route exact path='/add-doctor' element={<AddDoctor />} />
        </Routes>
        </BrowserRouter>
        :<Login />}

      </div>
    </div>
  );
}

export default App;
