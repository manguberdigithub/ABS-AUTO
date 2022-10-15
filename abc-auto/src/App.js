import './App.scss';
/*---------Import Components--------*/
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
/*---------/Import Components--------*/
/*---------Import Router--------*/
// import {BrowserRouter as Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;
