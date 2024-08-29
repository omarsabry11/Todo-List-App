import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "@fortawesome/fontawesome-free"
import './App.css'
import Home from './components/Home/Home'
import { InputValueContext, InputValueContextProvider } from './contexts/InputValueContext/InputValueContext'
import { UpdatingContextProvider } from './contexts/UpdatingContext/UpdatingContext'



function App() {


  return (
    <>

      <InputValueContextProvider>
        <UpdatingContextProvider>
          <Home></Home>


        </UpdatingContextProvider>

      </InputValueContextProvider>



    </>
  )

}
export default App;


