import React, { useState } from 'react'
import { Provider } from 'react'
import userContext from '../userContext'
import Home from './components/Home'
const App = () => {
  let [val,setval]=useState("")
  let [com,setcom]=useState("")
  let [cat,setcat]=useState("")
  let [col,setcolor]=useState("")
  return (
    <userContext.Provider value={{val,setval,com,setcom,cat,setcat,col,setcolor}}>
   
      <Home/>

    </userContext.Provider>
  )
}

export default App