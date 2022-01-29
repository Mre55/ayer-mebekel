// import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

const initialState = {
  coord: {
    lon: 38.7578,
    lat: 8.9806,
  },
  list: [
    {
      main: {
        aqi: 5,
      },
      components: {
        co: 2429.96,
        no: 0,
        no2: 12.68,
        o3: 32.9,
        so2: 6.2,
        pm2_5: 81.17,
        pm10: 126.27,
        nh3: 40.53,
      },
      dt: 1643482800,
    },
  ],
};

export const fetchWeather = () => (dispatch) => {
  // axios
  //   .get('http://api.openweathermap.org/data/2.5/air_pollution?lat=60&lon=70&appid=6ecf420a1bbd4a7b6cb83e24509c64c2')
  //   .then((response) => {
  //     console.log('weather API response is ', response.data);
  //     const weathers = response.data;
  //     dispatch(fetchWeatherSuccess(weathers));
  //   });
  dispatch(fetchWeatherSuccess(initialState));
  console.log("weather from reducer is ", initialState);
};

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload][0];
    default:
      return state;
  }
};

export default weatherReducer;
