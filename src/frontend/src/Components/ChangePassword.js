import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/solid";

const ChangePassword = () => {
  //resolves the csrf token issue!
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  const navigate = useNavigate();

  //show password functionality
  const [showPassword, setShowPassword] = useState(false);

  //put request to change password
  const [cp, setCP] = useState(null);
  const [np1, setNP1] = useState(null);
  const [np2, setNP2] = useState(null);

  async function changePassword() {
    await axios
      .put("http://127.0.0.1:8080/api/auth/change-password", {
        current_password: `${cp}`,
        new_password1: `${np1}`,
        new_password2: `${np2}`,
      })
      .then((res) => {
        if (res) {
          navigate("/auth/login");
        } else {
          alert(res);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className=" flex flex-col place-items-center space-y-5 mt-20 ">
        <div className="bg-stone-200 sm:w-1/3 space-y-2 rounded-lg p-5">
          <div className="flex flex-col">
            <div>Current Password:</div>
            <div className="flex">
              <input
                onChange={(e) => setCP(e.target.value)}
                className="rounded-lg px-2 w-full"
                type={showPassword ? "text" : "password"}
              />
              <button onClick={() => setShowPassword(!showPassword)} className="mx-2">
                <EyeIcon className="h-6" />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div>New Password:</div>
            <input
              onChange={(e) => setNP1(e.target.value)}
              className="rounded-lg px-2"
              type="password"
            />
          </div>
          <div className="flex flex-col">
            <div>New Password Again:</div>
            <input
              onChange={(e) => setNP2(e.target.value)}
              className="rounded-lg px-2"
              type="password"
            />
          </div>
        </div>
        <button
          onClick={changePassword}
          className="rounded-lg bg-blue-600 p-1 text-white w-44"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
