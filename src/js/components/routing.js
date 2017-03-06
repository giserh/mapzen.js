var L = require('leaflet');
var Control = require('leaflet-routing-machine/src/control');
var Itinerary = require('leaflet-routing-machine/src/itinerary');
var ItineraryBuilder = require('leaflet-routing-machine/src/itinerary-builder');
var MapzenLine = require('lrm-mapzen/src/mapzenLine');
var Plan = require('leaflet-routing-machine/src/plan');
var Waypoint = require('lrm-mapzen/src/waypoint');
var MapzenFormatter = require('lrm-mapzen/src/mapzenFormatter');
var ErrorControl = require('leaflet-routing-machine/src/error-control');
var GeocoderElement = require('leaflet-routing-machine/src/geocoder-element');
var MapzenRouter = require('lrm-mapzen/src/mapzenRouter');


module.exports = {
  Control: Control,
  Itinerary: Itinerary,
  ItineraryBuilder: ItineraryBuilder,
  Line: MapzenLine,
  Plan: Plan,
  Waypoint: Waypoint,
  Mapzen: MapzenRouter,
  Formatter: MapzenFormatter,
  GeocoderElement: GeocoderElement
}

module.exports.routing = {
  control: function(options) { return new Control(options); },
  itinerary: function(options) {
      return Itinerary(options);
  },
  itineraryBuilder: function(options) {
      return new ItineraryBuilder(options);
  },
  line: function(route, options) {
      return new MapzenLine(route, options);
  },
  plan: function(waypoints, options) {
      return new Plan(waypoints, options);
  },
  waypoint: function(latLng, name, options) {
      return new Waypoint(latLng, name, options);
  },
  formatter: function(options) {
      return new MapzenFormatter(options);
  },
  mapzen: function(apikey, options) {
    return new MapzenRouter(apikey, options);
  },
  geocoderElement: function(wp, i, nWps, plan) {
      return new GeocoderElement(wp, i, nWps, plan);
  },
  errorControl: function(routingControl, options) {
      return new L.Routing.ErrorControl(routingControl, options);
  }
};