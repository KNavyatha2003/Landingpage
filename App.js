import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import  Carousel from './Components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
     <Header/>
     <Navbar/>
     <Carousel />

     <Footer/>
     </div>
  );
}

export default App;
