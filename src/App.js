// import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import BodyA from './components/BodyA';
import BodyB from './components/BodyB';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "App">
      <div className='main-container'>
        <Header />
        <BodyA />
        <BodyB />
        <Footer />
      </div>
    </div>
  );
}

export default App;
