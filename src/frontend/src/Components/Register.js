import logo from "../Images/p3.jpg";
import { Outlet } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

// The image present in the left side
function Image() {
  return (
    <div className="flex flex-grow place-content-center h-full max-w-4xl bg-blue-200">
      <img alt="img" src={logo} />
    </div>
  );
}

//Actual exported component
function Register() {
  return (
    <div className="flex flex-col lg:flex-row sm:place-content-evenly h-screen">
      <Image />
      <Outlet />
    </div>
  );
}

export { Register, SignUp, Login };
