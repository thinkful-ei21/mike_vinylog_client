import React from 'react';
import {shallow} from 'enzyme';

import { Collection } from '../components/collection/collection';

describe.skip('<Collection/>', () => {
  it('Should render without crashing', () => {
    shallow(<Collection collection={[]}/>);
  });

})