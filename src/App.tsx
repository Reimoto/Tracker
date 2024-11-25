import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formular from './component/Formular.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Formular/>
    </>
  )
}

export default App
