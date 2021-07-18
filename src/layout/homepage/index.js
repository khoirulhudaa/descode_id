import React from 'react';
import { Navbar, Hero, Partners, Benefits, Interested , Footer} from '../../components';
import { Background } from '../../elements/';

export default function Layout() {
    return (
      <>
        <Background />
        <Navbar active1="nav-link active act" active2="nav-link" active3="nav-link" />
        <Hero />
        <Partners />
        <Benefits />
        <Interested />
        <Footer />
      </>
    )
}