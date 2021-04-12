import React from 'react';
import {Text} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import renderer from 'react-test-renderer';
import DetailScreen from '..';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const initialState = {};
const mockStore = configureStore();
let store;
const selectedNewsFeed = {
  id: 123,
  onPressItem: item => {
    console.log(item);
  },
  title: 'Test',
  description: 'Test Test test',
};
const props = {
  route: {
    params: {
      selectedNewsFeed: selectedNewsFeed,
    },
  },
  navigation: {
    goBack: jest.fn(),
  },
};
describe('render Detail screen', () => {
  const wrapper = Enzyme.shallow(<DetailScreen {...props} />);
  test('renders correctly', () => {
    store = mockStore(initialState);

    const tree = renderer
      .create(
        <Provider store={store}>
          <DetailScreen {...props} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('close button render and called on press', () => {
    const buttonProps = wrapper.find(Icon).first().props();
    buttonProps.onPress();
    expect(buttonProps.name).toEqual('close');
    expect(props.navigation.goBack).toBeCalled();
  });

  test('should have the title passed from props', () => {
    expect(wrapper.find(Card.Title).first().props().children).toEqual(
      props.route.params.selectedNewsFeed.title,
    );
  });

  test('should have the description passed from props', () => {
    expect(wrapper.find(Text).first().props().children).toEqual(
      props.route.params.selectedNewsFeed.description,
    );
  });
});
