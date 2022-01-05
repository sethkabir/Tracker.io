import { Link } from "react-router-dom";
import mapLogo from "../Images/p3.jpg";

function Login() {
  return (
    <div className="flex flex-grow flex-col ">
        <img
          className="bg-local absolute h-full object-cover sm:hidden opacity-70"
          src={mapLogo}
          alt="true"
        />
      <div className="flex text-5xl mx-auto sm:mt-40 mt-20 italic z-10">Tracker</div>
      <div className="flex text-lg  mx-auto mt-5 mb-20 z-10">
        Stay in touch with your friends on the go!
      </div>
      <div className="divide-y sm:mx-36 z-10">
        <div className=" flex flex-col space-y-8 mb-10 mx-2">
          <input
            className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
            placeholder="Username"
            type="text"
          />
          <input
            className="block h-10 border border-gray-300 rounded-md focus:border-blue-500 outline-none  tracking-widest p-2"
            placeholder="Password"
            type="password"
          />
          <span className="flex place-items-center justify-between">
            <button className="bg-blue-200 hover:bg-blue-600 hover:text-white w-20 h-10 rounded-md">
              Login
            </button>
            <button className="place-content-center">Forgot Password?</button>
          </span>
        </div>
        <div className="flex flex-col space-y-8 mx-2">
          <button className="  bg-blue-200 hover:bg-blue-500 hover:text-white mt-20 rounded-lg h-10 lg:w-96 lg:mx-auto">
            Log in with Google
          </button>
          <button className=" bg-blue-200 hover:bg-blue-500 hover:text-white mt-20 rounded-lg h-10 lg:w-96 lg:mx-auto">
            Log in with LinkdIn
          </button>

          <button className=" bg-blue-200 hover:bg-blue-500 hover:text-white mt-20 rounded-lg h-10 lg:w-96 lg:mx-auto">
            <Link to="/auth/signup">
              <div> Register using email id</div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
