import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import {
  // fetchWeather,
  fetchWeatherWithoutDispatch,
} from '../redux/weather/weatherReducer';
// import store from '../redux/configureStore';
import DetailsPage from './DetailsPage';

function HomePage() {
  // const weatherFromStore = useSelector((state) => state.weatherReducer);

  // const dispatch = useDispatch();

  const [firstPageData, setFirstPageData] = useState();
  const [secondPageData, setSecondPageData] = useState();
  const [thirdPageData, setThirdPageData] = useState();
  const [fourthPageData, setFourthPageData] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [seeDetail, setSeeDetail] = useState(false);

  const fetchNewData = async (lat, long) => {
    const withoutDi = await fetchWeatherWithoutDispatch(lat, long);
    const second = await fetchWeatherWithoutDispatch(8, 37);
    const third = await fetchWeatherWithoutDispatch(40, 40);
    const fourth = await fetchWeatherWithoutDispatch(30, 20);
    setFirstPageData(withoutDi);
    setSecondPageData(second);
    setThirdPageData(third);
    setFourthPageData(fourth);
  };

  useEffect(async () => {
    await fetchNewData(50, 50);
  }, []);

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
      default:
        return firstPageData;
    }
  };

  // const history = useHistory();

  // const { coord = {}, list = [] } = weatherFromStore;

  const seeMore = (city) => {
    setSelectedCity(city);
    // setSeeDetail(!seeDetail);
  };

  const selectedCityData = getSelectedCityData();

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      {/* <div>Hello this is the home page.</div>
      <button className="border border-y-neutral-300" onClick={async () => await fetchNewData(8, 37)}>
        User entered a new values to
        {' '}
        {firstPageData?.coord?.lat}
        {' '}
        and
        {' '}
        {firstPageData?.coord?.lon}
      </button> */}
      <div className="border-solid border-2 border-sky-500">
        <h4>Addis Ababa</h4>
        <p>
          {' '}
          Air Quality:
          {firstPageData?.coord
            && firstPageData.list.map((listData) => listData.main?.aqi)}
        </p>

        <button onClick={() => seeMore('Addis Ababa')}>Detail</button>
        {seeDetail
          ? firstPageData?.coord && (
          <DetailsPage
            coord={firstPageData.coord}
            list={firstPageData.list}
          />
          )
          : ''}

        {/* <button onClick={()=> history.push("/detailsPage")}>Detail</button> */}
        {/* <Link to="/detailsPage" className="btn btn-primary">Sign up</Link> */}
        {/* <button
          id={v4()}
          onClick={seeMore}
        >
          Detail
        </button> */}

        {/* <Link to={{
          pathname: '/detailsPage',
          coord: {secondPageData.coord},
          list:{secondPageData.list} // HERE, passing data using Link
          }}>
        <button className="AddBtn">
          ADD
        </button>
      </Link>

        {firstPageData?.coord && (
          <Link to="/detailsPage" name={'My name is'} >Sign up</Link>
          )} */}
        {/* <NavLink to="/detailsPage">Detail</NavLink> */}
      </div>
      <div className="border-solid border-2 border-sky-500">
        <h4>Hawassa</h4>
        <p>
          {' '}
          Air Quality:
          {secondPageData?.coord
            && secondPageData.list.map((listData) => listData.main?.aqi)}
        </p>
        <button onClick={() => seeMore('Hawassa')}>Detail</button>
        {seeDetail
          ? secondPageData?.coord && (
          <DetailsPage
            coord={secondPageData.coord}
            list={secondPageData.list}
          />
          )
          : ''}
      </div>
      <div className="border-solid border-2 border-sky-500">
        <h4>Hossana</h4>
        <p>
          {' '}
          Air Quality:
          {thirdPageData?.coord
            && thirdPageData.list.map((listData) => listData.main?.aqi)}
        </p>
        <button onClick={() => seeMore('Hossana')}>Detail</button>
        {seeDetail
          ? thirdPageData?.coord && (
          <DetailsPage
            coord={thirdPageData.coord}
            list={thirdPageData.list}
          />
          )
          : ''}
      </div>
      <div className="border-solid border-2 border-sky-500">
        <h4>London</h4>
        <p>
          {' '}
          Air Quality:
          {fourthPageData?.coord
            && fourthPageData.list.map((listData) => listData.main?.aqi)}
        </p>
        <button onClick={() => seeMore('London')}>Detail</button>
        {seeDetail
          ? fourthPageData?.coord && (
          <DetailsPage
            coord={fourthPageData.coord}
            list={fourthPageData.list}
          />
          )
          : ''}
      </div>
      <br />
      {selectedCityData?.coord && (
        <DetailsPage
          coord={selectedCityData.coord}
          list={selectedCityData.list}
        />
      )}
    </div>
  );
}

export default HomePage;
