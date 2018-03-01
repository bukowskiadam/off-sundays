import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="W Niedziele Zamknięte - sprawdź w które niedziele sklepy będą zamknięte"
            meta={[
                {
                    name: 'description',
                    content:
                        'Sprawdź czy w niedzielę sklepy będą zamknięte czy otwarte. ' +
                        'Lista niedziel handlowych oraz wolnych od handlu.',
                },
                {
                    name: 'keywords',
                    content: 'Sklepy w niedzielę, Niedziela handlowa, Kiedy sklepy są zamknięte',
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: 'W Niedziele Zamknięte',
                },
                {
                    name: 'apple-mobile-web-app-capable',
                    content: 'yes',
                },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'default',
                },
            ]}
            link={[
                { rel: 'apple-touch-icon', href: '/icons/logo-apple-120x120.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/logo-apple-180x180.png' },
            ]}
        />
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
                textAlign: 'center',
            }}
        >
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
