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
} from "react-router-dom";


function App(){
  return(
    <Router>
      <Routes>
      <Route path="/" element = {<LandingPage />} /> 
        <Route path="/" element = {<Register />}>
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<SignUp />} />
        </Route>
        <Route path="/home" element = {<Home />} />
        <Route path="/mapPage" element = {<MapPage />} />
        <Route path="/profile" element = {<Profile />} />
      </Routes>
    </Router>
  );
}



export default App;
