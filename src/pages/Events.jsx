import React, { useState } from 'react';

const EventListingPage = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Community Prayer', date: '2025-04-05', location: 'Church Hall', category: 'Religious', description: 'Join us for an evening of prayer and reflection.' },
        { id: 2, title: 'Charity Run', date: '2025-05-10', location: 'City Park', category: 'Charity', description: 'Participate in our charity run to support local causes.' },
        { id: 3, title: 'Social Meetup', date: '2025-06-15', location: 'Community Center', category: 'Social', description: 'Connect and network with community members.' },
    ]);

    const [newEvent, setNewEvent] = useState({ title: '', date: '', category: '', location: '', description: '' });
    const [filter, setFilter] = useState('All');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (!newEvent.title || !newEvent.date || !newEvent.category) return;
        setEvents([...events, { id: events.length + 1, ...newEvent }]);
        setNewEvent({ title: '', date: '', category: '', location: '', description: '' });
    };

    const filteredEvents = filter === 'All' ? events : events.filter(event => event.category === filter);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-green-600 mb-6">Event Listing</h1>

            <div className="mb-8">
                <label className="font-medium mr-4">Filter by Category:</label>
                {['All', 'Religious', 'Social', 'Charity'].map(cat => (
                    <button
                        key={cat}
                        className={`px-4 py-2 mx-2 rounded-full ${filter === cat ? 'bg-green-600 text-white' : 'bg-white text-green-600'} transition`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredEvents.map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                        <p className="text-gray-600 mb-1">{event.date} - {event.location}</p>
                        <p className="text-sm mb-4">{event.description}</p>
                        <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">{event.category}</span>
                    </div>
                ))}
            </div>
            
            <form onSubmit={handleAddEvent} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
                <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                <input type="date" name="date" value={newEvent.date} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                <select name="category" value={newEvent.category} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required>
                    <option value="">Select Category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>
                <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} className="w-full p-2 mb-4 border rounded"></textarea>
                <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-800 transition">Add Event</button>
            </form>
        </div>
    );
};

export default EventListingPage;
