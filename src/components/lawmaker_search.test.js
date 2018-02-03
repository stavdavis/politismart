import React from 'react';
import {shallow} from 'enzyme';

//testing the unconnected component (the connected component would have been w/o the curly-braces, because it's the default export)
import {LawmakerSearch} from './lawmaker_search';

//we need to pass this compoenent manual props, b/c we're not testing the connected component that gets its props from the state in the redux store
describe('<LawmakerSearch />', () => {
    it('Renders without crashing', () => {
        shallow(<LawmakerSearch lawmakers={['fakeLawmaker1']} />);
    });
    it('Renders the correct search and results section', () => {
        const wrapper = shallow(<LawmakerSearch lawmakers={['fakeLawmaker1']}  />);
        expect(wrapper.hasClass('lawmaker-search')).toEqual(true);
    });
    //Add more tests
});