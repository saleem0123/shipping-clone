
import './App.css';
import './assets/css/custom.css';
import Aboutus from './Components/Aboutus';
import FormSubmit from './Components/FormSubmit';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Testimonials from './Components/Testimonials';
import Footer from './Footer';
import Footersection from './Footersection';
import Proof from './Proof';
import Servies from './Servies';
import Video from './Video';
import Works from './Works';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Aboutus/>
      <Servies/>
      <Proof/>
      <Works/>
      <Video/>
      <Testimonials />
      <FormSubmit/>
      <Footersection/>

      {/* <Footer/> */}

    {/* <div style={{height:'200px'}}></div> */}
      </div>
  );
}

export default App;
