import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

import {Outlet} from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
