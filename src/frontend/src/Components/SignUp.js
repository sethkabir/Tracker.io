import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import mapLogo from "../Images/p3.jpg";

const SignUp = () => {
  //resolves the csrf token issue!
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  //POST request (manual signup)
  async function signUp() {
    let item = { username, password, first_name, last_name, email };
    console.log(item);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8080/api/auth/signup",
      data: item,
    })
      .then((res) => {
        console.log(res.data);
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <div className="flex flex-grow flex-col">
      <img
        className="bg-local absolute h-full object-cover sm:hidden opacity-70"
        src={mapLogo}
        alt="true"
      />
      <div className="flex text-5xl mx-auto sm:mt-35 mt-20  italic z-10">
        Tracker
      </div>
      <div className="flex text-lg  mx-auto mt-5 mb-20 z-10">
        Stay in touch with your friends on the go!
      </div>
      <div className=" flex flex-col space-y-8 mb-10 sm:mx-36 z-10 mx-2">
        <div className="text-blue-400">Registration form</div>
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Account Username"
          type="text"
        />
        <input
          className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
};

export default SignUp;
