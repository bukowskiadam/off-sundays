import React from 'react';

import './index.css';

const Footer = () => (
    <div className="footer">
        <div className="source">
            <a
                href="http://prawo.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000305"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ustawa z dnia 10 stycznia 2018 r. o ograniczeniu handlu w niedziele i święta oraz w niektóre inne dni
            </a>
        </div>
        <div className="madeBy">made with ♥ by Adam Bukowski</div>
        <div className="cookies">Na tej stronie wykorzystywane są ciasteczka na potrzeby Google Analytics</div>
    </div>
);

export default Footer;
