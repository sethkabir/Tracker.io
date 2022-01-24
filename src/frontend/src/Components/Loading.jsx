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
  return <div>Loading</div>;
};

export default Loading;
