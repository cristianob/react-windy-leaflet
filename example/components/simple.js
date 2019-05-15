// @flow

import React, { Component } from "react";
import { Map, LayersControl, TileLayer, Marker, Popup } from "../../src";

type State = {
  lat: number,
  lng: number,
  zoom: number
};

const { BaseLayer, Overlay } = LayersControl;

export default class SimpleExample extends Component<{}, State> {
  state = {
    lat: -23.505,
    lng: -42.09,
    zoom: 1,

    overlay: "clouds"
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map
        className="leaflet-container"
        windyKey={this.props.windyKey}
        windyLabels={false}
        windyControls={false}
        overlay={this.state.overlay}
        overlayOpacity={0.5}
        particlesAnim={false}
        lat={this.state.lat}
        lng={this.state.lng}
        zoom={this.state.zoom}
        onWindyMapReady={() => {
          console.log("Windy Map Loaded!");
        }}
        mapElements={
          <React.Fragment>
            <LayersControl>
              <BaseLayer checked name="OSM">
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </BaseLayer>
            </LayersControl>

            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </React.Fragment>
        }
      />
    );
  }
}
