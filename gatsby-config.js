module.exports = {
    siteMetadata: {
        title: 'W Niedziele Zamknięte!',
        description:
            'W 2018 roku weszła w życie nowa ustawa o ograniczeniu handlu w niedziele i święta. ' +
            'Sprawdź, w które niedziele sklepy będą zamknięte.',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-35798118-3',
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'W Niedziele Zamknięte',
                short_name: 'W Niedziele Zamknięte',
                start_url: '/',
                background_color: '#eeeeee',
                theme_color: '#eeeeee',
                display: 'standalone',
                icons: [
                    {
                        src: '/icons/logo-android-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/logo-android-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/logo-android-1024x1024.png',
                        sizes: '1024x1024',
                        type: 'image/png',
                    },
                ],
            },
        },
        'gatsby-plugin-netlify',
    ],
};
