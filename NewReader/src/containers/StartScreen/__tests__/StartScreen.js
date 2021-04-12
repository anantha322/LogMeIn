import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import StartScreen from '../';

const props = {};
const initialState = {};
const mockStore = configureStore();
let store;

describe('render Detail screen', () => {
  test('renders correctly', () => {
    store = mockStore(initialState);

    const tree = renderer
      .create(
        <Provider store={store}>
          <StartScreen {...props} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
