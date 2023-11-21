// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Games from './components/pages/Games';
import Calculator from './components/pages/Calculator';
import Flower from './components/pages/Flower';
import Movie from './components/pages/Movie';



const showMain = () => {
  if (window.location.pathname === '/') {
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
}

const showGames = () => {
  if (window.location.pathname === '/games') {
    return (
      <Games />
    )
  }
}

const showCalculator = () => {
  if (window.location.pathname === '/calculator') {
    return (
      <Calculator />
    )
  }
}

const showFlower = () => {
  if (window.location.pathname === '/flower') {
    return (
      <Flower />
    )
  }
}

const showMovie = () => {
  if (window.location.pathname === '/movie') {
    return (
      <Movie />
    )
  }
}

const App = () => {
  return (
    <div>
      {showMain()}
      {showGames()}
      {showCalculator()}
      {showFlower()}
      {showMovie()}
    </div>
  )
}



export default App

