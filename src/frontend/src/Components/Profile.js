import { UserCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

const UserProfile = () => {
  return (
    //  {/* <!-- this is the profile pic template replace div with img tag --> */}
    <div className="flex">
      <UserCircleIcon className="h-44 w-44 " />
      <PlusCircleIcon className="absolute h-10 w-10 place-self-end ml-36 ">
      </PlusCircleIcon>
    </div>
  );
}

const Profile = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <UserProfile />
      <UserInfo />
      <ChangePassword />
    </div>
  );
}

const UserInfo = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/user").then((response) => {
      setProfile(response.data);
    });
  }, []);

  if (!profile) return null;

  return (
    <div className="">
      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Username</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          {profile.username}
        </div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Name</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          {profile.first_name}{" "}
        </div>
      </span>

      <span className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Email</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          {profile.email}
        </div>
      </span>

      <div className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Contact</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          9872342395
        </div>
      </div>

      <div className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Address</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          #B-68 Anardana Chowk, Patiala, Punjab
        </div>
      </div>

      <div className="mx-8 mb-2 p-2 flex flex-col content-center space-y-1">
        <div>Status</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          <div>Available</div>
        </div>
      </div>
    </div>
  );
}

const ChangePassword = () => {
  return (
    <div className=" flex place-content-end">
      <button className="rounded-lg mr-8 bg-blue-600 p-1 text-white">Change Password</button>
    </div>
  );
}

export default Profile;
