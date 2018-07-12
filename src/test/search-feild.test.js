import React from 'react';
import {shallow} from 'enzyme';

import SearchField from '../components/search-field/search'

describe.skip('<SearchField/>', () => {
  it('Should render without crashing', () => {
    shallow(<SearchField/>);
  });

})