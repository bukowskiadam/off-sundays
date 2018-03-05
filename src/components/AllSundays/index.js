import React from 'react';
import PropTypes from 'prop-types';

import { allSundays } from '../../helpers/dateOperations';
import { isClosed } from '../../data';

import DayList from '../DayList';
import BoxContainer from '../BoxContainer';

const AllSundays = ({ year }) => (
    <div>
        <h3>{year}</h3>
        <BoxContainer>
            {allSundays(year).map(date => <DayList key={date.toString()} date={date} isClosed={isClosed(date)} />)}
        </BoxContainer>
    </div>
);

AllSundays.propTypes = {
    year: PropTypes.number.isRequired,
};

export default AllSundays;
