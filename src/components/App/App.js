import './App.css';
import mainImage from '../../images/hero-desktop.jpg';
import Main from '../Main/Main';

const App = () => {
  return (
    <div className='page'>
      <Main />
      <img src={mainImage} alt='hero' className='hero-image' />
    </div>
  );
};

export default App;
