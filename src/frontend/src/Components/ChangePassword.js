const ChangePassword = () => {
  return (
    <div>
      <div className=" flex flex-col place-items-center space-y-5 mt-20 ">
        <div className="bg-stone-200 sm:w-1/3 space-y-2 rounded-lg p-5">
          <div className="flex flex-col">
            <div>Current Password:</div>
            <input className="rounded-lg px-2" type="password" />
          </div>
          <div className="flex flex-col">
            <div>New Password:</div>
            <input className="rounded-lg px-2" type="password" />
          </div>
          <div className="flex flex-col">
            <div>New Password Again:</div>
            <input className="rounded-lg px-2" type="password" />
          </div>
        </div>
        <button className="rounded-lg bg-blue-600 p-1 text-white w-44">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
