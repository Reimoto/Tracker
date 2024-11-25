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

    
    return (
        <div>
            <h3>Menge</h3>test
            <input style={{"width": "50px"}} name="Menge" type="number" id="Menge" onChange={(e) => setMenge(e.target.value)} />g
            <h3>Uhrzeit</h3>
            <input name="Uhrzeit" type="time" id="Uhrzeit" onChange={(e) => setUhrzeit(e.target.value)} />
            <h3>Datum</h3>
            <input name="Datum" type="date" id="Datum" onChange={(e) => setDatum(e.target.value)} />
            <h3>Sorte</h3>
            <select name="Sorte" type="text" id="Sorte" onChange={(e) => setSorte(e.target.value)} >    
                <option value="White Widow">White Widow</option>
                <option value="Nordle">Nordle</option>
            </select>
            <h3>Stimmung</h3>
            <select name="Stimmung" type="text" id="Stimmung" onChange={(e) => setStimmung(e.target.value)} >    
                <option value="Zuviel">Zuviel</option>
                <option value="ok">ok</option>
                <option value="schlecht">schlecht</option>
                <option value="krank">krank</option>
                <option value="lausig">lausig</option>
                <option value="wütend">wütend</option>
            </select>
            <h3>Wer</h3>
            <select name="Wer" type="text" id="Wer" onChange={(e) => setWer(e.target.value)} >    
                <option value="Dominig">Dominig</option>
                <option value="Jenni">Jenni</option>
                <option value="D&J">D&J</option>
            </select>
            <h3>Konsumform</h3>
            <select name="Konsumform" type="text" id="Konsumform" onChange={(e) => setKonsumform(e.target.value)} >    
                <option value="Tüte">Tüte</option>
                <option value="Bong">Bong</option>
                <option value="Vaporizer">Vaporizer</option>
                <option value="Pfeife">Pfeife</option>
                <option value="Edibles">Edibles</option>
            </select>    
        </div>
    )
}
export default Formular
