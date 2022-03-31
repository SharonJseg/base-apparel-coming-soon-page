import './App.css';
import mainImage from '../../images/hero-desktop.jpg';
import logo from '../../images/logo.svg';
import arrow from '../../images/icon-arrow.svg';
import error from '../../images/icon-error.svg';
import bgImage from '../../images/bg-pattern-desktop.svg';

const App = () => {
  return (
    <div className='page'>
      <main className='hero-content'>
        <img src={logo} alt='logo' className='logo' />
        <h1 className='hero-title'>
          WE'RE <span className='hero-title_bold'>COMING SOON</span>
        </h1>
        <p className='hero-text'>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form className='hero-form'>
          <div className='hero-input-wrapper'>
            <input type='email' className='hero-input' />
            <img src={error} alt='error icon' className='hero-error-icon' />
            <button className='hero-submit'>
              <img src={arrow} alt='arrow icon' />
            </button>
          </div>
        </form>
        <img
          src={bgImage}
          alt='background'
          className='hero-content__background-image'
        />
      </main>
      <img src={mainImage} alt='hero' className='hero-image' />
    </div>
  );
};

export default App;
