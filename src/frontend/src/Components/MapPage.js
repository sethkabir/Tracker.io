import Navbar from './Navbar';
import MapComponent from './MapComponent';
import { useState, useEffect } from 'react';
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

// const TextButtons = () => {
//   return (
//     <div className="m-1 p-1 flex place-content-center z-10">
//       <div className="flex overflow-x-scroll space-x-5 px-5 w-96 max-w-xl grow ">
//         <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-green-500 p-9">Hello</div>
//         <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-green-500 p-9">Start</div>
//         <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-blue-500 p-9">Faster</div>
//         <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-red-500 p-9">Slower</div>
//         <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-red-500 p-9">Stop</div>
//         <div className="flex-shrink-0 rounded-3xl h-24 w-24 bg-yellow-500 p-9">Follow me</div>
//       </div>
//     </div>
//   );
// }


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
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [color, setColor] = useState('rgb(254 226 226)')
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (message) {
      socket.emit("chat", { message, color })
      setMessage("")
    }
  }, [message])
  // const sendChat = (e) => {
  //     e.preventDefault()
  //     socket.emit("chat", {message})
  //     setMessage("")
  // }

  useEffect(() => {
    if (message) {
      socket.on("chat", (payload) => {
        setChat([...chat, payload])
      })
      if (chat) {
        setIsOpen(true);
      }

    }
  }, [message])
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="h-full flex-col-reverse flex">
        <div className="m-1 p-1 flex flex-col place-items-center z-10">

          <div className='sm:w-1/3 w-96 h-20 max-h-20 absolute bottom-36 rounded-lg p-2 overflow-auto space-y-2 flex flex-col-reverse justify-end animate-pulse'>
            {isOpen ? <button onClick={() => { setChat([]); setIsOpen(false) }} className='h-5 w-5 bg-slate-200 rounded-full absolute'>x</button> : <div></div>}
            {chat.map((payload, index) => {
              return (
                <div className='flex rounded-lg h-full place-content-center text-4xl py-3' style={{ backgroundColor: `${payload.color}` }} key={index}>{payload.message}</div>
              )
            })}
          </div>
          <div className="flex overflow-x-scroll space-x-5 px-5 sm:w-1/3 w-96 max-w-xl grow ">
            <button onClick={() => { setMessage("Hello"); setColor("rgb(190 242 100)") }} className="flex-shrink-0 rounded-3xl h-24 w-24 bg-lime-300 ">Hello</button>
            <button onClick={() => { setMessage("Start"); setColor("rgb(34 197 94)") }} className="flex-shrink-0 rounded-3xl h-24 w-24 bg-green-500 ">Start</button>
            <button onClick={() => { setMessage("Stop"); setColor("rgb(220 38 38)") }} className="flex-shrink-0 rounded-3xl h-24 w-24 bg-red-600 ">Stop</button>
            <button onClick={() => { setMessage("Slower"); setColor("rgb(239 68 68)") }} className="flex-shrink-0 rounded-3xl h-24 w-24 bg-red-500">Slower</button>
            <button onClick={() => { setMessage("Faster"); setColor("rgb(14 165 233)") }} className="flex-shrink-0 rounded-3xl h-24 w-24 bg-sky-500 ">Faster</button>
            <button onClick={() => { setMessage("Follow Me"); setColor("rgb(252 211 77)") }} className="flex-shrink-0 rounded-3xl h-24 w-24 bg-amber-300 ">Follow me</button>
          </div>
        </div>
        <MapComponent />
      </div>
    </div>
  );
}

export default MapPage;
