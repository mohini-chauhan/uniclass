
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Aboutcontent from "./Components/About/AboutContent";
import Feature from "./Components/Features/Feature";
import Training from "./Components/traning/Training";
import Enrolform  from './Components/curriculum/Enrolform';
import Skills from './Components/skills/Skills';
import Syllabus from './Components/syllabus/Syllabus';
import Certificate from './Components/certificate/certificate';
import Faq from './Components/FAQs/Faq';
import Demo from './Components/freeDemo/Demo';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <About/>
      <Aboutcontent/>
      <Feature/>
      <Training/>
      <Enrolform/>
      <Skills/>
      <Syllabus/>
      <Enrolform/>
      <Certificate/>
      <Faq/>
      <Demo/>



     
    </div>
  );
}

export default App;
