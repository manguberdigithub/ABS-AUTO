import './App.scss';
/*---------Import Components--------*/
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/*---------/Import Components--------*/
/*---------Import Router--------*/
// import {BrowserRouter as Routes} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
    
      <Footer/>
    </div>
  );
}

export default App;
