import React from 'react';
import {shallow} from 'enzyme';

import { RegisterForm } from '../components/register/register';

describe.skip('<Register/>', () => {
  it('Should render without crashing', () => {
    shallow(<RegisterForm />);
  });

  it('Should render the login form', () => {
    const wrapper = shallow(<RegisterForm />);
    console.log(wrapper.debug());
    expect(wrapper.hasClass('register-form')).toEqual(true);
    console.log(wrapper.debug());
  });

  it('Should render the sign up button initially', () => {
    const wrapper = shallow(<RegisterForm />);
    expect(wrapper.hasClass('signup-button')).toEqual(true);
    console.log(wrapper.debug());
  });

  it('Should register a user when the form is submitted', () => {
    const username = 'userOne';
    const password = 'password';
    const passwordConfirm = 'password';
  }); 
});