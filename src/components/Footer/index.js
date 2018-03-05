import React from 'react';

import style from './index.module.css';

const Footer = () => (
    <div className={style.footer}>
        <div className={style.source}>
            <a
                href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000305"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ustawa z dnia 10 stycznia 2018 r. o ograniczeniu handlu w niedziele i święta oraz w niektóre inne dni
            </a>
        </div>
        <div>Na tej stronie wykorzystywane są ciasteczka na potrzeby Google Analytics</div>
        <div>© Adam Bukowski</div>
    </div>
);

export default Footer;
