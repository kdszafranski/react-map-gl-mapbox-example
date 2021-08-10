import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2RzemFmcmFuc2tpIiwiYSI6ImNrczZhYXoxOTAwcnIydXJtbDlxZnFjenIifQ.uLDUhtEZC6zBliqNGeduTg'; // Set your mapbox token here

function App() {
  
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      // mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
        <div className="marker">You are here</div>
      </Marker>
    </ReactMapGL>
  );
}

export default App;
