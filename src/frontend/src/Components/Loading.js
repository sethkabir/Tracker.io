//loading screen post discord authorization
import axios from "axios";

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
  params.append("redirect_uri", "http://127.0.0.1:3000/auth/discord");

  //custom header (provided by discord documenation)
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  //POST REQUEST (to obtain the access token)
  let token;
  axios(
    {
      method: "post",
      url: "https://discord.com/api/v8/oauth2/token",
      data: params,
    },
    config
  )
    .then((res) => {
      console.log(res.data.access_token);
      token = res.data.access_token;
    })
    .catch((err) => {
      console.error(err);
    });

  const getconfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //GET REQUEST (to send the obtained token back to discord for authentication)
  axios(
    {
      method: "get",
      url: "https://discord.com/api/v8/users/@me",
    },
    getconfig
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });

  //main screen (maybe add landing page??????)
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-primary opacity-75 flex flex-col items-center justify-center">
      <h2 className="flex animate-pulse">
        <div className="text-center text-white text-xl font-semibold ">Loading</div>
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
