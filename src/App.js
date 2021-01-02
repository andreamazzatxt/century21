import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
function App() {
  return (
    <div className="App">
      <Hero description="Lorem...." />
      <Footer />
    </div>
  );
}

export default App;
