import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formular from './component/Formular.jsx'
import EntryList from './component/EntryList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Weed Tracker</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <Formular/>
        </div>
        <div className="flex-1">
          <EntryList />
        </div>
      </div>
    </div>
  )
}

export default App
