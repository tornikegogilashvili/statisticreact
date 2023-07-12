import { Route, Routes } from 'react-router-dom';
import routes from "../src/conf/constants/routes"
import './App.css';
import { Header } from './components/Header';
import BackgroundSlider from './components/BackgroundSlider';



function App() {
  return (
    <div className='first_div'>
      <Header  />
      <div className='App'>
        <BackgroundSlider />
      </div>
      
      {/* <Routes>
        <Route  />
      </Routes> */}
    </div>
    
  );
}

export default App;
