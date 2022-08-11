"use strict";

export default {
  BASE: "\n    #windy .leaflet-tile-pane .overlay-layer,\n    #windy #map-container .leaflet-tile-pane .particles-layer {\n      display: none !important;\n    }\n\n    #windy .leaflet-tile-pane .basemap-layer {\n      display: none;\n    }\n\n     #windy .leaflet-tile-pane .sea-mask-layer {\n       display: none;\n     }\n\n    #windy #map-container .leaflet-control-container {\n      display: block;\n    }\n    ",
  WINDY_OVERLAY: "\n    #windy .leaflet-tile-pane .overlay-layer,\n    #windy #map-container .leaflet-tile-pane .particles-layer {\n      display: block !important;\n    }\n\n    #windy .leaflet-tile-pane .basemap-layer {\n      display: block;\n    }\n\n    #windy .leaflet-tile-pane .sea-mask-layer {\n      display: block;\n    }\n\n    #windy #mobile-ovr-select,\n    #windy #embed-zoom,\n    #windy #bottom {\n      display: block;\n    }\n    ",
  NO_WINDY_LABELS: "\n    #windy #map-container .labels-layer [data-id].city-1,\n    #windy #map-container .labels-layer [data-id].city-2,\n    #windy #map-container .labels-layer [data-id].city-3,\n    #windy #map-container .labels-layer [data-id].city-4,\n    #windy #map-container .labels-layer [data-id].country-1,\n    #windy #map-container .labels-layer [data-id].country-2 {\n      display: none !important;\n    }\n    ",
  NO_WINDY_CONTROLS: "\n    #windy #mobile-ovr-select,\n    #windy #embed-zoom,\n    #windy #bottom {\n      display: none !important;\n    }\n    ",
  WINDY_OVERLAY_OPACITY: function WINDY_OVERLAY_OPACITY(opacity) {
    return "\n    #windy .leaflet-tile-pane .overlay-layer {\n      opacity: " + opacity + " !important;\n    }\n  ";
  }
};