// All examples taken from Leaflet tutorial:
// https://leafletjs.com/examples/quick-start/

// London
// const coords = [51.505, -0.09];

// Hillsboro
const coords = [39.199, -77.725];
const zoomLevel = 17;

var map = L.map('chartNamePaste').setView(coords, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: 'Â© OpenStreetMap'
}).addTo(map);


const coordsHouse = [39.1985, -77.7235];
var markerHouse = L.marker(coordsHouse).addTo(map);
markerHouse.bindPopup("This is Emily's house.").openPopup();

var circleHouse = L.circle(coordsHouse, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);

const coordsSchool= [39.1985, -77.7205];
var circleSchool = L.circle(coordsSchool, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(map);

var markerSchool = L.marker(coordsSchool).addTo(map);
markerSchool.bindPopup("This is the Old Stone School. The ceremony will be held here.").openPopup();
