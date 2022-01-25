import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import UserProfilePic from "./UserProfilePic";
import { Link } from "react-router-dom";

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

      <span className=  "mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Name</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          {profile.first_name}{" "}{profile.last_name}
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
        {profile.profile.contact}
        </div>
      </div>

      <div className="mx-8 mb-2 p-2 flex flex-col place-content-start space-y-1">
        <div>Address</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
        {profile.profile.address}
        </div>
      </div>

      {/* <div className="mx-8 mb-2 p-2 flex flex-col content-center space-y-1">
        <div>Status</div>
        <div className="rounded-lg h-9 bg-slate-700 text-white p-1">
          <div>Available</div>
        </div>
      </div> */}
    </div>
  );
};

const ChangePassword = () => {
  return (
    <div>
      <div className=" flex place-content-end">
        <button className="rounded-lg mr-8 bg-blue-600 p-1 text-white">
          <Link to="/auth/change-password">Change Password</Link>
        </button>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <UserProfilePic />
      <UserInfo />
      <ChangePassword />
    </div>
  );
};

export default Profile;
