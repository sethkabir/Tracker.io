import {
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import {
  HeartIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import Navbar from "./Navbar";
import Info from "./Info";
import { Link } from "react-router-dom";

// const SideDrawer = () => {
//   return (
//     <div className="hidden sm:bg-blue-200 sm:grow sm:h-screen sm:block ">
//       Side Drawer
//     </div>
//   );
// };

const Statistics = () => {
  return (
    <div className="grow grid grid-cols-1">
      <div className="bg-blue-300 rounded-2xl m-5 h-80 sm:h-auto p-5">
        <div>Statistics</div>
        <div className="w-full shadow stats">
          <div className="stat">
            <div className="stat-figure text-primary">
            <LightningBoltIcon className="h-10 w-10"/>
            </div>
            <div className="stat-title">Total Distance Covered</div> 
            <div className="stat-value text-primary">25.6 Km</div> 
            <div className="stat-desc">21% more than last month</div>
          </div> 
          <div className="stat">
            <div className="stat-figure text-info">
              <HeartIcon className="h-10 w-10"/>
            </div> 
            <div className="stat-title">Calories Burned</div> 
            <div className="stat-value text-info">2400 Kcal</div> 
            <div className="stat-desc">21% more than last month</div>
          </div> 
          <div className="stat">
            <div className="stat-figure text-info">
              <div className="avatar online">
                {/* <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                  <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" className="mask mask-squircle"/>
                </div> */}
              </div>
            </div> 
            <div className="stat-value">86%</div> 
            <div className="stat-title">Trip Completion</div> 
            <div className="stat-desc text-info">2.3 Km remaining</div>
          </div>
        </div>
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
    <div>
      <div className="flex absolute z-0 sm:relative">
        {/* <SideDrawer /> */}
        <MainPage />
      </div>
      <Info />
    </div>
  );
};

export default Home;
