import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
    </>
  )
}

export default App