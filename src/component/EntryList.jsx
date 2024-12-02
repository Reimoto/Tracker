import React, { useState, useEffect } from 'react';

function EntryList() {
    const [entries, setEntries] = useState([]);
    const [editingEntry, setEditingEntry] = useState(null);
    const [editForm, setEditForm] = useState({
        Menge: '',
        Uhrzeit: '',
        Datum: '',
        Sorte: '',
        Stimmung: '',
        Wer: '',
        Konsumform: ''
    });

    const Sorten = ['White Widow', "Nordle"];
    const Stimmungen = ['Zuviel', 'ok', 'schlecht', 'krank', 'lausig', 'wütend'];
    const Wers = ['Dominik', 'Jenny', 'D&J'];
    const Konsumformen = ['Tüte', 'Bong', 'Vaporizer', 'Pfeife', 'Edibles'];

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

    const handleEdit = (entry) => {
        setEditingEntry(entry);
        setEditForm({
            Menge: entry.menge,
            Uhrzeit: entry.uhrzeit,
            Datum: entry.datum,
            Sorte: entry.sorte,
            Stimmung: entry.stimmung,
            Wer: entry.wer,
            Konsumform: entry.konsumform
        });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/entries/${editingEntry.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editForm),
            });

            if (response.ok) {
                // Update the entry in the local state
                setEntries(entries.map(entry => 
                    entry.id === editingEntry.id 
                        ? { ...entry, ...editForm }
                        : entry
                ));
                setEditingEntry(null);
            } else {
                console.error('Failed to update entry');
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
                            <th className="py-2 px-4 border-b">Konsumform</th>
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
                                        onClick={() => handleEdit(entry)}
                                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                                    >
                                        Edit
                                    </button>
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

            {/* Edit Modal */}
            {editingEntry && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-xl font-bold mb-4">Edit Entry</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Datum</label>
                                <input
                                    type="date"
                                    value={editForm.Datum}
                                    onChange={(e) => setEditForm({ ...editForm, Datum: e.target.value })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Uhrzeit</label>
                                <input
                                    type="time"
                                    value={editForm.Uhrzeit}
                                    onChange={(e) => setEditForm({ ...editForm, Uhrzeit: e.target.value })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Menge (g)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={editForm.Menge}
                                    onChange={(e) => setEditForm({ ...editForm, Menge: Number(e.target.value) })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Sorte</label>
                                <select
                                    value={editForm.Sorte}
                                    onChange={(e) => setEditForm({ ...editForm, Sorte: e.target.value })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                >
                                    {Sorten.map((sorte) => (
                                        <option key={sorte} value={sorte}>{sorte}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Stimmung</label>
                                <select
                                    value={editForm.Stimmung}
                                    onChange={(e) => setEditForm({ ...editForm, Stimmung: e.target.value })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                >
                                    {Stimmungen.map((stimmung) => (
                                        <option key={stimmung} value={stimmung}>{stimmung}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Wer</label>
                                <select
                                    value={editForm.Wer}
                                    onChange={(e) => setEditForm({ ...editForm, Wer: e.target.value })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                >
                                    {Wers.map((wer) => (
                                        <option key={wer} value={wer}>{wer}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Konsumform</label>
                                <select
                                    value={editForm.Konsumform}
                                    onChange={(e) => setEditForm({ ...editForm, Konsumform: e.target.value })}
                                    className="mt-1 block w-full rounded border border-gray-300 p-2"
                                >
                                    {Konsumformen.map((konsumform) => (
                                        <option key={konsumform} value={konsumform}>{konsumform}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                onClick={() => setEditingEntry(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EntryList;
