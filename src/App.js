import React from 'react'
import Home from './components/Home'
import Dataprovider from './context/Dataprovider'

const App = () => {
  return (
    <>
    <Dataprovider>
   <Home/>

    </Dataprovider>

    </>
  )
}

export default App
