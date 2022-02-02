import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Form = (props) => {
  const { seeMore, fetchDataByInput } = props;

  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };
  const handleLongChange = (e) => {
    setLong(e.target.value);
  };

  return (
    <div className="flex bg-[#5788e6] w-screen text-white px-3 items-center md: justify-evenly">
      <h2 className="text-3xl font-bold">Forecast air pollution data</h2>
      <div className="text-center py-4">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await fetchDataByInput(e.target[0].value, e.target[1].value);
          }}
        >
          <label htmlFor="latitude">
            <p className="text-lg">Latitude</p>
            <input
              className="border-solid border-2 border-gray-50 my-1 rounded-full text-center text-black"
              name="lat"
              id="latitude"
              type="number"
              value={lat}
              placeholder="Enter a Latitude..."
              onChange={() => handleLatChange}
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
              value={long}
              onChange={() => handleLongChange}
              required
            />
            <br />
          </label>
          <input
            onClick={() => seeMore()}
            className="bg-blue-600 text-white w-20 text-lg rounded mt-4"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  seeMore: PropTypes.func.isRequired,
  fetchDataByInput: PropTypes.func.isRequired,
};

export default Form;
