// The main navabr/heading
function Navbar() {
  return (
    <div className="flex place-content-between m-2 ">
      <div className="font-bold text-3xl">TrackerApp</div>
      <button className="sm:hidden">|||</button>
    </div>
  );
}

//The Sidedrawer visible in laptop/desktop mode
function SideDrawer() {
  return (
    <div className="hidden sm:block sm:bg-slate-400 h-screen col-span-1"></div>
  );
}


function Buttons() {
  return (
    <div className="flex flex-col max-w-md sm:mx-44">
      <div className="flex place-content-around mt-11">
        <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg sm:h-44 sm:w-44">
          New Trip
        </button>
        <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg sm:h-44 sm:w-44">
          Join Existing Trip
        </button>
      </div>

      <div className="flex place-content-around mt-11">
        <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg sm:h-44 sm:w-44">
          Emergency Contact
        </button>
        <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg sm:h-44 sm:w-44">
          User Profile
        </button>
      </div>
      <div className="flex place-content-around mt-11">
        <div className="bg-blue-300  rounded-md h-80 w-80 p-2 sm:h-96 sm:w-96">
          Statistics
        </div>
      </div>
    </div>
  );
}

function Friends() {
  return (
    <div className="hidden  md:bg-red-200 md:w-full md:my-11 md:rounded-md md:mx-2 md:inline-block md:max-h-full ">
      hello
    </div>
  );
}

//Main export function
function Home() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <SideDrawer />
        <div className="col-span-12 sm:col-span-11 h-screen">
          <Navbar />
          <div className="block">
            <div className="flex flex-col sm:flex-row">
              <Buttons />
              <Friends />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
