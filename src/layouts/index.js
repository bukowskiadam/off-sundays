import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const appleMobileWebApp = [
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
];

const openGraph = (title, description) => [
    {
        property: 'og:type',
        content: 'website',
    },
    {
        property: 'og:url',
        content: 'https://www.wniedzielezamkniete.pl',
    },
    {
        property: 'og:title',
        content: title,
    },
    {
        property: 'og:description',
        content: description,
    },
    {
        property: 'og:locale',
        content: 'pl_PL',
    },
    {
        property: 'og:image',
        content: 'https://www.wniedzielezamkniete.pl/icons/logo-android-512x512.png',
    },
    {
        property: 'og:image:type',
        content: 'image/png',
    },
    {
        property: 'og:image:width',
        content: '512',
    },
    {
        property: 'og:image:height',
        content: '512',
    },
];

const TemplateWrapper = ({ children, data: { site: { siteMetadata: { title, description } } } }) => (
    <div>
        <Helmet
            title={title}
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    name: 'keywords',
                    content: 'Sklepy zamknięte w niedzielę, Niedziela handlowa, Kiedy sklepy są zamknięte',
                },
                ...appleMobileWebApp,
                ...openGraph(title, description),
            ]}
            link={[
                { rel: 'apple-touch-icon', href: '/icons/logo-apple-120x120.png' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/logo-apple-180x180.png' },
                { rel: 'shortcut icon', href: '/icons/logo-android-192x192.png' },
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
