import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/College/Home/Home";
import Request from "./components/College/Request/Request";
import Landingpage from "./components/Common Components/LandingPage/Landingpage";
import { SponsorHome } from "./components/Sponsors/SponsorHome/SponsorHome";
import { AthletesHome } from "./components/Athletes/AthletesHome";
import { AthletesView } from "./components/Sponsors/AthletesView/AthletesView";
import { CollegeView } from "./components/Sponsors/CollegeView/CollegeView";
import AdminHome from "./components/Admin/AdminHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/auth" element={<Auth />} />
{/*admin */}

<Route path="/admin-home"  element={<AdminHome></AdminHome>} ></Route>

          {/* College */}
          <Route path="/college-home" element={<Home />} />
          <Route path="/college/request" element={<Request />}></Route>

          {/* Sponsor */}
          <Route path="/sponsor/home" element={<SponsorHome />}></Route>
          <Route path="/sponsor/available-athletes" element={<AthletesView/>}></Route>
          <Route path="/sponsor/available-college" element={<CollegeView/>}></Route>


          {/* Athletes */}
          <Route path="/athletes/home" element={<AthletesHome/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
