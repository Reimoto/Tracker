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

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            try {
                const response = await fetch(`http://localhost:3001/api/entries/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    // Remove the entry from the local state
                    setEntries(entries.filter(entry => entry.id !== id));
                } else {
                    console.error('Failed to delete entry');
                }
            } catch (error) {
                console.error('Error:', error);
            }
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
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                            <tr key={entry.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{entry.datum}</td>
                                <td className="py-2 px-4 border-b">{entry.uhrzeit.substring(0, 5)}</td>
                                <td className="py-2 px-4 border-b">{parseFloat(entry.menge).toFixed(2).replace('.', ',')}g</td>
                                <td className="py-2 px-4 border-b">{entry.sorte}</td>
                                <td className="py-2 px-4 border-b">{entry.stimmung}</td>
                                <td className="py-2 px-4 border-b">{entry.wer}</td>
                                <td className="py-2 px-4 border-b">{entry.konsumform}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => handleDelete(entry.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EntryList;
