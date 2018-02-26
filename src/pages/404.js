import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
    <div>
        <h1>Tu nic nie ma :(</h1>
        <p>
            Idź na <Link to="/">stronę główną</Link>, tam coś znajdziesz!
        </p>
    </div>
);

export default NotFoundPage;
