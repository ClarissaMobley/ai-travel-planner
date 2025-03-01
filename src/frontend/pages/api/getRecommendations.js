import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { landscape, activity, dates, budget, customBudget, startDate, endDate } = req.body;

        const prompt = `
            Suggest a travel destination based on the following preferences:
            Landscape: ${landscape}
            Activity: ${activity}
            Dates: ${dates === 'specific' ? `From ${startDate} to ${endDate}` : dates}
            Budget: ${budget === 'specific' ? `$${customBudget}` : budget}`;

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/completions',
                {
                    model: 'text-davinci-003',
                    prompt: prompt,
                    max_tokens: 100,
                    temperature: 0.7,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    },
                }
            );

            const recommendations = response.data.choices[0].text.trim();
            res.status(200).json({ recommendations });
        } catch(error) {
            console.error('Error fetching recommendations', error);
            res.status(500).json({ error: 'Failed to get recommendations'});
        }
    } else {
        res.status(405).json({ error: 'These are not the droids your looking for' })
    }    
}

