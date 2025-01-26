import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router'
import { routes } from '..'


const App = () => {
  return (

    // <Home />
    <Routes>
    {
      routes.map((item,index)=>{
        return(
          <Route key={index} element={item?.element} path={item?.path} />
        )
      })
    }
  </Routes>
    
  )
}

export default App