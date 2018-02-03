import React from 'react';
import {shallow} from 'enzyme';

import SenatorCard from './senator_card';

const fakeLawmaker = ['field0', 'field1', 'field2', 1, 1, 1, 1, 1, 1];

describe('<SenatorCard />', () => {
    it('Renders without crashing', () => {
        shallow(<SenatorCard lawmaker={fakeLawmaker} />);
    });
    //Add more tests
});