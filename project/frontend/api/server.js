const axios = require('axios');
const api = axios.create({
    baseURL: 'https://dmockup.vercel,app',
})
module.exports = async (req, res) => {
    try {
        const response = await api.post('/api/todos/', req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}