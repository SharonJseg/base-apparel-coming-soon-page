import React from 'react';
import './Main.css';
import mainImageMobile from '../../images/hero-mobile.jpg';
import logo from '../../images/logo.svg';
import bgImage from '../../images/bg-pattern-desktop.svg';
import Form from '../Form/Form';

const Main = () => {
  return (
    <main className='hero-content'>
      <div className='hero-content__wrapper'>
        <img src={logo} alt='logo' className='logo' />
        <img src={mainImageMobile} alt='hero' className='hero-image__mobile' />

        <h1 className='hero-title'>
          WE'RE <span className='hero-title_bold'>COMING SOON</span>
        </h1>
        <p className='hero-text'>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <Form />
      </div>
      <img
        src={bgImage}
        alt='background'
        className='hero-content__background-image'
      />
    </main>
  );
};

export default Main;
