import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import {
  fetchWeatherSuccess,
} from '../../redux/weather/weatherReducer';

import HomePage from '../HomePage';
import TopBar from '../TopBar';

describe('Dispatch actions tests', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  it('should dispatch fetch weather action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    // Dispatch the action
    store.dispatch(fetchWeatherSuccess());

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = { type: 'FETCH_WEATHER' };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('Home page component snapshot tests', () => {
  const mockStore = configureStore();

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <HomePage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <TopBar />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});