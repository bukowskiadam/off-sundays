import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const TemplateWrapper = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {
                    name: 'description',
                    content:
                        'W 2018 roku weszła w życie nowa ustawa o ograniczeniu handlu w niedziele i święta. ' +
                        'Sprawdź w które niedziele sklepy będą zamknięte.',
                },
                {
                    name: 'keywords',
                    content: 'Sklepy zamknięte w niedzielę, Niedziela handlowa, Kiedy sklepy są zamknięte',
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
