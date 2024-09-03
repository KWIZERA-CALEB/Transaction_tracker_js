import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Notfound from './pages/Notfound'
import Academics from './pages/Academics'
import AboutSchool from './pages/AboutSchool'
import Extracurricular from './pages/Extracurricular'
import SchoolUpdates from './pages/SchoolUpdates'


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
      </Routes>
    </>
  )
}

export default App
