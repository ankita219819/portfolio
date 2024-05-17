import './App.css';
import TopBar from './components/topBar';
import Introduction from './components/introduction';
import MobileNavbar from './components/mobile-navbar';
import Projects from './components/projects';


function App() {
  return (
    <div className="App" >
      <MobileNavbar ></MobileNavbar>
      <TopBar></TopBar>
      <Introduction></Introduction>
      <Projects></Projects>
      <div class="footer">

      </div>
    </div>
  );
}

export default App;
