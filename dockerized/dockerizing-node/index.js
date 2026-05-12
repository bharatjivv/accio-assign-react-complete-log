const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'You are visiting root'
    });
})

app.listen(8000, () => {
    console.log('server running on port 8000');
})