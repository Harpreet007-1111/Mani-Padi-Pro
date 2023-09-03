import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Test from './components/Test';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <section id="home">
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id='services'>
          <Services />
        </section>

        <section id='test'>
          <Test />
        </section>

        <section id='contact'>
          <Contacts />
        </section>

        <Footer />
      </Router>
    </div>
  );
}

export default App;