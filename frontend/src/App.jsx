import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Notfound from './pages/Notfound'
import Academics from './pages/Academics'
import AboutSchool from './pages/AboutSchool'
import Extracurricular from './pages/Extracurricular'
import SchoolUpdates from './pages/SchoolUpdates'
import AdminLogin from './pages/AdminLogin'
import SingleEvent from './pages/SingleEvent'
import AdminManage from './pages/AdminManage'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Notfound />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/school' element={<AboutSchool />} />
        <Route path='/extracurricular' element={<Extracurricular />} />
        <Route path='/updates' element={<SchoolUpdates />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/event/:id' element={<SingleEvent />} />
        <Route path='/admin/manage' element={<AdminManage />} />
      </Routes>
    </>
  )
}

export default App
