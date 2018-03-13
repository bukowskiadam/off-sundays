import React from 'react';

import Legend from '../Legend';

import style from './BoxContainer.module.css';

const BoxContainer = ({ children }) => (
    <div className={style.container}>
        <div className={style.box}>{children}</div>
        <Legend />
    </div>
);

export default BoxContainer;
