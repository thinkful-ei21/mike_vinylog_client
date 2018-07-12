import React from 'react';
import {shallow} from 'enzyme';

import { Header } from '../components/header/header';

describe('<Header/>', () => {
  it('Should render without crashing', () => {
    shallow(<Header/>);
  });

})