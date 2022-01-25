import Navbar from './Navbar';
import MapComponent from './MapComponent';

const TextButtons = () => {
  return ( 
    <div className="m-1 p-1 flex place-content-center z-10">
      <div className="flex overflow-x-scroll space-x-5 px-5 w-96 max-w-xl grow ">
        <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-green-500 p-9">Hello</div>
        <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-green-500 p-9">Start</div>
        <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-blue-500 p-9">Faster</div>
        <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-red-500 p-9">Slower</div>
        <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-red-500 p-9">Stop</div>
        <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-yellow-500 p-9">Follow me</div>
      </div>
    </div>
  );
}


const EmergencyButtons = () => {
  return (
    <div className="m-2 flex flex-col space-y-3 w-14 z-10 h-full place-content-center">
        <div className="rounded-full bg-red-500 h-12 w-12 p-3">B01</div>
        <div className="rounded-full bg-yellow-500 h-12 w-12 p-3">B02</div>
        <div className="rounded-full bg-green-500 h-12 w-12 p-3">B03</div>
    </div>
  );
}

// const MapComponent = () => {
//   return <div className="flex bg-blue-300 absolute h-full w-screen"><img className='object-fill' src={mapLogo} alt="true"/></div>;
// }


const MapPage = () => {
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
