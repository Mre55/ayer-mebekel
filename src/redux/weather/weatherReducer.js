export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

export const fetchWeatherWithoutDispatch = async (lat, lon) => {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=120c2559b5a8678ebed46cf9ff276f28`,
    {
      method: 'GET',
    },
  );
  try {
    return await data.json();
  } catch (error) {
    console.error(error);
  }
};

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
