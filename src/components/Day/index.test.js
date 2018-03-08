import React from 'react';
import { render } from 'enzyme';

import Day from './index';

describe('Day', () => {
    const date = new Date('2018-03-08T12:00:00.000Z');

    it('renders correctly when shops are closed', () => {
        const wrapper = render(<Day date={date} isClosed={true} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly when shops are opened', () => {
        const wrapper = render(<Day date={date} isClosed={false} />);

        expect(wrapper).toMatchSnapshot();
    });
});
