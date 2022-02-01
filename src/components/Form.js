import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Form = (props) => {
  const { seeMore, fetchNewData } = props;

  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };
  const handleLongChange = (e) => {
    setLong(e.target.value);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">Forecast air pollution data</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await fetchNewData(e.target[0].value, e.target[1].value);
        }}
      >
        <label htmlFor="latitude">
          Latitude
          <br />
          <input
            className="border-solid border-2 border-sky-500"
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
          Longitude
          <br />
          <input
            className="border-solid border-2 border-sky-500"
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
          onClick={() => seeMore('New')}
          className="bg-blue-600 text-white p-2 w-40 text-lg  rounded mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

Form.propTypes = {
  seeMore: PropTypes.func.isRequired,
  fetchNewData: PropTypes.func.isRequired,
};

export default Form;
