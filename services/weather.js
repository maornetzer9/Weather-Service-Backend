const axios = require('axios');


const getWeather = async (req) => {
    const city = req.query.city;
    try 
    {
        const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
        const WEATHER_API_URL = process.env.WEATHER_API_URL;

        const { data } = await axios.get(
            `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${city}&days=1`
        );

        if( !data || !data.location ) return { code: 401, message: 'City not found...' };

        return { code: 200, weatherData: data };
    } 
    catch(err) 
    {
        const { status, data } = err.response;

        console.error('Internal Server Error', err.message);

        if(status === 400) return { code: 400, message: data.error.message || 'Bad Request. Please check your input.'  }
        if(status === 404) return { code: 404, message: data.error.message || 'City not found. Please try a different city.'  }
        
        return { code: 500, message: 'Internal Server Error' };
    }
};

module.exports = { getWeather };
