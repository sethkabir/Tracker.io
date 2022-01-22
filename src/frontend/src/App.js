import Register from "./Components/Register";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import MapPage from "./Components/MapPage";
import Profile from "./Components/Profile";
import LandingPage from "./Components/LandingPage";
import Loading from "./Components/Loading";
import Test from "./Components/Test";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

//this will be an empty component which will render all the pages other than the auth pages!!
const Dashboard = () => {
  return <Outlet />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* authentication login/signup pages */}
        <Route exact path="/" element={<Navigate replace to="/auth/login" />} />
        {/* discord authentication */}
        <Route exact path="/auth/discord" element={<Loading />} />
        <Route
          exact
          path="/auth"
          element={<Navigate replace to="/auth/login" />}
        />
        {/* manual signup/login */}
        <Route exact path="/auth" element={<Register />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* !!!test page to test frontend changes!!! */}
        <Route exact path="/test" element={<Test />} />

        {/* main app dashboard */}
        <Route
          exact
          path="/dashboard"
          element={<Navigate replace to="/dashboard/home" />}
        />
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
