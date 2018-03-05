import React from 'react';

import Header from '../components/Header';
import UpcomingDays from '../components/UpcomingDays';
import Footer from '../components/Footer';
import NavLink from '../components/NavLink';

const IndexPage = () => (
    <div>
        <Header />
        <p>Sprawdź w które niedziele sklepy będą zamknięte</p>
        <UpcomingDays />
        <NavLink to="/2018/">Sprawdź cały rok</NavLink>
        <Footer />
    </div>
);

export default IndexPage;
