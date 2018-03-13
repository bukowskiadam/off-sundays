import React from 'react';
import { shallow } from 'enzyme';

import Questions from './Questions';

describe('Questions', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Questions />);

        expect(wrapper).toMatchSnapshot();
    });
});
