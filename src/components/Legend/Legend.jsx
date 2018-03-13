import React from 'react';

import StatusImage from '../StatusImage';

import style from './Legend.module.css';

const Legend = () => (
    <div className={style.container}>
        <div className={style.entry}>
            <StatusImage isClosed={true} />
            <span>handel ograniczony</span>
        </div>
        <div className={style.entry}>
            <StatusImage isClosed={false} />
            <span>handel dozwolony</span>
        </div>
    </div>
);

export default Legend;
