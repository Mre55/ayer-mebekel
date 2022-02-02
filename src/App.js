import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import DetailsPage from './components/DetailsPage';
import { fetchWeather } from './redux/weather/weatherReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div className="App">
      <TopBar />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
