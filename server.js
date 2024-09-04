require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { weatherRouter } = require('./routes/weather');

const app = express();
const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;
const corsOptions = { origin: ORIGIN, optionsSuccessStatus: 200, methods: 'GET' };

app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );
app.use( cors( corsOptions ) );
app.use('/weather', weatherRouter);


app.listen(PORT, () => console.info(`Server Is Running On Port 3000`));