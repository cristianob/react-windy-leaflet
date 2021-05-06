export default {
  BASE: `
    #windy #map-container {
      z-index: 0;
    }

    #windy .leaflet-tile-pane .overlay-layer,
    #windy #map-container .leaflet-tile-pane .particles-layer {
      z-index: 1000 !important;
      display: none !important;
    }

    #windy .leaflet-tile-pane .basemap-layer {
      display: none;
      z-index: 1 !important;
    }

    #windy #map-container .labels-layer [data-id].city-1, 
    #windy #map-container .labels-layer [data-id].city-2, 
    #windy #map-container .labels-layer [data-id].city-3, 
    #windy #map-container .labels-layer [data-id].city-4,
    #windy #map-container .labels-layer [data-id].country-1,
    #windy #map-container .labels-layer [data-id].country-2 {
      display: none;
    }

    #windy #map-container .leaflet-control-container {
      display: block;
    }
    `,

  WINDY_OVERLAY: `
    #windy .leaflet-tile-pane .overlay-layer,
    #windy #map-container .leaflet-tile-pane .particles-layer {
      display: block !important;
    }

    #windy .leaflet-tile-pane .basemap-layer {
      display: block;
    }

    #windy #mobile-ovr-select,
    #windy #embed-zoom,
    #windy #bottom {
      display: block;
    }
    `,

  NO_WINDY_LABELS: `
    #windy #map-container .labels-layer [data-id].city-1, 
    #windy #map-container .labels-layer [data-id].city-2, 
    #windy #map-container .labels-layer [data-id].city-3, 
    #windy #map-container .labels-layer [data-id].city-4,
    #windy #map-container .labels-layer [data-id].country-1,
    #windy #map-container .labels-layer [data-id].country-2 {
      display: none !important;
    }
    `,

  NO_WINDY_CONTROLS: `
    #windy #mobile-ovr-select,
    #windy #embed-zoom,
    #windy #bottom {
      display: none !important;
    }
    `,

  WINDY_OVERLAY_OPACITY: opacity => `
    #windy .leaflet-tile-pane .overlay-layer {
      opacity: ${opacity} !important;
    }
    `
};
