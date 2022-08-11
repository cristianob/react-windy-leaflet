"use strict";

import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { GridLayer as LeafletGridLayer } from 'leaflet';
import MapLayer from './MapLayer';

var GridLayer =
/*#__PURE__*/
function (_MapLayer) {
  _inheritsLoose(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletGridLayer(this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = _MapLayer.prototype.getOptions.call(this, props);

    return props.leaflet.map == null ? options : // $FlowFixMe: object spread type
    _extends({
      maxZoom: props.leaflet.map.options.maxZoom,
      minZoom: props.leaflet.map.options.minZoom
    }, options);
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(MapLayer);

export { GridLayer as default };