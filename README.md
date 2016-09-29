# leaflet-issue-reproduction

Repository for reproducing https://github.com/Leaflet/Leaflet/issues/4823

Steps to reproduce with this repository:

```
git clone https://github.com/rgbkrk/leaflet-issue-reproduction
cd leaflet-issue-reproduction
npm i
node reproduce.js
```

Expect to see:

```
/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:1609
    throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
    ^

Error: Invalid LatLng object: (NaN, NaN)
    at Object.L.LatLng (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:1609:9)
    at Object.L.Projection.SphericalMercator.unproject (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:2019:10)
    at Object.L.CRS.pointToLatLng (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:2062:26)
    at L.Map.L.Evented.extend.unproject (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:2877:27)
    at L.GridLayer.L.Layer.extend._updateLevels (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:4135:35)
    at L.GridLayer.L.Layer.extend._setView (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:4287:9)
    at L.GridLayer.L.Layer.extend._resetView (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:4263:8)
    at L.GridLayer.L.Layer.extend.onAdd (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:3911:8)
    at L.Layer.L.Evented.extend._layerAdd (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:3542:8)
    at L.Evented.L.Class.extend.fire (/Users/kylek/code/src/github.com/rgbkrk/leaflet-issue-reproduction/node_modules/leaflet/dist/leaflet-src.js:588:11)
```

