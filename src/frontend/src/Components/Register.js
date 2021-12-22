import logo from "../Images/p3.jpg";

// The image present in the left side
function Image() {
  return (
    <div className="flex flex-grow place-content-center h-screen max-w-4xl bg-blue-200">
      <img alt="img" src={logo} />
    </div>
  );
}

// The login componenet input fields
function Login() {
  return (
    <div className="flex flex-grow flex-col mx-2">
      <div className="flex text-5xl mx-auto sm:mt-40 mt-20  italic  ">
        Tracker
      </div>
      <div className="flex text-lg  mx-auto mt-5 mb-20">
        Stay in touch with your friends on the go!
      </div>
      <div className="divide-y sm:mx-36">
        <div className=" flex flex-col space-y-8 mb-10">
          <input
            className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
            placeholder="Username"
            type="text"
          />
          <input
            className="block h-10 border border-gray-300 rounded-md focus:border-blue-500 outline-none  tracking-widest"
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
        <div className="flex flex-col space-y-8">
          <button className="  bg-blue-200 hover:bg-blue-500 hover:text-white mt-20 rounded-lg h-10 lg:w-96 lg:mx-auto">
            Log in with Google
          </button>
          <button className=" bg-blue-200 hover:bg-blue-500 hover:text-white mt-20 rounded-lg h-10 lg:w-96 lg:mx-auto">
            Log in with LinkdIn
          </button>
          <button className=" bg-blue-200 hover:bg-blue-500 hover:text-white mt-20 rounded-lg h-10 lg:w-96 lg:mx-auto">
            Register using email id
          </button>
        </div>
      </div>
    </div>
  );
}

// This component is the signup using email registeration
function SignUp() {
  return (
    <div className="flex flex-grow flex-col mx-2">
      <div className="flex text-5xl mx-auto sm:mt-35 mt-20  italic">
        Tracker
      </div>
      <div className="flex text-lg  mx-auto mt-5 mb-20">
        Stay in touch with your friends on the go!
      </div>
      <div className=" flex flex-col space-y-8 mb-10 sm:mx-36">
        <div className="text-blue-400">Sign In form</div>
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          placeholder="Email Id"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          placeholder="Password"
          type="password"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          placeholder="Account Username"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          placeholder="Contact"
          type="text"
        />
        <button className="bg-blue-200 hover:bg-blue-600 hover:text-white w-20 h-10 rounded-md">
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
      {/* <SignUp /> */}
      <Login />
    </div>
  );
}

export default Register;
