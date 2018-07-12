import React from 'react';
import {shallow} from 'enzyme';

import { LoginForm } from '../components/login/login';

describe.only('<LoginForm/>', () => {
  it('Should render without crashing', () => {
    shallow(<LoginForm handleSubmit={() => {}}/>);
  });

  it('Should render the login form', () => {
    const wrapper = shallow(<LoginForm handleSubmit={() => {}}/>);
    expect(wrapper.hasClass('form-div')).toEqual(true);
    console.log(wrapper.debug());
  });

})