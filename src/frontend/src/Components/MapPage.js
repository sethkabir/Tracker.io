import Navbar from './Navbar';
import MapComponent from './MapComponent';


function TextButtons() {
  return ( 
    <div className="m-1 p-1 flex place-content-center z-10">
      <div className="flex overflow-x-scroll space-x-5 px-5 w-96 max-w-xl grow ">
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500 p-9">02</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500 p-9">03</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500 p-9">04</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500 p-9">05</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500 p-9">06</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500 p-9">07</div>
      </div>
    </div>
  );
}


function EmergencyButtons() {
  return (
    <div className="m-2 flex flex-col space-y-3 w-14 z-10 h-full place-content-center">
        <div className="rounded-full bg-red-500 h-12 w-12 p-3">08</div>
        <div className="rounded-full bg-yellow-500 h-12 w-12 p-3">09</div>
        <div className="rounded-full bg-green-500 h-12 w-12 p-3">10</div>
    </div>
  );
}

// function MapComponent() {
//   return <div className="flex bg-blue-300 absolute h-full w-screen"><img className='object-fill' src={mapLogo} alt="true"/></div>;
// }


function MapPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className="h-full flex-col-reverse flex">
        <TextButtons />
        <EmergencyButtons />
        <MapComponent />
      </div>
    </div>
  );
}

export default MapPage;
