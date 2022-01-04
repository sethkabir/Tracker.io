import Register from "./Components/Register";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import MapPage from "./Components/MapPage";
import Profile from "./Components/Profile";
import LandingPage from "./Components/LandingPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";


const Dashboard = () =>{
  return(
      <Outlet />
  );
}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        
        <Route exact path="/auth" element={<Navigate replace to="/auth/login"/>} />
        <Route exact path="/auth" element={<Register />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route exact path="/dashboard" element={<Navigate replace to="/dashboard/home"/>} />
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="mapPage" element={<MapPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
