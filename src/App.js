import './App.css';

//components
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
