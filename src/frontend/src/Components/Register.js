import logo from "../Images/biking.png";

// The image present in the left side
function Image() {
  return (
    <div className="flex flex-grow place-content-center h-screen">
      <img alt="img" src={logo}/>
    </div>
  );
}

// The login componenet input fields
function Login() {
  return (
    <div className="flex flex-grow flex-col ">
      <div className="flex text-5xl mx-auto m-20 italic ">Tracker App</div>
      <div className=" flex flex-col">
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-purple-500 mb-8 outline-none tracking-widest mx-2"
          placeholder="Username"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-purple-500 mb-8 outline-none  tracking-widest mx-2"
          placeholder="Password"
          type="password"
        />
        <button className="bg-blue-200 w-20 h-10 rounded-md">Login</button>
      </div>
    </div>
  );
}


//Actual exported component
function Register() {
  return (
    <div className="flex flex-col sm:flex-row sm:place-content-evenly">
      <Image />
      <Login />
    </div>
  );
}

export default Register;
