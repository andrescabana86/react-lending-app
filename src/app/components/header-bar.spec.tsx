import React from 'react';
import { shallow } from 'enzyme';
import { HeaderBar } from './header-bar';

describe('Component: #header-bar', () => {
  test('render a small label', () => {
    const wrapper = shallow(<HeaderBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
