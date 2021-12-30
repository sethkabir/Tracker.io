import logo from "../Images/p3.jpg";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";


// The image present in the left side
function Image() {
  return (
    <div className="flex flex-grow place-content-center h-full max-w-4xl bg-blue-200">
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
            <Link to="/signup">
              <div> Register using email id</div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// This component is the signup using email registeration
function SignUp() {



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");

  async function signUp() {
    let item = {firstName, lastName, username, password, emailId}
    console.log(item)


    let result = await fetch("http://127.0.0.1:8080/api/auth/signup", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      }
    })
    result = await result.json()
    console.log("result", result)


  }

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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Account Username"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          placeholder="Email Id"
          type="text"
        />
        <button
          onClick={signUp}
          className="bg-blue-200 hover:bg-blue-600 hover:text-white w-20 h-10 rounded-md"
        >
          Sign Up
        </button>
      </div>
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
