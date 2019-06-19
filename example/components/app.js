// @flow

import Leaflet from "leaflet";
import React, { useState } from "react";

import SimpleExample from "./simple";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/";

const windyKey = "WINDY_KEY";

const App = props => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <h1>React-Windy-Leaflet examples</h1>
      <h2>Popup with Marker</h2>
      <button onClick={() => setOpen(!open)}>Abrir</button>
      {open && <SimpleExample windyKey={windyKey} />}
    </React.Fragment>
  );
};

export default App;
