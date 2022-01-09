import {
  MenuIcon,
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex place-content-between m-2 z-30 ">
      <div className="font-bold text-3xl">TrackerApp</div>
      <button onClick={() => setIsOpen(!isOpen)} className="">
        <MenuIcon className="h-8 w-8" />
      </button>

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
            <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
              <ExclamationCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
              Emergency Contact
            </div>
          </div>
          <div className="py-1">
            <Link to="/dashboard/profile">
              <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
                <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
                Change Profile
              </div>
            </Link>
          </div>
          <div className="py-1">
            <button onClick={logout} className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
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
