import React from 'react';
import {shallow} from 'enzyme';

import { LoginForm } from '../components/login/login';

describe('<LoginForm/>', () => {
  it('Should render without crashing', () => {
    shallow(<LoginForm/>);
  });


  it('Should render the login form', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.hasClass('login-form')).toEqual(true);
    console.log(wrapper.debug());
  });

})