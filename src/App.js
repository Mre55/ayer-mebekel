import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import TopBar from './components/TopBar';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detailsPage" element={<DetailsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
