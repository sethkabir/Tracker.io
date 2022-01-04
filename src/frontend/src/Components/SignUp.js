import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();

  async function signUp() {
    let item = { firstName, lastName, username, password, emailId };
    console.log(item);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8080/api/auth/signup",
      data: item,
    })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard/home");
      })
      .catch((error) => {
        console.log(error.response);
      });
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

export default SignUp;
