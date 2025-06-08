import React from 'react'
import User_Header from './User_Header';
import Intro from './Intro'
import Section1 from './N_A_B-Section';
import Section2 from './R_B-Section';
import Section3 from './P_B-Section';
import Divider from './Divider'
import Footer from './Footer';

const User_Home = () => {
  return (
    <>
      <User_Header />
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

export default User_Home