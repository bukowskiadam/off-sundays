import React from 'react';
import { shallow } from 'enzyme';

import BoxContainer from './index';

describe('BoxContainer', () => {
    const date = new Date('2018-03-08T12:00:00.000Z');

    it('renders correctly', () => {
        const wrapper = shallow(
            <BoxContainer>
                <div>box element</div>
            </BoxContainer>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
