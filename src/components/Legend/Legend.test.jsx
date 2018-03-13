import React from 'react';
import { shallow } from 'enzyme';

import Legend from './Legend';

describe('Legend', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Legend />);

        expect(wrapper).toMatchSnapshot();
    });
});
