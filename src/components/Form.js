import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchWeatherWithInput } from '../redux/weather/weatherReducer';

const Form = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (lat, long) => {
    dispatch(fetchWeatherWithInput(lat, long));
    navigate(`/country/${lat}&${long}`);
  };

  const clear = () => {};

  return (
    <div className="flex bg-[#5788e6] w-screen text-white px-3 items-center md:justify-evenly py-6">
      <h2 className="text-3xl font-bold">Forecast air pollution data</h2>
      <div className="text-center py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e.target[0].value, e.target[1].value);
            clear(e.target[0].value = '', e.target[1].value = '');
          }}
        >
          <label htmlFor="latitude">
            <p className="text-lg">Latitude</p>
            <input
              className="border-solid border-2 border-gray-50 my-1 rounded-full text-center text-black"
              name="lat"
              id="latitude"
              type="number"
              placeholder="Enter a Latitude..."
              onChange={(e) => e.target.value}
              required
            />
            <br />
          </label>
          <label htmlFor="longitude">
            <p className="text-lg">Longitude</p>
            <input
              className="border-solid border-2 border-gray-50 my-1 rounded-full text-center text-black"
              name="long"
              id="longitude"
              type="number"
              placeholder="Enter a Longitude..."
              onChange={(e) => e.target.value}
              required
            />
            <br />
          </label>
          <input
            className="bg-blue-600 text-white w-20 text-lg rounded mt-4"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
