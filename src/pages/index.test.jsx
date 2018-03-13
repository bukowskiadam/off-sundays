import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from './index';

describe('index', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<IndexPage />);

        expect(wrapper).toMatchSnapshot();
    });
});
