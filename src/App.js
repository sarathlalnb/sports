import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/College/Home/Home";
import Request from "./components/College/Request/Request";
import Landingpage from "./components/Common Components/LandingPage/Landingpage";
import { SponsorHome } from "./components/Sponsors/SponsorHome/SponsorHome";
import { AthletesView } from "./components/Sponsors/AthletesView/AthletesView";
import { CollegeView } from "./components/Sponsors/CollegeView/CollegeView";
import AdminHome from "./components/Admin/AdminHome";
import Event from "./components/Admin/Event";
import RequestAdmin from "./components/Admin/RequestAdmin";
import AtheletHome from "./components/Sponsors/AthletesView/AtheletHome";
import UserProfile from "./components/Sponsors/AthletesView/UserProfile";
import Post from "./components/College/Home/Post";
import StudentReg from "./components/College/StudentRegistration/StudentReg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/auth" element={<Auth />} />
{/*admin */}

<Route path="/admin-home"  element={<AdminHome></AdminHome>} ></Route>
<Route path="/admin-event"  element={<Event></Event>} ></Route>
<Route path="/admin-request"  element={<RequestAdmin></RequestAdmin>} ></Route>
          {/* College */}
          <Route path="/college-home" element={<Home />} />
          <Route path="/college/request" element={<Request />}></Route>
          <Route path="/college/studentreg" element={<StudentReg />}></Route>
<Route path="/post" element={<Post></Post>}></Route>
          {/* Sponsor */}
          <Route path="/sponsor/home" element={<SponsorHome />}></Route>
          <Route path="/sponsor/available-athletes" element={<AthletesView/>}></Route>
          <Route path="/sponsor/available-college" element={<CollegeView/>}></Route>


          {/* Athletes */}
          <Route path="/athletes-home" element={<AtheletHome/>}></Route>
          <Route path="/user-profile" element={<UserProfile/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
