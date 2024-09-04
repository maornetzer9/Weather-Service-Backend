const { getWeather } = require('../services/weather');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try
    {
        const response = await getWeather(req);
        return res.status(200).json(response);
    }
    catch(err)
    {
        console.error('Initial Server Error', err.message);
        return res.status(500).json('Internal Server Error');
    }
});


module.exports = { weatherRouter: router };