const axios = require('axios');
module.exports = async (req, res) => {
    try {
        const response = await axios.post('/api/todos', req.body);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}