// import logo from './logo.svg';

import { BrowserRouter,Routes ,Route} from 'react-router-dom';

import Headers from './components/Headers';

import Home from './components/Home'

import About from './components/About';

import Skills from './components/Skills';

import SkillsItemFullDetails from './components/SkillsItemFullDetails';

import Certificates from './components/Certificates';

import Projects from './components/Projects';

import Contact from './components/Contact';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>


      <Route path = "/" element = {<Home />} />
      <Route exact path = '/about' element = {<About />} />
      <Route exact path = '/skills' element = {<Skills />} />
      <Route exact path = "/skills/:id" element = {<SkillsItemFullDetails />} />
      <Route exact path = '/certificates' element = {<Certificates />} />
      <Route exact path = "/projects" element = {<Projects />} />
      <Route exact path = '/contact' element = {<Contact />} />

      </Routes>
    </BrowserRouter>



    



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



  );
}

export default App;
