import React from 'react';
import Link from 'gatsby-link';

import style from './index.module.css';

export default props => (
    <p className={style.link}>
        <Link {...props} />
    </p>
);
