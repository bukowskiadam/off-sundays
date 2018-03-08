import React from 'react';

import Legend from '../Legend';

import style from './index.module.css';

export default ({ children }) => (
    <div className={style.container}>
        <div className={style.box}>{children}</div>
        <Legend />
    </div>
);
