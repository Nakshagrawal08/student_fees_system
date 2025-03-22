import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import HomePage from './components/home/HomePage.jsx'
import Dashboard from './components/Dashboard.jsx'
// import store from './app/store.js'
createRoot(document.getElementById('root')).render(
  // <provider store ={store}>
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<HomePage/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   
    </BrowserRouter>
  </StrictMode>
  // </provider>
)
