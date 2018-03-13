import React from 'react';
import Link from 'gatsby-link';

import style from './NavLink.module.css';

const NavLink = props => (
    <p className={style.link}>
        <Link {...props} />
    </p>
);

export default NavLink;
