import React from 'react';
import { shallow } from 'enzyme';

import AllSundays from './AllSundays';

describe('AllSundays', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<AllSundays year={2018}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
