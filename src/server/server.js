const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOU EXPRESS BACKEND IS CONNECT TO REACT'})
})