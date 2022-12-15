import Form from './components/form';
import Slideshow from './components/slideShow';
import './App.css';
import './style/style.css';
import Header from './components/header';
import Description from './components/description';
import ScrollText from './components/scrollText';
import Footer from './components/footer';
import React from 'react'

import Snowfall from 'react-snowfall'




function App() {

  
  return (
    <div className="App">
      <Snowfall
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}
/>
      <Header/>

      <div className='section-1'>
      <Description/>
      <Slideshow/>
      </div>
      <ScrollText/>




      <Form id='form'/>
      {/* SNOW ANNIMATION */}
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
      <Footer/>

    </div>

  );
}

export default App;
