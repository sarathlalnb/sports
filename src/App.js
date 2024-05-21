import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Landingpage from './components/LandingPage/Landingpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
