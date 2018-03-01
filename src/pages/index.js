import React from 'react';

import AllSundays from '../components/AllSundays';
import Footer from '../components/Footer';

const IndexPage = () => (
    <div>
        <h1>W Niedziele Zamknięte!</h1>
        <p>Sprawdź w które niedziele sklepy będą zamknięte</p>
        <h3>2018</h3>
        <AllSundays />
        <Footer />
    </div>
);

export default IndexPage;
