import React from 'react';
import PropTypes from 'prop-types';

import { sunday, nextWeek } from '../../helpers/dateOperations';
import { isClosed } from '../../data';

import Day from '../Day';
import DayMini from '../DayMini';
import BoxContainer from '../BoxContainer';

const UpcomingDays = ({ upcomingSunday }) => {
    const nextSunday = nextWeek(upcomingSunday);
    const twoWeeksLater = nextWeek(nextSunday);
    const threeWeeksLater = nextWeek(twoWeeksLater);

    return (
        <BoxContainer>
            <Day date={ upcomingSunday } isClosed={ isClosed(upcomingSunday) } />
            <DayMini date={ nextSunday } isClosed={ isClosed(nextSunday) } />
            <DayMini date={ twoWeeksLater } isClosed={ isClosed(twoWeeksLater) } />
            <DayMini date={ threeWeeksLater } isClosed={ isClosed(threeWeeksLater) } />
        </BoxContainer>
    );
};

UpcomingDays.propTypes = {
    upcomingSunday: PropTypes.instanceOf(Date),
};

UpcomingDays.defaultProps = {
    upcomingSunday: sunday(),
};

export default UpcomingDays;
