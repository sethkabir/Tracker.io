import { UserCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function UserProfile() {
  return (
    //  {/* <!-- this is the profile pic template replace div with img tag --> */}
    <div className="h-44 w-44 rounded-full m-5">
      <UserCircleIcon />
    </div>
  );
}

function Profile() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <UserProfile />
      <UserInfo />
      <ChangePassword />
    </div>
  );
}

function UserInfo() {

  const [profile, setProfile] = useState(null);

  React.useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/user/1").then((response) => {
      setProfile(response.data);
    });
  }, []);

  if (!profile) return null;

  return (
    <div className="">
      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Username</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white">{profile.username}</div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Name</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white">{profile.first_name} </div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Email</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white">{profile.email}</div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Contact</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white">9872342395</div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Address</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white">#B-68 Anardana Chowk, Patiala, Punjab</div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Status</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white">Available</div>
      </span>
    </div>
  );
}

function ChangePassword() {
  return (
    <div className=" flex place-content-end ">
      <button className="rounded-lg mr-8">Change Password</button>
    </div>
  );
}



export default Profile;
