import {
  MenuIcon,
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";

import { Link } from "react-router-dom";

function SideDrawer() {
  return (
    <div className="hidden sm:bg-red-200 sm:grow sm:h-screen sm:block ">
      Side Drawer
    </div>
  );
}

function Heading() {
  return (
    <div className="flex place-content-between m-2">
      <div className="font-bold text-3xl">TrackerApp</div>
      <button className="sm:hidden">
        <MenuIcon className="h-8 w-8" />
      </button>
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
        <Link to="/mapPage">
          <div className="bg-blue-300 hover:bg-blue-500 h-44 m-5 rounded-2xl p-5 hover:text-white flex flex-col relative">
            <div className="text-xl">New Trip</div>
            <LocationMarkerIcon className="h-14 w-14 absolute place-self-end mt-20 " />
          </div>
        </Link>
        <div className="bg-blue-300 hover:bg-blue-500 h-44 m-5  rounded-2xl p-5 hover:text-white flex flex-col relative">
          <div className="text-xl">Join Existing trip</div>
          <MapIcon className="h-14 w-14 absolute place-self-end mt-20 " />
        </div>
        <div className="bg-blue-300 hover:bg-blue-500 h-44 m-5 rounded-2xl p-5 hover:text-white flex flex-col relative">
          <div className="text-xl">Emergency Contact</div>
          <ExclamationCircleIcon className="h-14 w-14 absolute place-self-end mt-20 " />
        </div>
        <Link to="/profile">
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
      <Heading />
      <Buttons />
      <Friends />
    </div>
  );
}

function Home() {
  return (
    <div className="flex">
      <SideDrawer />
      <MainPage />
    </div>
  );
}

export default Home;
