import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Content/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
