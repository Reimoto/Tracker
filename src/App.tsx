import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formular from './component/Formular.jsx'
import EntryList from './component/EntryList.jsx'
import ConsumptionLineGraph from './component/ConsumptionLineGraph';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/entries');
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      } else {
        console.error('Failed to fetch entries');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Weed Tracker</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div>
          <Formular/>
        </div>
        <div className="flex-1">
          <EntryList onEntriesChange={fetchEntries} />
        </div>
        <div className="flex-1">
          <ConsumptionLineGraph data={entries} />
        </div>
      </div>
    </div>
  )
}

export default App
