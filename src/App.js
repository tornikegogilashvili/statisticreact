import { Route, Routes } from 'react-router-dom';
import routes from "../src/conf/constants/routes"
import './App.css';
import { Header } from './components/Header';
import { USDA } from './components/USDA';

function App() {
  return (
    <div>
      <Header  />
      <USDA />
      {/* <Routes>
        <Route  />
      </Routes> */}
    </div>
    
  );
}

export default App;
