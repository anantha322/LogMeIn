import React from 'react';
import renderer from 'react-test-renderer';
import {ListItem} from 'react-native-elements';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import {NewsListItem} from '..';
const props = {
  id: 123,
  onPressItem: jest.fn(),
  title: 'Test',
};
describe('render News List component', () => {
  const wrapper = Enzyme.shallow(<NewsListItem {...props} />);

  test('renders correctly', () => {
    const tree = renderer.create(<NewsListItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should have the title passed from props', () => {
    expect(wrapper.find(ListItem.Title).first().props().children).toEqual(
      props.title,
    );
  });
  test('list item called on press', () => {
    const buttonProps = wrapper.find(ListItem).first().props();
    buttonProps.onPress();
    expect(props.onPressItem).toBeCalled();
  });
});
