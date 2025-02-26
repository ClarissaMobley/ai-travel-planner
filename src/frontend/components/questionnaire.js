import { useState } from 'react';

const Questionnaire = ({ onSubmit }) => {
    const [landscape, setLandscape] = useState('');
    const [activity, setActivity] = useState('');
    const [dates, setDates] = useState('');
    const [budget, setBudget] = useState('');
    const [customBudget, setCustomBudget] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [error, setError] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // call AI

        if (!landscape || !activity || !dates || !budget || (dates === 'specific' && (!startDate || !endDate)) || (budget === 'specific' && !customBudget)) {
            setError(true);
            return;
        }
        setError(false)
        onSubmit({ landscape, activity, dates, budget, customBudget, startDate, endDate });
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-lg'>Landscape:</label>
                <select
                    id="landscape"
                    value={landscape}
                    onChange={(e) => setLandscape(e.target.value)}
                    className='w-full p-3 border rounded-md'
                >
                    <option value="">Select</option>      
                    <option value="beach">Beach</option>      
                    <option value="city">City</option>      
                    <option value="mountain">Mountain</option>      
                    <option value="forest">Forest</option>      
                    <option value="flexible">Flexible</option>      
                </select>
            </div>
            <div>
                <label className='block text-lg'>Activity</label>
                    <select
                        id="activity"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className='w-full p-3 border rounded-md'
                    >
                        <option value="">Select</option>
                        <option value="hiking">Hiking</option>
                        <option value="sightseeing">Sightseeing</option>
                        <option value="relaxing">Relaxing</option>
                        <option value="adventure">Adventure</option>
                        <option value="flexible">Flexible</option>
                    </select>
            </div>
            <div>
                <label className='block text-lg'>Dates:</label>
                <select
                    id="dates"
                    value={dates}
                    onChange={(e) => {
                        setDates(e.target.value);
                        if (e.target.value !== 'specific') {
                            setStartDate('');
                            setEndDate('');
                        }
                    }}
                    className='w-full p-3 border rounded-md'
                >
                    <option value="">Select</option>
                    <option value="specific">Specific</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="flexible">Flexible</option>
                </select>
            </div>

            {dates == 'specific' && (
                <div className='space-y-4'>
                    <div>
                        <label className='block text-lg'>Start Date</label>
                        <input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className='w-full p-3 border rounded-md'
                        />
                    </div>
                    <div>
                        <label className='block text-lg'>End Date:</label>
                        <input
                            id='endDate'
                            type='date'
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className='w-full p-3 border rounded-md'
                        />
                    </div>

                </div>
            )}

            <div>
                <label className="block text-lg">Budget:</label>
                <select
                id="budget"
                value={budget}
                onChange={(e) => {
                    setBudget(e.target.value)
                    if (e.target.value !== 'specific') {
                        setCustomBudget('');
                    }
                }}
                className='w-full p-3 border rounded-md'
                >
                    <option value="">Select</option>
                    <option value="1000">$500-$1000</option>
                    <option value="2000">$1,000 - $2,000</option>
                    <option value="5000">$2,000 - $5,000</option>
                    <option value="10000">$5,000 - $10,000</option>
                    <option value="specific">Specific</option>
                </select>
            </div>
            {budget === 'specific' && (
                <div>
                    <label className='block text-lg'>Enter Your Budget</label>
                    <input
                        id="customBudget"
                        type="number"
                        value={customBudget}
                        onChange={(e) => setCustomBudget(e.target.value)}
                        className='w-full p-3 border rounded-md'
                        placeholder='Enter a specific amount'
                    />
                </div>
            )}

            {error && (
                <p className='text-red-500 text-sm'>Please fill out all fields before submitting</p>
            )}

            <button type ="submit" className='bg-black text-white py-2 px-4 rounded-md'>
                Get Recommendations
            </button>
        </form>
    )
}

export default Questionnaire