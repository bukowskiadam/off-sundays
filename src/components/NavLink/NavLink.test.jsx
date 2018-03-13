import React from 'react';
import { shallow } from 'enzyme';

import NavLink from './NavLink';

describe('NavLink', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <NavLink to="nowhere" />,
        );

        expect(wrapper).toMatchSnapshot();
    });
});
