import React from 'react';
import {shallow} from 'enzyme';

import NavBar from './nav-bar';

describe('<NavBar />', () => {
    it('Renders without crashing', () => {
        shallow(<NavBar />);
    });
    //Add more tests
});
