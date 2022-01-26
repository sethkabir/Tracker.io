//loading screen post discord authorization
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Loading = () => {
  //extract the current url
  const queryParams = new URLSearchParams(window.location.search);

  //append the url to make a post request to discord
  const code = queryParams.get("code");
  const params = new URLSearchParams();
  params.append("client_id", "930069736736301067");
  params.append("client_secret", "qJ4oVdKFyRIWST7jm8WC2yyjgoADDnqV");
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://127.0.0.1:8080/auth/discord");
  params.append("scope", "identify");

  //POST REQUEST (to obtain the access token)
  const [access_token, setAccsessToken] = useState(null);
  // const [response, setResponse] = useState(null);
  // GET REQUEST (to send the obtained token back to discord for authentication)

  useEffect(() => {
    axios
      .post("https://discord.com/api/v8/oauth2/token", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setAccsessToken(res.data.access_token);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [useLocation().pathname]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://discord.com/api/v8/users/@me", {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      })
      .then((data) => {
        navigate("/dashboard/home");  
      });
  }, [access_token]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-primary opacity-75 flex flex-col items-center justify-center">
      <h2 className="flex animate-pulse">
        <div className="text-center text-white text-xl font-semibold ">
          Loading
        </div>
        <div className="loader ease-linear rounded-full border-3 border-t-4 border-gray-200 h-1 w-1 ml-1 mb-2  place-self-end"></div>
        <div className="loader ease-linear rounded-full border-3 border-t-4 border-gray-200 h-1 w-1 ml-1 mb-2  place-self-end"></div>
        <div className="loader ease-linear rounded-full border-3 border-t-4 border-gray-200 h-1 w-1 ml-1 mb-2  place-self-end"></div>
      </h2>
      <p className="text-center text-white">
        This may take a few seconds, please don't close this page.
      </p>
    </div>
  );
};

export default Loading;
