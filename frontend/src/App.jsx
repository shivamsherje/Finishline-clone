
import './App.css';
import Navbar1 from './components/Navbar1';
import Navbar2 from './components/Navbar2';
import Top from './components/Top';
import Footer from './Footer/Footer';
import Allroutes from './Routes/Allroutes';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Navbar2 />
      <Top/>
      <Allroutes />
    </div>
  );
}

export default App;
