import {
  MenuIcon,
  LocationMarkerIcon,
  MapIcon,
  UserCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex place-content-between m-2">
      <div className="font-bold text-3xl">TrackerApp</div>
      <button onClick={() => setIsOpen(!isOpen)} className="">
        <MenuIcon className="h-8 w-8" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-300 focus:outline-none">
          <div className="py-1">
            <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
              <LocationMarkerIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
              New Trip
            </div>
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
            <div className="group flex itme px-4 py-2 text-sm text-black hover:bg-blue-400 hover:text-white">
              <UserCircleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
              Change Profile
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
