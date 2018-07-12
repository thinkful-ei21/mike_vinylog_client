import React from 'react';
import {shallow} from 'enzyme';

import Search from '../components/search-field/search';

describe('<Search/>', () => {
  it('Should render without crashing', () => {
    shallow(<Search/>);
  });

})