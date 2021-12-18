function Home() {
  return (
    <div>
      <div className="flex place-content-between m-2">
        <div className="font-bold text-3xl">Trackerapp</div>
        <button>|||</button>
      </div>
      <div className="flex flex-col">
        <div className="flex place-content-around mt-11">
          <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg">New Trip</button>
          <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg">Join Existing Trip</button>
        </div>
        <div className="flex place-content-around mt-11">
          <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg">Emergency Contact</button>
          <button className="bg-blue-300 hover:bg-blue-500 hover:text-white h-36 w-36 rounded-md text-lg">User Profile</button>
        </div>
        <div className="flex place-content-around mt-11">
            <div className="bg-blue-300 w-80 rounded-md h-80 p-2">Statistics</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
