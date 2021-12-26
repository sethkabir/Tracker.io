function Heading() {
  return (
    <div className="flex place-content-between p-2 z-30 bg-white">
      <div className="font-bold text-3xl">TrackerApp</div>
      <button className="">|||</button>
    </div>
  );
}

function TextButtons() {
  return (
    <div className="m-1 p-1 z-20 ">
      <div className="grid grid-cols-3 gap-5">
        <div className="rounded-xl h-24 bg-green-200">02</div>
        <div className="rounded-xl h-24 bg-green-200">03</div>
        <div className="rounded-xl h-24 bg-green-200">04</div>
        <div className="rounded-xl h-24 bg-green-200">05</div>
        <div className="rounded-xl h-24 bg-green-200">06</div>
        <div className="rounded-xl h-24 bg-green-200">07</div>
      </div>
    </div>
  );
}

function EmergencyButtons() {
  return (
    <div className="m-1 p-1 h-full flex items-center z-10">
      <div className="grid grid-cols-1 gap-5">
        <div className="rounded-full bg-green-200 h-12 w-12">08</div>
        <div className="rounded-full bg-green-200 h-12 w-12">09</div>
        <div className="rounded-full bg-green-200 h-12 w-12">10</div>
      </div>
    </div>
  );
}

function MapComponent() {
  return <div className="flex bg-blue-300 absolute h-full w-screen">video</div>;
}

function MapPage() {
  return (
    <div className="flex flex-col h-screen">
      <Heading />
      <div className="h-full flex-col-reverse flex">
        <TextButtons />
        <EmergencyButtons />
        <MapComponent />
      </div>
    </div>
  );
}

export default MapPage;
