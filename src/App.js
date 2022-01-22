import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
// import { Provider } from 'react-redux';

import HomePage from './components/HomePage/HomePage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import Navbar from './components/Navbar/Navbar';
// import store from './redux/configureStore';

function App() {
  return (
  // <Provider store={store}>
    <div className="App">
      <Navbar />
      <div className="pageContainer">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailsPage" element={<DetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  // </Provider>
  );
}

export default App;
