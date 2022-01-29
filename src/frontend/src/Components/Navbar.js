import {
  MenuIcon,
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {
  //resolves the csrf token issue!
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  const navigate = useNavigate();
  let anon = {
    username: "Guest",
    first_name: "Anonymous",
    last_name: "User",
  }
  const [profile, setProfile] = useState(anon);
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/user").then((response) => {
      setProfile(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);


  //POST request (logout)
  async function logout() {
    let item = {};
    console.log(item);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8080/api/auth/logout",
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

  //state for when the dropdown menu is open/closed
  const [isOpen, setIsOpen] = useState(false);

  if(!profile) return null

  return (
    <div className="flex place-content-between m-2 z-30">
      <Link to="/dashboard/home">
        <div className="font-bold text-3xl">TrackerApp</div>
      </Link>
      <div className="flex">
        <div className="text-sm w-24  my-auto flex justify-end sm:w-full sm:mr-2">
          <p className="truncate">{profile.username}</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <MenuIcon className="h-8 w-8 mx-1" />
        </button>
      </div>
      {/* dropdown functionality */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-300 focus:outline-none">
          <div className="py-1">
            <Link to="/dashboard/home">
              <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
                <HomeIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
                Home
              </div>
            </Link>
          </div>

          <div className="py-1">
            <Link to="/dashboard/mapPage">
              <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
                <LocationMarkerIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
                New Trip
              </div>
            </Link>
          </div>
          <div className="py-1">
            <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
              <MapIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
              Join Existing Trip
            </div>
          </div>
          <div className="py-1">
          <Link to="/dashboard/emergencyContact">
            <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
              <ExclamationCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
              Emergency Contact
            </div>
            </Link>
          </div>
          <div className="py-1">
            <Link to="/dashboard/profile/showProfile">
              <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
                <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
                Change Profile
              </div>
            </Link>
          </div>
          <div className="py-1">
            <button
              onClick={logout}
              className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white w-full"
            >
              <LogoutIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
