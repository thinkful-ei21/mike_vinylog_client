import React from 'react';
import {shallow} from 'enzyme';

import SearchField from '../components/search-results/search-results';

describe.skip('<SearchField/>', () => {
  it('Should render without crashing', () => {
    shallow(<SearchField/>);
  });

})