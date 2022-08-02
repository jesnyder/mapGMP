// All examples taken from Leaflet tutorial:
// https://leafletjs.com/examples/quick-start/

// London
// const coords = [51.505, -0.09];

// Hillsboro
const coords = [39.199, -100];
const zoomLevel = 5;
var map = L.map('chartNamePaste').setView(coords, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: 'Â© OpenStreetMap'
}).addTo(map);


retrieveDataSet
