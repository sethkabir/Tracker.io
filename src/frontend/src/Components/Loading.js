import axios from "axios";

function Loading() {
  const queryParams = new URLSearchParams(window.location.search);

  const code = queryParams.get("code");
  const params = new URLSearchParams();
  params.append("client_id", "930069736736301067");
  params.append("client_secret", "qJ4oVdKFyRIWST7jm8WC2yyjgoADDnqV");
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://127.0.0.1:3000/auth/discord");

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  axios(
    {
      method: "post",
      url: "https://discord.com/api/v8/oauth2/token",
      data: params,
    },
    config
  )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

  axios({
    method: "get",
    url: "https://discord.com/api/v8/users/@me",
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

  //   useEffect(() => {
  //     let item = {
  //       client_id: "930069736736301067",
  //       client_secret: "qJ4oVdKFyRIWST7jm8WC2yyjgoADDnqV",
  //       grant_type: "authorization_code",
  //       code: code,
  //       redirect_uri: "http://127.0.0.1:3000/auth/discord",
  //     };

  //     const config = {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Accept: "application/json",
  //       },
  //     };

  //     axios(
  //       {
  //         method: "post",
  //         url: "https://discord.com/api/v8/oauth2/token",
  //         data: JSON.stringify(item),
  //       },
  //       config
  //     )
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   });
  return <div>Loading</div>;
}

export default Loading;
