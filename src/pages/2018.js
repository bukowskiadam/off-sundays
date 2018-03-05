import React from 'react';

import Header from '../components/Header';
import AllSundays from '../components/AllSundays';
import Footer from '../components/Footer';
import NavLink from '../components/NavLink';

const Page = () => (
    <div>
        <Header />
        <NavLink to="/">&lt; Powrót</NavLink>
        <p>Lista wszystkich niedziel w roku</p>
        <AllSundays year={2018} />
        <NavLink to="/">&lt; Powrót</NavLink>
        <Footer />
    </div>
);

export default Page;
