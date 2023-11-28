import About from './components/About';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ProfilePic from './components/ProfilePic';
import ProgressBar from './components/ProgressBar';
import SideBar from './components/SideBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Softskills from './components/Softskills';
import 'reactjs-popup/dist/index';
import Copyright from './components/Copyright';

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <Introduction />
          <Skills />
          <Softskills />
          <Projects />
          <Contact />
          <Copyright />
        </div>
        <div className='hidden md:block'>
          <ProgressBar />
          <ProfilePic />
          <About />
        </div>
      </div>
    </div>
  )
}

export default App
