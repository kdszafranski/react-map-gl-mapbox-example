import { useState } from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2RzemFmcmFuc2tpIiwiYSI6ImNrczZhYXoxOTAwcnIydXJtbDlxZnFjenIifQ.uLDUhtEZC6zBliqNGeduTg'; // Set your mapbox token here

function App() {
  
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      // mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );

}

export default App;
