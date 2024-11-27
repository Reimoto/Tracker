import React, { useState } from 'react';

function Formular() {
    const [Menge, setMenge] = useState(0)
    const [Uhrzeit, setUhrzeit] = useState(1)
    const [Sorte, setSorte] = useState(2)
    const [Stimmung, setStimmung] = useState(3)
    const [Wer, setWer] = useState(4)
    const [Konsumform, setKonsumform] = useState(5)
    const [Datum, setDatum] = useState(6)

    const Sorten = ['White Widow', "Nordle"]
    const Stimmungen = ['Zuviel', 'ok', 'schlecht', 'krank', 'lausig', 'wütend']
    const Wers = ['Dominig', 'Jenni', 'D&J']
    const Konsumformen = ['Tüte', 'Bong', 'Vaporizer', 'Pfeife', 'Edibles']

    
    return (
        <>
        <div className="border-2 border-green-500 w-48 shadow- rounded-xl">
            <h3 className="text-xl">Menge</h3>
            <input className="p-1 w-32 items-center justify-center rounded border border-black" name="Menge" type="number" id="Menge" onChange={(e) => setMenge(e.target.value)} /> g
            <h3 className="text-xl mt-2">Uhrzeit</h3>
            <input className="p-1 w-32 items-center justify-center rounded border border-black" name="Uhrzeit" type="time" id="Uhrzeit" onChange={(e) => setUhrzeit(e.target.value)} />
            <h3 className="text-xl mt-2">Datum</h3>
            <input className="p-1 w-32 items-center justify-center rounded border border-black" name="Datum" type="date" id="Datum" onChange={(e) => setDatum(e.target.value)} />
            <h3 className="text-xl mt-2">Sorte</h3>
            <select key={Sorten} className="p-1 items-center justify-center rounded border border-black" name="Sorte" type="text" id="Sorte" onChange={(e) => setSorte(e.target.value)} >    
                {Sorten.map((Sorte) => (
                    <option value={Sorte}>{Sorte}</option>
                ))}
            </select>
            <h3 className="text-xl mt-2">Stimmung</h3>
            <select className="p-1 w-32 items-center justify-center rounded border border-black" name="Stimmung" type="text" id="Stimmung" onChange={(e) => setStimmung(e.target.value)} >    
                {Stimmungen.map((Stimmung) => (
                    <option value={Stimmung}>{Stimmung}</option>
                ))}
            </select>
            <h3 className="text-xl mt-2">Wer</h3>
            <select className="p-1 w-32 items-center justify-center rounded border border-black" name="Wer" type="text" id="Wer" onChange={(e) => setWer(e.target.value)} >    
                {Wers.map((Wer) => (
                    <option value={Wer}>{Wer}</option>
                ))}
            </select>
            <h3 className="text-xl mt-2">Konsumform</h3>
            <select className="mb-3 p-1 w-32 items-center justify-center rounded border border-black" name="Konsumform" type="text" id="Konsumform" onChange={(e) => setKonsumform(e.target.value)} >    
                {Konsumformen.map((Konsumform) => (
                    <option value={Konsumform}>{Konsumform}</option>
                ))}
            </select>    
        </div>
        </>
    )
}
export default Formular
