import React from 'react';
import { shallow } from 'enzyme';

import UpcomingDays from './UpcomingDays';

describe('UpcomingDays', () => {
    it('renders correctly', () => {
        const sunday = new Date('2018-03-18');
        const wrapper = shallow(<UpcomingDays upcomingSunday={sunday} />);

        expect(wrapper).toMatchSnapshot();
    });
});
