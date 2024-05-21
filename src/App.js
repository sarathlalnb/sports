import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Landingpage from './components/LandingPage/Landingpage';
import Home from './components/Collage/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/collage-home' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
