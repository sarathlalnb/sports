import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/College/Home/Home";
import Request from "./components/College/Request/Request";
import Landingpage from "./components/Common Components/LandingPage/Landingpage";
import { SponsorHome } from "./components/Sponsors/SponsorHome/SponsorHome";
import { AthletesView } from "./components/Sponsors/AthletesView/AthletesView";

import AdminHome from "./components/Admin/AdminHome";
import Event from "./components/Admin/Event";
// import RequestAdmin from "./components/Admin/RequestAdmin";
import AtheletHome from "./components/Athletes/AtheletHome";
import UserProfile from "./components/Athletes/UserProfile";
import Post from "./components/College/Home/Post";
import StudentReg from "./components/College/StudentRegistration/StudentReg";
import Studentlist from "./components/College/Studentlist/Studentlist";
import RequestCollege from "./components/College/SponserApprove/RequestCollege";
/* import Sponsorlist from "./components/College/Sponsor/Sponsorview" */
import Sponsorview from "./components/College/Sponsor/Sponsorview";
import Winner from "./components/Admin/Winner";
import Winnerslist from "./components/Athletes/Winnerslist";
import Mysponsor from "./components/Athletes/Mysponsor";
import StudSpon from "./components/Sponsors/StudentSponsor/StudSpon";
import MyEvents from "./components/Athletes/MyEvents";
import AdminStudents from "./components/Admin/AdminStudents";
import CollegeStudents from "./components/Admin/CollegeStudents";
import ViewWinner from "./components/Admin/ViewWinner";
import StudentWinners from "./components/Sponsors/StudentWinners";
import Sponsors from "./components/Admin/Sponsors";

import Clgstdspn from "./components/Sponsors/AthletesView/Clgstdspn";
import AthletNotification from "./components/Athletes/AthletNotification";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/auth" element={<Auth />} />
          {/*admin */}

          <Route path="/admin-home" element={<AdminHome></AdminHome>}></Route>
          <Route path="/admin-event" element={<Event></Event>}></Route>
          <Route path="/admin-winner" element={<Winner></Winner>}></Route>
          <Route
            path="/admin-winnerview"
            element={<ViewWinner></ViewWinner>}
          ></Route>
          <Route
            path="/admin-students"
            element={<AdminStudents></AdminStudents>}
          ></Route>
          <Route
            path="/admin-sponser"
            element={<Sponsors />}
          ></Route>
          {/* <Route
            path="/admin-notifications"
            element={<AdminNotifications />}
          ></Route> */}
          <Route
            path="/admin-collegestudents/:id"
            element={<CollegeStudents />}
          ></Route>
          {/* College */}
          <Route path="/college-home" element={<Home />} />
          <Route path="/college/request" element={<Request />}></Route>
          <Route path="/college/studentreg" element={<StudentReg />}></Route>
          <Route path="/college/studentlist" element={<Studentlist />}></Route>
          <Route
            path="/college-request"
            element={<RequestCollege></RequestCollege>}
          ></Route>
          <Route path="/post" element={<Post></Post>}></Route>
          <Route path="/college/sponsorview" element={<Sponsorview />}></Route>
          {/* Sponsor */}
          <Route path="/sponsor/home" element={<SponsorHome />}></Route>
          <Route
            path="/sponsor/available-athletes"
            element={<AthletesView />}
          ></Route>

          <Route
            path="/sponsor/sponsered-student"
            element={<StudSpon />}
          ></Route>
          <Route path="/sponsor/winner" element={<StudentWinners />}></Route>
          <Route path="/sponsor/students/:id" element={<Clgstdspn />}></Route>
          
          {/* Athletes */}
          <Route path="/athletes-home" element={<AtheletHome />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
          <Route path="/Winnerslist" element={<Winnerslist />}></Route>
          <Route path="/mysponsorslist" element={<Mysponsor />}></Route>
          <Route path="/myEvents" element={<MyEvents />}></Route>
          <Route path="/notification" element={<AthletNotification/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
