import logo from "../Images/p2.webp";

// The image present in the left side
function Image() {
  return (
    <div className="flex flex-grow place-content-center h-screen max-w-4xl">
      <img alt="img" src={logo} />
    </div>
  );
}

// The login componenet input fields
function Login() {
  return (
    <div className="flex flex-grow flex-col ">
      <div className="flex text-5xl mx-auto sm:mt-40 mt-20 mb-20 italic ">
        Tracker
      </div>
      <div className=" flex flex-col">
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500 mb-8 outline-none tracking-widest sm:mx-36"
          placeholder="Username"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500 mb-8 outline-none  tracking-widest sm:mx-36"
          placeholder="Password"
          type="password"
        />

        <button className="bg-blue-200 hover:bg-blue-600 hover:text-white w-20 h-10 rounded-md sm:mx-36">
          Login
        </button>
      </div>
    </div>
  );
}

//Actual exported component
function Register() {
  return (
    <div className="flex flex-col lg:flex-row sm:place-content-evenly">
      <Image />
      <Login />
    </div>
  );
}

export default Register;
