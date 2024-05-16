import logo from './logo.svg';
import './App.css';
import TopBar from './components/topBar';
import Introduction from './components/introduction';
import MobileNavbar from './components/mobile-navbar';


function App() {
  return (
    <div className="App" >
       <MobileNavbar ></MobileNavbar>
      <TopBar></TopBar>
      <Introduction></Introduction>
     
    </div>
  );
}

export default App;
