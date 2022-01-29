import { Link, useNavigate } from "react-router-dom";
import mapLogo from "../Images/p3.jpg";
import axios from "axios";
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/solid";


//redirect url to discord authentication
let url8080 = "https://discord.com/api/oauth2/authorize?client_id=930069736736301067&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fauth%2Fdiscord&response_type=code&scope=identify%20email";
let url3000 = "https://discord.com/api/oauth2/authorize?client_id=930069736736301067&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fauth%2Fdiscord&response_type=code&scope=identify%20email";
const external_url = (window.location.port === "3000") ? url3000 : url8080;

const Login = () => {
  //resolves the csrf token issue!
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  //show password functionality
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //POST request (manual login)
  async function login() {
    const login_type = "default";
    let item = { username, password, login_type};
    console.log(item);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8080/api/auth/login",
      data: item,
    })
      .then((res) => {
        let data = res.data.id;
        if (data) {
          navigate("/dashboard/home");
        } else {
          alert("Invalid Username or password!");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }


  return (
    <div className="flex flex-grow flex-col ">
      <img
        className="bg-local absolute h-full object-cover sm:hidden opacity-70"
        src={mapLogo}
        alt="true"
      />
      <div className="flex text-5xl mx-auto sm:mt-40 mt-20 italic z-10">
        Bike Buddy
      </div>
      <div className="flex text-lg  mx-auto mt-5 mb-20 z-10">
        Stay in touch with your friends on the go!
      </div>
      <div className="divide-y sm:mx-36 z-10">
        <div className=" flex flex-col space-y-8 mb-10 mx-2">
          <input
            className="block h-10 border border-gray-300 rounded-md focus:border-blue-500  outline-none tracking-widest p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          />
          <div className="flex">
            <input
              className="block h-10 w-full border border-gray-300 rounded-md focus:border-blue-500 outline-none  tracking-widest p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="-mx-10"
            >
              <EyeIcon className="h-6" />
            </button>
          </div>
          <span className="flex place-items-center justify-between">
            <button
              onClick={login}
              className="bg-blue-200 hover:bg-blue-600 hover:text-white w-20 h-10 rounded-md"
            >
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
            <a href={external_url}>Continue with Discord</a>
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
};

export default Login;
