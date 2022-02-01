import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
  // fetchWeather,
  fetchWeatherWithoutDispatch,
} from '../redux/weather/weatherReducer';
// import store from '../redux/configureStore';
import DetailsPage from './DetailsPage';

function HomePage() {
  // const weatherFromStore = useSelector((state) => state.weatherReducer);

  // const dispatch = useDispatch();
  // const [cityData = {}, setCityData] = useState();

  // cityData = { "hawasa" : {}, "AddisAbaba ": "" }

  const [newPageData, setNewPageData] = useState();
  const [firstPageData, setFirstPageData] = useState();
  const [secondPageData, setSecondPageData] = useState();
  const [thirdPageData, setThirdPageData] = useState();
  const [fourthPageData, setFourthPageData] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [detailPage, setDetailPage] = useState(false);

  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const fetchNewData = async (lat, long) => {
    const withoutDi = await fetchWeatherWithoutDispatch(lat, long);
    if (lat == '' || long == '') {
      alert('plese fill the form');
    } else {
      const [first, second, third, fourth] = await Promise.all(
        [
          [50, 50],
          [8, 37],
          [40, 40],
          [30, 20],
        ].map((coord) => fetchWeatherWithoutDispatch(coord[0], coord[1])),
      );
      setNewPageData(withoutDi);
      setFirstPageData(first);
      setSecondPageData(second);
      setThirdPageData(third);
      setFourthPageData(fourth);
    }
  };

  useEffect(async () => {
    if (lat != '' && long != '') {
      await fetchNewData(50, 50);
    } else {
      console.log('lat is empty');
    }
  }, []);

  const seeMore = (city) => {
    setSelectedCity(city);
    setDetailPage(!detailPage);
  };

  const getSelectedCityData = () => {
    switch (selectedCity) {
      case 'Hawassa':
        return secondPageData;
      case 'Addis Ababa':
        return firstPageData;
      case 'Hossana':
        return thirdPageData;
      case 'London':
        return fourthPageData;
      case 'New':
        return newPageData;
      default:
        return firstPageData;
    }
  };

  const handleLatChange = (e) => {
    setLat(e.target.value);
  };
  const handleLongChange = (e) => {
    setLong(e.target.value);
  };

  const selectedCityData = getSelectedCityData();

  return (
    <div>
      <div className={`${detailPage ? 'hidden' : ''}`}>
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
        <div
          className={`grid grid-cols-2 gap-6 p-4 ${detailPage ? 'hidden' : ''}`}
        >
          <div className="border-solid border-2 border-sky-500">
            <h4>Addis Ababa</h4>
            <p>
              {' '}
              Air Quality:
              {firstPageData?.coord
              && firstPageData.list.map(
                (listData) => listData.main?.aqi,
              )}
            </p>

            <button
              className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
              onClick={() => seeMore('Addis Ababa')}
              type="button"
            >
              Detail
            </button>
          </div>
          <div className="border-solid border-2 border-sky-500">
            <h4>Hawassa</h4>
            <p>
              {' '}
              Air Quality:
              {secondPageData?.coord
              && secondPageData.list.map((listData) => listData.main?.aqi)}
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
              onClick={() => seeMore('Hawassa')}
              type="button"
            >
              Detail
            </button>
          </div>
          <div className="border-solid border-2 border-sky-500">
            <h4>Hossana</h4>
            <p>
              {' '}
              Air Quality:
              {thirdPageData
              && thirdPageData.list.map((listData) => listData.main?.aqi)}
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
              onClick={() => seeMore('Hossana')}
              type="button"
            >
              Detail
            </button>
          </div>
          <div className="border-solid border-2 border-sky-500">
            <h4>London</h4>
            <p>
              {' '}
              Air Quality:
              {fourthPageData?.coord
              && fourthPageData.list.map((listData) => listData.main?.aqi)}
            </p>
            <button
              className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
              onClick={() => seeMore('London')}
              type="button"
            >
              Detail
            </button>
          </div>
          <br />
        </div>
      </div>
      <div className={`${detailPage ? '' : 'hidden'}`}>
        <button
          className="bg-blue-600 text-white p-2 w-40 text-lg rounded float-right"
          onClick={() => seeMore()}
          type="button"
        >
          Back
        </button>
        {selectedCityData?.coord && (
          <DetailsPage
            coord={selectedCityData.coord}
            list={selectedCityData.list}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
