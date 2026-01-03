
import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import AboutUS from './pages/About';
import ConsultUs from './pages/Consultus';
import Contact from './pages/contact';
import Home from './pages/Home';
import Ourwork from './pages/OurWork';

function App() {
  return (
   < >

<div  className='p-3 md:p-0   md:px-10 md:pl-10 bg-[#191919]'>
    <Navbar />
    <Home />
    <AboutUS />
    <Ourwork/>
    <Contact/>
    <ConsultUs/>
    <Footer/>
    </div>
   </>
  );
}

export default App;
