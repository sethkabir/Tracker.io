import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import UserProfilePic from "./UserProfilePic";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/solid";
import { Outlet } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div>
      <div className=" flex justify-between mt-3">
        <button className="rounded-lg ml-14 bg-blue-200 hover:bg-blue-600 h-12 px-3">
          <Link to="/dashboard/profile/updateProfile">
            <PencilIcon className="h-8 w-8" />
          </Link>
        </button>
        <button className="rounded-lg mr-10 bg-blue-200 hover:bg-blue-600 hover:text-white px-5 h-12 ">
          <Link to="/auth/change-password">Change Password</Link>
        </button>
      </div>
    </div>
  );
};

const UserInfo = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/user").then((response) => {
      setProfile(response.data);
    });
  }, []);

  //never trust react because u cant do beautiful things with it  - shivi, 2022
  if (!profile)
    return (
      <div>
        <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
          <div>Username</div>
          <div className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-3">
            something
          </div>
        </span>
        <ChangePassword />
      </div>
    );

  return (
    <div className="">
      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Username</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-2">
          {profile.username}
        </div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Name</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-2">
          {profile.first_name} {profile.last_name}
        </div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Email</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-2">
          {profile.email}
        </div>
      </span>

      <div className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Contact</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-2">
          {profile.profile.contact ? (
            profile.profile.contact
          ) : (
            <div className="text-slate-400">Add Contact</div>
          )}
        </div>
      </div>

      <div className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Address</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1 pl-2">
          {profile.profile.address ? (
            profile.profile.address
          ) : (
            <div className="text-slate-400">Add Address</div>
          )}
        </div>
      </div>
      <ChangePassword />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <UserProfilePic />
      <Outlet />
    </div>
  );
};

export { Profile, UserInfo };
