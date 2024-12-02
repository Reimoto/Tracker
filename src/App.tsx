import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formular from './component/Formular.jsx'
import EntryList from './component/EntryList.jsx'
import ConsumptionLineGraph from './component/ConsumptionLineGraph';

function App() {
  const [count, setCount] = useState(0)
  const data = [
    { date: '2023-10-01', amount: 5 },
    { date: '2023-10-02', amount: 3 },
    { date: '2023-10-03', amount: 8 },
    // Add more data as needed
  ];

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
        <div className="flex-1">
          <ConsumptionLineGraph data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
