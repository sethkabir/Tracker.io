import { useEffect, useState, useMemo, useRef } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  FlyToInterpolator,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationMarkerIcon, PlusCircleIcon, MapIcon } from "@heroicons/react/solid";

//this is to resolve the web error which happens due to mapbox integration when using npm run build!
// added the following 6 lines.
import mapboxgl from "mapbox-gl";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const geolocateControlStyle = {
  right: 10,
  top: 20,
};
const MapComponent = () => {
  const [files, setFiles] = useState(null);
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
  };
  useEffect(() => {
    if (files) {
      const pp = JSON.parse(files);
      setData(pp);
    }
  }, [files]);

  const markers = useMemo(
    () =>
      data.map((city) => (
        <Marker
          key={city.name}
          longitude={city.longitude}
          latitude={city.latitude}
        >
          <LocationMarkerIcon className="fill-blue-500 h-10 w-10" />
        </Marker>
      )),
    [data]
  );

  //mapbox documentation!
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    // Important! Always set the container height explicitly
    <div className="flex absolute w-screen h-screen">
      <div className="h-10 z-30 absolute flex mt-4 ml-2">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleChange}
          className="hidden"
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click();
          }}
          className=""
        >
          <MapIcon className="h-10 w-10 hover:rotate-90 transition-all duration-300 fill-black" />
        </button>
      </div>

      <ReactMapGL
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/enigmo42/cky6tv38lf92p14quavwrz9l4"
        mapboxApiAccessToken="pk.eyJ1IjoiZW5pZ21vNDIiLCJhIjoiY2t5NnRxeDdwMHo0czJ4b244dzcxN21rdCJ9.L6vD5im_03cWtFc6b7HZYg"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        transitionDuration={500}
        transitionInterpolator={new FlyToInterpolator()}
      >
        {markers}
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
      </ReactMapGL>
    </div>
  );
};

export default MapComponent;
