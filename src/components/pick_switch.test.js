import React from 'react';
import {shallow} from 'enzyme';

import PickSwitch from './pick_switch';


describe('<PickSwitch />', () => {
    it('Renders without crashing', () => {
        shallow(<PickSwitch />);
    });
    it('Renders the title', () => {
        const title = 'Foo';
        // const callback = jest.fn(); //don't need this, but will use it in next tests
        const wrapper = shallow(<PickSwitch title={title} />);
        expect(wrapper.contains(<div className="slider-title">{title}: </div>)).toEqual(true);   
    });
    //Add more tests
});
