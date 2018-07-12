import React from 'react';
import {shallow} from 'enzyme';

import { Header } from '../components/header/header';

describe.only('<Header/>', () => {
  it('Should render without crashing', () => {
    shallow(<Header/>);
  });

  // it('Should render the header and login form', () => {
  //   const wrapper = shallow(<Header />);
  //   console.log(wrapper.debug());
  // });

})