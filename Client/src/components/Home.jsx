import React from 'react'
import Header from './Header';
import Intro from './Intro'
import Section1 from './N_A_B-Section';
import Section2 from './R_B-Section';
import Section3 from './P_B-Section';
import Divider from './Divider'
import Footer from './Footer';

function Home() {
  
    return (
      <>
        <Header />
        <Intro />
        <Divider />
        <Section1 />
        <Divider />
        <Section2 />
        <Divider />
        <Section3 />
        <Divider />
        <Footer />
      </>
    )
}

export default Home