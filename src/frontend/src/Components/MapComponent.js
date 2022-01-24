import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";

//this is to resolve the web error which happens due to mapbox integration when using npm run build!
// added the following 6 lines.
import mapboxgl from "mapbox-gl";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;


const MapComponent = () => {
  
  //the following code obtains the current location for the user at regular intervals of time and updates them

  //mapbox documentation!
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    // Important! Always set the container height explicitly
    <div className="flex absolute w-screen h-screen">
      <ReactMapGL
        mapStyle="mapbox://styles/enigmo42/cky6tv38lf92p14quavwrz9l4"
        mapboxApiAccessToken="pk.eyJ1IjoiZW5pZ21vNDIiLCJhIjoiY2t5NnRxeDdwMHo0czJ4b244dzcxN21rdCJ9.L6vD5im_03cWtFc6b7HZYg"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
    </div>
  );
}

export default MapComponent;
