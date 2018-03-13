import React from 'react';
import { shallow } from 'enzyme';

import StatusImage from './StatusImage';

describe('StatusImage', () => {
    it('renders correctly for closed', () => {
        const wrapper = shallow(<StatusImage isClosed={true} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly for opened', () => {
        const wrapper = shallow(<StatusImage isClosed={false} />);

        expect(wrapper).toMatchSnapshot();
    });
});
