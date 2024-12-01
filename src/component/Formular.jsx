import React, { useState } from 'react';

function Formular() {
    const [Menge, setMenge] = useState(0.10)
    const [Uhrzeit, setUhrzeit] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}))
    const [Sorte, setSorte] = useState("")
    const [Stimmung, setStimmung] = useState("")
    const [Wer, setWer] = useState("")
    const [Konsumform, setKonsumform] = useState("")
    const [Datum, setDatum] = useState(new Date().toISOString().slice(0, 10))

    const Sorten = ['White Widow', "Nordle"]
    const Stimmungen = ['Zuviel', 'ok', 'schlecht', 'krank', 'lausig', 'wütend']
    const Wers = ['Dominik', 'Jenny', 'D&J']
    const Konsumformen = ['Tüte', 'Bong', 'Vaporizer', 'Pfeife', 'Edibles']

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/entries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Menge,
                    Uhrzeit,
                    Datum,
                    Sorte,
                    Stimmung,
                    Wer,
                    Konsumform
                }),
            });
            
            if (response.ok) {
                // Clear form
                setMenge(0.10);
                setUhrzeit(new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric"}));
                setDatum(new Date().toISOString().slice(0, 10));
                setSorte("");
                setStimmung("");
                setWer("");
                setKonsumform("");
                
                // Trigger a page refresh to update the entry list
                window.location.reload();
            } else {
                alert('Error saving entry');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving entry');
        }
    };
    
    return (
        <>
        <form onSubmit={handleSubmit} className="border-2 border-green-500 w-48 shadow- rounded-xl">
            <h3 className="text-xl">Menge</h3>
            <input value={Menge} step='0.01' className="p-1 w-32 items-center justify-center rounded border border-black" name="Menge" type="number" id="Menge" onChange={(e) => setMenge(Number(e.target.value))} /> g
            <h3 className="text-xl mt-2">Uhrzeit</h3>
            <input 
                value={Uhrzeit} 
                type="time"
                className="p-1 w-32 items-center justify-center rounded border border-black" 
                name="Uhrzeit" 
                id="Uhrzeit" 
                onChange={(e) => setUhrzeit(e.target.value)} 
            />
            <h3 className="text-xl mt-2">Datum</h3>
            <input 
                value={Datum} 
                type="date"
                className="p-1 w-32 items-center justify-center rounded border border-black" 
                name="Datum" 
                id="Datum"  
                onChange={(e) => setDatum(e.target.value)} 
            />
            <h3 className="text-xl mt-2">Sorte</h3>
            <select value={Sorte} className="p-1 items-center justify-center rounded border border-black" name="Sorte" id="Sorte" onChange={(e) => setSorte(e.target.value)} >    
                <option value="">Select...</option>
                {Sorten.map((sorte) => (
                    <option key={sorte} value={sorte}>{sorte}</option>
                ))}
            </select>
            <h3 className="text-xl mt-2">Stimmung</h3>
            <select value={Stimmung} className="p-1 w-32 items-center justify-center rounded border border-black" name="Stimmung" id="Stimmung" onChange={(e) => setStimmung(e.target.value)} >    
                <option value="">Select...</option>
                {Stimmungen.map((stimmung) => (
                    <option key={stimmung} value={stimmung}>{stimmung}</option>
                ))}
            </select>
            <h3 className="text-xl mt-2">Wer</h3>
            <select value={Wer} className="p-1 w-32 items-center justify-center rounded border border-black" name="Wer" id="Wer" onChange={(e) => setWer(e.target.value)} >    
                <option value="">Select...</option>
                {Wers.map((wer) => (
                    <option key={wer} value={wer}>{wer}</option>
                ))}
            </select>
            <h3 className="text-xl mt-2">Konsumform</h3>
            <select value={Konsumform} className="mb-3 p-1 w-32 items-center justify-center rounded border border-black" name="Konsumform" id="Konsumform" onChange={(e) => setKonsumform(e.target.value)} >    
                <option value="">Select...</option>
                {Konsumformen.map((konsumform) => (
                    <option key={konsumform} value={konsumform}>{konsumform}</option>
                ))}
            </select>
            <div className="flex justify-center mb-3">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Save Entry
                </button>
            </div>
        </form>
        </>
    )
}
export default Formular
