import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter ,createRoutesFromElements , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter({
//   path: '/',
//   element: <App />,
//   children: [{
//     path: "",
//     element: <Home />
//   },
//     {
//       path: "About",
//       element: <About />
//     },
//     {
//       path: "Contact",
//       element: <Contact />
//     },
//     ]
//   })
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />
      <Route path='user/:userId' element={<User />} />
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
