import { useState } from 'react';

const Questionnaire = ({ onSubmit }) => {
    const [location, setLocation] = useState('');
    const [activity, setActivity] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // call AI
        onSubmit({ location, activity, budget });
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-lg'>Preferred Location:</label>
                <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='w-full p-3 border rounded-md'
                placeholder='e.g. beach, city, mountain'/>
            </div>
            <div>
                <label className='block text-lg'>Preferred Activity</label>
                    <input 
                    type="text"
                    value="{activity}"
                    onChange={(e) => setActivity(e.target.value)}
                    className='w-full p-3 border rounded-md'
                    placeholder="e.g. hiking, sightseeing, relaxing"
                    />
            </div>
            <div>
                <label className="block text-lg">Budget:</label>
                <input 
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className='w-full p-3 border rounded'
                placeholder='e.g. 1000'
                />
            </div>
            <button type ="submit" className='bg-black text-white py-2 px-4 rounded-md'>
                Get Recommendations
            </button>
        </form>
    )
}

export default Questionnaire