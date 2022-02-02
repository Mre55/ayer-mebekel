import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './components/HomePage';
import TopBar from './components/TopBar';
import DetailsPage from './components/DetailsPage';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
