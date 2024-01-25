import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import NewsLatter from './components/NewsLatter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Analytics/>
    <NewsLatter/>
    <Cards/>
    <Footer/>
  </div>
  );
}

export default App;
