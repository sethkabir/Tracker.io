import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <div className="flex place-content-between p-2 z-30 bg-white">
      <div className="font-bold text-3xl">TrackerApp</div>
      <button>
        <MenuIcon className="h-8 w-8" />
      </button>
    </div>
  );
}

function UserProfile() {
  return (
    //  {/* <!-- this is the profile pic template replace div with img tag --> */}
    <div className="h-44 w-44 rounded-full m-5">
      <UserCircleIcon />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="">
      <span className="mx-8 mb-2  flex flex-col place-content-start space-y-1">
        <div>Name</div>
        <input type="text" className="rounded-lg h-9 bg-slate-700" />
      </span>

      <span className="mx-8 mb-2  flex flex-col place-content-start space-y-1">
        <div>Email</div>
        <input type="text" className="rounded-lg h-9 bg-slate-700" />
      </span>

      <span className="mx-8 mb-2  flex flex-col place-content-start space-y-1">
        <div>Contact</div>
        <input type="text" className="rounded-lg h-9 bg-slate-700" />
      </span>

      <span className="mx-8 mb-2  flex flex-col place-content-start space-y-1">
        <div>Address</div>
        <input type="text" className="rounded-lg h-9 bg-slate-700" />
      </span>

      <span className="mx-8 mb-2  flex flex-col place-content-start space-y-1">
        <div>Status</div>
        <input type="text" className="rounded-lg h-9 bg-slate-700" />
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

export default Profile;
