var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<html><body><div id="app"></div></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.Image = global.window.Image;

global.navigator = {
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) nteract/0.0.12 Chrome/50.0.2661.102 Electron/1.1.3 Safari/537.36',
  platform: 'MacIntel',
};

// HACK: Polyfil that allows codemirror to render in a JSDOM env.
global.window.document.createRange = function createRange() {
  return {
    setEnd: () => {},
    setStart: () => {},
    getBoundingClientRect: () => {
      return { right: 0 };
    },
    getClientRects: () => {
      return []
    }
  }
};

const el = document.createElement('div');

const L = require('leaflet');
L.Icon.Default.imagePath = '../node_modules/leaflet/dist/images/';

const map = L.map(el);
map.scrollWheelZoom.disable();
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
 id: `mapbox.light`,
}).addTo(map);

const geoJSON = {
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Feature",
              "properties": {
                  "popupContent": "18th & California Light Rail Stop"
              },
              "geometry": {
                  "type": "Point",
                  "coordinates": [-104.98999178409576, 39.74683938093904]
              }
          },{
              "type": "Feature",
              "properties": {
                  "popupContent": "20th & Welton Light Rail Stop"
              },
              "geometry": {
                  "type": "Point",
                  "coordinates": [-104.98689115047453, 39.747924136466565]
              }
          }
      ]
    }

const geoJSONLayer = L.geoJson(geoJSON).addTo(map);
const bounds = geoJSONLayer.getBounds();
map.fitBounds(bounds);
