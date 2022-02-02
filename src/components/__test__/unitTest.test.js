
import Form from "../__mock__/Form";
import TopBar from "../TopBar";
import HomePage from "../__mock__/HomePage";

import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

describe("Home page component snapshot tests", () => {
  const mockStore = configureStore();

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <HomePage />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <Form />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={mockStore({})}>
          <TopBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
