import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TudoList from "./Tudo.jsx" 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TudoList />
    </>
  )
}

export default App
