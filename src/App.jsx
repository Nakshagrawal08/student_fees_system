import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/home/HomePage'
import Header from './components/common/Header'
import { Outlet } from 'react-router'

function App() {
 

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
