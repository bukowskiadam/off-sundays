import React from 'react';
import PropTypes from 'prop-types';

import StatusImage from '../StatusImage';
import { formatForHuman } from '../../helpers/formatDate';
import style from './index.module.css';

const DateHeader = ({ date }) => {
    const { dateWithoutYear: formattedDate } = formatForHuman(date);
    return <div>{formattedDate}</div>;
};

const Status = ({ isClosed }) => (
    <div className={style.image}>
        <StatusImage isClosed={isClosed} />
    </div>
);

const Day = ({ date, isClosed }) => (
    <div className={style.container}>
        <Status isClosed={isClosed} />
        <DateHeader date={date} />
    </div>
);

Day.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    isClosed: PropTypes.bool.isRequired,
};

export default Day;
