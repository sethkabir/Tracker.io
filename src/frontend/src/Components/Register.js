import logo from "../Images/p3.jpg";
import { Outlet } from "react-router-dom";

// The image present in the left side
const Image = () => {
  return (
    <div className="hidden sm:flex sm:flex-grow sm:place-content-center sm:h-full sm:max-w-5xl sm:bg-blue-200">
      <img alt="img" src={logo} />
    </div>
  );
}

//Actual exported component
const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row sm:place-content-evenly h-screen">
      <Image />
      <Outlet />
    </div>
  );
}

export default Register;
