import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="wNiedzieleZamkniete.pl - sprawdź czy w najbliższą niedzielę sklepy będą zamknięte czy otwarte"
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
