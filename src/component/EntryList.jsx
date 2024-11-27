import React, { useState, useEffect } from 'react';

function EntryList() {
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
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Saved Entries</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Datum</th>
                            <th className="py-2 px-4 border-b">Uhrzeit</th>
                            <th className="py-2 px-4 border-b">Menge</th>
                            <th className="py-2 px-4 border-b">Sorte</th>
                            <th className="py-2 px-4 border-b">Stimmung</th>
                            <th className="py-2 px-4 border-b">Wer</th>
                            <th className="py-2 px-4 border-b">Konsumart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{entry.datum}</td>
                                <td className="py-2 px-4 border-b">{entry.uhrzeit}</td>
                                <td className="py-2 px-4 border-b">{entry.menge}g</td>
                                <td className="py-2 px-4 border-b">{entry.sorte}</td>
                                <td className="py-2 px-4 border-b">{entry.stimmung}</td>
                                <td className="py-2 px-4 border-b">{entry.wer}</td>
                                <td className="py-2 px-4 border-b">{entry.konsumform}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EntryList;
