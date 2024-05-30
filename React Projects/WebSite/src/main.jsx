import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Github from './Components/Github/Github.jsx'

import Body from './Components/Body/Body.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter([
//  {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: "",
//         element: <Body />
//       },
//        {
//          path: "about",
//          element: <About />
//        },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         loader: {githubInfo},
//         path: "github",
//         element: <Github/>
//       }
//     ]
//  }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>
      <Route path='' element={<Body/>} />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}></Route>
      <Route  path='github' element={<Github/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
