import {Register, SignUp, Login} from "./Components/Register";
import Home from "./Components/Home";
import MapPage from "./Components/MapPage";
import Profile from "./Components/Profile";

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Navigate replace to = "/login" />} /> 
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