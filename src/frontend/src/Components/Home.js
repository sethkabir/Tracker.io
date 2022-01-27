import {
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  return (
    <div className="hidden sm:bg-blue-200 sm:grow sm:h-screen sm:block ">
      Side Drawer
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="grow grid grid-cols-1">
      <div className="bg-blue-300 rounded-2xl m-5 h-80 sm:h-auto p-5">
        <div>Statistics</div>
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex flex-col sm:flex-row h-full basis-1/3">
      <div className="grow grid grid-cols-2  md:max-w-md">
        <Link to="/dashboard/mapPage">
          <div className="bg-green-300 transition-all duration-300 hover:scale-110 hover:bg-green-500 h-36 sm:h-44 m-5 rounded-3xl p-5 hover:text-white flex flex-col relative">
            <div className="text-lg sm:text-xl">New Trip</div>
            <LocationMarkerIcon className="sm:h-14 sm:w-14 h-12 w-12 absolute place-self-end mt-16 sm:mt-20  " />
          </div>
        </Link>
        <div className="bg-orange-300 transition-all duration-300 hover:scale-110 hover:bg-orange-500 h-36 sm:h-44 m-5  rounded-3xl p-5 hover:text-white flex flex-col relative">
          <div className="text-lg sm:text-xl">Join Existing trip</div>
          <MapIcon className="sm:h-14 sm:w-14 h-12 w-12 absolute place-self-end mt-16 sm:mt-20  " />
        </div>
        <Link to="/dashboard/emergencyContact">
          <div className="bg-red-300 transition-all duration-300 hover:scale-110 hover:bg-red-500 h-36 sm:h-44 m-5 rounded-3xl p-5 hover:text-white flex flex-col relative">
            <div className="text-lg sm:text-xl">Emergency Contact</div>
            <ExclamationCircleIcon className="sm:h-14 sm:w-14 h-12 w-12 absolute place-self-end mt-16 sm:mt-20  " />
          </div>
        </Link>
        <Link to="/dashboard/profile/showProfile">
          <div className="bg-blue-300 transition-all duration-300 hover:scale-110 hover:bg-blue-500 h-36 sm:h-44 m-5 rounded-3xl p-5 hover:text-white flex flex-col relative">
            <div className="text-lg sm:text-xl">Profile</div>
            <UserCircleIcon className="sm:h-14 sm:w-14 h-12 w-12 absolute place-self-end mt-16 sm:mt-20  " />
          </div>
        </Link>
      </div>
      <Statistics />
    </div>
  );
};

const Friends = () => {
  return (
    <div className="flex flex-col sm:flex-row h-full ">
      <div className="grow grid grid-cols-1">
        <div className="bg-blue-300 h-44 m-5 rounded-2xl sm:h-auto sm:max-h-96 overflow-auto p-5">
          <div>Friends</div>
        </div>
      </div>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="grow basis-5/6 flex flex-col sm:h-screen overflow-auto ">
      <Navbar />
      <Buttons />
      <Friends />
    </div>
  );
};

//renders the sidedrawer + mainpage
const Home = () => {
  return (
    <div className="flex absolute z-0 sm:relative">
      {/* <SideDrawer /> */}
      <MainPage />
    </div>
  );
};

export default Home;
