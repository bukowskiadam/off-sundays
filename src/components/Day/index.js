import React from 'react';
import PropTypes from 'prop-types';

import StatusImage from '../StatusImage';
import { formatForHuman } from '../../helpers/formatDate';
import style from './index.module.css';

const DateHeader = ({ date }) => {
    const { day: day, date: formattedDate } = formatForHuman(date);
    return (
        <div>
            <h2 className={style.day}>{day}</h2>
            <h4 className={style.date}>{formattedDate}</h4>
        </div>
    );
};

const Status = ({ isClosed }) => (
    <div>
        <div className={style.image}>
            <StatusImage isClosed={isClosed} />
        </div>
        <div>{isClosed ? 'Handel ograniczony' : 'Handel dozwolony'}</div>
    </div>
);

const Day = ({ date, isClosed }) => (
    <div className={style.container}>
        <DateHeader date={date} />
        <Status isClosed={isClosed} />
    </div>
);

Day.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    isClosed: PropTypes.bool.isRequired,
};

export default Day;
