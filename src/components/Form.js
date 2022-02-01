import React, { useState } from 'react';

function Form(props) {
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
      <label>Latitude</label>
      <br />
      <input
        className="border-solid border-2 border-sky-500"
        name="lat"
        type="number"
        value={lat}
        placeholder="Enter a Latitude..."
        onChange={() => handleLatChange}
        required
      />
      <br />
      <label>Longitude</label>
      <br />
      <input
        className="border-solid border-2 border-sky-500"
        name="userName"
        type="number"
        placeholder="Enter a Longitude..."
        value={long}
        onChange={() => handleLongChange}
        required
      />
      <br />
      <input
        onClick={() => seeMore('New')}
        className="bg-blue-600 text-white p-2 w-40 text-lg  rounded mt-4"
        type="submit"
        value="Submit"
      />
    </form>
    </div>
  );
}

export default Form;
