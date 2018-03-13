import React from 'react';
import { shallow } from 'enzyme';

import Placeholder from './Placeholder';

describe('Placeholder', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Placeholder />);

        expect(wrapper).toMatchSnapshot();
    });
});
