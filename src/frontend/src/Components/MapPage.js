import Navbar from './Navbar';
import mapLogo from '../Images/map.jpg';

function TextButtons() {
  return (
    <div className="m-1 p-1 z-20 flex place-content-center">
      <div className="flex overflow-x-scroll space-x-5 px-5 w-96 max-w-xl grow">
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500">02</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500">03</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500">04</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500">05</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500">06</div>
        <div className="flex-shrink-0 rounded-xl h-24 w-24 bg-green-500">07</div>
      </div>
    </div>
  );
}

function EmergencyButtons() {
  return (
    <div className="m-1 p-1 h-full flex items-center z-10">
      <div className="grid grid-cols-1 gap-5">
        <div className="rounded-full bg-green-500 h-12 w-12">08</div>
        <div className="rounded-full bg-green-500 h-12 w-12">09</div>
        <div className="rounded-full bg-green-500 h-12 w-12">10</div>
      </div>
    </div>
  );
}

// function MapComponent() {
//   return <div className="flex bg-blue-300 absolute h-full w-screen"><img className='object-fill' src={mapLogo} alt="true"/></div>;
// }

function MapComponent() {
  return <img className='flex bg-blue-300 absolute h-full w-screen object-cover' src={mapLogo} alt="true"/>;
}

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
