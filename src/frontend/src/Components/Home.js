import {
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function SideDrawer() {
  return (
    <div className="hidden sm:bg-blue-200 sm:grow sm:h-screen sm:block ">
      Side Drawer
    </div>
  );
}

function Statistics() {
  return (
    <div className="grow grid grid-cols-1">
      <div className="bg-blue-300 rounded-2xl m-5 h-80 sm:h-auto p-5">
        <div>Statistics</div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex flex-col sm:flex-row h-full basis-1/3">
      <div className="grow grid grid-cols-2  md:max-w-md">
        <Link to="/dashboard/mapPage">
          <div className="bg-green-300 hover:bg-green-500 h-44 m-5 rounded-2xl p-5 hover:text-white flex flex-col relative">
            <div className="text-xl">New Trip</div>
            <LocationMarkerIcon className="h-14 w-14 absolute place-self-end mt-20 " />
          </div>
        </Link>
        <div className="bg-orange-300 hover:bg-orange-500 h-44 m-5  rounded-2xl p-5 hover:text-white flex flex-col relative">
          <div className="text-xl">Join Existing trip</div>
          <MapIcon className="h-14 w-14 absolute place-self-end mt-20 " />
        </div>
        <div className="bg-red-300 hover:bg-red-500 h-44 m-5 rounded-2xl p-5 hover:text-white flex flex-col relative">
          <div className="text-xl">Emergency Contact</div>
          <ExclamationCircleIcon className="h-14 w-14 absolute place-self-end mt-20 " />
        </div>
        <Link to="/dashboard/profile">
          <div className="bg-blue-300 hover:bg-blue-500 h-44 m-5 rounded-2xl p-5 hover:text-white flex flex-col relative">
            <div className="text-xl">Profile</div>
            <UserCircleIcon className="h-14 w-14 absolute place-self-end mt-20 " />
          </div>
        </Link>
      </div>
      <Statistics />
    </div>
  );
}

function Friends() {
  return (
    <div className="flex flex-col sm:flex-row h-full ">
      <div className="grow grid grid-cols-1">
        <div className="bg-blue-300 h-44 m-5 rounded-2xl sm:h-auto sm:max-h-96 overflow-auto p-5">
          <div>Friends</div>
        </div>
      </div>
    </div>
  );
}

function MainPage() {
  return (
    <div className="grow basis-5/6 flex flex-col sm:h-screen overflow-auto ">
      <Navbar />
      <Buttons />
      <Friends />
    </div>
  );
}

function Home() {
  return (
    <div className="flex absolute z-0 sm:relative">
      <SideDrawer />
      <MainPage />
    </div>
  );
}

export default Home;
