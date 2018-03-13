import React from 'react';

import style from './Footer.module.css';

const Footer = () => (
    <div className={style.footer}>
        <div>
            <iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.wniedzielezamkniete.pl&width=320&layout=standard&action=like&size=large&show_faces=true&share=true&height=80"
                width="320"
                height="80"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
            />
        </div>
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
        <div>
            <a href="https://www.wniedzielezamkniete.pl" target="_blank">
                https://wNiedzieleZamkniete.pl
            </a>
        </div>
        <div>© Adam Bukowski</div>
    </div>
);

export default Footer;
