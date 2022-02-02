import React from 'react';

const Form = () => (
  <div className="flex bg-[#5788e6] w-screen text-white px-3 items-center md: justify-evenly">
    <h2 className="text-3xl font-bold">Forecast air pollution data</h2>
    <div className="text-center py-4">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
        noValidate
      >
        <label htmlFor="latitude">
          <p className="text-lg">Latitude</p>
          <input
            className="border-solid border-2 border-gray-50 my-1 rounded-full text-center text-black"
            name="lat"
            id="latitude"
            type="number"
            value="lat"
            placeholder="Enter a Latitude..."
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
            value="long"
            required
          />
          <br />
        </label>
        <input
          className="bg-blue-600 text-white w-20 text-lg rounded mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  </div>
);

export default Form;
