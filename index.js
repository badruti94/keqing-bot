require('dotenv').config();
const express = require('express');
const data = require('./data.json');
const { send, getRandomIndex } = require('./helper');

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    const {name} = req.body;

    const index = getRandomIndex(data[name].length);
    const message = data[name][index];
    console.log(message);

    await send(message);
    
    res.status(200).json({msg: 'success'});
});

app.listen(3000);