import Form from './components/form';
import Slideshow from './components/slideShow';
import './App.css';
import './style/style.css';
import Header from './components/header';
import Description from './components/description';
import ScrollText from './components/scrollText';
import InfiniteLooper from './components/scrollText';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <div className='section-1'>
      <Description/>
      <Slideshow/>
      </div>
      <ScrollText/>
      <InfiniteLooper speed="4" direction="right">
        <div className="contentBlock contentBlock--one">
        -10% avec le code HYDRONOEL
        </div>
      </InfiniteLooper>


      <Form/>
      {/* SNOW ANNIMATION */}
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>

    </div>

  );
}

export default App;
