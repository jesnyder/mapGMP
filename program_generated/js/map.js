// All examples taken from Leaflet tutorial:
// https://leafletjs.com/examples/quick-start/

// London
// const coords = [51.505, -0.09];

// Hillsboro
const coords = [39.199, -100];
const zoomLevel = 10;
var map = L.map('map').setView(coords, zoomLevel);

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



const coords_0 = [ 34.75159047624831 , -92.34576986005398]; 
var markers_0 = L.marker(coords_0).addTo(map); 
markers_0.bindPopup("The Cord Blood Bank of Arkansas (UAMS)").openPopup(); 

var circle_0 = L.circle(coords_0, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1 = [ 33.9528472 , -84.5496148]; 
var markers_1 = L.marker(coords_1).addTo(map); 
markers_1.bindPopup("Xytex Laboratories").openPopup(); 

var circle_1 = L.circle(coords_1, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_2 = [ 33.9528472 , -84.5496148]; 
var markers_2 = L.marker(coords_2).addTo(map); 
markers_2.bindPopup("Eurofins Donor & Product Testing, Inc. Atlanta").openPopup(); 

var circle_2 = L.circle(coords_2, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_3 = [ 26.25877476826265 , -98.22794036552668]; 
var markers_3 = L.marker(coords_3).addTo(map); 
markers_3.bindPopup("Aspire Fertility Institute McAllen").openPopup(); 

var circle_3 = L.circle(coords_3, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_4 = [ 40.538457 , -74.39450186737218]; 
var markers_4 = L.marker(coords_4).addTo(map); 
markers_4.bindPopup("New Jersey Organ & Tissue Sharing Network, Inc.").openPopup(); 

var circle_4 = L.circle(coords_4, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_5 = [ 40.4086802 , -80.0833885]; 
var markers_5 = L.marker(coords_5).addTo(map); 
markers_5.bindPopup("Mid-Atlantic Surgical Systems, LLC").openPopup(); 

var circle_5 = L.circle(coords_5, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_6 = [ 28.5421109 , -81.3790304]; 
var markers_6 = L.marker(coords_6).addTo(map); 
markers_6.bindPopup("Wright Medical Technology, Inc.").openPopup(); 

var circle_6 = L.circle(coords_6, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_7 = [ 40.567181 , -74.634683]; 
var markers_7 = L.marker(coords_7).addTo(map); 
markers_7.bindPopup("Laboratory Corp. of America").openPopup(); 

var circle_7 = L.circle(coords_7, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_8 = [ 38.53184735 , -90.49810012926211]; 
var markers_8 = L.marker(coords_8).addTo(map); 
markers_8.bindPopup("Wright Medical Technology, Inc. - District Service Center - St. Louis").openPopup(); 

var circle_8 = L.circle(coords_8, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_9 = [ 40.0888834420068 , -75.37196396309524]; 
var markers_9 = L.marker(coords_9).addTo(map); 
markers_9.bindPopup("Reproductive Medicine Associates of Philadelphia").openPopup(); 

var circle_9 = L.circle(coords_9, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_10 = [ 41.83894804632035 , -87.95467960714285]; 
var markers_10 = L.marker(coords_10).addTo(map); 
markers_10.bindPopup("Innotek Medical Products Inc.").openPopup(); 

var circle_10 = L.circle(coords_10, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_11 = [ 40.444186656722685 , -79.98036250084034]; 
var markers_11 = L.marker(coords_11).addTo(map); 
markers_11.bindPopup("Promethean LifeSciences, Inc.").openPopup(); 

var circle_11 = L.circle(coords_11, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_12 = [ 0.0 , 0.0]; 
var markers_12 = L.marker(coords_12).addTo(map); 
markers_12.bindPopup("San Francisco Fertility Centers, A Medical Corporation").openPopup(); 

var circle_12 = L.circle(coords_12, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_13 = [ 29.46533808780488 , -98.52518571788616]; 
var markers_13 = L.marker(coords_13).addTo(map); 
markers_13.bindPopup("South Texas Blood & Tissue Center").openPopup(); 

var circle_13 = L.circle(coords_13, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_14 = [ 31.2102629 , -83.238935]; 
var markers_14 = L.marker(coords_14).addTo(map); 
markers_14.bindPopup("Emory Decatur Hospital").openPopup(); 

var circle_14 = L.circle(coords_14, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_15 = [ 33.44382792610939 , -111.92852831635706]; 
var markers_15 = L.marker(coords_15).addTo(map); 
markers_15.bindPopup("Donor Network of Arizona").openPopup(); 

var circle_15 = L.circle(coords_15, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_16 = [ 28.5989135595974 , -81.34949962938185]; 
var markers_16 = L.marker(coords_16).addTo(map); 
markers_16.bindPopup("Center for Reproductive Medicine").openPopup(); 

var circle_16 = L.circle(coords_16, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_17 = [ 40.9452911 , -74.0735899]; 
var markers_17 = L.marker(coords_17).addTo(map); 
markers_17.bindPopup("The Valley Hospital Fertility Center").openPopup(); 

var circle_17 = L.circle(coords_17, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_18 = [ 40.27673215 , -76.98444602055159]; 
var markers_18 = L.marker(coords_18).addTo(map); 
markers_18.bindPopup("Shady Grove Fertility Center of Pennsylvania, PLLC").openPopup(); 

var circle_18 = L.circle(coords_18, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_19 = [ 39.10244194648046 , -77.51706483337426]; 
var markers_19 = L.marker(coords_19).addTo(map); 
markers_19.bindPopup("Shady Grove Reproductive Science Center PC").openPopup(); 

var circle_19 = L.circle(coords_19, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_20 = [ 46.81519922919708 , -96.83260000072993]; 
var markers_20 = L.marker(coords_20).addTo(map); 
markers_20.bindPopup("Sanford Health Reproductive Medicine Institute").openPopup(); 

var circle_20 = L.circle(coords_20, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_21 = [ 36.838799376683625 , -76.09376831143405]; 
var markers_21 = L.marker(coords_21).addTo(map); 
markers_21.bindPopup("LifeNet Health (Sabre Street)").openPopup(); 

var circle_21 = L.circle(coords_21, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_22 = [ 33.5206824 , -86.8024326]; 
var markers_22 = L.marker(coords_22).addTo(map); 
markers_22.bindPopup("Advancing Sight Network").openPopup(); 

var circle_22 = L.circle(coords_22, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_23 = [ 42.9509042 , -78.7343332]; 
var markers_23 = L.marker(coords_23).addTo(map); 
markers_23.bindPopup("CNY Fertility Center").openPopup(); 

var circle_23 = L.circle(coords_23, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_24 = [ 40.7539956 , -79.8103943]; 
var markers_24 = L.marker(coords_24).addTo(map); 
markers_24.bindPopup("Synergy Health AST, LLC").openPopup(); 

var circle_24 = L.circle(coords_24, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_25 = [ 40.24019891401152 , -75.1351912378119]; 
var markers_25 = L.marker(coords_25).addTo(map); 
markers_25.bindPopup("Shady Grove Fertility of Pennsylvania").openPopup(); 

var circle_25 = L.circle(coords_25, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_26 = [ 44.831868251967215 , -92.93762523836064]; 
var markers_26 = L.marker(coords_26).addTo(map); 
markers_26.bindPopup("American Donor Services").openPopup(); 

var circle_26 = L.circle(coords_26, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_27 = [ 40.7127281 , -74.0060152]; 
var markers_27 = L.marker(coords_27).addTo(map); 
markers_27.bindPopup("Mount Sinai Health System (MSHS), Mount Sinai Hospital Hess Center for Science and Medicine").openPopup(); 

var circle_27 = L.circle(coords_27, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_28 = [ 32.33242036044776 , -90.08517370597016]; 
var markers_28 = L.marker(coords_28).addTo(map); 
markers_28.bindPopup("Mississippi Organ Recovery Agency Inc").openPopup(); 

var circle_28 = L.circle(coords_28, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_29 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_29 = L.marker(coords_29).addTo(map); 
markers_29.bindPopup("Cell Therapy and Graft Engineering, RUSH University Medical Center").openPopup(); 

var circle_29 = L.circle(coords_29, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_30 = [ 34.44182074485592 , -119.73297260626607]; 
var markers_30 = L.marker(coords_30).addTo(map); 
markers_30.bindPopup("Thread Labs Santa Barbara LLC").openPopup(); 

var circle_30 = L.circle(coords_30, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_31 = [ 41.53873331562216 , -73.89430111855889]; 
var markers_31 = L.marker(coords_31).addTo(map); 
markers_31.bindPopup("Hudson Valley Fertility, PLLC").openPopup(); 

var circle_31 = L.circle(coords_31, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_32 = [ 33.9419393 , -118.43808037530732]; 
var markers_32 = L.marker(coords_32).addTo(map); 
markers_32.bindPopup("Fahimeh Sasan, D.O., P.C.").openPopup(); 

var circle_32 = L.circle(coords_32, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_33 = [ 18.3581491 , -66.1116969]; 
var markers_33 = L.marker(coords_33).addTo(map); 
markers_33.bindPopup("LifeLink of Puerto Rico").openPopup(); 

var circle_33 = L.circle(coords_33, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_34 = [ 41.8949892729885 , -87.6226382045977]; 
var markers_34 = L.marker(coords_34).addTo(map); 
markers_34.bindPopup("Gonadal Tissue Processing Ste Ann & Robert H Lurie Childrens Hospital of Chicago").openPopup(); 

var circle_34 = L.circle(coords_34, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_35 = [ -26.7982582 , -55.0228553]; 
var markers_35 = L.marker(coords_35).addTo(map); 
markers_35.bindPopup("Vitalife, Inc.").openPopup(); 

var circle_35 = L.circle(coords_35, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_36 = [ 39.21147315852843 , -76.87944903050168]; 
var markers_36 = L.marker(coords_36).addTo(map); 
markers_36.bindPopup("Shady Grove Reproductive Science Center").openPopup(); 

var circle_36 = L.circle(coords_36, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_37 = [ 41.8949892729885 , -87.6226382045977]; 
var markers_37 = L.marker(coords_37).addTo(map); 
markers_37.bindPopup("Ann & Robert H Lurie Children's Hospital of Chicago").openPopup(); 

var circle_37 = L.circle(coords_37, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_38 = [ 27.2753973964539 , -82.47006781158393]; 
var markers_38 = L.marker(coords_38).addTo(map); 
markers_38.bindPopup("Fertility Center and Applied Genetics of Florida, Inc.").openPopup(); 

var circle_38 = L.circle(coords_38, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_39 = [ 40.7127281 , -74.0060152]; 
var markers_39 = L.marker(coords_39).addTo(map); 
markers_39.bindPopup("New York University Langone Fertility Center").openPopup(); 

var circle_39 = L.circle(coords_39, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_40 = [ 36.78757313226631 , -76.08267106391901]; 
var markers_40 = L.marker(coords_40).addTo(map); 
markers_40.bindPopup("LifeNet Health").openPopup(); 

var circle_40 = L.circle(coords_40, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_41 = [ 38.0326086 , -78.49823145]; 
var markers_41 = L.marker(coords_41).addTo(map); 
markers_41.bindPopup("University Of Virginia Health System").openPopup(); 

var circle_41 = L.circle(coords_41, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_42 = [ 33.59414446306805 , -117.6996269227219]; 
var markers_42 = L.marker(coords_42).addTo(map); 
markers_42.bindPopup("Unicare Biomedical, Inc.").openPopup(); 

var circle_42 = L.circle(coords_42, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_43 = [ 40.3337038 , -75.9474322]; 
var markers_43 = L.marker(coords_43).addTo(map); 
markers_43.bindPopup("Reading Hospital").openPopup(); 

var circle_43 = L.circle(coords_43, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_44 = [ 41.542379318915664 , -83.60829821831325]; 
var markers_44 = L.marker(coords_44).addTo(map); 
markers_44.bindPopup("Universal Medical Products Inc").openPopup(); 

var circle_44 = L.circle(coords_44, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_45 = [ 44.26580775625 , -88.33389556875]; 
var markers_45 = L.marker(coords_45).addTo(map); 
markers_45.bindPopup("American Tissue Services Foundation").openPopup(); 

var circle_45 = L.circle(coords_45, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_46 = [ 40.7127281 , -74.0060152]; 
var markers_46 = L.marker(coords_46).addTo(map); 
markers_46.bindPopup("Extend Fertility, LLC").openPopup(); 

var circle_46 = L.circle(coords_46, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_47 = [ 0.0 , 0.0]; 
var markers_47 = L.marker(coords_47).addTo(map); 
markers_47.bindPopup("Integrity Biosurgical Systems, Inc.").openPopup(); 

var circle_47 = L.circle(coords_47, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_48 = [ 33.48629325 , -86.78168366983525]; 
var markers_48 = L.marker(coords_48).addTo(map); 
markers_48.bindPopup("ORTHOLOGIC LLC").openPopup(); 

var circle_48 = L.circle(coords_48, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_49 = [ 44.5308273 , -87.82593]; 
var markers_49 = L.marker(coords_49).addTo(map); 
markers_49.bindPopup("Dental Health Products Inc.").openPopup(); 

var circle_49 = L.circle(coords_49, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_50 = [ 37.383327040163934 , -122.11456647131148]; 
var markers_50 = L.marker(coords_50).addTo(map); 
markers_50.bindPopup("Kindbody Silicon Valley").openPopup(); 

var circle_50 = L.circle(coords_50, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_51 = [ 39.094958595729686 , -77.5843338460199]; 
var markers_51 = L.marker(coords_51).addTo(map); 
markers_51.bindPopup("K2M, Inc.").openPopup(); 

var circle_51 = L.circle(coords_51, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_52 = [ 29.705316533084577 , -95.40499932139303]; 
var markers_52 = L.marker(coords_52).addTo(map); 
markers_52.bindPopup("Special Procedures Laboratory").openPopup(); 

var circle_52 = L.circle(coords_52, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_53 = [ 38.61091282550806 , -90.21530774943938]; 
var markers_53 = L.marker(coords_53).addTo(map); 
markers_53.bindPopup("SSM-SLUH, Inc.").openPopup(); 

var circle_53 = L.circle(coords_53, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_54 = [ 30.696533100906343 , -88.0997515060423]; 
var markers_54 = L.marker(coords_54).addTo(map); 
markers_54.bindPopup("CRM Alabama LLC").openPopup(); 

var circle_54 = L.circle(coords_54, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_55 = [ 35.4732339903125 , -97.5016976615625]; 
var markers_55 = L.marker(coords_55).addTo(map); 
markers_55.bindPopup("OU Health Reproductive Medicine Lab").openPopup(); 

var circle_55 = L.circle(coords_55, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_56 = [ 35.517583078486645 , -97.57052418278931]; 
var markers_56 = L.marker(coords_56).addTo(map); 
markers_56.bindPopup("Integris Bennett Fertility Institute").openPopup(); 

var circle_56 = L.circle(coords_56, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_57 = [ 40.07416759199918 , -82.97077208603454]; 
var markers_57 = L.marker(coords_57).addTo(map); 
markers_57.bindPopup("Wright Medical Technology Inc").openPopup(); 

var circle_57 = L.circle(coords_57, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_58 = [ 44.07330448533334 , -103.16577464133331]; 
var markers_58 = L.marker(coords_58).addTo(map); 
markers_58.bindPopup("South Dakota Lions Eye and Tissue Bank Inc").openPopup(); 

var circle_58 = L.circle(coords_58, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_59 = [ 40.538457 , -74.39450186737218]; 
var markers_59 = L.marker(coords_59).addTo(map); 
markers_59.bindPopup("Center For Advanced Reproductive Medicine & Fertility").openPopup(); 

var circle_59 = L.circle(coords_59, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_60 = [ 35.517583078486645 , -97.57052418278931]; 
var markers_60 = L.marker(coords_60).addTo(map); 
markers_60.bindPopup("SNP Fertility OKC, LLC").openPopup(); 

var circle_60 = L.circle(coords_60, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_61 = [ 35.507011178 , -97.5027095156]; 
var markers_61 = L.marker(coords_61).addTo(map); 
markers_61.bindPopup("Oklahoma Lions Eye Bank").openPopup(); 

var circle_61 = L.circle(coords_61, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_62 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_62 = L.marker(coords_62).addTo(map); 
markers_62.bindPopup("Reproductive Medicine Associates of San Diego").openPopup(); 

var circle_62 = L.circle(coords_62, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_63 = [ 37.78855734101124 , -122.39681788089888]; 
var markers_63 = L.marker(coords_63).addTo(map); 
markers_63.bindPopup("Peter Charles Klatsky, M.D., Inc.").openPopup(); 

var circle_63 = L.circle(coords_63, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_64 = [ 40.7127281 , -74.0060152]; 
var markers_64 = L.marker(coords_64).addTo(map); 
markers_64.bindPopup("American Infertility of New York, P.C.").openPopup(); 

var circle_64 = L.circle(coords_64, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_65 = [ 34.028465755940736 , -84.31715294564346]; 
var markers_65 = L.marker(coords_65).addTo(map); 
markers_65.bindPopup("StimLabs, LLC").openPopup(); 

var circle_65 = L.circle(coords_65, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_66 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_66 = L.marker(coords_66).addTo(map); 
markers_66.bindPopup("Seattle Reproductive Medicine, Inc., P.S.").openPopup(); 

var circle_66 = L.circle(coords_66, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_67 = [ 40.7620463 , -73.7381874]; 
var markers_67 = L.marker(coords_67).addTo(map); 
markers_67.bindPopup("Northwell Health Laboratories").openPopup(); 

var circle_67 = L.circle(coords_67, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_68 = [ 41.6747938 , -72.84266826794263]; 
var markers_68 = L.marker(coords_68).addTo(map); 
markers_68.bindPopup("PLATFORM LLC").openPopup(); 

var circle_68 = L.circle(coords_68, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_69 = [ 37.6659781 , -77.506374]; 
var markers_69 = L.marker(coords_69).addTo(map); 
markers_69.bindPopup("Fortis Surgical LLC").openPopup(); 

var circle_69 = L.circle(coords_69, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_70 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_70 = L.marker(coords_70).addTo(map); 
markers_70.bindPopup("Cell Applications Inc").openPopup(); 

var circle_70 = L.circle(coords_70, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_71 = [ 37.9456824 , -87.4046571]; 
var markers_71 = L.marker(coords_71).addTo(map); 
markers_71.bindPopup("Boston IVF at The Women's Hospital").openPopup(); 

var circle_71 = L.circle(coords_71, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_72 = [ 29.50626249341317 , -98.5683992]; 
var markers_72 = L.marker(coords_72).addTo(map); 
markers_72.bindPopup("Audie L Murphy Memorial VA Hospital").openPopup(); 

var circle_72 = L.circle(coords_72, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_73 = [ 39.934002 , -74.8909988]; 
var markers_73 = L.marker(coords_73).addTo(map); 
markers_73.bindPopup("Cooper Institute for Reproductive Hormonal Disorders, P.C.").openPopup(); 

var circle_73 = L.circle(coords_73, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_74 = [ 35.9234229561086 , -86.79753939411763]; 
var markers_74 = L.marker(coords_74).addTo(map); 
markers_74.bindPopup("Tennessee Fertility Institute").openPopup(); 

var circle_74 = L.circle(coords_74, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_75 = [ 40.2962222 , -74.0509725]; 
var markers_75 = L.marker(coords_75).addTo(map); 
markers_75.bindPopup("Reproductive Science Center of New Jersey, P.A.").openPopup(); 

var circle_75 = L.circle(coords_75, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_76 = [ 47.60163620134367 , -122.32916850108528]; 
var markers_76 = L.marker(coords_76).addTo(map); 
markers_76.bindPopup("Harborview Medical Center").openPopup(); 

var circle_76 = L.circle(coords_76, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_77 = [ 41.3556187 , -72.0997804]; 
var markers_77 = L.marker(coords_77).addTo(map); 
markers_77.bindPopup("Yale New Haven Health, Lawrence & Memorial Hospital").openPopup(); 

var circle_77 = L.circle(coords_77, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_78 = [ 41.972289869329074 , -88.0196490824281]; 
var markers_78 = L.marker(coords_78).addTo(map); 
markers_78.bindPopup("Gift of Hope - Organ & Tissue Donor Network").openPopup(); 

var circle_78 = L.circle(coords_78, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_79 = [ 40.9628758 , -74.1329208]; 
var markers_79 = L.marker(coords_79).addTo(map); 
markers_79.bindPopup("Sea Pearl East Inc.").openPopup(); 

var circle_79 = L.circle(coords_79, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_80 = [ 25.60639884265181 , -80.34884571765784]; 
var markers_80 = L.marker(coords_80).addTo(map); 
markers_80.bindPopup("Biothread Dental Implants Inc").openPopup(); 

var circle_80 = L.circle(coords_80, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_81 = [ 37.78855734101124 , -122.39681788089888]; 
var markers_81 = L.marker(coords_81).addTo(map); 
markers_81.bindPopup("Peter Charles Klatsky, M.D., Inc.").openPopup(); 

var circle_81 = L.circle(coords_81, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_82 = [ 33.50745099579832 , -86.80231119159664]; 
var markers_82 = L.marker(coords_82).addTo(map); 
markers_82.bindPopup("Legacy of Hope").openPopup(); 

var circle_82 = L.circle(coords_82, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_83 = [ 41.153122231601465 , -85.12598644176713]; 
var markers_83 = L.marker(coords_83).addTo(map); 
markers_83.bindPopup("Midwest Fertility Specialists").openPopup(); 

var circle_83 = L.circle(coords_83, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_84 = [ 41.153122231601465 , -85.12598644176713]; 
var markers_84 = L.marker(coords_84).addTo(map); 
markers_84.bindPopup("Indiana Fertility Providers, LLC").openPopup(); 

var circle_84 = L.circle(coords_84, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_85 = [ 0.0 , 0.0]; 
var markers_85 = L.marker(coords_85).addTo(map); 
markers_85.bindPopup("NM FRM Andrology Services West").openPopup(); 

var circle_85 = L.circle(coords_85, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_86 = [ 26.640628 , -81.8723084]; 
var markers_86 = L.marker(coords_86).addTo(map); 
markers_86.bindPopup("Embryo Donation International").openPopup(); 

var circle_86 = L.circle(coords_86, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_87 = [ 43.0746978 , -89.3841692]; 
var markers_87 = L.marker(coords_87).addTo(map); 
markers_87.bindPopup("UW Health at The American Center").openPopup(); 

var circle_87 = L.circle(coords_87, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_88 = [ 28.0341847 , -82.6650992]; 
var markers_88 = L.marker(coords_88).addTo(map); 
markers_88.bindPopup("Cryo-Cell International, Inc").openPopup(); 

var circle_88 = L.circle(coords_88, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_89 = [ 39.126237835766425 , -84.51493973503649]; 
var markers_89 = L.marker(coords_89).addTo(map); 
markers_89.bindPopup("The Christ Hospital Health Network").openPopup(); 

var circle_89 = L.circle(coords_89, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_90 = [ 41.64923774069768 , -83.67329669793281]; 
var markers_90 = L.marker(coords_90).addTo(map); 
markers_90.bindPopup("Community Blood Center").openPopup(); 

var circle_90 = L.circle(coords_90, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_91 = [ 45.5085052893776 , -122.692743946722]; 
var markers_91 = L.marker(coords_91).addTo(map); 
markers_91.bindPopup("Northwest Fertility Center").openPopup(); 

var circle_91 = L.circle(coords_91, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_92 = [ 25.822887487413503 , -80.30494796518731]; 
var markers_92 = L.marker(coords_92).addTo(map); 
markers_92.bindPopup("Norm Biologics Inc.").openPopup(); 

var circle_92 = L.circle(coords_92, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_93 = [ 32.729904709205776 , -97.32030240577618]; 
var markers_93 = L.marker(coords_93).addTo(map); 
markers_93.bindPopup("Tarrant Eye Resources, Inc.").openPopup(); 

var circle_93 = L.circle(coords_93, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_94 = [ 29.92759147794117 , -90.102150730042]; 
var markers_94 = L.marker(coords_94).addTo(map); 
markers_94.bindPopup("Vivere New Orleans Fertility Laboratory, L.L.C.").openPopup(); 

var circle_94 = L.circle(coords_94, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_95 = [ 30.013475866304688 , -90.19196791630468]; 
var markers_95 = L.marker(coords_95).addTo(map); 
markers_95.bindPopup("Reproductive Resources Inc.").openPopup(); 

var circle_95 = L.circle(coords_95, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_96 = [ 37.81593860674603 , -121.99178510277775]; 
var markers_96 = L.marker(coords_96).addTo(map); 
markers_96.bindPopup("Klatsky, Peter Charles, MD, Inc").openPopup(); 

var circle_96 = L.circle(coords_96, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_97 = [ 39.95173745745454 , -75.15859992890908]; 
var markers_97 = L.marker(coords_97).addTo(map); 
markers_97.bindPopup("Society Hill Reproductive Medicine").openPopup(); 

var circle_97 = L.circle(coords_97, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_98 = [ 38.994829917870725 , -94.55002220304183]; 
var markers_98 = L.marker(coords_98).addTo(map); 
markers_98.bindPopup("Research Medical Center").openPopup(); 

var circle_98 = L.circle(coords_98, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_99 = [ 40.538457 , -74.39450186737218]; 
var markers_99 = L.marker(coords_99).addTo(map); 
markers_99.bindPopup("Musculoskeletal Transplant Foundation, Inc.").openPopup(); 

var circle_99 = L.circle(coords_99, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_100 = [ 45.4964644 , -122.68287917483792]; 
var markers_100 = L.marker(coords_100).addTo(map); 
markers_100.bindPopup("Oregon Health & Science University").openPopup(); 

var circle_100 = L.circle(coords_100, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_101 = [ 33.0186699 , -80.1762704]; 
var markers_101 = L.marker(coords_101).addTo(map); 
markers_101.bindPopup("Piedmont Reproductive Endocrinology Associates Lowcountry").openPopup(); 

var circle_101 = L.circle(coords_101, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_102 = [ 25.787314178627003 , -80.20404218192219]; 
var markers_102 = L.marker(coords_102).addTo(map); 
markers_102.bindPopup("Immunology and Histocompatibility Lab").openPopup(); 

var circle_102 = L.circle(coords_102, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_103 = [ 42.11485056767754 , -71.2398906563118]; 
var markers_103 = L.marker(coords_103).addTo(map); 
markers_103.bindPopup("MGH Bone Bank").openPopup(); 

var circle_103 = L.circle(coords_103, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_104 = [ 35.26892746985646 , -120.68663239043062]; 
var markers_104 = L.marker(coords_104).addTo(map); 
markers_104.bindPopup("Central Coast Cryobank").openPopup(); 

var circle_104 = L.circle(coords_104, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_105 = [ 32.77518025397197 , -97.3986575042056]; 
var markers_105 = L.marker(coords_105).addTo(map); 
markers_105.bindPopup("Texas Procurement LLC").openPopup(); 

var circle_105 = L.circle(coords_105, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_106 = [ 42.380063 , -76.643085]; 
var markers_106 = L.marker(coords_106).addTo(map); 
markers_106.bindPopup("Park Avenue Fertility and Reproductive Medicine").openPopup(); 

var circle_106 = L.circle(coords_106, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_107 = [ 36.78757313226631 , -76.08267106391901]; 
var markers_107 = L.marker(coords_107).addTo(map); 
markers_107.bindPopup("LifeNet Health").openPopup(); 

var circle_107 = L.circle(coords_107, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_108 = [ 35.87203545078125 , -78.55087102018229]; 
var markers_108 = L.marker(coords_108).addTo(map); 
markers_108.bindPopup("South Tech Orthopedics, Inc").openPopup(); 

var circle_108 = L.circle(coords_108, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_109 = [ 38.09496481522935 , -84.50481703926604]; 
var markers_109 = L.marker(coords_109).addTo(map); 
markers_109.bindPopup("KLEB, Inc").openPopup(); 

var circle_109 = L.circle(coords_109, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_110 = [ 39.8912248 , -74.9218325]; 
var markers_110 = L.marker(coords_110).addTo(map); 
markers_110.bindPopup("Delaware Valley Institute of Fertility & Genetics").openPopup(); 

var circle_110 = L.circle(coords_110, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_111 = [ 30.28448062403688 , -81.58140083435016]; 
var markers_111 = L.marker(coords_111).addTo(map); 
markers_111.bindPopup("Legacy Donor Services Foundation").openPopup(); 

var circle_111 = L.circle(coords_111, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_112 = [ 37.79403314908486 , -122.42043294475872]; 
var markers_112 = L.marker(coords_112).addTo(map); 
markers_112.bindPopup("Peter Charles Klatsky MD Inc").openPopup(); 

var circle_112 = L.circle(coords_112, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_113 = [ 35.79134895945946 , -78.81702281689189]; 
var markers_113 = L.marker(coords_113).addTo(map); 
markers_113.bindPopup("KryoCal, LLC dba Kryosphere").openPopup(); 

var circle_113 = L.circle(coords_113, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_114 = [ 26.92065174317181 , -80.07816978722468]; 
var markers_114 = L.marker(coords_114).addTo(map); 
markers_114.bindPopup("Southern Edge Orthopaedics").openPopup(); 

var circle_114 = L.circle(coords_114, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_115 = [ 39.3094548 , -84.38346014999999]; 
var markers_115 = L.marker(coords_115).addTo(map); 
markers_115.bindPopup("Cincinnati Eye Bank for Sight Restoration LLC").openPopup(); 

var circle_115 = L.circle(coords_115, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_116 = [ 32.9216165752 , -96.96499905216]; 
var markers_116 = L.marker(coords_116).addTo(map); 
markers_116.bindPopup("IVFMD - Advanced Reproductive Laboratory").openPopup(); 

var circle_116 = L.circle(coords_116, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_117 = [ 40.81398700533533 , -73.47431979636002]; 
var markers_117 = L.marker(coords_117).addTo(map); 
markers_117.bindPopup("Gold Coast IVF").openPopup(); 

var circle_117 = L.circle(coords_117, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_118 = [ 32.91534067650274 , -96.67698686448088]; 
var markers_118 = L.marker(coords_118).addTo(map); 
markers_118.bindPopup("ReproTech, LTD.").openPopup(); 

var circle_118 = L.circle(coords_118, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_119 = [ 36.835030613559326 , -119.81241469830508]; 
var markers_119 = L.marker(coords_119).addTo(map); 
markers_119.bindPopup("Pacific Medical Inc").openPopup(); 

var circle_119 = L.circle(coords_119, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_120 = [ 35.21287095 , -106.71324849574629]; 
var markers_120 = L.marker(coords_120).addTo(map); 
markers_120.bindPopup("The Fertility Center of New Mexico, LLC").openPopup(); 

var circle_120 = L.circle(coords_120, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_121 = [ 32.22127484260638 , -110.843964187249]; 
var markers_121 = L.marker(coords_121).addTo(map); 
markers_121.bindPopup("Arizona Andrology Laboratory & Cryobank").openPopup(); 

var circle_121 = L.circle(coords_121, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_122 = [ 40.6723242 , -74.3573722]; 
var markers_122 = L.marker(coords_122).addTo(map); 
markers_122.bindPopup("John F Freer LLC").openPopup(); 

var circle_122 = L.circle(coords_122, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_123 = [ 39.7589478 , -84.1916069]; 
var markers_123 = L.marker(coords_123).addTo(map); 
markers_123.bindPopup("Lions Eye Bank of West Central Ohio").openPopup(); 

var circle_123 = L.circle(coords_123, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_124 = [ 32.900135 , -96.014949]; 
var markers_124 = L.marker(coords_124).addTo(map); 
markers_124.bindPopup("North Houston Center for Reproductive Medicine dba Hart Fertility Center").openPopup(); 

var circle_124 = L.circle(coords_124, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_125 = [ 40.4416941 , -79.9900861]; 
var markers_125 = L.marker(coords_125).addTo(map); 
markers_125.bindPopup("AHN Center for Reproductive Medicine").openPopup(); 

var circle_125 = L.circle(coords_125, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_126 = [ 33.3175071986456 , -86.79340498013543]; 
var markers_126 = L.marker(coords_126).addTo(map); 
markers_126.bindPopup("Folsom Metal Products, Inc.").openPopup(); 

var circle_126 = L.circle(coords_126, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_127 = [ 18.2345399 , -66.0351316]; 
var markers_127 = L.marker(coords_127).addTo(map); 
markers_127.bindPopup("Orthority Corporation").openPopup(); 

var circle_127 = L.circle(coords_127, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_128 = [ 34.15572909545455 , -118.83504546818182]; 
var markers_128 = L.marker(coords_128).addTo(map); 
markers_128.bindPopup("Tri County Surgery Center").openPopup(); 

var circle_128 = L.circle(coords_128, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_129 = [ 32.729904709205776 , -97.32030240577618]; 
var markers_129 = L.marker(coords_129).addTo(map); 
markers_129.bindPopup("Fort Worth Fertility P.A.").openPopup(); 

var circle_129 = L.circle(coords_129, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_130 = [ 32.729904709205776 , -97.32030240577618]; 
var markers_130 = L.marker(coords_130).addTo(map); 
markers_130.bindPopup("IVF Laboratories of Fort Worth LLC").openPopup(); 

var circle_130 = L.circle(coords_130, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_131 = [ 38.251255884660914 , -85.74952666581999]; 
var markers_131 = L.marker(coords_131).addTo(map); 
markers_131.bindPopup("University of Louisville Health - University of Louisville Hospital").openPopup(); 

var circle_131 = L.circle(coords_131, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_132 = [ 36.86502937171783 , -76.30073375342913]; 
var markers_132 = L.marker(coords_132).addTo(map); 
markers_132.bindPopup("Shady Grove Fertility Jones Institute").openPopup(); 

var circle_132 = L.circle(coords_132, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_133 = [ 41.245167887826085 , -95.96223903065216]; 
var markers_133 = L.marker(coords_133).addTo(map); 
markers_133.bindPopup("Lions Eye Bank Of Nebraska").openPopup(); 

var circle_133 = L.circle(coords_133, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_134 = [ 42.55925320176565 , -87.89355016131621]; 
var markers_134 = L.marker(coords_134).addTo(map); 
markers_134.bindPopup("Aurora Health Care, Fertility Clinic").openPopup(); 

var circle_134 = L.circle(coords_134, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_135 = [ 34.00734638835979 , -117.81298765880577]; 
var markers_135 = L.marker(coords_135).addTo(map); 
markers_135.bindPopup("AFMC Diamond Lab").openPopup(); 

var circle_135 = L.circle(coords_135, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_136 = [ 28.1866014 , -82.36612096903323]; 
var markers_136 = L.marker(coords_136).addTo(map); 
markers_136.bindPopup("SGF Tampa Bay, LLC").openPopup(); 

var circle_136 = L.circle(coords_136, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_137 = [ 38.572433658181815 , -121.47778147909092]; 
var markers_137 = L.marker(coords_137).addTo(map); 
markers_137.bindPopup("Sutter Medical Center, Sacramento").openPopup(); 

var circle_137 = L.circle(coords_137, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_138 = [ 42.963107794251336 , -85.6616826855615]; 
var markers_138 = L.marker(coords_138).addTo(map); 
markers_138.bindPopup("Spectrum Health Hospitals").openPopup(); 

var circle_138 = L.circle(coords_138, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_139 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_139 = L.marker(coords_139).addTo(map); 
markers_139.bindPopup("HonorBridge").openPopup(); 

var circle_139 = L.circle(coords_139, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_140 = [ 42.91711585 , -71.45704521869507]; 
var markers_140 = L.marker(coords_140).addTo(map); 
markers_140.bindPopup("Boston IVF, The New Hampshire Center").openPopup(); 

var circle_140 = L.circle(coords_140, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_141 = [ 33.41961499549114 , -86.79021291304348]; 
var markers_141 = L.marker(coords_141).addTo(map); 
markers_141.bindPopup("Organogenesis Inc.").openPopup(); 

var circle_141 = L.circle(coords_141, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_142 = [ 32.24649813703704 , -110.89184459629628]; 
var markers_142 = L.marker(coords_142).addTo(map); 
markers_142.bindPopup("Reproductive Health Center").openPopup(); 

var circle_142 = L.circle(coords_142, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_143 = [ 40.05147048135593 , -83.0194845031477]; 
var markers_143 = L.marker(coords_143).addTo(map); 
markers_143.bindPopup("Cryobiology Inc").openPopup(); 

var circle_143 = L.circle(coords_143, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_144 = [ 39.96403466330049 , -75.1472920864532]; 
var markers_144 = L.marker(coords_144).addTo(map); 
markers_144.bindPopup("Greater Delaware Valley Society of Transplant Surgeons").openPopup(); 

var circle_144 = L.circle(coords_144, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_145 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_145 = L.marker(coords_145).addTo(map); 
markers_145.bindPopup("Atrium Health Wake Forest Baptist").openPopup(); 

var circle_145 = L.circle(coords_145, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_146 = [ 35.21287095 , -106.71324849574629]; 
var markers_146 = L.marker(coords_146).addTo(map); 
markers_146.bindPopup("UNM Hospitals").openPopup(); 

var circle_146 = L.circle(coords_146, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_147 = [ -26.7982582 , -55.0228553]; 
var markers_147 = L.marker(coords_147).addTo(map); 
markers_147.bindPopup("Safetycord USA, Inc").openPopup(); 

var circle_147 = L.circle(coords_147, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_148 = [ 38.60233038 , -121.44670731090908]; 
var markers_148 = L.marker(coords_148).addTo(map); 
markers_148.bindPopup("Kaiser Permanente Center For Reproductive Health").openPopup(); 

var circle_148 = L.circle(coords_148, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_149 = [ 44.26580775625 , -88.33389556875]; 
var markers_149 = L.marker(coords_149).addTo(map); 
markers_149.bindPopup("American Tissue Services Foundation").openPopup(); 

var circle_149 = L.circle(coords_149, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_150 = [ 41.0650263 , -81.51927045825263]; 
var markers_150 = L.marker(coords_150).addTo(map); 
markers_150.bindPopup("Cleveland Clinic Akron General Fertility Laboratory").openPopup(); 

var circle_150 = L.circle(coords_150, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_151 = [ 29.92759147794117 , -90.102150730042]; 
var markers_151 = L.marker(coords_151).addTo(map); 
markers_151.bindPopup("Audubon Fertility, LLC").openPopup(); 

var circle_151 = L.circle(coords_151, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_152 = [ 41.0534302 , -73.5387341]; 
var markers_152 = L.marker(coords_152).addTo(map); 
markers_152.bindPopup("New England Fertility Institute").openPopup(); 

var circle_152 = L.circle(coords_152, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_153 = [ 18.2345399 , -66.0351316]; 
var markers_153 = L.marker(coords_153).addTo(map); 
markers_153.bindPopup("Coqui Blood Salvage, Inc").openPopup(); 

var circle_153 = L.circle(coords_153, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_154 = [ 41.24789919405941 , -81.74149964752475]; 
var markers_154 = L.marker(coords_154).addTo(map); 
markers_154.bindPopup("Reina Medical Solutions").openPopup(); 

var circle_154 = L.circle(coords_154, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_155 = [ 26.057783 , -80.2695109]; 
var markers_155 = L.marker(coords_155).addTo(map); 
markers_155.bindPopup("Arms, Inc.").openPopup(); 

var circle_155 = L.circle(coords_155, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_156 = [ 42.16511397941111 , -73.26116904844066]; 
var markers_156 = L.marker(coords_156).addTo(map); 
markers_156.bindPopup("New England Cryogenic Center, Inc.").openPopup(); 

var circle_156 = L.circle(coords_156, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_157 = [ 40.3492744 , -74.6592958]; 
var markers_157 = L.marker(coords_157).addTo(map); 
markers_157.bindPopup("Kindbody Princeton").openPopup(); 

var circle_157 = L.circle(coords_157, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_158 = [ 41.64923774069768 , -83.67329669793281]; 
var markers_158 = L.marker(coords_158).addTo(map); 
markers_158.bindPopup("Community Blood Center").openPopup(); 

var circle_158 = L.circle(coords_158, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_159 = [ 25.787314178627003 , -80.20404218192219]; 
var markers_159 = L.marker(coords_159).addTo(map); 
markers_159.bindPopup("Life Alliance Organ Recovery Agency").openPopup(); 

var circle_159 = L.circle(coords_159, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_160 = [ -26.7982582 , -55.0228553]; 
var markers_160 = L.marker(coords_160).addTo(map); 
markers_160.bindPopup("Stryker Puerto Rico Sales LLC").openPopup(); 

var circle_160 = L.circle(coords_160, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_161 = [ 41.47597320643275 , -81.58245206335282]; 
var markers_161 = L.marker(coords_161).addTo(map); 
markers_161.bindPopup("3D Dental Designs and Development LLC").openPopup(); 

var circle_161 = L.circle(coords_161, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_162 = [ 47.71797855142981 , -122.20028472504]; 
var markers_162 = L.marker(coords_162).addTo(map); 
markers_162.bindPopup("Poma Fertility, LLC").openPopup(); 

var circle_162 = L.circle(coords_162, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_163 = [ 39.8912248 , -74.9218325]; 
var markers_163 = L.marker(coords_163).addTo(map); 
markers_163.bindPopup("Reproductive Medicine Associates of New Jersey").openPopup(); 

var circle_163 = L.circle(coords_163, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_164 = [ 33.5206824 , -86.8024326]; 
var markers_164 = L.marker(coords_164).addTo(map); 
markers_164.bindPopup("NuTech Spine, Inc.").openPopup(); 

var circle_164 = L.circle(coords_164, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_165 = [ 36.82147524 , -119.82788195999998]; 
var markers_165 = L.marker(coords_165).addTo(map); 
markers_165.bindPopup("FMCNA Fresno").openPopup(); 

var circle_165 = L.circle(coords_165, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_166 = [ 40.0726070131379 , -76.32322849989143]; 
var markers_166 = L.marker(coords_166).addTo(map); 
markers_166.bindPopup("Eurofins Lancaster Laboratories, Inc").openPopup(); 

var circle_166 = L.circle(coords_166, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_167 = [ 35.76428917184015 , -78.58398265148699]; 
var markers_167 = L.marker(coords_167).addTo(map); 
markers_167.bindPopup("Birth Tissue Recovery").openPopup(); 

var circle_167 = L.circle(coords_167, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_168 = [ 41.69013822572254 , -91.5838641468208]; 
var markers_168 = L.marker(coords_168).addTo(map); 
markers_168.bindPopup("Iowa Lions Eye Bank").openPopup(); 

var circle_168 = L.circle(coords_168, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_169 = [ 33.78830559480986 , -117.87242521238436]; 
var markers_169 = L.marker(coords_169).addTo(map); 
markers_169.bindPopup("Hematopoietic Stem Cell Transplanation and Cellular Therapy, UCI Medical Center").openPopup(); 

var circle_169 = L.circle(coords_169, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_170 = [ 39.97019849205298 , -83.00356617678808]; 
var markers_170 = L.marker(coords_170).addTo(map); 
markers_170.bindPopup("CDC Medical LLC").openPopup(); 

var circle_170 = L.circle(coords_170, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_171 = [ 30.27043351704015 , -97.74294440887022]; 
var markers_171 = L.marker(coords_171).addTo(map); 
markers_171.bindPopup("Peach State Medical Practice, P.C.").openPopup(); 

var circle_171 = L.circle(coords_171, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_172 = [ 29.56857722407504 , -98.61441590932778]; 
var markers_172 = L.marker(coords_172).addTo(map); 
markers_172.bindPopup("Havencryo").openPopup(); 

var circle_172 = L.circle(coords_172, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_173 = [ 42.293429707102185 , -71.46839268984117]; 
var markers_173 = L.marker(coords_173).addTo(map); 
markers_173.bindPopup("UMASS Memorial Hospital").openPopup(); 

var circle_173 = L.circle(coords_173, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_174 = [ 33.620142173448954 , -117.92814826259163]; 
var markers_174 = L.marker(coords_174).addTo(map); 
markers_174.bindPopup("Global Premier Fertility Orange County LLC").openPopup(); 

var circle_174 = L.circle(coords_174, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_175 = [ 40.7127281 , -74.0060152]; 
var markers_175 = L.marker(coords_175).addTo(map); 
markers_175.bindPopup("Spring Fertility New York").openPopup(); 

var circle_175 = L.circle(coords_175, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_176 = [ 37.71923590673684 , -122.1403940731579]; 
var markers_176 = L.marker(coords_176).addTo(map); 
markers_176.bindPopup("Fellow Health Inc").openPopup(); 

var circle_176 = L.circle(coords_176, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_177 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_177 = L.marker(coords_177).addTo(map); 
markers_177.bindPopup("Seattle Sperm Bank LLC").openPopup(); 

var circle_177 = L.circle(coords_177, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_178 = [ 40.414071 , -74.3042101]; 
var markers_178 = L.marker(coords_178).addTo(map); 
markers_178.bindPopup("M3 Medical Resources LLC").openPopup(); 

var circle_178 = L.circle(coords_178, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_179 = [ 38.25325909885038 , -85.55736807643287]; 
var markers_179 = L.marker(coords_179).addTo(map); 
markers_179.bindPopup("Kentucky Organ Donor Affiliates, Inc.").openPopup(); 

var circle_179 = L.circle(coords_179, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_180 = [ 0.0 , 0.0]; 
var markers_180 = L.marker(coords_180).addTo(map); 
markers_180.bindPopup("Tenderneeds Fertility LLC").openPopup(); 

var circle_180 = L.circle(coords_180, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_181 = [ 43.0400626 , -77.6616685]; 
var markers_181 = L.marker(coords_181).addTo(map); 
markers_181.bindPopup("UR Medicine Labs Central Laboratory").openPopup(); 

var circle_181 = L.circle(coords_181, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_182 = [ 32.695176454851484 , -97.08666312831684]; 
var markers_182 = L.marker(coords_182).addTo(map); 
markers_182.bindPopup("Cryobank America LLC").openPopup(); 

var circle_182 = L.circle(coords_182, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_183 = [ 33.7489924 , -84.3902644]; 
var markers_183 = L.marker(coords_183).addTo(map); 
markers_183.bindPopup("Colorado Center for Reproductive Medicine DBA Atlanta Center for Reproductive Medicine").openPopup(); 

var circle_183 = L.circle(coords_183, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_184 = [ 41.575705209577926 , -81.22019377646104]; 
var markers_184 = L.marker(coords_184).addTo(map); 
markers_184.bindPopup("Stembanc Inc").openPopup(); 

var circle_184 = L.circle(coords_184, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_185 = [ 39.065813 , -84.7027575]; 
var markers_185 = L.marker(coords_185).addTo(map); 
markers_185.bindPopup("Viacord LLC").openPopup(); 

var circle_185 = L.circle(coords_185, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_186 = [ 35.76428917184015 , -78.58398265148699]; 
var markers_186 = L.marker(coords_186).addTo(map); 
markers_186.bindPopup("Birth Tissue Recovery").openPopup(); 

var circle_186 = L.circle(coords_186, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_187 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_187 = L.marker(coords_187).addTo(map); 
markers_187.bindPopup("Eurofins Donor & Product Testing Inc.").openPopup(); 

var circle_187 = L.circle(coords_187, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_188 = [ 40.7127281 , -74.0060152]; 
var markers_188 = L.marker(coords_188).addTo(map); 
markers_188.bindPopup("Northwell Health Fertility NYC").openPopup(); 

var circle_188 = L.circle(coords_188, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_189 = [ 40.1480754 , -82.9277936]; 
var markers_189 = L.marker(coords_189).addTo(map); 
markers_189.bindPopup("Reproductive Gynecology Labs Columbus").openPopup(); 

var circle_189 = L.circle(coords_189, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_190 = [ 40.5792701 , -74.4115401]; 
var markers_190 = L.marker(coords_190).addTo(map); 
markers_190.bindPopup("Reproductive Center Of Central New Jersey").openPopup(); 

var circle_190 = L.circle(coords_190, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_191 = [ 33.481228523272215 , -82.06267984090267]; 
var markers_191 = L.marker(coords_191).addTo(map); 
markers_191.bindPopup("The Healing Bank").openPopup(); 

var circle_191 = L.circle(coords_191, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_192 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_192 = L.marker(coords_192).addTo(map); 
markers_192.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_192 = L.circle(coords_192, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_193 = [ 42.114939260121 , -71.23978397237428]; 
var markers_193 = L.marker(coords_193).addTo(map); 
markers_193.bindPopup("Tufts Medical Center").openPopup(); 

var circle_193 = L.circle(coords_193, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_194 = [ 40.70131537869023 , -73.9182558089397]; 
var markers_194 = L.marker(coords_194).addTo(map); 
markers_194.bindPopup("Regenerative Biologics Inc").openPopup(); 

var circle_194 = L.circle(coords_194, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_195 = [ 39.27821717318768 , -76.7420666717799]; 
var markers_195 = L.marker(coords_195).addTo(map); 
markers_195.bindPopup("CorneaGen").openPopup(); 

var circle_195 = L.circle(coords_195, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_196 = [ 42.237770056612526 , -83.7205163035267]; 
var markers_196 = L.marker(coords_196).addTo(map); 
markers_196.bindPopup("Organ Procurement Agency of Michigan").openPopup(); 

var circle_196 = L.circle(coords_196, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_197 = [ 37.86943613684211 , -122.26646126194332]; 
var markers_197 = L.marker(coords_197).addTo(map); 
markers_197.bindPopup("Reproductive Technologies, Inc.").openPopup(); 

var circle_197 = L.circle(coords_197, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_198 = [ 30.29209155560946 , -97.7390149515464]; 
var markers_198 = L.marker(coords_198).addTo(map); 
markers_198.bindPopup("Fairfax Cryobank, Inc.").openPopup(); 

var circle_198 = L.circle(coords_198, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_199 = [ 38.30419560827725 , -85.5751837752307]; 
var markers_199 = L.marker(coords_199).addTo(map); 
markers_199.bindPopup("Kentucky Fertility Institute LLC").openPopup(); 

var circle_199 = L.circle(coords_199, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_200 = [ 36.533767 , -82.33343531171823]; 
var markers_200 = L.marker(coords_200).addTo(map); 
markers_200.bindPopup("Birth Tissue Donor Services of TN, Inc.").openPopup(); 

var circle_200 = L.circle(coords_200, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_201 = [ 39.95764396098266 , -75.1973050515896]; 
var markers_201 = L.marker(coords_201).addTo(map); 
markers_201.bindPopup("Children's Hospital of Philadelphia").openPopup(); 

var circle_201 = L.circle(coords_201, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_202 = [ 36.19165628526316 , -86.80449248]; 
var markers_202 = L.marker(coords_202).addTo(map); 
markers_202.bindPopup("DCI Donor Services Tissue Bank").openPopup(); 

var circle_202 = L.circle(coords_202, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_203 = [ 40.7127281 , -74.0060152]; 
var markers_203 = L.marker(coords_203).addTo(map); 
markers_203.bindPopup("Kindbody Bryant Park").openPopup(); 

var circle_203 = L.circle(coords_203, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_204 = [ 33.5846448 , -101.8920188]; 
var markers_204 = L.marker(coords_204).addTo(map); 
markers_204.bindPopup("Great Plains Lions Eye Bank, Inc").openPopup(); 

var circle_204 = L.circle(coords_204, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_205 = [ 33.9528472 , -84.5496148]; 
var markers_205 = L.marker(coords_205).addTo(map); 
markers_205.bindPopup("Xytex Laboratories").openPopup(); 

var circle_205 = L.circle(coords_205, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_206 = [ 26.1421976 , -81.7942944]; 
var markers_206 = L.marker(coords_206).addTo(map); 
markers_206.bindPopup("South Florida Institute for Reproductive Medicine").openPopup(); 

var circle_206 = L.circle(coords_206, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_207 = [ 35.913416928786006 , -78.92076870844033]; 
var markers_207 = L.marker(coords_207).addTo(map); 
markers_207.bindPopup("Duke Fertility Center").openPopup(); 

var circle_207 = L.circle(coords_207, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_208 = [ 44.5470092 , -73.15461]; 
var markers_208 = L.marker(coords_208).addTo(map); 
markers_208.bindPopup("Northeastern Reproductive Medicine PLLC").openPopup(); 

var circle_208 = L.circle(coords_208, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_209 = [ 26.37944755612009 , -80.09710963418014]; 
var markers_209 = L.marker(coords_209).addTo(map); 
markers_209.bindPopup("Republic Spine, LLC").openPopup(); 

var circle_209 = L.circle(coords_209, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_210 = [ 28.5716466195122 , -81.38436181219512]; 
var markers_210 = L.marker(coords_210).addTo(map); 
markers_210.bindPopup("Fones Marketing Management").openPopup(); 

var circle_210 = L.circle(coords_210, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_211 = [ 43.4887907 , -112.03628]; 
var markers_211 = L.marker(coords_211).addTo(map); 
markers_211.bindPopup("Idaho Fertility Center").openPopup(); 

var circle_211 = L.circle(coords_211, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_212 = [ 38.5583982158371 , -121.5455255985294]; 
var markers_212 = L.marker(coords_212).addTo(map); 
markers_212.bindPopup("DCI Donor Services").openPopup(); 

var circle_212 = L.circle(coords_212, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_213 = [ 40.0726070131379 , -76.32322849989143]; 
var markers_213 = L.marker(coords_213).addTo(map); 
markers_213.bindPopup("Shady Grove Fertility Center of Pennsylvania , PLLC").openPopup(); 

var circle_213 = L.circle(coords_213, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_214 = [ 40.7127281 , -74.0060152]; 
var markers_214 = L.marker(coords_214).addTo(map); 
markers_214.bindPopup("Ferny").openPopup(); 

var circle_214 = L.circle(coords_214, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_215 = [ 38.98481063962704 , -76.51679856678321]; 
var markers_215 = L.marker(coords_215).addTo(map); 
markers_215.bindPopup("Shady Grove Reproductive Science Center P.C.").openPopup(); 

var circle_215 = L.circle(coords_215, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_216 = [ 25.99065221948912 , -80.33884396688741]; 
var markers_216 = L.marker(coords_216).addTo(map); 
markers_216.bindPopup("Conceptions Fertility Laboratories LLC").openPopup(); 

var circle_216 = L.circle(coords_216, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_217 = [ 34.0028569 , -84.1441046]; 
var markers_217 = L.marker(coords_217).addTo(map); 
markers_217.bindPopup("Atlanta Dental Supply, Inc.").openPopup(); 

var circle_217 = L.circle(coords_217, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_218 = [ 34.22184849816794 , -77.88329930534351]; 
var markers_218 = L.marker(coords_218).addTo(map); 
markers_218.bindPopup("Wilmington Reproductive Laboratories").openPopup(); 

var circle_218 = L.circle(coords_218, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_219 = [ 39.68496707378593 , -84.15923403657087]; 
var markers_219 = L.marker(coords_219).addTo(map); 
markers_219.bindPopup("UC Reproductive Medicine at Kettering").openPopup(); 

var circle_219 = L.circle(coords_219, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_220 = [ 42.8672291 , -73.74229679518734]; 
var markers_220 = L.marker(coords_220).addTo(map); 
markers_220.bindPopup("Upstate New York Transplant Services Inc").openPopup(); 

var circle_220 = L.circle(coords_220, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_221 = [ 38.93973767625571 , -77.08686526149164]; 
var markers_221 = L.marker(coords_221).addTo(map); 
markers_221.bindPopup("Shady Grove Fertility Reproductive Science Center").openPopup(); 

var circle_221 = L.circle(coords_221, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_222 = [ 35.80023471623377 , -78.70691701103895]; 
var markers_222 = L.marker(coords_222).addTo(map); 
markers_222.bindPopup("Carolina Conceptions, PA").openPopup(); 

var circle_222 = L.circle(coords_222, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_223 = [ 40.9981532 , -73.9618039]; 
var markers_223 = L.marker(coords_223).addTo(map); 
markers_223.bindPopup("Hiossen Inc.").openPopup(); 

var circle_223 = L.circle(coords_223, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_224 = [ 25.99065221948912 , -80.33884396688741]; 
var markers_224 = L.marker(coords_224).addTo(map); 
markers_224.bindPopup("Healthcare International Partners LLC").openPopup(); 

var circle_224 = L.circle(coords_224, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_225 = [ 29.828906083923304 , -95.4705428859882]; 
var markers_225 = L.marker(coords_225).addTo(map); 
markers_225.bindPopup("American Egg Bank, LLC").openPopup(); 

var circle_225 = L.circle(coords_225, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_226 = [ 34.1530842 , -118.4489364]; 
var markers_226 = L.marker(coords_226).addTo(map); 
markers_226.bindPopup("Valley Center for Reproductive Health Inc.").openPopup(); 

var circle_226 = L.circle(coords_226, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_227 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_227 = L.marker(coords_227).addTo(map); 
markers_227.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_227 = L.circle(coords_227, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_228 = [ 45.77544815386997 , -111.17630650866872]; 
var markers_228 = L.marker(coords_228).addTo(map); 
markers_228.bindPopup("Xtant Medical Holdings Inc").openPopup(); 

var circle_228 = L.circle(coords_228, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_229 = [ 40.2962222 , -74.0509725]; 
var markers_229 = L.marker(coords_229).addTo(map); 
markers_229.bindPopup("Osteotech, Inc.").openPopup(); 

var circle_229 = L.circle(coords_229, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_230 = [ 34.20969258103448 , -118.4874811775862]; 
var markers_230 = L.marker(coords_230).addTo(map); 
markers_230.bindPopup("R & B Medical Group Inc.").openPopup(); 

var circle_230 = L.circle(coords_230, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_231 = [ 39.0477777 , -77.1013265]; 
var markers_231 = L.marker(coords_231).addTo(map); 
markers_231.bindPopup("Montgomery Women's Medical Center PC dba Montgomery Fertility Center").openPopup(); 

var circle_231 = L.circle(coords_231, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_232 = [ 33.9528472 , -84.5496148]; 
var markers_232 = L.marker(coords_232).addTo(map); 
markers_232.bindPopup("Georgia Reproductive Specialists LLC").openPopup(); 

var circle_232 = L.circle(coords_232, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_233 = [ 41.662362686094674 , -91.49432491094674]; 
var markers_233 = L.marker(coords_233).addTo(map); 
markers_233.bindPopup("University of Iowa Hopsitals and Clinics IVF Clinic").openPopup(); 

var circle_233 = L.circle(coords_233, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_234 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_234 = L.marker(coords_234).addTo(map); 
markers_234.bindPopup("Seattle Sperm Bank LLC").openPopup(); 

var circle_234 = L.circle(coords_234, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_235 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_235 = L.marker(coords_235).addTo(map); 
markers_235.bindPopup("Gen5 Fertility Center").openPopup(); 

var circle_235 = L.circle(coords_235, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_236 = [ 33.678814928479 , -117.7440965949406]; 
var markers_236 = L.marker(coords_236).addTo(map); 
markers_236.bindPopup("American Fertility Medical Center - Genetic Infertility & Andrology Laboratory, Inc.").openPopup(); 

var circle_236 = L.circle(coords_236, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_237 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_237 = L.marker(coords_237).addTo(map); 
markers_237.bindPopup("VRL Eurofins").openPopup(); 

var circle_237 = L.circle(coords_237, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_238 = [ 38.251255884660914 , -85.74952666581999]; 
var markers_238 = L.marker(coords_238).addTo(map); 
markers_238.bindPopup("KLEB Inc").openPopup(); 

var circle_238 = L.circle(coords_238, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_239 = [ 35.97757713090738 , -83.99115289650284]; 
var markers_239 = L.marker(coords_239).addTo(map); 
markers_239.bindPopup("Medic Inc").openPopup(); 

var circle_239 = L.circle(coords_239, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_240 = [ 28.76679177783252 , -81.35391190837439]; 
var markers_240 = L.marker(coords_240).addTo(map); 
markers_240.bindPopup("Reproductive Medicine Associates of Florida").openPopup(); 

var circle_240 = L.circle(coords_240, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_241 = [ 42.5048167 , -71.1956111]; 
var markers_241 = L.marker(coords_241).addTo(map); 
markers_241.bindPopup("LeMaitre Vascular, Inc.").openPopup(); 

var circle_241 = L.circle(coords_241, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_242 = [ 30.46878694862444 , -84.23723493429303]; 
var markers_242 = L.marker(coords_242).addTo(map); 
markers_242.bindPopup("TelaGen, LLC").openPopup(); 

var circle_242 = L.circle(coords_242, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_243 = [ 37.641352373958334 , -122.11358944270832]; 
var markers_243 = L.marker(coords_243).addTo(map); 
markers_243.bindPopup("Nutek Bravo LLC").openPopup(); 

var circle_243 = L.circle(coords_243, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_244 = [ 26.5256179 , -80.0666026]; 
var markers_244 = L.marker(coords_244).addTo(map); 
markers_244.bindPopup("Stem Cell Cryo Bank, LLC / SFBMSCTI").openPopup(); 

var circle_244 = L.circle(coords_244, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_245 = [ 42.11482100352973 , -71.23992621762432]; 
var markers_245 = L.marker(coords_245).addTo(map); 
markers_245.bindPopup("Brigham And Women's Hospital").openPopup(); 

var circle_245 = L.circle(coords_245, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_246 = [ 40.58703793200637 , -105.06372194601911]; 
var markers_246 = L.marker(coords_246).addTo(map); 
markers_246.bindPopup("Rocky Mountain Center for Reproductive Medicine").openPopup(); 

var circle_246 = L.circle(coords_246, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_247 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_247 = L.marker(coords_247).addTo(map); 
markers_247.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_247 = L.circle(coords_247, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_248 = [ 39.091220046581874 , -77.17062372615263]; 
var markers_248 = L.marker(coords_248).addTo(map); 
markers_248.bindPopup("Women's Fertility and Health Center").openPopup(); 

var circle_248 = L.circle(coords_248, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_249 = [ 28.1866014 , -82.36612096903323]; 
var markers_249 = L.marker(coords_249).addTo(map); 
markers_249.bindPopup("SGF Tampa Bay, LLC").openPopup(); 

var circle_249 = L.circle(coords_249, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_250 = [ 39.1516452876 , -84.4310678316]; 
var markers_250 = L.marker(coords_250).addTo(map); 
markers_250.bindPopup("Ohio Fertility Providers LLC").openPopup(); 

var circle_250 = L.circle(coords_250, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_251 = [ 36.51465372803618 , -87.26560849651163]; 
var markers_251 = L.marker(coords_251).addTo(map); 
markers_251.bindPopup("Birth Tissue Donor Services of Tennessee").openPopup(); 

var circle_251 = L.circle(coords_251, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_252 = [ 41.0264862 , -73.6284598]; 
var markers_252 = L.marker(coords_252).addTo(map); 
markers_252.bindPopup("American Fertility Services").openPopup(); 

var circle_252 = L.circle(coords_252, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_253 = [ 37.27094614024768 , -79.94930497863777]; 
var markers_253 = L.marker(coords_253).addTo(map); 
markers_253.bindPopup("Carilion Clinic Reproductive Medicine and Fertility").openPopup(); 

var circle_253 = L.circle(coords_253, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_254 = [ 0.0 , 0.0]; 
var markers_254 = L.marker(coords_254).addTo(map); 
markers_254.bindPopup("Birth Biologic, LLC").openPopup(); 

var circle_254 = L.circle(coords_254, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_255 = [ 36.10196660580271 , -80.22841610270794]; 
var markers_255 = L.marker(coords_255).addTo(map); 
markers_255.bindPopup("CorneaGen Inc.").openPopup(); 

var circle_255 = L.circle(coords_255, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_256 = [ 33.8584368 , -84.340203]; 
var markers_256 = L.marker(coords_256).addTo(map); 
markers_256.bindPopup("CryoChoice, LLC").openPopup(); 

var circle_256 = L.circle(coords_256, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_257 = [ 33.13941946434245 , -96.84132154060018]; 
var markers_257 = L.marker(coords_257).addTo(map); 
markers_257.bindPopup("North Texas Male Infertility Center, P.A.").openPopup(); 

var circle_257 = L.circle(coords_257, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_258 = [ 33.9934867 , -81.0739826]; 
var markers_258 = L.marker(coords_258).addTo(map); 
markers_258.bindPopup("We Are Sharing Hope SC").openPopup(); 

var circle_258 = L.circle(coords_258, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_259 = [ 33.17769772071902 , -96.68243141646168]; 
var markers_259 = L.marker(coords_259).addTo(map); 
markers_259.bindPopup("Allen Reproductive Center").openPopup(); 

var circle_259 = L.circle(coords_259, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_260 = [ 29.50626249341317 , -98.5683992]; 
var markers_260 = L.marker(coords_260).addTo(map); 
markers_260.bindPopup("South Texas Blood and Tissue Center (University)").openPopup(); 

var circle_260 = L.circle(coords_260, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_261 = [ 33.11579614338395 , -96.69214992104122]; 
var markers_261 = L.marker(coords_261).addTo(map); 
markers_261.bindPopup("Dallas Fort Worth Center for Fertility and IVF").openPopup(); 

var circle_261 = L.circle(coords_261, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_262 = [ 38.5583982158371 , -121.5455255985294]; 
var markers_262 = L.marker(coords_262).addTo(map); 
markers_262.bindPopup("DCI Donor Services").openPopup(); 

var circle_262 = L.circle(coords_262, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_263 = [ 37.918873387912086 , -122.34419256043957]; 
var markers_263 = L.marker(coords_263).addTo(map); 
markers_263.bindPopup("Aziyo Biologics Inc").openPopup(); 

var circle_263 = L.circle(coords_263, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_264 = [ 42.65623513692288 , -73.79919614401811]; 
var markers_264 = L.marker(coords_264).addTo(map); 
markers_264.bindPopup("Albany Medical Center Hospital").openPopup(); 

var circle_264 = L.circle(coords_264, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_265 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_265 = L.marker(coords_265).addTo(map); 
markers_265.bindPopup("Seattle Reproductive Medicine, Inc., P.S.").openPopup(); 

var circle_265 = L.circle(coords_265, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_266 = [ 33.67890576982444 , -112.00186853647472]; 
var markers_266 = L.marker(coords_266).addTo(map); 
markers_266.bindPopup("Gondra, Maria M, M.D., FACOG").openPopup(); 

var circle_266 = L.circle(coords_266, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_267 = [ 37.54803795 , -77.56512326304173]; 
var markers_267 = L.marker(coords_267).addTo(map); 
markers_267.bindPopup("VCU Health System Reproductive Medicine and IVF").openPopup(); 

var circle_267 = L.circle(coords_267, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_268 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_268 = L.marker(coords_268).addTo(map); 
markers_268.bindPopup("IVF Laboratories of Nashville, LLC").openPopup(); 

var circle_268 = L.circle(coords_268, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_269 = [ 39.1078525383592 , -84.51022905133037]; 
var markers_269 = L.marker(coords_269).addTo(map); 
markers_269.bindPopup("Eurofins Donor & Product Testing Inc Cincinnati").openPopup(); 

var circle_269 = L.circle(coords_269, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_270 = [ 33.501464041776934 , -112.03855059924386]; 
var markers_270 = L.marker(coords_270).addTo(map); 
markers_270.bindPopup("Arizona Reproductive Medicine Specialists").openPopup(); 

var circle_270 = L.circle(coords_270, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_271 = [ 47.9012653 , -122.2529336]; 
var markers_271 = L.marker(coords_271).addTo(map); 
markers_271.bindPopup("Seattle Reproductive Medicine Inc P.S.").openPopup(); 

var circle_271 = L.circle(coords_271, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_272 = [ 36.838799376683625 , -76.09376831143405]; 
var markers_272 = L.marker(coords_272).addTo(map); 
markers_272.bindPopup("The New Hope Center For Reproductive Medicine").openPopup(); 

var circle_272 = L.circle(coords_272, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_273 = [ 39.76665487697757 , -105.02032190978451]; 
var markers_273 = L.marker(coords_273).addTo(map); 
markers_273.bindPopup("Embryo Connections, LLC").openPopup(); 

var circle_273 = L.circle(coords_273, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_274 = [ 34.12441453590909 , -118.05159385954543]; 
var markers_274 = L.marker(coords_274).addTo(map); 
markers_274.bindPopup("Harvest IVF Lab Inc.").openPopup(); 

var circle_274 = L.circle(coords_274, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_275 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_275 = L.marker(coords_275).addTo(map); 
markers_275.bindPopup("MFF LLC").openPopup(); 

var circle_275 = L.circle(coords_275, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_276 = [ 29.731311147058825 , -95.4373082882353]; 
var markers_276 = L.marker(coords_276).addTo(map); 
markers_276.bindPopup("Inovi Fertility and Genetics Institute").openPopup(); 

var circle_276 = L.circle(coords_276, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_277 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_277 = L.marker(coords_277).addTo(map); 
markers_277.bindPopup("Bloom Reproductive Institute").openPopup(); 

var circle_277 = L.circle(coords_277, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_278 = [ 33.7110934 , -117.7939237]; 
var markers_278 = L.marker(coords_278).addTo(map); 
markers_278.bindPopup("Reproductive Endocrine Center Sperm Physiology Lab").openPopup(); 

var circle_278 = L.circle(coords_278, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_279 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_279 = L.marker(coords_279).addTo(map); 
markers_279.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_279 = L.circle(coords_279, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_280 = [ 42.8672291 , -73.74229679518734]; 
var markers_280 = L.marker(coords_280).addTo(map); 
markers_280.bindPopup("Upstate New York Transplant Services Inc").openPopup(); 

var circle_280 = L.circle(coords_280, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_281 = [ 41.1175966 , -73.4078968]; 
var markers_281 = L.marker(coords_281).addTo(map); 
markers_281.bindPopup("Reproductive Medicine Associates Of Connecticut").openPopup(); 

var circle_281 = L.circle(coords_281, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_282 = [ 39.541827 , -104.84612446579108]; 
var markers_282 = L.marker(coords_282).addTo(map); 
markers_282.bindPopup("Gemini Mountain Medical LLC").openPopup(); 

var circle_282 = L.circle(coords_282, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_283 = [ -26.7982582 , -55.0228553]; 
var markers_283 = L.marker(coords_283).addTo(map); 
markers_283.bindPopup("Home Orthopedics Corp").openPopup(); 

var circle_283 = L.circle(coords_283, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_284 = [ 42.51062335123967 , -83.16016153755739]; 
var markers_284 = L.marker(coords_284).addTo(map); 
markers_284.bindPopup("International Cryogenics, Inc.").openPopup(); 

var circle_284 = L.circle(coords_284, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_285 = [ 40.78916667135916 , -73.40590462377018]; 
var markers_285 = L.marker(coords_285).addTo(map); 
markers_285.bindPopup("New York Blood Center Enterprises").openPopup(); 

var circle_285 = L.circle(coords_285, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_286 = [ 33.59414446306805 , -117.6996269227219]; 
var markers_286 = L.marker(coords_286).addTo(map); 
markers_286.bindPopup("Marcus Rosencrantz MD A Professional Corporation").openPopup(); 

var circle_286 = L.circle(coords_286, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_287 = [ 33.302598810211265 , -111.7375930725352]; 
var markers_287 = L.marker(coords_287).addTo(map); 
markers_287.bindPopup("New Directions Fertility Center").openPopup(); 

var circle_287 = L.circle(coords_287, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_288 = [ 33.678814928479 , -117.7440965949406]; 
var markers_288 = L.marker(coords_288).addTo(map); 
markers_288.bindPopup("Healthbanks Biotech USA Inc").openPopup(); 

var circle_288 = L.circle(coords_288, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_289 = [ 35.21287095 , -106.71324849574629]; 
var markers_289 = L.marker(coords_289).addTo(map); 
markers_289.bindPopup("Caperton Fertility Institute LLC").openPopup(); 

var circle_289 = L.circle(coords_289, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_290 = [ 18.3990551 , -66.1560326]; 
var markers_290 = L.marker(coords_290).addTo(map); 
markers_290.bindPopup("Strong Care Corp").openPopup(); 

var circle_290 = L.circle(coords_290, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_291 = [ 38.946447611702126 , -104.77665368244682]; 
var markers_291 = L.marker(coords_291).addTo(map); 
markers_291.bindPopup("Advanced Reproductive Medicine at Univ. of Colorado Denver").openPopup(); 

var circle_291 = L.circle(coords_291, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_292 = [ 18.4097444 , -66.0534648]; 
var markers_292 = L.marker(coords_292).addTo(map); 
markers_292.bindPopup("First Choice Prosthetic, Corp").openPopup(); 

var circle_292 = L.circle(coords_292, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_293 = [ 42.963107794251336 , -85.6616826855615]; 
var markers_293 = L.marker(coords_293).addTo(map); 
markers_293.bindPopup("Versiti Michigan Inc").openPopup(); 

var circle_293 = L.circle(coords_293, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_294 = [ 43.11370735 , -77.67223448331175]; 
var markers_294 = L.marker(coords_294).addTo(map); 
markers_294.bindPopup("Strong Fertility Center").openPopup(); 

var circle_294 = L.circle(coords_294, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_295 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_295 = L.marker(coords_295).addTo(map); 
markers_295.bindPopup("VRL Eurofins").openPopup(); 

var circle_295 = L.circle(coords_295, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_296 = [ 39.54758138761905 , -104.88359426666666]; 
var markers_296 = L.marker(coords_296).addTo(map); 
markers_296.bindPopup("Colorado Center for Reproductive Medicine").openPopup(); 

var circle_296 = L.circle(coords_296, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_297 = [ 25.75554713246176 , -80.27007556390964]; 
var markers_297 = L.marker(coords_297).addTo(map); 
markers_297.bindPopup("Servi-Dent Inc.").openPopup(); 

var circle_297 = L.circle(coords_297, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_298 = [ 39.22421115 , -76.68556148122171]; 
var markers_298 = L.marker(coords_298).addTo(map); 
markers_298.bindPopup("Transplant Resource Center of Maryland").openPopup(); 

var circle_298 = L.circle(coords_298, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_299 = [ 0.0 , 0.0]; 
var markers_299 = L.marker(coords_299).addTo(map); 
markers_299.bindPopup("MFC Lab, Inc.").openPopup(); 

var circle_299 = L.circle(coords_299, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_300 = [ 41.64923774069768 , -83.67329669793281]; 
var markers_300 = L.marker(coords_300).addTo(map); 
markers_300.bindPopup("Community Blood Center").openPopup(); 

var circle_300 = L.circle(coords_300, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_301 = [ 40.45516705 , -111.77577216]; 
var markers_301 = L.marker(coords_301).addTo(map); 
markers_301.bindPopup("Apex Biologics").openPopup(); 

var circle_301 = L.circle(coords_301, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_302 = [ 39.6616707 , -75.74889909109223]; 
var markers_302 = L.marker(coords_302).addTo(map); 
markers_302.bindPopup("Reproductive Associates Of Delaware").openPopup(); 

var circle_302 = L.circle(coords_302, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_303 = [ 39.64494213862069 , -79.95461672931035]; 
var markers_303 = L.marker(coords_303).addTo(map); 
markers_303.bindPopup("R&B Medical Services and Supplies Inc.").openPopup(); 

var circle_303 = L.circle(coords_303, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_304 = [ 40.8243307 , -80.2502301]; 
var markers_304 = L.marker(coords_304).addTo(map); 
markers_304.bindPopup("Reproductive Medicine Associates Of Philadelphia, P.c.").openPopup(); 

var circle_304 = L.circle(coords_304, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_305 = [ 32.815783403703705 , -79.85590349741862]; 
var markers_305 = L.marker(coords_305).addTo(map); 
markers_305.bindPopup("The Fertility Center of Charleston").openPopup(); 

var circle_305 = L.circle(coords_305, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_306 = [ 27.975532 , -82.7549780946502]; 
var markers_306 = L.marker(coords_306).addTo(map); 
markers_306.bindPopup("Florida Fertility Institute, P.A.").openPopup(); 

var circle_306 = L.circle(coords_306, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_307 = [ 36.06871756420664 , -79.46427671476015]; 
var markers_307 = L.marker(coords_307).addTo(map); 
markers_307.bindPopup("Laboratory Corporation of America ViroMed Laboratories").openPopup(); 

var circle_307 = L.circle(coords_307, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_308 = [ 38.89880836186567 , -94.8287184461194]; 
var markers_308 = L.marker(coords_308).addTo(map); 
markers_308.bindPopup("Midwest Reproductive Center PA").openPopup(); 

var circle_308 = L.circle(coords_308, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_309 = [ 34.665773 , -86.555413]; 
var markers_309 = L.marker(coords_309).addTo(map); 
markers_309.bindPopup("Prime Surgical, LLC").openPopup(); 

var circle_309 = L.circle(coords_309, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_310 = [ 39.734923864016736 , -105.02575375216976]; 
var markers_310 = L.marker(coords_310).addTo(map); 
markers_310.bindPopup("Denver Health Medical Center").openPopup(); 

var circle_310 = L.circle(coords_310, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_311 = [ 39.64494213862069 , -79.95461672931035]; 
var markers_311 = L.marker(coords_311).addTo(map); 
markers_311.bindPopup("Center for Reproductive Medicine West Virginia University").openPopup(); 

var circle_311 = L.circle(coords_311, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_312 = [ 44.27378512249589 , -88.39750244367816]; 
var markers_312 = L.marker(coords_312).addTo(map); 
markers_312.bindPopup("ThedaCare Laboratories").openPopup(); 

var circle_312 = L.circle(coords_312, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_313 = [ 42.3756401 , -71.2358004]; 
var markers_313 = L.marker(coords_313).addTo(map); 
markers_313.bindPopup("CorneaGen - Boston").openPopup(); 

var circle_313 = L.circle(coords_313, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_314 = [ 38.62351752450111 , -90.25591997815964]; 
var markers_314 = L.marker(coords_314).addTo(map); 
markers_314.bindPopup("Barnes-Jewish Hospital").openPopup(); 

var circle_314 = L.circle(coords_314, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_315 = [ 44.48717433496183 , -87.93264216458016]; 
var markers_315 = L.marker(coords_315).addTo(map); 
markers_315.bindPopup("Aurora Fertility Services").openPopup(); 

var circle_315 = L.circle(coords_315, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_316 = [ 42.65717 , -71.1408776]; 
var markers_316 = L.marker(coords_316).addTo(map); 
markers_316.bindPopup("Straumann USA LLC").openPopup(); 

var circle_316 = L.circle(coords_316, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_317 = [ 37.315744436912695 , -121.9375273549018]; 
var markers_317 = L.marker(coords_317).addTo(map); 
markers_317.bindPopup("Forest Ambulatory Surgical Associates LLC").openPopup(); 

var circle_317 = L.circle(coords_317, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_318 = [ 34.9690225868974 , -89.9858860881335]; 
var markers_318 = L.marker(coords_318).addTo(map); 
markers_318.bindPopup("Zimmer US, Inc").openPopup(); 

var circle_318 = L.circle(coords_318, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_319 = [ 34.95454017712821 , -89.82586729128205]; 
var markers_319 = L.marker(coords_319).addTo(map); 
markers_319.bindPopup("Millstone Medical Outsourcing, LLC").openPopup(); 

var circle_319 = L.circle(coords_319, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_320 = [ 38.74757087909977 , -90.4213280119116]; 
var markers_320 = L.marker(coords_320).addTo(map); 
markers_320.bindPopup("DDSGadget, Inc").openPopup(); 

var circle_320 = L.circle(coords_320, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_321 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_321 = L.marker(coords_321).addTo(map); 
markers_321.bindPopup("Seattle Reproductive Medicine, Inc., P.S.").openPopup(); 

var circle_321 = L.circle(coords_321, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_322 = [ 40.76639995 , -73.7738780089654]; 
var markers_322 = L.marker(coords_322).addTo(map); 
markers_322.bindPopup("Froncare Inc").openPopup(); 

var circle_322 = L.circle(coords_322, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_323 = [ 35.21287095 , -106.71324849574629]; 
var markers_323 = L.marker(coords_323).addTo(map); 
markers_323.bindPopup("New Mexico Lions Eye Bank").openPopup(); 

var circle_323 = L.circle(coords_323, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_324 = [ 29.46533808780488 , -98.52518571788616]; 
var markers_324 = L.marker(coords_324).addTo(map); 
markers_324.bindPopup("Qualtex Laboratories").openPopup(); 

var circle_324 = L.circle(coords_324, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_325 = [ 37.765001675 , -122.4336372875]; 
var markers_325 = L.marker(coords_325).addTo(map); 
markers_325.bindPopup("UCSF Medical Center Clinical  Laboratories, Blood Center").openPopup(); 

var circle_325 = L.circle(coords_325, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_326 = [ 39.95044374916201 , -75.16595420223464]; 
var markers_326 = L.marker(coords_326).addTo(map); 
markers_326.bindPopup("Shady Grove Fertility Center of Pennsylvania PLLC").openPopup(); 

var circle_326 = L.circle(coords_326, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_327 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_327 = L.marker(coords_327).addTo(map); 
markers_327.bindPopup("Carolinas Fertility Institute").openPopup(); 

var circle_327 = L.circle(coords_327, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_328 = [ 41.8949892729885 , -87.6226382045977]; 
var markers_328 = L.marker(coords_328).addTo(map); 
markers_328.bindPopup("Northwestern Medicine").openPopup(); 

var circle_328 = L.circle(coords_328, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_329 = [ 39.75569700812501 , -104.8923432496875]; 
var markers_329 = L.marker(coords_329).addTo(map); 
markers_329.bindPopup("UCARM Stapleton Clinic").openPopup(); 

var circle_329 = L.circle(coords_329, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_330 = [ 39.55710325 , -105.01060213125658]; 
var markers_330 = L.marker(coords_330).addTo(map); 
markers_330.bindPopup("Conceptions Reproductive Associates").openPopup(); 

var circle_330 = L.circle(coords_330, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_331 = [ 42.03981885213483 , -87.73509260434457]; 
var markers_331 = L.marker(coords_331).addTo(map); 
markers_331.bindPopup("Davies Fertility").openPopup(); 

var circle_331 = L.circle(coords_331, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_332 = [ 40.5688245 , -74.70027388974506]; 
var markers_332 = L.marker(coords_332).addTo(map); 
markers_332.bindPopup("LifeCell Corporation").openPopup(); 

var circle_332 = L.circle(coords_332, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_333 = [ 40.5688245 , -74.70027388974506]; 
var markers_333 = L.marker(coords_333).addTo(map); 
markers_333.bindPopup("LifeCell Corporation, A Wholly Owned Subsidiary of Allergan PLC").openPopup(); 

var circle_333 = L.circle(coords_333, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_334 = [ 29.46533808780488 , -98.52518571788616]; 
var markers_334 = L.marker(coords_334).addTo(map); 
markers_334.bindPopup("Gencure (The Texas Cord Blood Bank)").openPopup(); 

var circle_334 = L.circle(coords_334, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_335 = [ 37.80113049217081 , -89.02911077188612]; 
var markers_335 = L.marker(coords_335).addTo(map); 
markers_335.bindPopup("Southern Illinois Healthcare Dba Herrin Hospital").openPopup(); 

var circle_335 = L.circle(coords_335, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_336 = [ 41.50195515 , -81.61806775]; 
var markers_336 = L.marker(coords_336).addTo(map); 
markers_336.bindPopup("The Cleveland Clinic Foundation").openPopup(); 

var circle_336 = L.circle(coords_336, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_337 = [ 25.787314178627003 , -80.20404218192219]; 
var markers_337 = L.marker(coords_337).addTo(map); 
markers_337.bindPopup("Florida Lions Eye Bank, Inc.").openPopup(); 

var circle_337 = L.circle(coords_337, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_338 = [ 37.72037504815642 , -89.21508635955307]; 
var markers_338 = L.marker(coords_338).addTo(map); 
markers_338.bindPopup("Memorial Hospital of Carbondale").openPopup(); 

var circle_338 = L.circle(coords_338, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_339 = [ 38.53885159054878 , -90.0007947352134]; 
var markers_339 = L.marker(coords_339).addTo(map); 
markers_339.bindPopup("Centers for Reproductive Medicine and Wellness").openPopup(); 

var circle_339 = L.circle(coords_339, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_340 = [ 36.06871756420664 , -79.46427671476015]; 
var markers_340 = L.marker(coords_340).addTo(map); 
markers_340.bindPopup("Laboratory Corporation Of America").openPopup(); 

var circle_340 = L.circle(coords_340, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_341 = [ 40.7127281 , -74.0060152]; 
var markers_341 = L.marker(coords_341).addTo(map); 
markers_341.bindPopup("Kofinas Fertility Group").openPopup(); 

var circle_341 = L.circle(coords_341, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_342 = [ 35.0814362122294 , -89.84902053880452]; 
var markers_342 = L.marker(coords_342).addTo(map); 
markers_342.bindPopup("In2Bones USA, LLC").openPopup(); 

var circle_342 = L.circle(coords_342, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_343 = [ 25.787314178627003 , -80.20404218192219]; 
var markers_343 = L.marker(coords_343).addTo(map); 
markers_343.bindPopup("AssureImmune, LLC").openPopup(); 

var circle_343 = L.circle(coords_343, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_344 = [ 38.00937577570247 , -84.4237072246281]; 
var markers_344 = L.marker(coords_344).addTo(map); 
markers_344.bindPopup("Bluegrass Fertility Center, Inc.").openPopup(); 

var circle_344 = L.circle(coords_344, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_345 = [ 33.39789945526316 , -112.0399370694737]; 
var markers_345 = L.marker(coords_345).addTo(map); 
markers_345.bindPopup("Goode Surgical, Inc.").openPopup(); 

var circle_345 = L.circle(coords_345, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_346 = [ 41.24352338729809 , -81.42638584853157]; 
var markers_346 = L.marker(coords_346).addTo(map); 
markers_346.bindPopup("Rock Medical Orthopedics, Inc.").openPopup(); 

var circle_346 = L.circle(coords_346, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_347 = [ 42.3756401 , -71.2358004]; 
var markers_347 = L.marker(coords_347).addTo(map); 
markers_347.bindPopup("Surgi-Care, Inc.").openPopup(); 

var circle_347 = L.circle(coords_347, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_348 = [ 33.7489924 , -84.3902644]; 
var markers_348 = L.marker(coords_348).addTo(map); 
markers_348.bindPopup("Children's Healthcare of Atlanta").openPopup(); 

var circle_348 = L.circle(coords_348, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_349 = [ 35.060531671810466 , -89.9095353197454]; 
var markers_349 = L.marker(coords_349).addTo(map); 
markers_349.bindPopup("NuVasive, Inc").openPopup(); 

var circle_349 = L.circle(coords_349, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_350 = [ 31.1505097 , -81.3695404]; 
var markers_350 = L.marker(coords_350).addTo(map); 
markers_350.bindPopup("CRA Biotech LLC.").openPopup(); 

var circle_350 = L.circle(coords_350, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_351 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_351 = L.marker(coords_351).addTo(map); 
markers_351.bindPopup("MWM Medical").openPopup(); 

var circle_351 = L.circle(coords_351, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_352 = [ 40.8243307 , -80.2502301]; 
var markers_352 = L.marker(coords_352).addTo(map); 
markers_352.bindPopup("Reproductive Medicine Associates Of Philadelphia, P.c.").openPopup(); 

var circle_352 = L.circle(coords_352, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_353 = [ 41.8797716028133 , -87.84014876879796]; 
var markers_353 = L.marker(coords_353).addTo(map); 
markers_353.bindPopup("Loyola University Medical Center, Cardinal Bernadine Cancer").openPopup(); 

var circle_353 = L.circle(coords_353, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_354 = [ 38.9685 , -94.6627]; 
var markers_354 = L.marker(coords_354).addTo(map); 
markers_354.bindPopup("Eagle Ortho LLC").openPopup(); 

var circle_354 = L.circle(coords_354, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_355 = [ 39.1691317719346 , -94.52655736839236]; 
var markers_355 = L.marker(coords_355).addTo(map); 
markers_355.bindPopup("Goetze-Niemer Co Inc").openPopup(); 

var circle_355 = L.circle(coords_355, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_356 = [ 41.944883609143965 , -88.09290696614786]; 
var markers_356 = L.marker(coords_356).addTo(map); 
markers_356.bindPopup("Reproductive Medicine Institute").openPopup(); 

var circle_356 = L.circle(coords_356, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_357 = [ 41.87505980194175 , -88.15121032718446]; 
var markers_357 = L.marker(coords_357).addTo(map); 
markers_357.bindPopup("Northwestern Medicine Central DuPage Hospital").openPopup(); 

var circle_357 = L.circle(coords_357, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_358 = [ 18.0808972 , -67.0408635]; 
var markers_358 = L.marker(coords_358).addTo(map); 
markers_358.bindPopup("Bio Tech Med Corp.").openPopup(); 

var circle_358 = L.circle(coords_358, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_359 = [ 29.705316533084577 , -95.40499932139303]; 
var markers_359 = L.marker(coords_359).addTo(map); 
markers_359.bindPopup("Lions Eye Bank of Texas at Baylor College of Medicine").openPopup(); 

var circle_359 = L.circle(coords_359, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_360 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_360 = L.marker(coords_360).addTo(map); 
markers_360.bindPopup("North Carolina Eye Bank, Inc. dba Miracles in Sight").openPopup(); 

var circle_360 = L.circle(coords_360, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_361 = [ 42.3582529 , -71.0966272383055]; 
var markers_361 = L.marker(coords_361).addTo(map); 
markers_361.bindPopup("California Cryobank LLC").openPopup(); 

var circle_361 = L.circle(coords_361, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_362 = [ 34.81622036614871 , -82.39394628785942]; 
var markers_362 = L.marker(coords_362).addTo(map); 
markers_362.bindPopup("Fertility Center of the Carolinas").openPopup(); 

var circle_362 = L.circle(coords_362, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_363 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_363 = L.marker(coords_363).addTo(map); 
markers_363.bindPopup("Lifegift Organ Donation Center").openPopup(); 

var circle_363 = L.circle(coords_363, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_364 = [ 33.5206824 , -86.8024326]; 
var markers_364 = L.marker(coords_364).addTo(map); 
markers_364.bindPopup("America Institute of Reproductive Medicine, LLC").openPopup(); 

var circle_364 = L.circle(coords_364, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_365 = [ 43.67383475 , -116.29107627548372]; 
var markers_365 = L.marker(coords_365).addTo(map); 
markers_365.bindPopup("Community Blood Center d.b.a. Community Tissue Services").openPopup(); 

var circle_365 = L.circle(coords_365, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_366 = [ 34.86073791379002 , -82.33152443566446]; 
var markers_366 = L.marker(coords_366).addTo(map); 
markers_366.bindPopup("Piedmont Reproductive Endocrinology Group, Pa").openPopup(); 

var circle_366 = L.circle(coords_366, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_367 = [ 33.5206824 , -86.8024326]; 
var markers_367 = L.marker(coords_367).addTo(map); 
markers_367.bindPopup("ART Fertility Program of Alabama").openPopup(); 

var circle_367 = L.circle(coords_367, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_368 = [ 37.15965470737636 , -93.25538070259849]; 
var markers_368 = L.marker(coords_368).addTo(map); 
markers_368.bindPopup("Titan Surgical Group, LLC").openPopup(); 

var circle_368 = L.circle(coords_368, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_369 = [ 47.47920633456099 , -122.21248913588686]; 
var markers_369 = L.marker(coords_369).addTo(map); 
markers_369.bindPopup("Summit Surgical Corp.").openPopup(); 

var circle_369 = L.circle(coords_369, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_370 = [ 41.780206 , -71.4087604910087]; 
var markers_370 = L.marker(coords_370).addTo(map); 
markers_370.bindPopup("Brown Urology, Inc.").openPopup(); 

var circle_370 = L.circle(coords_370, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_371 = [ 42.9509042 , -78.7343332]; 
var markers_371 = L.marker(coords_371).addTo(map); 
markers_371.bindPopup("CNY Fertility Center").openPopup(); 

var circle_371 = L.circle(coords_371, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_372 = [ 38.68948137827298 , -90.44965063955432]; 
var markers_372 = L.marker(coords_372).addTo(map); 
markers_372.bindPopup("TForce").openPopup(); 

var circle_372 = L.circle(coords_372, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_373 = [ 29.7827179 , -95.5568654]; 
var markers_373 = L.marker(coords_373).addTo(map); 
markers_373.bindPopup("Houston Fertility Center").openPopup(); 

var circle_373 = L.circle(coords_373, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_374 = [ 44.9497487 , -93.0931028]; 
var markers_374 = L.marker(coords_374).addTo(map); 
markers_374.bindPopup("ReproTech, Ltd.").openPopup(); 

var circle_374 = L.circle(coords_374, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_375 = [ 32.9994725328084 , -96.8474137343832]; 
var markers_375 = L.marker(coords_375).addTo(map); 
markers_375.bindPopup("Duma Co Sciences, LLC").openPopup(); 

var circle_375 = L.circle(coords_375, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_376 = [ 34.2367621 , -84.4907621]; 
var markers_376 = L.marker(coords_376).addTo(map); 
markers_376.bindPopup("Northside Hospital Cherokee").openPopup(); 

var circle_376 = L.circle(coords_376, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_377 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_377 = L.marker(coords_377).addTo(map); 
markers_377.bindPopup("Institute For Women's Health - Advanced Fertility Center").openPopup(); 

var circle_377 = L.circle(coords_377, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_378 = [ 30.298938284264302 , -97.80703282230928]; 
var markers_378 = L.marker(coords_378).addTo(map); 
markers_378.bindPopup("Genesys Orthopedics Systems, LLC").openPopup(); 

var circle_378 = L.circle(coords_378, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_379 = [ 37.213697 , -121.9821641]; 
var markers_379 = L.marker(coords_379).addTo(map); 
markers_379.bindPopup("CARE for the Bay Area").openPopup(); 

var circle_379 = L.circle(coords_379, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_380 = [ 40.7959335 , -74.3148713]; 
var markers_380 = L.marker(coords_380).addTo(map); 
markers_380.bindPopup("Institute for Reproductive Medicine and Science at Saint Barnabas").openPopup(); 

var circle_380 = L.circle(coords_380, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_381 = [ -26.7982582 , -55.0228553]; 
var markers_381 = L.marker(coords_381).addTo(map); 
markers_381.bindPopup("Orthobone, Inc.").openPopup(); 

var circle_381 = L.circle(coords_381, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_382 = [ 38.64611097213144 , -90.61833031267793]; 
var markers_382 = L.marker(coords_382).addTo(map); 
markers_382.bindPopup("Elite Orthopedics, LLC").openPopup(); 

var circle_382 = L.circle(coords_382, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_383 = [ 30.38121841105288 , -97.70710744092425]; 
var markers_383 = L.marker(coords_383).addTo(map); 
markers_383.bindPopup("Clinical Pathology Laboratories").openPopup(); 

var circle_383 = L.circle(coords_383, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_384 = [ 40.9664806 , -76.6131474]; 
var markers_384 = L.marker(coords_384).addTo(map); 
markers_384.bindPopup("Geisinger Medical Center Blood Bank").openPopup(); 

var circle_384 = L.circle(coords_384, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_385 = [ 37.42249685419847 , -122.1353773129771]; 
var markers_385 = L.marker(coords_385).addTo(map); 
markers_385.bindPopup("Polansky, Francis, M.D., Inc").openPopup(); 

var circle_385 = L.circle(coords_385, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_386 = [ 34.76137252632451 , -84.98486428261589]; 
var markers_386 = L.marker(coords_386).addTo(map); 
markers_386.bindPopup("Hamilton Medical Center").openPopup(); 

var circle_386 = L.circle(coords_386, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_387 = [ 34.72739678050848 , -92.34536530190678]; 
var markers_387 = L.marker(coords_387).addTo(map); 
markers_387.bindPopup("MidSouth Orthopedics").openPopup(); 

var circle_387 = L.circle(coords_387, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_388 = [ 41.7502971 , -87.9161818]; 
var markers_388 = L.marker(coords_388).addTo(map); 
markers_388.bindPopup("American Medical Management, LLC").openPopup(); 

var circle_388 = L.circle(coords_388, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_389 = [ 32.83535471734317 , -83.63718403634687]; 
var markers_389 = L.marker(coords_389).addTo(map); 
markers_389.bindPopup("Southern Spine, LLC").openPopup(); 

var circle_389 = L.circle(coords_389, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_390 = [ 34.75159047624831 , -92.34576986005398]; 
var markers_390 = L.marker(coords_390).addTo(map); 
markers_390.bindPopup("Arkansas Lions Eye Bank & Laboratory").openPopup(); 

var circle_390 = L.circle(coords_390, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_391 = [ 44.964763467870725 , -93.19558401539923]; 
var markers_391 = L.marker(coords_391).addTo(map); 
markers_391.bindPopup("Lions Gift of Sight").openPopup(); 

var circle_391 = L.circle(coords_391, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_392 = [ 33.4708595875 , -81.9886637125]; 
var markers_392 = L.marker(coords_392).addTo(map); 
markers_392.bindPopup("Augusta University Medical Center").openPopup(); 

var circle_392 = L.circle(coords_392, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_393 = [ 42.41405524356147 , -71.2339491376992]; 
var markers_393 = L.marker(coords_393).addTo(map); 
markers_393.bindPopup("Boston IVF, Inc. LLC").openPopup(); 

var circle_393 = L.circle(coords_393, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_394 = [ 45.5400696 , -122.6282258]; 
var markers_394 = L.marker(coords_394).addTo(map); 
markers_394.bindPopup("ORM Fertility, LLC").openPopup(); 

var circle_394 = L.circle(coords_394, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_395 = [ 33.901155376788324 , -117.89900589934308]; 
var markers_395 = L.marker(coords_395).addTo(map); 
markers_395.bindPopup("Huntington Reproductive Center Medical Group").openPopup(); 

var circle_395 = L.circle(coords_395, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_396 = [ 39.90414996633517 , -86.01661041928158]; 
var markers_396 = L.marker(coords_396).addTo(map); 
markers_396.bindPopup("Family Beginnings, PC").openPopup(); 

var circle_396 = L.circle(coords_396, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_397 = [ 39.986298778861126 , -105.25153080852112]; 
var markers_397 = L.marker(coords_397).addTo(map); 
markers_397.bindPopup("CryoGam Colorado, LLC").openPopup(); 

var circle_397 = L.circle(coords_397, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_398 = [ 25.73948872341802 , -80.30909121262889]; 
var markers_398 = L.marker(coords_398).addTo(map); 
markers_398.bindPopup("Southern Edge Orthpaedics").openPopup(); 

var circle_398 = L.circle(coords_398, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_399 = [ 39.7683331 , -86.1583502]; 
var markers_399 = L.marker(coords_399).addTo(map); 
markers_399.bindPopup("Indiana Fertility Associates PC").openPopup(); 

var circle_399 = L.circle(coords_399, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_400 = [ 39.7683331 , -86.1583502]; 
var markers_400 = L.marker(coords_400).addTo(map); 
markers_400.bindPopup("Indiana Fertility Institute LLC / Dr John Jarrett").openPopup(); 

var circle_400 = L.circle(coords_400, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_401 = [ 32.88904892371639 , -83.72244936943764]; 
var markers_401 = L.marker(coords_401).addTo(map); 
markers_401.bindPopup("Central Georgia Fertility Institute Navicent Health").openPopup(); 

var circle_401 = L.circle(coords_401, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_402 = [ 40.8453882 , -74.5693309]; 
var markers_402 = L.marker(coords_402).addTo(map); 
markers_402.bindPopup("Katena Products, Inc.").openPopup(); 

var circle_402 = L.circle(coords_402, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_403 = [ 42.2212188 , -70.9391625]; 
var markers_403 = L.marker(coords_403).addTo(map); 
markers_403.bindPopup("STAT Instruments LLC").openPopup(); 

var circle_403 = L.circle(coords_403, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_404 = [ 30.29610806584867 , -81.65225534478527]; 
var markers_404 = L.marker(coords_404).addTo(map); 
markers_404.bindPopup("Florida Institute for Reproductive Medicine").openPopup(); 

var circle_404 = L.circle(coords_404, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_405 = [ 34.12441453590909 , -118.05159385954543]; 
var markers_405 = L.marker(coords_405).addTo(map); 
markers_405.bindPopup("Life IVF Center Los Angeles").openPopup(); 

var circle_405 = L.circle(coords_405, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_406 = [ 39.05588965 , -94.609643925]; 
var markers_406 = L.marker(coords_406).addTo(map); 
markers_406.bindPopup("The University of Kansas Health System").openPopup(); 

var circle_406 = L.circle(coords_406, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_407 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_407 = L.marker(coords_407).addTo(map); 
markers_407.bindPopup("Reproductive Science Center of the San Francisco Bay Area, a Medical Corporation").openPopup(); 

var circle_407 = L.circle(coords_407, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_408 = [ 33.27234761977258 , -111.7125758243525]; 
var markers_408 = L.marker(coords_408).addTo(map); 
markers_408.bindPopup("Celebration Stem Cell Centre LLC").openPopup(); 

var circle_408 = L.circle(coords_408, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_409 = [ 42.4802635 , -71.0993581]; 
var markers_409 = L.marker(coords_409).addTo(map); 
markers_409.bindPopup("Boston IVF - CRMI Holding, LLC").openPopup(); 

var circle_409 = L.circle(coords_409, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_410 = [ -26.7982582 , -55.0228553]; 
var markers_410 = L.marker(coords_410).addTo(map); 
markers_410.bindPopup("Surgical Solutions J. A. Puerto Rico, Inc.").openPopup(); 

var circle_410 = L.circle(coords_410, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_411 = [ 40.60171476432637 , -75.52632937789373]; 
var markers_411 = L.marker(coords_411).addTo(map); 
markers_411.bindPopup("Reproductive Medicine Associates Of Pa At Lehigh Valley").openPopup(); 

var circle_411 = L.circle(coords_411, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_412 = [ 36.835030613559326 , -119.81241469830508]; 
var markers_412 = L.marker(coords_412).addTo(map); 
markers_412.bindPopup("Community Blood Center dba Community Tissue Services").openPopup(); 

var circle_412 = L.circle(coords_412, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_413 = [ 29.56857722407504 , -98.61441590932778]; 
var markers_413 = L.marker(coords_413).addTo(map); 
markers_413.bindPopup("Dorotea, LLC dba Alamo Tissue Service").openPopup(); 

var circle_413 = L.circle(coords_413, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_414 = [ 35.90906105243902 , -78.76836778231707]; 
var markers_414 = L.marker(coords_414).addTo(map); 
markers_414.bindPopup("Atlantic Fertility Center Partners LLC").openPopup(); 

var circle_414 = L.circle(coords_414, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_415 = [ 40.6984348 , -74.4015405]; 
var markers_415 = L.marker(coords_415).addTo(map); 
markers_415.bindPopup("New Jersey Organ and Tissue Sharing Network Inc.").openPopup(); 

var circle_415 = L.circle(coords_415, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_416 = [ 30.22242585 , -95.61853087685785]; 
var markers_416 = L.marker(coords_416).addTo(map); 
markers_416.bindPopup("Osteobiologic Solutions Inc").openPopup(); 

var circle_416 = L.circle(coords_416, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_417 = [ 43.5488256 , -96.7307737]; 
var markers_417 = L.marker(coords_417).addTo(map); 
markers_417.bindPopup("Dakota Lions Sight & Health").openPopup(); 

var circle_417 = L.circle(coords_417, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_418 = [ 43.03838841309192 , -87.92906762827299]; 
var markers_418 = L.marker(coords_418).addTo(map); 
markers_418.bindPopup("Versiti Wisconsin, Inc.").openPopup(); 

var circle_418 = L.circle(coords_418, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_419 = [ 28.0780718 , -82.7637127]; 
var markers_419 = L.marker(coords_419).addTo(map); 
markers_419.bindPopup("Regenerative Processing Plant, LLC").openPopup(); 

var circle_419 = L.circle(coords_419, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_420 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_420 = L.marker(coords_420).addTo(map); 
markers_420.bindPopup("University of Texas MD Anderson Cancer Center").openPopup(); 

var circle_420 = L.circle(coords_420, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_421 = [ 28.5716466195122 , -81.38436181219512]; 
var markers_421 = L.marker(coords_421).addTo(map); 
markers_421.bindPopup("CorneaGen - Orlando / Medical Eye Bank of Florida").openPopup(); 

var circle_421 = L.circle(coords_421, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_422 = [ 32.815783403703705 , -79.85590349741862]; 
var markers_422 = L.marker(coords_422).addTo(map); 
markers_422.bindPopup("Coastal Fertility Specialists, LLC").openPopup(); 

var circle_422 = L.circle(coords_422, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_423 = [ 42.99497569952268 , -88.02515598615751]; 
var markers_423 = L.marker(coords_423).addTo(map); 
markers_423.bindPopup("Aurora Health Care - Aurora Fertility Services").openPopup(); 

var circle_423 = L.circle(coords_423, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_424 = [ 39.983306613707455 , -75.59624259190431]; 
var markers_424 = L.marker(coords_424).addTo(map); 
markers_424.bindPopup("Altus Partners LLC dba Altus Spine").openPopup(); 

var circle_424 = L.circle(coords_424, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_425 = [ 43.07278263939008 , -87.8848136678526]; 
var markers_425 = L.marker(coords_425).addTo(map); 
markers_425.bindPopup("Reproductive Specialty Center Ltd").openPopup(); 

var circle_425 = L.circle(coords_425, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_426 = [ 39.54758138761905 , -104.88359426666666]; 
var markers_426 = L.marker(coords_426).addTo(map); 
markers_426.bindPopup("Fertility Laboratories of Colorado, LLC").openPopup(); 

var circle_426 = L.circle(coords_426, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_427 = [ 43.15227460430248 , -88.11129442529335]; 
var markers_427 = L.marker(coords_427).addTo(map); 
markers_427.bindPopup("Froedtert Hospital Reproductive Medicine Center").openPopup(); 

var circle_427 = L.circle(coords_427, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_428 = [ 32.8746026608 , -96.7646495584]; 
var markers_428 = L.marker(coords_428).addTo(map); 
markers_428.bindPopup("Dallas Fertility Center, LLC").openPopup(); 

var circle_428 = L.circle(coords_428, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_429 = [ 39.81917980414113 , -89.6459579273149]; 
var markers_429 = L.marker(coords_429).addTo(map); 
markers_429.bindPopup("SIU Fertility and IVF Center").openPopup(); 

var circle_429 = L.circle(coords_429, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_430 = [ 42.3756401 , -71.2358004]; 
var markers_430 = L.marker(coords_430).addTo(map); 
markers_430.bindPopup("Boston IVF").openPopup(); 

var circle_430 = L.circle(coords_430, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_431 = [ 40.76995483059867 , -81.41116430931264]; 
var markers_431 = L.marker(coords_431).addTo(map); 
markers_431.bindPopup("Medline Industries, Inc.").openPopup(); 

var circle_431 = L.circle(coords_431, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_432 = [ 37.55920389051724 , -122.26878271810344]; 
var markers_432 = L.marker(coords_432).addTo(map); 
markers_432.bindPopup("Zouves Fertility Center, A Medical Corporation").openPopup(); 

var circle_432 = L.circle(coords_432, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_433 = [ 39.54758138761905 , -104.88359426666666]; 
var markers_433 = L.marker(coords_433).addTo(map); 
markers_433.bindPopup("Conceptions- SkyRidge").openPopup(); 

var circle_433 = L.circle(coords_433, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_434 = [ 41.0791925575 , -81.5087455625]; 
var markers_434 = L.marker(coords_434).addTo(map); 
markers_434.bindPopup("Fertility Unlimited Inc.").openPopup(); 

var circle_434 = L.circle(coords_434, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_435 = [ 33.57933010741072 , -112.05620001464284]; 
var markers_435 = L.marker(coords_435).addTo(map); 
markers_435.bindPopup("The World Egg Bank").openPopup(); 

var circle_435 = L.circle(coords_435, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_436 = [ 33.13941946434245 , -96.84132154060018]; 
var markers_436 = L.marker(coords_436).addTo(map); 
markers_436.bindPopup("CCRM DFW").openPopup(); 

var circle_436 = L.circle(coords_436, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_437 = [ 42.326911219047616 , -83.182342214986]; 
var markers_437 = L.marker(coords_437).addTo(map); 
markers_437.bindPopup("IVF Michigan, P.C.").openPopup(); 

var circle_437 = L.circle(coords_437, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_438 = [ 42.326911219047616 , -83.182342214986]; 
var markers_438 = L.marker(coords_438).addTo(map); 
markers_438.bindPopup("IVF Michigan, P.C.").openPopup(); 

var circle_438 = L.circle(coords_438, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_439 = [ 42.583645 , -83.2454883]; 
var markers_439 = L.marker(coords_439).addTo(map); 
markers_439.bindPopup("IVF Michigan").openPopup(); 

var circle_439 = L.circle(coords_439, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_440 = [ 42.583645 , -83.2454883]; 
var markers_440 = L.marker(coords_440).addTo(map); 
markers_440.bindPopup("IVF Michigan").openPopup(); 

var circle_440 = L.circle(coords_440, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_441 = [ 42.326911219047616 , -83.182342214986]; 
var markers_441 = L.marker(coords_441).addTo(map); 
markers_441.bindPopup("IVF Michigan, P.C.").openPopup(); 

var circle_441 = L.circle(coords_441, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_442 = [ 37.72833463739496 , -97.23095917941176]; 
var markers_442 = L.marker(coords_442).addTo(map); 
markers_442.bindPopup("Midwest Surgical Alliance, LLC").openPopup(); 

var circle_442 = L.circle(coords_442, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_443 = [ 40.7127281 , -74.0060152]; 
var markers_443 = L.marker(coords_443).addTo(map); 
markers_443.bindPopup("Manhattan Fertility Services LLC").openPopup(); 

var circle_443 = L.circle(coords_443, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_444 = [ 28.62809823766234 , -81.35810336883117]; 
var markers_444 = L.marker(coords_444).addTo(map); 
markers_444.bindPopup("OurLegacy Organ & Tissue Donation Services").openPopup(); 

var circle_444 = L.circle(coords_444, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_445 = [ 41.4323878 , -81.5105218]; 
var markers_445 = L.marker(coords_445).addTo(map); 
markers_445.bindPopup("Lifebanc").openPopup(); 

var circle_445 = L.circle(coords_445, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_446 = [ 42.2489143 , -71.1755732]; 
var markers_446 = L.marker(coords_446).addTo(map); 
markers_446.bindPopup("Fertility Solutions, PC").openPopup(); 

var circle_446 = L.circle(coords_446, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_447 = [ 44.07330448533334 , -103.16577464133331]; 
var markers_447 = L.marker(coords_447).addTo(map); 
markers_447.bindPopup("South Dakota Lions Eye and Tissue Bank Inc").openPopup(); 

var circle_447 = L.circle(coords_447, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_448 = [ 41.245167887826085 , -95.96223903065216]; 
var markers_448 = L.marker(coords_448).addTo(map); 
markers_448.bindPopup("Nebraska Organ Recovery System d.b.a. Live On Nebraska").openPopup(); 

var circle_448 = L.circle(coords_448, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_449 = [ 18.3581491 , -66.1116969]; 
var markers_449 = L.marker(coords_449).addTo(map); 
markers_449.bindPopup("Tech Medical Group, Inc.").openPopup(); 

var circle_449 = L.circle(coords_449, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_450 = [ 39.352608745837614 , -84.41586634157245]; 
var markers_450 = L.marker(coords_450).addTo(map); 
markers_450.bindPopup("University of Cincinnati Center For Reproductive Health").openPopup(); 

var circle_450 = L.circle(coords_450, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_451 = [ 47.63312999317685 , -122.3486690844838]; 
var markers_451 = L.marker(coords_451).addTo(map); 
markers_451.bindPopup("Seattle Cancer Care Alliance").openPopup(); 

var circle_451 = L.circle(coords_451, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_452 = [ 39.7683331 , -86.1583502]; 
var markers_452 = L.marker(coords_452).addTo(map); 
markers_452.bindPopup("Indiana Lions Eye Bank").openPopup(); 

var circle_452 = L.circle(coords_452, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_453 = [ 30.347109392405063 , -97.76595100423565]; 
var markers_453 = L.marker(coords_453).addTo(map); 
markers_453.bindPopup("FPG Labs of Austin, LLC").openPopup(); 

var circle_453 = L.circle(coords_453, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_454 = [ 18.3581491 , -66.1116969]; 
var markers_454 = L.marker(coords_454).addTo(map); 
markers_454.bindPopup("RMC Orthopedic & Surgical, Inc.").openPopup(); 

var circle_454 = L.circle(coords_454, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_455 = [ 40.7127281 , -74.0060152]; 
var markers_455 = L.marker(coords_455).addTo(map); 
markers_455.bindPopup("Ovation Anesthesiology Services, PLLC").openPopup(); 

var circle_455 = L.circle(coords_455, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_456 = [ 38.93973767625571 , -77.08686526149164]; 
var markers_456 = L.marker(coords_456).addTo(map); 
markers_456.bindPopup("Shady Grove Fertility Reproductive Science Center").openPopup(); 

var circle_456 = L.circle(coords_456, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_457 = [ 37.69902033809524 , -97.32448212857145]; 
var markers_457 = L.marker(coords_457).addTo(map); 
markers_457.bindPopup("Ascension Via Christi Hospitals Wichita Inc").openPopup(); 

var circle_457 = L.circle(coords_457, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_458 = [ 43.050699094382026 , -88.0089935264045]; 
var markers_458 = L.marker(coords_458).addTo(map); 
markers_458.bindPopup("Vios Fertility Institute Milwaukee").openPopup(); 

var circle_458 = L.circle(coords_458, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_459 = [ 39.79626219582705 , -86.22466446510809]; 
var markers_459 = L.marker(coords_459).addTo(map); 
markers_459.bindPopup("Indiana Organ Procurement Organization").openPopup(); 

var circle_459 = L.circle(coords_459, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_460 = [ 40.81507168294582 , -73.50209060067333]; 
var markers_460 = L.marker(coords_460).addTo(map); 
markers_460.bindPopup("New York Reproductive Wellness Medicine, P.C.").openPopup(); 

var circle_460 = L.circle(coords_460, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_461 = [ 46.858756961875 , -96.81740629375]; 
var markers_461 = L.marker(coords_461).addTo(map); 
markers_461.bindPopup("South Dakota Lions Eye & Tissue Bank Inc").openPopup(); 

var circle_461 = L.circle(coords_461, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_462 = [ 36.86502937171783 , -76.30073375342913]; 
var markers_462 = L.marker(coords_462).addTo(map); 
markers_462.bindPopup("Lions Medical Eye Bank & Research Center of Eastern VA").openPopup(); 

var circle_462 = L.circle(coords_462, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_463 = [ 29.56857722407504 , -98.61441590932778]; 
var markers_463 = L.marker(coords_463).addTo(map); 
markers_463.bindPopup("RegenTX Partners LLC").openPopup(); 

var circle_463 = L.circle(coords_463, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_464 = [ 42.2288875 , -71.5196439]; 
var markers_464 = L.marker(coords_464).addTo(map); 
markers_464.bindPopup("Arteriocyte Medical Systems Inc").openPopup(); 

var circle_464 = L.circle(coords_464, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_465 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_465 = L.marker(coords_465).addTo(map); 
markers_465.bindPopup("Reproductive Science Center of the San Francisco Bay Area, a Medical Corporation").openPopup(); 

var circle_465 = L.circle(coords_465, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_466 = [ 32.83449657722008 , -97.14125745984556]; 
var markers_466 = L.marker(coords_466).addTo(map); 
markers_466.bindPopup("Center for Assisted Reproduction").openPopup(); 

var circle_466 = L.circle(coords_466, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_467 = [ 28.52914 , -81.3681386]; 
var markers_467 = L.marker(coords_467).addTo(map); 
markers_467.bindPopup("Scendia Biologics, LLC").openPopup(); 

var circle_467 = L.circle(coords_467, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_468 = [ 30.28448062403688 , -81.58140083435016]; 
var markers_468 = L.marker(coords_468).addTo(map); 
markers_468.bindPopup("Marwan M. Shaykh, M.D. dba Assisted Fertility Program").openPopup(); 

var circle_468 = L.circle(coords_468, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_469 = [ 33.77311756720099 , -84.37592444950678]; 
var markers_469 = L.marker(coords_469).addTo(map); 
markers_469.bindPopup("Emory Reproductive Center").openPopup(); 

var circle_469 = L.circle(coords_469, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_470 = [ 40.6723242 , -74.3573722]; 
var markers_470 = L.marker(coords_470).addTo(map); 
markers_470.bindPopup("BioGenetics Corporation").openPopup(); 

var circle_470 = L.circle(coords_470, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_471 = [ 40.6723242 , -74.3573722]; 
var markers_471 = L.marker(coords_471).addTo(map); 
markers_471.bindPopup("The Sperm and Embryo Bank of NJ, Inc.").openPopup(); 

var circle_471 = L.circle(coords_471, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_472 = [ 44.26580775625 , -88.33389556875]; 
var markers_472 = L.marker(coords_472).addTo(map); 
markers_472.bindPopup("American Tissue Services Foundation").openPopup(); 

var circle_472 = L.circle(coords_472, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_473 = [ 41.64647648174758 , -93.4846929662136]; 
var markers_473 = L.marker(coords_473).addTo(map); 
markers_473.bindPopup("Iowa Donor Network").openPopup(); 

var circle_473 = L.circle(coords_473, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_474 = [ 41.0791925575 , -81.5087455625]; 
var markers_474 = L.marker(coords_474).addTo(map); 
markers_474.bindPopup("Reproductive Gynecology Laboratories LLC").openPopup(); 

var circle_474 = L.circle(coords_474, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_475 = [ 33.659908981015235 , -112.18106037244596]; 
var markers_475 = L.marker(coords_475).addTo(map); 
markers_475.bindPopup("Troche Fertility Center").openPopup(); 

var circle_475 = L.circle(coords_475, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_476 = [ 41.07251762765295 , -85.00877124796968]; 
var markers_476 = L.marker(coords_476).addTo(map); 
markers_476.bindPopup("Life Line Stem Cell, Inc.").openPopup(); 

var circle_476 = L.circle(coords_476, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_477 = [ 40.73742573614622 , -111.82743401380252]; 
var markers_477 = L.marker(coords_477).addTo(map); 
markers_477.bindPopup("Bio Cell And Tissue Technologies").openPopup(); 

var circle_477 = L.circle(coords_477, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_478 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_478 = L.marker(coords_478).addTo(map); 
markers_478.bindPopup("Endometriosis & Reproductive Surgery Specialists P.L.L.C.").openPopup(); 

var circle_478 = L.circle(coords_478, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_479 = [ 42.1413353 , -71.5192019]; 
var markers_479 = L.marker(coords_479).addTo(map); 
markers_479.bindPopup("Milford Regional Medical Center, Inc.").openPopup(); 

var circle_479 = L.circle(coords_479, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_480 = [ 41.57796364435076 , -83.6800440752108]; 
var markers_480 = L.marker(coords_480).addTo(map); 
markers_480.bindPopup("Life Connection of Ohio").openPopup(); 

var circle_480 = L.circle(coords_480, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_481 = [ 32.729904709205776 , -97.32030240577618]; 
var markers_481 = L.marker(coords_481).addTo(map); 
markers_481.bindPopup("MDG Medical").openPopup(); 

var circle_481 = L.circle(coords_481, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_482 = [ 37.383327040163934 , -122.11456647131148]; 
var markers_482 = L.marker(coords_482).addTo(map); 
markers_482.bindPopup("California Cryobank, LLC").openPopup(); 

var circle_482 = L.circle(coords_482, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_483 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_483 = L.marker(coords_483).addTo(map); 
markers_483.bindPopup("Vitalant").openPopup(); 

var circle_483 = L.circle(coords_483, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_484 = [ -26.7982582 , -55.0228553]; 
var markers_484 = L.marker(coords_484).addTo(map); 
markers_484.bindPopup("GENES Fertility Institute, Inc.").openPopup(); 

var circle_484 = L.circle(coords_484, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_485 = [ 30.29209155560946 , -97.7390149515464]; 
var markers_485 = L.marker(coords_485).addTo(map); 
markers_485.bindPopup("Fairfax Cryobank, Inc.").openPopup(); 

var circle_485 = L.circle(coords_485, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_486 = [ 30.315232692426587 , -97.74026123910356]; 
var markers_486 = L.marker(coords_486).addTo(map); 
markers_486.bindPopup("United Tissue Resources, LLC").openPopup(); 

var circle_486 = L.circle(coords_486, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_487 = [ 41.46980287142857 , -81.51355601887124]; 
var markers_487 = L.marker(coords_487).addTo(map); 
markers_487.bindPopup("University Hospitals Fertility Center").openPopup(); 

var circle_487 = L.circle(coords_487, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_488 = [ 33.3405981566787 , -111.94062612057762]; 
var markers_488 = L.marker(coords_488).addTo(map); 
markers_488.bindPopup("Fertility Treatment Center").openPopup(); 

var circle_488 = L.circle(coords_488, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_489 = [ 38.66403693554405 , -90.4484983195855]; 
var markers_489 = L.marker(coords_489).addTo(map); 
markers_489.bindPopup("IntegraMed Medical Missouri LLC").openPopup(); 

var circle_489 = L.circle(coords_489, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_490 = [ 39.95764396098266 , -75.1973050515896]; 
var markers_490 = L.marker(coords_490).addTo(map); 
markers_490.bindPopup("Hospital of the Univ of PA-Reproductive Surgical Facility Penn Fertility Care").openPopup(); 

var circle_490 = L.circle(coords_490, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_491 = [ 29.56857722407504 , -98.61441590932778]; 
var markers_491 = L.marker(coords_491).addTo(map); 
markers_491.bindPopup("Nvision Biomedical Technologies Inc").openPopup(); 

var circle_491 = L.circle(coords_491, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_492 = [ 38.64634837149924 , -90.25508958687216]; 
var markers_492 = L.marker(coords_492).addTo(map); 
markers_492.bindPopup("Washington University OB/GYN").openPopup(); 

var circle_492 = L.circle(coords_492, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_493 = [ 42.237770056612526 , -83.7205163035267]; 
var markers_493 = L.marker(coords_493).addTo(map); 
markers_493.bindPopup("Eversight").openPopup(); 

var circle_493 = L.circle(coords_493, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_494 = [ 40.0978929 , -74.2176435]; 
var markers_494 = L.marker(coords_494).addTo(map); 
markers_494.bindPopup("Shore Area In Vitro Fertilization Laboratories, P.C.").openPopup(); 

var circle_494 = L.circle(coords_494, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_495 = [ 40.0978929 , -74.2176435]; 
var markers_495 = L.marker(coords_495).addTo(map); 
markers_495.bindPopup("Shore Institute For Reproductive Medicine, P.C.").openPopup(); 

var circle_495 = L.circle(coords_495, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_496 = [ 32.729904709205776 , -97.32030240577618]; 
var markers_496 = L.marker(coords_496).addTo(map); 
markers_496.bindPopup("Community Blood Center DBA Community Tissue Services").openPopup(); 

var circle_496 = L.circle(coords_496, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_497 = [ 42.11485056767754 , -71.2398906563118]; 
var markers_497 = L.marker(coords_497).addTo(map); 
markers_497.bindPopup("Vincent Reproductive Medicine & IVF").openPopup(); 

var circle_497 = L.circle(coords_497, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_498 = [ 39.4501025 , -84.3730347]; 
var markers_498 = L.marker(coords_498).addTo(map); 
markers_498.bindPopup("Bethesda Fertility Center").openPopup(); 

var circle_498 = L.circle(coords_498, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_499 = [ 36.75782250305924 , -76.23509177922608]; 
var markers_499 = L.marker(coords_499).addTo(map); 
markers_499.bindPopup("Procreate Fertility Center of Virginia").openPopup(); 

var circle_499 = L.circle(coords_499, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_500 = [ 40.61878857263478 , -73.98592123296154]; 
var markers_500 = L.marker(coords_500).addTo(map); 
markers_500.bindPopup("Genesis Fertility/Brooklyn Ivf/ Maimonides Medical Center").openPopup(); 

var circle_500 = L.circle(coords_500, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_501 = [ 38.89635379206349 , -77.04772952261905]; 
var markers_501 = L.marker(coords_501).addTo(map); 
markers_501.bindPopup("Columbia Fertility Associates, LLC").openPopup(); 

var circle_501 = L.circle(coords_501, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_502 = [ 26.93046996343085 , -80.1256655243351]; 
var markers_502 = L.marker(coords_502).addTo(map); 
markers_502.bindPopup("OsteoLife Biomedical, LLC").openPopup(); 

var circle_502 = L.circle(coords_502, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_503 = [ 41.568090263320464 , -90.53785695135136]; 
var markers_503 = L.marker(coords_503).addTo(map); 
markers_503.bindPopup("ImpactLife").openPopup(); 

var circle_503 = L.circle(coords_503, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_504 = [ 40.8578772 , -74.4259866]; 
var markers_504 = L.marker(coords_504).addTo(map); 
markers_504.bindPopup("Extremity Medical, LLC").openPopup(); 

var circle_504 = L.circle(coords_504, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_505 = [ 32.965604672200776 , -96.88966872480697]; 
var markers_505 = L.marker(coords_505).addTo(map); 
markers_505.bindPopup("Wright Medical Technology, Inc. - District Service Center - Dallas").openPopup(); 

var circle_505 = L.circle(coords_505, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_506 = [ 41.153122231601465 , -85.12598644176713]; 
var markers_506 = L.marker(coords_506).addTo(map); 
markers_506.bindPopup("Midwest Fertility Specialists").openPopup(); 

var circle_506 = L.circle(coords_506, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_507 = [ 41.153122231601465 , -85.12598644176713]; 
var markers_507 = L.marker(coords_507).addTo(map); 
markers_507.bindPopup("Indiana Fertility Providers, LLC").openPopup(); 

var circle_507 = L.circle(coords_507, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_508 = [ 37.78855734101124 , -122.39681788089888]; 
var markers_508 = L.marker(coords_508).addTo(map); 
markers_508.bindPopup("Reproductive Medicine Associates of Northern California, P.C.").openPopup(); 

var circle_508 = L.circle(coords_508, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_509 = [ 28.59331772345317 , -81.32044866408863]; 
var markers_509 = L.marker(coords_509).addTo(map); 
markers_509.bindPopup("Advanced Reproductive Specialists, LLC").openPopup(); 

var circle_509 = L.circle(coords_509, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_510 = [ 33.9934867 , -81.0739826]; 
var markers_510 = L.marker(coords_510).addTo(map); 
markers_510.bindPopup("Southern Anesthesia & Surgical, Inc").openPopup(); 

var circle_510 = L.circle(coords_510, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_511 = [ 28.027995699022007 , -82.72884701369193]; 
var markers_511 = L.marker(coords_511).addTo(map); 
markers_511.bindPopup("MinSURG Corporation").openPopup(); 

var circle_511 = L.circle(coords_511, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_512 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_512 = L.marker(coords_512).addTo(map); 
markers_512.bindPopup("Aspire Fertility Institute San Antonio").openPopup(); 

var circle_512 = L.circle(coords_512, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_513 = [ 28.5989135595974 , -81.34949962938185]; 
var markers_513 = L.marker(coords_513).addTo(map); 
markers_513.bindPopup("Center for Reproductive Medicine").openPopup(); 

var circle_513 = L.circle(coords_513, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_514 = [ 36.08962435 , -80.2694556]; 
var markers_514 = L.marker(coords_514).addTo(map); 
markers_514.bindPopup("Wake Forest University School of Medicine").openPopup(); 

var circle_514 = L.circle(coords_514, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_515 = [ 45.512094 , -122.6207486]; 
var markers_515 = L.marker(coords_515).addTo(map); 
markers_515.bindPopup("Lions VisionGift").openPopup(); 

var circle_515 = L.circle(coords_515, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_516 = [ 42.4973449 , -96.4930072]; 
var markers_516 = L.marker(coords_516).addTo(map); 
markers_516.bindPopup("Conetic Solutions, Inc.").openPopup(); 

var circle_516 = L.circle(coords_516, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_517 = [ 33.923889898551955 , -118.41080836305366]; 
var markers_517 = L.marker(coords_517).addTo(map); 
markers_517.bindPopup("Skye Biologics Holdings LLC").openPopup(); 

var circle_517 = L.circle(coords_517, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_518 = [ 40.7127281 , -74.0060152]; 
var markers_518 = L.marker(coords_518).addTo(map); 
markers_518.bindPopup("New York Presbyterian Hospital Weil Cornell  Medical College").openPopup(); 

var circle_518 = L.circle(coords_518, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_519 = [ 40.0289955 , -75.6207651]; 
var markers_519 = L.marker(coords_519).addTo(map); 
markers_519.bindPopup("Riccione Orthopedics, Inc.").openPopup(); 

var circle_519 = L.circle(coords_519, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_520 = [ 41.64923774069768 , -83.67329669793281]; 
var markers_520 = L.marker(coords_520).addTo(map); 
markers_520.bindPopup("Community Blood Center").openPopup(); 

var circle_520 = L.circle(coords_520, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_521 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_521 = L.marker(coords_521).addTo(map); 
markers_521.bindPopup("Avant Solutions").openPopup(); 

var circle_521 = L.circle(coords_521, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_522 = [ 43.02239950372579 , -85.60544982816691]; 
var markers_522 = L.marker(coords_522).addTo(map); 
markers_522.bindPopup("Michigan Reproductive and IVF, P.C.").openPopup(); 

var circle_522 = L.circle(coords_522, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_523 = [ 32.93014229932146 , -97.0959688173876]; 
var markers_523 = L.marker(coords_523).addTo(map); 
markers_523.bindPopup("GraftSource, LLC").openPopup(); 

var circle_523 = L.circle(coords_523, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_524 = [ 40.0726070131379 , -76.32322849989143]; 
var markers_524 = L.marker(coords_524).addTo(map); 
markers_524.bindPopup("Novus Surgical Solutions LLC").openPopup(); 

var circle_524 = L.circle(coords_524, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_525 = [ 40.9543943 , -74.0308504]; 
var markers_525 = L.marker(coords_525).addTo(map); 
markers_525.bindPopup("Fertility Institute of New Jersey and New York").openPopup(); 

var circle_525 = L.circle(coords_525, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_526 = [ 37.68627821851852 , -122.40348412592591]; 
var markers_526 = L.marker(coords_526).addTo(map); 
markers_526.bindPopup("Focus Surgical Inc").openPopup(); 

var circle_526 = L.circle(coords_526, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_527 = [ 33.03849155019701 , -96.80893476367218]; 
var markers_527 = L.marker(coords_527).addTo(map); 
markers_527.bindPopup("Plano IVF LLC").openPopup(); 

var circle_527 = L.circle(coords_527, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_528 = [ 28.559283 , -81.844449]; 
var markers_528 = L.marker(coords_528).addTo(map); 
markers_528.bindPopup("LGGS Florida, Inc").openPopup(); 

var circle_528 = L.circle(coords_528, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_529 = [ 40.44420588580645 , -79.95281572080646]; 
var markers_529 = L.marker(coords_529).addTo(map); 
markers_529.bindPopup("Pittsburgh Cryobank Inc.").openPopup(); 

var circle_529 = L.circle(coords_529, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_530 = [ 40.7127281 , -74.0060152]; 
var markers_530 = L.marker(coords_530).addTo(map); 
markers_530.bindPopup("New York University Fertility Center").openPopup(); 

var circle_530 = L.circle(coords_530, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_531 = [ 39.352608745837614 , -84.41586634157245]; 
var markers_531 = L.marker(coords_531).addTo(map); 
markers_531.bindPopup("Fertility Wellness Institute of Ohio").openPopup(); 

var circle_531 = L.circle(coords_531, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_532 = [ 32.80031553747178 , -96.78998536636568]; 
var markers_532 = L.marker(coords_532).addTo(map); 
markers_532.bindPopup("BM Medical Management Services LLC.").openPopup(); 

var circle_532 = L.circle(coords_532, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_533 = [ 29.30320032570621 , -94.78876864435028]; 
var markers_533 = L.marker(coords_533).addTo(map); 
markers_533.bindPopup("Shriners Hospitals for Children").openPopup(); 

var circle_533 = L.circle(coords_533, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_534 = [ 40.53466302106278 , -74.2128740956191]; 
var markers_534 = L.marker(coords_534).addTo(map); 
markers_534.bindPopup("Island Reproductive Services").openPopup(); 

var circle_534 = L.circle(coords_534, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_535 = [ 37.52195137107843 , -121.9682526485294]; 
var markers_535 = L.marker(coords_535).addTo(map); 
markers_535.bindPopup("Kaiser Permanente Center for Reproductive Health").openPopup(); 

var circle_535 = L.circle(coords_535, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_536 = [ 27.96554649343185 , -82.45874592758621]; 
var markers_536 = L.marker(coords_536).addTo(map); 
markers_536.bindPopup("Lions Eye Institute for Transplant and Research, Inc.").openPopup(); 

var circle_536 = L.circle(coords_536, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_537 = [ 29.693161876511628 , -82.30553862255815]; 
var markers_537 = L.marker(coords_537).addTo(map); 
markers_537.bindPopup("Lions Eye Institute for Transplant & Research, Inc.").openPopup(); 

var circle_537 = L.circle(coords_537, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_538 = [ 26.93046996343085 , -80.1256655243351]; 
var markers_538 = L.marker(coords_538).addTo(map); 
markers_538.bindPopup("South Florida Institute For Reproductive Medicine").openPopup(); 

var circle_538 = L.circle(coords_538, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_539 = [ 0.0 , 0.0]; 
var markers_539 = L.marker(coords_539).addTo(map); 
markers_539.bindPopup("Milford Medical Supplies, Inc.").openPopup(); 

var circle_539 = L.circle(coords_539, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_540 = [ 38.91398049449761 , -77.0733527791866]; 
var markers_540 = L.marker(coords_540).addTo(map); 
markers_540.bindPopup("MedStar Georgetown Medical Center Inc").openPopup(); 

var circle_540 = L.circle(coords_540, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_541 = [ 40.8853773 , -73.9523597]; 
var markers_541 = L.marker(coords_541).addTo(map); 
markers_541.bindPopup("Hans Biomed USA Inc.").openPopup(); 

var circle_541 = L.circle(coords_541, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_542 = [ 35.924203839922484 , -83.89724430248063]; 
var markers_542 = L.marker(coords_542).addTo(map); 
markers_542.bindPopup("East Tennessee Lions Eye Bank").openPopup(); 

var circle_542 = L.circle(coords_542, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_543 = [ 32.7848012875 , -79.9496678375]; 
var markers_543 = L.marker(coords_543).addTo(map); 
markers_543.bindPopup("Medical University Hospital Authority Laboratory Services").openPopup(); 

var circle_543 = L.circle(coords_543, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_544 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_544 = L.marker(coords_544).addTo(map); 
markers_544.bindPopup("VRL Eurofins").openPopup(); 

var circle_544 = L.circle(coords_544, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_545 = [ 40.7455316 , -73.9484995]; 
var markers_545 = L.marker(coords_545).addTo(map); 
markers_545.bindPopup("LiveOnNY").openPopup(); 

var circle_545 = L.circle(coords_545, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_546 = [ 28.56465684307692 , -81.53875666153846]; 
var markers_546 = L.marker(coords_546).addTo(map); 
markers_546.bindPopup("PhysioRX, LLC").openPopup(); 

var circle_546 = L.circle(coords_546, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_547 = [ 41.0414858 , -74.129032]; 
var markers_547 = L.marker(coords_547).addTo(map); 
markers_547.bindPopup("Hitachi Chemical Advanced Therapeutics Solutions, LLC").openPopup(); 

var circle_547 = L.circle(coords_547, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_548 = [ 35.18757022063655 , -89.86628200184805]; 
var markers_548 = L.marker(coords_548).addTo(map); 
markers_548.bindPopup("Interstate Blood Bank Inc").openPopup(); 

var circle_548 = L.circle(coords_548, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_549 = [ 33.48667557578125 , -86.74340698242187]; 
var markers_549 = L.marker(coords_549).addTo(map); 
markers_549.bindPopup("AFS PC dba Alabama Fertility Specialists").openPopup(); 

var circle_549 = L.circle(coords_549, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_550 = [ 28.52914 , -81.3681386]; 
var markers_550 = L.marker(coords_550).addTo(map); 
markers_550.bindPopup("LifeLink Tissue Bank - Orlando").openPopup(); 

var circle_550 = L.circle(coords_550, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_551 = [ 41.365333 , -81.507896]; 
var markers_551 = L.marker(coords_551).addTo(map); 
markers_551.bindPopup("Wright State Physicians").openPopup(); 

var circle_551 = L.circle(coords_551, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_552 = [ 40.7890821 , -111.9867396]; 
var markers_552 = L.marker(coords_552).addTo(map); 
markers_552.bindPopup("Innovasis, Inc").openPopup(); 

var circle_552 = L.circle(coords_552, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_553 = [ 38.14304808868155 , -85.6775427581765]; 
var markers_553 = L.marker(coords_553).addTo(map); 
markers_553.bindPopup("UPS Supply Chain Solutions Inc.,").openPopup(); 

var circle_553 = L.circle(coords_553, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_554 = [ 25.702211968772893 , -80.36070389559421]; 
var markers_554 = L.marker(coords_554).addTo(map); 
markers_554.bindPopup("TissueTech Inc").openPopup(); 

var circle_554 = L.circle(coords_554, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_555 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_555 = L.marker(coords_555).addTo(map); 
markers_555.bindPopup("Vitalant").openPopup(); 

var circle_555 = L.circle(coords_555, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_556 = [ 37.42573488320313 , -122.16436750859376]; 
var markers_556 = L.marker(coords_556).addTo(map); 
markers_556.bindPopup("Stanford Health Care").openPopup(); 

var circle_556 = L.circle(coords_556, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_557 = [ 34.4849099 , -118.3300605]; 
var markers_557 = L.marker(coords_557).addTo(map); 
markers_557.bindPopup("Loma Linda University Medical Center").openPopup(); 

var circle_557 = L.circle(coords_557, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_558 = [ 42.016099562476896 , -87.83363720702403]; 
var markers_558 = L.marker(coords_558).addTo(map); 
markers_558.bindPopup("Advocate Lutheran General Hospital Transfusion Services").openPopup(); 

var circle_558 = L.circle(coords_558, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_559 = [ 38.8585563174482 , -77.23759394187569]; 
var markers_559 = L.marker(coords_559).addTo(map); 
markers_559.bindPopup("Genetics & IVF Institute, Inc.").openPopup(); 

var circle_559 = L.circle(coords_559, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_560 = [ 42.326911219047616 , -83.182342214986]; 
var markers_560 = L.marker(coords_560).addTo(map); 
markers_560.bindPopup("IVF Michigan, P.C.").openPopup(); 

var circle_560 = L.circle(coords_560, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_561 = [ 35.846488655433795 , -78.69680267945205]; 
var markers_561 = L.marker(coords_561).addTo(map); 
markers_561.bindPopup("NorthState Surgical Devices LLC").openPopup(); 

var circle_561 = L.circle(coords_561, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_562 = [ 40.3295547 , -74.0615285]; 
var markers_562 = L.marker(coords_562).addTo(map); 
markers_562.bindPopup("East Coast Infertility and IVF PC dba Damien Fertility Partners").openPopup(); 

var circle_562 = L.circle(coords_562, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_563 = [ 33.463032704259255 , -81.9706953174074]; 
var markers_563 = L.marker(coords_563).addTo(map); 
markers_563.bindPopup("MCGH/PPG Reproductive Laboratory, LLC").openPopup(); 

var circle_563 = L.circle(coords_563, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_564 = [ 31.772941089285712 , -106.43150473928571]; 
var markers_564 = L.marker(coords_564).addTo(map); 
markers_564.bindPopup("University Medical Center of El Paso").openPopup(); 

var circle_564 = L.circle(coords_564, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_565 = [ 35.0366998 , -89.75622745388135]; 
var markers_565 = L.marker(coords_565).addTo(map); 
markers_565.bindPopup("Gentleman Orthopedic Solutions LLC").openPopup(); 

var circle_565 = L.circle(coords_565, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_566 = [ 35.2964487 , -89.6617313]; 
var markers_566 = L.marker(coords_566).addTo(map); 
markers_566.bindPopup("Wright Medical Technology, Inc. Building 2").openPopup(); 

var circle_566 = L.circle(coords_566, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_567 = [ 31.84453872285714 , -106.55228944476193]; 
var markers_567 = L.marker(coords_567).addTo(map); 
markers_567.bindPopup("Southwest Center for Reproductive Health PA").openPopup(); 

var circle_567 = L.circle(coords_567, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_568 = [ 40.44420588580645 , -79.95281572080646]; 
var markers_568 = L.marker(coords_568).addTo(map); 
markers_568.bindPopup("UPMC Hematopoietic Stem Cell Laboratory").openPopup(); 

var circle_568 = L.circle(coords_568, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_569 = [ 37.87142758769231 , -122.29358003076923]; 
var markers_569 = L.marker(coords_569).addTo(map); 
markers_569.bindPopup("Berkeley Advanced Biomaterials, LLC").openPopup(); 

var circle_569 = L.circle(coords_569, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_570 = [ 42.17870840632023 , -87.80536878174158]; 
var markers_570 = L.marker(coords_570).addTo(map); 
markers_570.bindPopup("Highland Park Hospital Blood Bank").openPopup(); 

var circle_570 = L.circle(coords_570, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_571 = [ 41.0414858 , -74.129032]; 
var markers_571 = L.marker(coords_571).addTo(map); 
markers_571.bindPopup("Stryker Spine").openPopup(); 

var circle_571 = L.circle(coords_571, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_572 = [ 32.9216165752 , -96.96499905216]; 
var markers_572 = L.marker(coords_572).addTo(map); 
markers_572.bindPopup("Acuity Surgical Devices, LLC").openPopup(); 

var circle_572 = L.circle(coords_572, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_573 = [ 34.729847 , -86.5859011]; 
var markers_573 = L.marker(coords_573).addTo(map); 
markers_573.bindPopup("Advancing Sight Network North Alabama Regional Office").openPopup(); 

var circle_573 = L.circle(coords_573, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_574 = [ 45.4132305 , -122.62012419060528]; 
var markers_574 = L.marker(coords_574).addTo(map); 
markers_574.bindPopup("Boston IVF, Inc. The Maine Center").openPopup(); 

var circle_574 = L.circle(coords_574, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_575 = [ 39.1078525383592 , -84.51022905133037]; 
var markers_575 = L.marker(coords_575).addTo(map); 
markers_575.bindPopup("LifeCenter Organ Donor Network").openPopup(); 

var circle_575 = L.circle(coords_575, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_576 = [ 32.772645411884554 , -117.13512520305602]; 
var markers_576 = L.marker(coords_576).addTo(map); 
markers_576.bindPopup("UCSD - Lifesharing").openPopup(); 

var circle_576 = L.circle(coords_576, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_577 = [ 34.08719876607843 , -117.96596848196076]; 
var markers_577 = L.marker(coords_577).addTo(map); 
markers_577.bindPopup("StemCyte, Inc").openPopup(); 

var circle_577 = L.circle(coords_577, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_578 = [ 33.63216492475682 , -117.87771778237632]; 
var markers_578 = L.marker(coords_578).addTo(map); 
markers_578.bindPopup("Fertility Lab Sciences of Orange County").openPopup(); 

var circle_578 = L.circle(coords_578, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_579 = [ 43.11370735 , -77.67223448331175]; 
var markers_579 = L.marker(coords_579).addTo(map); 
markers_579.bindPopup("Sight Society of NENY, Inc. Lions Eye Bank of Rochester").openPopup(); 

var circle_579 = L.circle(coords_579, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_580 = [ 27.95499 , -82.37284632542764]; 
var markers_580 = L.marker(coords_580).addTo(map); 
markers_580.bindPopup("LifeLink Foundation, Inc.").openPopup(); 

var circle_580 = L.circle(coords_580, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_581 = [ 33.63216492475682 , -117.87771778237632]; 
var markers_581 = L.marker(coords_581).addTo(map); 
markers_581.bindPopup("Kan, Mark, MD Inc").openPopup(); 

var circle_581 = L.circle(coords_581, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_582 = [ 42.0415823 , -87.8873916]; 
var markers_582 = L.marker(coords_582).addTo(map); 
markers_582.bindPopup("Karl Schumacher Dental, LLC").openPopup(); 

var circle_582 = L.circle(coords_582, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_583 = [ 33.78830559480986 , -117.87242521238436]; 
var markers_583 = L.marker(coords_583).addTo(map); 
markers_583.bindPopup("OneLegacy").openPopup(); 

var circle_583 = L.circle(coords_583, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_584 = [ 33.923889898551955 , -118.41080836305366]; 
var markers_584 = L.marker(coords_584).addTo(map); 
markers_584.bindPopup("Brooks Life Sciences").openPopup(); 

var circle_584 = L.circle(coords_584, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_585 = [ 41.82105105 , -71.38476684515123]; 
var markers_585 = L.marker(coords_585).addTo(map); 
markers_585.bindPopup("Rhode Island Blood Center, A Division of New York Blood Center, Inc.").openPopup(); 

var circle_585 = L.circle(coords_585, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_586 = [ 40.1480754 , -82.9277936]; 
var markers_586 = L.marker(coords_586).addTo(map); 
markers_586.bindPopup("Osteo Solutions LLC").openPopup(); 

var circle_586 = L.circle(coords_586, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_587 = [ 32.369152393773824 , -86.17432418348157]; 
var markers_587 = L.marker(coords_587).addTo(map); 
markers_587.bindPopup("Advancing Sight Network Southeast Regional Office").openPopup(); 

var circle_587 = L.circle(coords_587, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_588 = [ 33.620142173448954 , -117.92814826259163]; 
var markers_588 = L.marker(coords_588).addTo(map); 
markers_588.bindPopup("Newport Beach IVF, LLC dba Ovation Fertility").openPopup(); 

var circle_588 = L.circle(coords_588, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_589 = [ 33.738159994745544 , -117.81673662977528]; 
var markers_589 = L.marker(coords_589).addTo(map); 
markers_589.bindPopup("Family Fertility CryoBank").openPopup(); 

var circle_589 = L.circle(coords_589, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_590 = [ 38.92656386357504 , -92.3677368778246]; 
var markers_590 = L.marker(coords_590).addTo(map); 
markers_590.bindPopup("JAG-MED LLC").openPopup(); 

var circle_590 = L.circle(coords_590, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_591 = [ 41.47296584660194 , -75.5673894592233]; 
var markers_591 = L.marker(coords_591).addTo(map); 
markers_591.bindPopup("Musculoskeletal Transplant Foundation, Inc., dba MTF Biologics").openPopup(); 

var circle_591 = L.circle(coords_591, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_592 = [ 40.7899291 , -74.0566735]; 
var markers_592 = L.marker(coords_592).addTo(map); 
markers_592.bindPopup("Tri-State Biologics Inc.").openPopup(); 

var circle_592 = L.circle(coords_592, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_593 = [ 40.7890821 , -111.9867396]; 
var markers_593 = L.marker(coords_593).addTo(map); 
markers_593.bindPopup("St Marks Outpatient Surgery").openPopup(); 

var circle_593 = L.circle(coords_593, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_594 = [ 38.5700348 , -121.30607520720795]; 
var markers_594 = L.marker(coords_594).addTo(map); 
markers_594.bindPopup("BloodSource, Inc.").openPopup(); 

var circle_594 = L.circle(coords_594, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_595 = [ 38.87400028215768 , -77.12183185057053]; 
var markers_595 = L.marker(coords_595).addTo(map); 
markers_595.bindPopup("Dominion Fertility").openPopup(); 

var circle_595 = L.circle(coords_595, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_596 = [ 40.7127281 , -74.0060152]; 
var markers_596 = L.marker(coords_596).addTo(map); 
markers_596.bindPopup("The Sperm and Embryo Bank of New York, Inc.").openPopup(); 

var circle_596 = L.circle(coords_596, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_597 = [ 26.02301595547893 , -80.24601649501916]; 
var markers_597 = L.marker(coords_597).addTo(map); 
markers_597.bindPopup("NAO Enterprises Corp.").openPopup(); 

var circle_597 = L.circle(coords_597, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_598 = [ 42.95289065 , -78.78371515245306]; 
var markers_598 = L.marker(coords_598).addTo(map); 
markers_598.bindPopup("Infertility & IVF Medical Associates of WNY").openPopup(); 

var circle_598 = L.circle(coords_598, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_599 = [ 38.95551337213114 , -94.77185868360657]; 
var markers_599 = L.marker(coords_599).addTo(map); 
markers_599.bindPopup("Wright Medical Technology, Inc - District Service Center").openPopup(); 

var circle_599 = L.circle(coords_599, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_600 = [ 43.62654466213206 , -116.2857524983244]; 
var markers_600 = L.marker(coords_600).addTo(map); 
markers_600.bindPopup("Envision Sight, Inc").openPopup(); 

var circle_600 = L.circle(coords_600, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_601 = [ 42.583645 , -83.2454883]; 
var markers_601 = L.marker(coords_601).addTo(map); 
markers_601.bindPopup("Michigan Reproductive Medicine").openPopup(); 

var circle_601 = L.circle(coords_601, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_602 = [ 33.57092771321942 , -101.88186904721223]; 
var markers_602 = L.marker(coords_602).addTo(map); 
markers_602.bindPopup("The Centre for Reproductive Medicine").openPopup(); 

var circle_602 = L.circle(coords_602, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_603 = [ 39.81917980414113 , -89.6459579273149]; 
var markers_603 = L.marker(coords_603).addTo(map); 
markers_603.bindPopup("Gift of Hope Organ & Tissue Donor Network").openPopup(); 

var circle_603 = L.circle(coords_603, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_604 = [ 42.281639035333335 , -83.73110151]; 
var markers_604 = L.marker(coords_604).addTo(map); 
markers_604.bindPopup("The Regents of the University of Michigan Blood Bank").openPopup(); 

var circle_604 = L.circle(coords_604, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_605 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_605 = L.marker(coords_605).addTo(map); 
markers_605.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_605 = L.circle(coords_605, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_606 = [ 39.1078525383592 , -84.51022905133037]; 
var markers_606 = L.marker(coords_606).addTo(map); 
markers_606.bindPopup("AlloSource Inc").openPopup(); 

var circle_606 = L.circle(coords_606, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_607 = [ 40.79585867609255 , -124.15655772082262]; 
var markers_607 = L.marker(coords_607).addTo(map); 
markers_607.bindPopup("Northern California Community Blood Bank").openPopup(); 

var circle_607 = L.circle(coords_607, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_608 = [ 43.629449051567065 , -116.20665717280576]; 
var markers_608 = L.marker(coords_608).addTo(map); 
markers_608.bindPopup("Idaho Center for Reproductive Medicine").openPopup(); 

var circle_608 = L.circle(coords_608, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_609 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_609 = L.marker(coords_609).addTo(map); 
markers_609.bindPopup("AlloSource").openPopup(); 

var circle_609 = L.circle(coords_609, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_610 = [ 42.3582529 , -71.0966272383055]; 
var markers_610 = L.marker(coords_610).addTo(map); 
markers_610.bindPopup("California Cryobank LLC").openPopup(); 

var circle_610 = L.circle(coords_610, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_611 = [ 42.50428719745128 , -82.9370244089955]; 
var markers_611 = L.marker(coords_611).addTo(map); 
markers_611.bindPopup("GoldenDent").openPopup(); 

var circle_611 = L.circle(coords_611, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_612 = [ 43.587533024484735 , -116.22715413036784]; 
var markers_612 = L.marker(coords_612).addTo(map); 
markers_612.bindPopup("North American Cryobank, Inc.").openPopup(); 

var circle_612 = L.circle(coords_612, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_613 = [ 28.5421109 , -81.3790304]; 
var markers_613 = L.marker(coords_613).addTo(map); 
markers_613.bindPopup("Wright Medical Technology, Inc.").openPopup(); 

var circle_613 = L.circle(coords_613, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_614 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_614 = L.marker(coords_614).addTo(map); 
markers_614.bindPopup("Cryogene Inc.").openPopup(); 

var circle_614 = L.circle(coords_614, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_615 = [ 38.019121666761365 , -84.48719336377842]; 
var markers_615 = L.marker(coords_615).addTo(map); 
markers_615.bindPopup("Veterans Affairs Medical Ctr").openPopup(); 

var circle_615 = L.circle(coords_615, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_616 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_616 = L.marker(coords_616).addTo(map); 
markers_616.bindPopup("Seattle Sperm Bank LLC").openPopup(); 

var circle_616 = L.circle(coords_616, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_617 = [ 46.80806180625 , -114.0459613375]; 
var markers_617 = L.marker(coords_617).addTo(map); 
markers_617.bindPopup("NW Cryobank").openPopup(); 

var circle_617 = L.circle(coords_617, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_618 = [ 42.07525703367827 , -80.07415780921919]; 
var markers_618 = L.marker(coords_618).addTo(map); 
markers_618.bindPopup("Lions Eye Bank of NW PA Inc").openPopup(); 

var circle_618 = L.circle(coords_618, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_619 = [ 34.75159047624831 , -92.34576986005398]; 
var markers_619 = L.marker(coords_619).addTo(map); 
markers_619.bindPopup("UAMS ART Program Tissue Bank").openPopup(); 

var circle_619 = L.circle(coords_619, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_620 = [ 25.7208332416205 , -80.27180479787627]; 
var markers_620 = L.marker(coords_620).addTo(map); 
markers_620.bindPopup("Conceptions Florida").openPopup(); 

var circle_620 = L.circle(coords_620, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_621 = [ 34.103976854949494 , -117.5931209338384]; 
var markers_621 = L.marker(coords_621).addTo(map); 
markers_621.bindPopup("New World Medical Inc").openPopup(); 

var circle_621 = L.circle(coords_621, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_622 = [ 34.75159047624831 , -92.34576986005398]; 
var markers_622 = L.marker(coords_622).addTo(map); 
markers_622.bindPopup("Arkansas Feritility & Gynecology Associates").openPopup(); 

var circle_622 = L.circle(coords_622, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_623 = [ 40.7127281 , -74.0060152]; 
var markers_623 = L.marker(coords_623).addTo(map); 
markers_623.bindPopup("Metropolitan Reproductive Medicine, P.C.").openPopup(); 

var circle_623 = L.circle(coords_623, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_624 = [ 34.103976854949494 , -117.5931209338384]; 
var markers_624 = L.marker(coords_624).addTo(map); 
markers_624.bindPopup("HRC Fertility").openPopup(); 

var circle_624 = L.circle(coords_624, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_625 = [ 40.7127281 , -74.0060152]; 
var markers_625 = L.marker(coords_625).addTo(map); 
markers_625.bindPopup("Eye Bank For Sight Restoration Inc.").openPopup(); 

var circle_625 = L.circle(coords_625, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_626 = [ 25.656158809040768 , -80.36191435602485]; 
var markers_626 = L.marker(coords_626).addTo(map); 
markers_626.bindPopup("Fertility and IVF Center of Miami Inc").openPopup(); 

var circle_626 = L.circle(coords_626, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_627 = [ 26.216207143900096 , -98.23741582411142]; 
var markers_627 = L.marker(coords_627).addTo(map); 
markers_627.bindPopup("Redmed Inc").openPopup(); 

var circle_627 = L.circle(coords_627, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_628 = [ 36.188068694117646 , -85.51977510196079]; 
var markers_628 = L.marker(coords_628).addTo(map); 
markers_628.bindPopup("Birth Tissue Donor Services of Tennessee Inc").openPopup(); 

var circle_628 = L.circle(coords_628, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_629 = [ 34.03292897442455 , -117.64145201099744]; 
var markers_629 = L.marker(coords_629).addTo(map); 
markers_629.bindPopup("Isomedix Operations Inc").openPopup(); 

var circle_629 = L.circle(coords_629, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_630 = [ 46.80806180625 , -114.0459613375]; 
var markers_630 = L.marker(coords_630).addTo(map); 
markers_630.bindPopup("NW Cryobank").openPopup(); 

var circle_630 = L.circle(coords_630, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_631 = [ 41.57796364435076 , -83.6800440752108]; 
var markers_631 = L.marker(coords_631).addTo(map); 
markers_631.bindPopup("Life Connection of Ohio").openPopup(); 

var circle_631 = L.circle(coords_631, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_632 = [ 29.98529615646209 , -90.16856133862672]; 
var markers_632 = L.marker(coords_632).addTo(map); 
markers_632.bindPopup("Fertility Institute of New Orleans - Metairie").openPopup(); 

var circle_632 = L.circle(coords_632, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_633 = [ 33.9419393 , -118.43808037530732]; 
var markers_633 = L.marker(coords_633).addTo(map); 
markers_633.bindPopup("Component Processing Laboratory, UCLA Health, Blood & Platelet Center").openPopup(); 

var circle_633 = L.circle(coords_633, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_634 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_634 = L.marker(coords_634).addTo(map); 
markers_634.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_634 = L.circle(coords_634, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_635 = [ 39.98522811287357 , -83.03863304712644]; 
var markers_635 = L.marker(coords_635).addTo(map); 
markers_635.bindPopup("Lifeline of Ohio Organ Procurement Inc").openPopup(); 

var circle_635 = L.circle(coords_635, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_636 = [ 41.57796598559322 , -87.80255630317797]; 
var markers_636 = L.marker(coords_636).addTo(map); 
markers_636.bindPopup("Levrant, Seth, MD, PC").openPopup(); 

var circle_636 = L.circle(coords_636, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_637 = [ 37.66801919367089 , -97.28608166012658]; 
var markers_637 = L.marker(coords_637).addTo(map); 
markers_637.bindPopup("Kansas Eye Bank & Cornea Research Center Inc").openPopup(); 

var circle_637 = L.circle(coords_637, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_638 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_638 = L.marker(coords_638).addTo(map); 
markers_638.bindPopup("Crown Peak Industries, LLC").openPopup(); 

var circle_638 = L.circle(coords_638, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_639 = [ 29.57299902327044 , -98.5400125327044]; 
var markers_639 = L.marker(coords_639).addTo(map); 
markers_639.bindPopup("Surgilogix, LLC").openPopup(); 

var circle_639 = L.circle(coords_639, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_640 = [ 40.7064088 , -74.5492725]; 
var markers_640 = L.marker(coords_640).addTo(map); 
markers_640.bindPopup("Reproductive Medicine Associates of New Jersey LLC").openPopup(); 

var circle_640 = L.circle(coords_640, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_641 = [ 40.64817853311828 , -75.37578331838709]; 
var markers_641 = L.marker(coords_641).addTo(map); 
markers_641.bindPopup("SightLife/CorneaGen").openPopup(); 

var circle_641 = L.circle(coords_641, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_642 = [ 41.630663 , -87.8536288]; 
var markers_642 = L.marker(coords_642).addTo(map); 
markers_642.bindPopup("Advanced Reproductive Health Centers Ltd dba Chicago IVF").openPopup(); 

var circle_642 = L.circle(coords_642, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_643 = [ 32.54080771068249 , -84.92862598323441]; 
var markers_643 = L.marker(coords_643).addTo(map); 
markers_643.bindPopup("Columbus Ctr for Repro. Endo & Infertility, LLC").openPopup(); 

var circle_643 = L.circle(coords_643, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_644 = [ 34.42974839104751 , -119.6840881168226]; 
var markers_644 = L.marker(coords_644).addTo(map); 
markers_644.bindPopup("Rene B. Allen, M.D., Professional Corporation").openPopup(); 

var circle_644 = L.circle(coords_644, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_645 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_645 = L.marker(coords_645).addTo(map); 
markers_645.bindPopup("Wright Medical Technology Inc - District Service Center - Houston").openPopup(); 

var circle_645 = L.circle(coords_645, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_646 = [ 33.7489924 , -84.3902644]; 
var markers_646 = L.marker(coords_646).addTo(map); 
markers_646.bindPopup("Reproductive Biology Associates").openPopup(); 

var circle_646 = L.circle(coords_646, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_647 = [ 41.2860699 , -96.2346121]; 
var markers_647 = L.marker(coords_647).addTo(map); 
markers_647.bindPopup("Reproductive Health Specialists").openPopup(); 

var circle_647 = L.circle(coords_647, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_648 = [ 36.82894571153847 , -119.6935758]; 
var markers_648 = L.marker(coords_648).addTo(map); 
markers_648.bindPopup("Women's Specialty & Fertility Center").openPopup(); 

var circle_648 = L.circle(coords_648, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_649 = [ 41.7502971 , -87.9161818]; 
var markers_649 = L.marker(coords_649).addTo(map); 
markers_649.bindPopup("Medwest Associates").openPopup(); 

var circle_649 = L.circle(coords_649, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_650 = [ 42.17870840632023 , -87.80536878174158]; 
var markers_650 = L.marker(coords_650).addTo(map); 
markers_650.bindPopup("Fertility Centers of Illinois").openPopup(); 

var circle_650 = L.circle(coords_650, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_651 = [ 42.17870840632023 , -87.80536878174158]; 
var markers_651 = L.marker(coords_651).addTo(map); 
markers_651.bindPopup("Highland Park IVF Laboratory - Aparent").openPopup(); 

var circle_651 = L.circle(coords_651, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_652 = [ 39.97019849205298 , -83.00356617678808]; 
var markers_652 = L.marker(coords_652).addTo(map); 
markers_652.bindPopup("Central Ohio Lions Eye Bank Inc").openPopup(); 

var circle_652 = L.circle(coords_652, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_653 = [ 43.07657208261145 , -73.76831172032709]; 
var markers_653 = L.marker(coords_653).addTo(map); 
markers_653.bindPopup("Saratoga Hospital Laboratory").openPopup(); 

var circle_653 = L.circle(coords_653, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_654 = [ 29.50626249341317 , -98.5683992]; 
var markers_654 = L.marker(coords_654).addTo(map); 
markers_654.bindPopup("Medical Interest, Inc").openPopup(); 

var circle_654 = L.circle(coords_654, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_655 = [ 34.065984483319035 , -117.16781319946531]; 
var markers_655 = L.marker(coords_655).addTo(map); 
markers_655.bindPopup("Musculoskeletal Transplant Foundation").openPopup(); 

var circle_655 = L.circle(coords_655, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_656 = [ 33.9934867 , -81.0739826]; 
var markers_656 = L.marker(coords_656).addTo(map); 
markers_656.bindPopup("Piedmont Reproductive Endocrinology Group, PA").openPopup(); 

var circle_656 = L.circle(coords_656, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_657 = [ 30.4647336752754 , -90.10425180758874]; 
var markers_657 = L.marker(coords_657).addTo(map); 
markers_657.bindPopup("Louisiana Organ Procurement Agency").openPopup(); 

var circle_657 = L.circle(coords_657, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_658 = [ 41.47143063541667 , -75.60297288541666]; 
var markers_658 = L.marker(coords_658).addTo(map); 
markers_658.bindPopup("MTF Jessup Distribution Center").openPopup(); 

var circle_658 = L.circle(coords_658, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_659 = [ 40.7127281 , -74.0060152]; 
var markers_659 = L.marker(coords_659).addTo(map); 
markers_659.bindPopup("Chelsea Fertility NYC").openPopup(); 

var circle_659 = L.circle(coords_659, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_660 = [ 44.96994348206897 , -93.24309929034482]; 
var markers_660 = L.marker(coords_660).addTo(map); 
markers_660.bindPopup("UMMC Diagnostic Andrology Lab").openPopup(); 

var circle_660 = L.circle(coords_660, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_661 = [ 27.95009035 , -82.48400512646971]; 
var markers_661 = L.marker(coords_661).addTo(map); 
markers_661.bindPopup("Laboratory Corporation of America").openPopup(); 

var circle_661 = L.circle(coords_661, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_662 = [ 26.92065174317181 , -80.07816978722468]; 
var markers_662 = L.marker(coords_662).addTo(map); 
markers_662.bindPopup("Captiva Spine, Inc").openPopup(); 

var circle_662 = L.circle(coords_662, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_663 = [ 32.33242036044776 , -90.08517370597016]; 
var markers_663 = L.marker(coords_663).addTo(map); 
markers_663.bindPopup("Mississippi Lions Eye Bank, Inc.").openPopup(); 

var circle_663 = L.circle(coords_663, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_664 = [ 40.7127281 , -74.0060152]; 
var markers_664 = L.marker(coords_664).addTo(map); 
markers_664.bindPopup("Advanced Fertility Services, P.C.").openPopup(); 

var circle_664 = L.circle(coords_664, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_665 = [ 34.065984483319035 , -117.16781319946531]; 
var markers_665 = L.marker(coords_665).addTo(map); 
markers_665.bindPopup("Musculoskeletal Transplant Foundation").openPopup(); 

var circle_665 = L.circle(coords_665, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_666 = [ 36.03411796072586 , -95.93741055975372]; 
var markers_666 = L.marker(coords_666).addTo(map); 
markers_666.bindPopup("Foundation Fusion Solutions, LLC").openPopup(); 

var circle_666 = L.circle(coords_666, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_667 = [ 40.7127281 , -74.0060152]; 
var markers_667 = L.marker(coords_667).addTo(map); 
markers_667.bindPopup("GLOBAL FERTILITY & GENETICS").openPopup(); 

var circle_667 = L.circle(coords_667, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_668 = [ 39.17396425700219 , -76.84638453873085]; 
var markers_668 = L.marker(coords_668).addTo(map); 
markers_668.bindPopup("Osiris Therapeutics Inc").openPopup(); 

var circle_668 = L.circle(coords_668, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_669 = [ 42.13720385 , -72.54397090121046]; 
var markers_669 = L.marker(coords_669).addTo(map); 
markers_669.bindPopup("Baystate Medical Center, Inc.").openPopup(); 

var circle_669 = L.circle(coords_669, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_670 = [ 39.97019849205298 , -83.00356617678808]; 
var markers_670 = L.marker(coords_670).addTo(map); 
markers_670.bindPopup("Ohio Reproductive Medicine Inc").openPopup(); 

var circle_670 = L.circle(coords_670, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_671 = [ 40.0259912 , -88.0663545]; 
var markers_671 = L.marker(coords_671).addTo(map); 
markers_671.bindPopup("Precise Bioscience LLC").openPopup(); 

var circle_671 = L.circle(coords_671, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_672 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_672 = L.marker(coords_672).addTo(map); 
markers_672.bindPopup("Southwest Medical Systems Inc").openPopup(); 

var circle_672 = L.circle(coords_672, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_673 = [ 42.0834335 , -71.0183787]; 
var markers_673 = L.marker(coords_673).addTo(map); 
markers_673.bindPopup("Ace Surgical Supply Co., Inc.").openPopup(); 

var circle_673 = L.circle(coords_673, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_674 = [ 40.8220442 , -74.448765]; 
var markers_674 = L.marker(coords_674).addTo(map); 
markers_674.bindPopup("Celularity, Inc. dba LifebankUSA").openPopup(); 

var circle_674 = L.circle(coords_674, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_675 = [ 40.7127281 , -74.0060152]; 
var markers_675 = L.marker(coords_675).addTo(map); 
markers_675.bindPopup("M FATEH & K SULTAN M D S P C").openPopup(); 

var circle_675 = L.circle(coords_675, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_676 = [ 39.29962642486814 , -76.6069346290877]; 
var markers_676 = L.marker(coords_676).addTo(map); 
markers_676.bindPopup("Shady Grove Fertility Reproductive Science Ctr").openPopup(); 

var circle_676 = L.circle(coords_676, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_677 = [ 33.01624551043165 , -96.98143557733812]; 
var markers_677 = L.marker(coords_677).addTo(map); 
markers_677.bindPopup("Kuehne & Nagel Inc").openPopup(); 

var circle_677 = L.circle(coords_677, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_678 = [ 35.5920774 , -97.59098429116553]; 
var markers_678 = L.marker(coords_678).addTo(map); 
markers_678.bindPopup("RX Medical").openPopup(); 

var circle_678 = L.circle(coords_678, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_679 = [ 38.62351752450111 , -90.25591997815964]; 
var markers_679 = L.marker(coords_679).addTo(map); 
markers_679.bindPopup("Mid-America Transplant Services").openPopup(); 

var circle_679 = L.circle(coords_679, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_680 = [ 0.0 , 0.0]; 
var markers_680 = L.marker(coords_680).addTo(map); 
markers_680.bindPopup("Pearson Dental Supplies Inc").openPopup(); 

var circle_680 = L.circle(coords_680, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_681 = [ 44.93830745993757 , -93.25306516371836]; 
var markers_681 = L.marker(coords_681).addTo(map); 
markers_681.bindPopup("Allina Health Medical Laboratories - Andrology Laboratory").openPopup(); 

var circle_681 = L.circle(coords_681, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_682 = [ 33.81029985162876 , -118.0333158118162]; 
var markers_682 = L.marker(coords_682).addTo(map); 
markers_682.bindPopup("MicroMed Inc").openPopup(); 

var circle_682 = L.circle(coords_682, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_683 = [ 37.58185617480315 , -122.35623226850392]; 
var markers_683 = L.marker(coords_683).addTo(map); 
markers_683.bindPopup("Soar Surgery Center, LLC").openPopup(); 

var circle_683 = L.circle(coords_683, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_684 = [ 38.1875832 , -85.4873734]; 
var markers_684 = L.marker(coords_684).addTo(map); 
markers_684.bindPopup("Alpha Orthopedic Systems, LLC").openPopup(); 

var circle_684 = L.circle(coords_684, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_685 = [ 34.065984483319035 , -117.16781319946531]; 
var markers_685 = L.marker(coords_685).addTo(map); 
markers_685.bindPopup("Musculoskeletal Transplant Foundation").openPopup(); 

var circle_685 = L.circle(coords_685, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_686 = [ 36.6357 , 127.4915]; 
var markers_686 = L.marker(coords_686).addTo(map); 
markers_686.bindPopup("Seoul Radiology Service Company, Ltd.").openPopup(); 

var circle_686 = L.circle(coords_686, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_687 = [ 40.0649084 , -75.4621199]; 
var markers_687 = L.marker(coords_687).addTo(map); 
markers_687.bindPopup("Shady Grove Fertility of Philadelphia").openPopup(); 

var circle_687 = L.circle(coords_687, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_688 = [ 33.9494997080292 , -118.08242959270072]; 
var markers_688 = L.marker(coords_688).addTo(map); 
markers_688.bindPopup("West Coast Spine and Ortho").openPopup(); 

var circle_688 = L.circle(coords_688, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_689 = [ 34.15376308148148 , -118.23307400925924]; 
var markers_689 = L.marker(coords_689).addTo(map); 
markers_689.bindPopup("C.A.R.E. Fertility").openPopup(); 

var circle_689 = L.circle(coords_689, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_690 = [ 33.9419393 , -118.43808037530732]; 
var markers_690 = L.marker(coords_690).addTo(map); 
markers_690.bindPopup("California Fertility Partners").openPopup(); 

var circle_690 = L.circle(coords_690, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_691 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_691 = L.marker(coords_691).addTo(map); 
markers_691.bindPopup("BioLab Sciences, Inc.").openPopup(); 

var circle_691 = L.circle(coords_691, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_692 = [ 32.78327102058824 , -96.78078830849674]; 
var markers_692 = L.marker(coords_692).addTo(map); 
markers_692.bindPopup("SEED Biotech, Inc.").openPopup(); 

var circle_692 = L.circle(coords_692, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_693 = [ -26.7982582 , -55.0228553]; 
var markers_693 = L.marker(coords_693).addTo(map); 
markers_693.bindPopup("Surgical Innovations Corp").openPopup(); 

var circle_693 = L.circle(coords_693, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_694 = [ 33.9528472 , -84.5496148]; 
var markers_694 = L.marker(coords_694).addTo(map); 
markers_694.bindPopup("WuXi AppTec Inc.").openPopup(); 

var circle_694 = L.circle(coords_694, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_695 = [ 33.74984714044206 , -118.00895681547192]; 
var markers_695 = L.marker(coords_695).addTo(map); 
markers_695.bindPopup("Reproductive Partners Medical Group, Inc.").openPopup(); 

var circle_695 = L.circle(coords_695, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_696 = [ 42.235359 , -71.826098]; 
var markers_696 = L.marker(coords_696).addTo(map); 
markers_696.bindPopup("CCRM Boston, PLLC").openPopup(); 

var circle_696 = L.circle(coords_696, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_697 = [ 42.5256502 , -71.0953314]; 
var markers_697 = L.marker(coords_697).addTo(map); 
markers_697.bindPopup("Fertility Centers Of New England").openPopup(); 

var circle_697 = L.circle(coords_697, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_698 = [ 30.013475866304688 , -90.19196791630468]; 
var markers_698 = L.marker(coords_698).addTo(map); 
markers_698.bindPopup("Southern Eye Bank").openPopup(); 

var circle_698 = L.circle(coords_698, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_699 = [ 32.83535471734317 , -83.63718403634687]; 
var markers_699 = L.marker(coords_699).addTo(map); 
markers_699.bindPopup("Medical Center Navicent Health").openPopup(); 

var circle_699 = L.circle(coords_699, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_700 = [ 39.17396425700219 , -76.84638453873085]; 
var markers_700 = L.marker(coords_700).addTo(map); 
markers_700.bindPopup("Supreme Orthopedic Systems Inc").openPopup(); 

var circle_700 = L.circle(coords_700, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_701 = [ 33.89029067022059 , -118.1321374387255]; 
var markers_701 = L.marker(coords_701).addTo(map); 
markers_701.bindPopup("Jaguar Amniotech International Inc").openPopup(); 

var circle_701 = L.circle(coords_701, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_702 = [ 0.0 , 0.0]; 
var markers_702 = L.marker(coords_702).addTo(map); 
markers_702.bindPopup("Hans Biomed Corporation").openPopup(); 

var circle_702 = L.circle(coords_702, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_703 = [ 34.064761279230765 , -118.38389253923076]; 
var markers_703 = L.marker(coords_703).addTo(map); 
markers_703.bindPopup("Center for Reproductive Health and Gynecology").openPopup(); 

var circle_703 = L.circle(coords_703, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_704 = [ 33.91967927855127 , -117.88111213969896]; 
var markers_704 = L.marker(coords_704).addTo(map); 
markers_704.bindPopup("Fertility Care of Orange County, A Medical Corporation").openPopup(); 

var circle_704 = L.circle(coords_704, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_705 = [ 30.01008236650173 , -90.1621700612062]; 
var markers_705 = L.marker(coords_705).addTo(map); 
markers_705.bindPopup("telaGen, LLC").openPopup(); 

var circle_705 = L.circle(coords_705, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_706 = [ 33.63216492475682 , -117.87771778237632]; 
var markers_706 = L.marker(coords_706).addTo(map); 
markers_706.bindPopup("Secada Medical").openPopup(); 

var circle_706 = L.circle(coords_706, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_707 = [ 33.87147844133334 , -117.56041511733332]; 
var markers_707 = L.marker(coords_707).addTo(map); 
markers_707.bindPopup("Pacific Coast Reproductive Center Inc").openPopup(); 

var circle_707 = L.circle(coords_707, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_708 = [ 33.8231547945581 , -118.31904689987726]; 
var markers_708 = L.marker(coords_708).addTo(map); 
markers_708.bindPopup("Fuzion Medical").openPopup(); 

var circle_708 = L.circle(coords_708, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_709 = [ 28.57760155 , -81.32372652650369]; 
var markers_709 = L.marker(coords_709).addTo(map); 
markers_709.bindPopup("Cryos International USA, LLC").openPopup(); 

var circle_709 = L.circle(coords_709, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_710 = [ 26.4614625 , -80.0728201]; 
var markers_710 = L.marker(coords_710).addTo(map); 
markers_710.bindPopup("OneBlood, Inc.").openPopup(); 

var circle_710 = L.circle(coords_710, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_711 = [ 32.89945710073395 , -96.79496265467893]; 
var markers_711 = L.marker(coords_711).addTo(map); 
markers_711.bindPopup("IntegraMed Medical Texas, PLLC").openPopup(); 

var circle_711 = L.circle(coords_711, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_712 = [ 30.542704884012824 , -97.898026458612]; 
var markers_712 = L.marker(coords_712).addTo(map); 
markers_712.bindPopup("Parametrics Medical, LLC").openPopup(); 

var circle_712 = L.circle(coords_712, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_713 = [ 33.8112508970064 , -118.35382474108884]; 
var markers_713 = L.marker(coords_713).addTo(map); 
markers_713.bindPopup("Pacific Reproductive Center").openPopup(); 

var circle_713 = L.circle(coords_713, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_714 = [ 33.74984714044206 , -118.00895681547192]; 
var markers_714 = L.marker(coords_714).addTo(map); 
markers_714.bindPopup("Reproductive Partners Medical Group, Inc.").openPopup(); 

var circle_714 = L.circle(coords_714, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_715 = [ 32.809955980046404 , -96.81320394709977]; 
var markers_715 = L.marker(coords_715).addTo(map); 
markers_715.bindPopup("SLR Medical Consulting, LLC").openPopup(); 

var circle_715 = L.circle(coords_715, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_716 = [ 42.583645 , -83.2454883]; 
var markers_716 = L.marker(coords_716).addTo(map); 
markers_716.bindPopup("IVF Michigan").openPopup(); 

var circle_716 = L.circle(coords_716, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_717 = [ 41.0181563 , -73.7577673]; 
var markers_717 = L.marker(coords_717).addTo(map); 
markers_717.bindPopup("Westchester  IVF").openPopup(); 

var circle_717 = L.circle(coords_717, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_718 = [ 21.0202117 , -101.2734016]; 
var markers_718 = L.marker(coords_718).addTo(map); 
markers_718.bindPopup("Huntington Reproductive Center").openPopup(); 

var circle_718 = L.circle(coords_718, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_719 = [ 34.17153576875 , -118.54361216875]; 
var markers_719 = L.marker(coords_719).addTo(map); 
markers_719.bindPopup("Tree of Life Center for Fertility").openPopup(); 

var circle_719 = L.circle(coords_719, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_720 = [ 39.5479351 , -104.7699255]; 
var markers_720 = L.marker(coords_720).addTo(map); 
markers_720.bindPopup("Rocky Mountain Fertility Center").openPopup(); 

var circle_720 = L.circle(coords_720, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_721 = [ 33.88988592829894 , -118.40085278982176]; 
var markers_721 = L.marker(coords_721).addTo(map); 
markers_721.bindPopup("Innovative Fertility Center").openPopup(); 

var circle_721 = L.circle(coords_721, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_722 = [ 34.28165649 , -118.87363061]; 
var markers_722 = L.marker(coords_722).addTo(map); 
markers_722.bindPopup("MicroMed, Inc.").openPopup(); 

var circle_722 = L.circle(coords_722, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_723 = [ 37.495498 , -77.568434]; 
var markers_723 = L.marker(coords_723).addTo(map); 
markers_723.bindPopup("Old Dominion Eye Foundation, Inc.").openPopup(); 

var circle_723 = L.circle(coords_723, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_724 = [ 33.73307177449615 , -117.77128207090507]; 
var markers_724 = L.marker(coords_724).addTo(map); 
markers_724.bindPopup("Baar Surgical LP").openPopup(); 

var circle_724 = L.circle(coords_724, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_725 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_725 = L.marker(coords_725).addTo(map); 
markers_725.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_725 = L.circle(coords_725, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_726 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_726 = L.marker(coords_726).addTo(map); 
markers_726.bindPopup("Texas Fertility Center").openPopup(); 

var circle_726 = L.circle(coords_726, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_727 = [ 29.86004625 , -95.52377560625678]; 
var markers_727 = L.marker(coords_727).addTo(map); 
markers_727.bindPopup("Surrogacy Specialists of America LLC").openPopup(); 

var circle_727 = L.circle(coords_727, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_728 = [ 33.678814928479 , -117.7440965949406]; 
var markers_728 = L.marker(coords_728).addTo(map); 
markers_728.bindPopup("Keystone Dental Inc.").openPopup(); 

var circle_728 = L.circle(coords_728, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_729 = [ 29.48557210528512 , -98.45845304228096]; 
var markers_729 = L.marker(coords_729).addTo(map); 
markers_729.bindPopup("McCall International Medical Tissue Bank (MIMTB)").openPopup(); 

var circle_729 = L.circle(coords_729, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_730 = [ 27.292223039378285 , -81.36923567220356]; 
var markers_730 = L.marker(coords_730).addTo(map); 
markers_730.bindPopup("JR Enterprizes of South Florida, Inc.").openPopup(); 

var circle_730 = L.circle(coords_730, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_731 = [ 35.71157647633478 , -79.81557636854257]; 
var markers_731 = L.marker(coords_731).addTo(map); 
markers_731.bindPopup("Randolph Health").openPopup(); 

var circle_731 = L.circle(coords_731, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_732 = [ 34.236139063636365 , -118.5466337961039]; 
var markers_732 = L.marker(coords_732).addTo(map); 
markers_732.bindPopup("Surgical Esthetics Biomedical Technologies, Inc.").openPopup(); 

var circle_732 = L.circle(coords_732, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_733 = [ 42.237770056612526 , -83.7205163035267]; 
var markers_733 = L.marker(coords_733).addTo(map); 
markers_733.bindPopup("Eversight").openPopup(); 

var circle_733 = L.circle(coords_733, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_734 = [ 45.00026496036603 , -93.30267986119532]; 
var markers_734 = L.marker(coords_734).addTo(map); 
markers_734.bindPopup("LifeSource-Upper Midwest OPO").openPopup(); 

var circle_734 = L.circle(coords_734, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_735 = [ 29.733957050967746 , -95.51012797741936]; 
var markers_735 = L.marker(coords_735).addTo(map); 
markers_735.bindPopup("Houston Fertility Laboratory").openPopup(); 

var circle_735 = L.circle(coords_735, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_736 = [ 40.8243307 , -80.2502301]; 
var markers_736 = L.marker(coords_736).addTo(map); 
markers_736.bindPopup("Reproductive Medicine Associates Of Philadelphia, P.c.").openPopup(); 

var circle_736 = L.circle(coords_736, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_737 = [ 42.3756401 , -71.2358004]; 
var markers_737 = L.marker(coords_737).addTo(map); 
markers_737.bindPopup("New England Donor Services").openPopup(); 

var circle_737 = L.circle(coords_737, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_738 = [ 42.347101377816905 , -83.06092443864436]; 
var markers_738 = L.marker(coords_738).addTo(map); 
markers_738.bindPopup("Detroit Medical Center University Laboratories").openPopup(); 

var circle_738 = L.circle(coords_738, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_739 = [ 33.9419393 , -118.43808037530732]; 
var markers_739 = L.marker(coords_739).addTo(map); 
markers_739.bindPopup("USC Reproductive Endocrinology and Infertility").openPopup(); 

var circle_739 = L.circle(coords_739, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_740 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_740 = L.marker(coords_740).addTo(map); 
markers_740.bindPopup("Creative Testing Solutions").openPopup(); 

var circle_740 = L.circle(coords_740, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_741 = [ 33.6703799791889 , -112.10563846353864]; 
var markers_741 = L.marker(coords_741).addTo(map); 
markers_741.bindPopup("Amnio Technology, LLC").openPopup(); 

var circle_741 = L.circle(coords_741, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_742 = [ 33.9419393 , -118.43808037530732]; 
var markers_742 = L.marker(coords_742).addTo(map); 
markers_742.bindPopup("Reproductive Medicine Associates of Southern California").openPopup(); 

var circle_742 = L.circle(coords_742, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_743 = [ 38.86635710294118 , -77.18469157641806]; 
var markers_743 = L.marker(coords_743).addTo(map); 
markers_743.bindPopup("Washington Regional Transplant Community").openPopup(); 

var circle_743 = L.circle(coords_743, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_744 = [ 27.96554649343185 , -82.45874592758621]; 
var markers_744 = L.marker(coords_744).addTo(map); 
markers_744.bindPopup("Lions Eye Institute for Transplant and Research, Inc.").openPopup(); 

var circle_744 = L.circle(coords_744, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_745 = [ 0.0 , 0.0]; 
var markers_745 = L.marker(coords_745).addTo(map); 
markers_745.bindPopup("REI Division  Brooke Army Med Cntr").openPopup(); 

var circle_745 = L.circle(coords_745, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_746 = [ 34.096496 , -83.7612839]; 
var markers_746 = L.marker(coords_746).addTo(map); 
markers_746.bindPopup("Blythe Enterprises Inc").openPopup(); 

var circle_746 = L.circle(coords_746, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_747 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_747 = L.marker(coords_747).addTo(map); 
markers_747.bindPopup("Advanced Fertility Care, PLLC, Arizona Advanced Reproductive Laboratory, LLC").openPopup(); 

var circle_747 = L.circle(coords_747, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_748 = [ -26.7982582 , -55.0228553]; 
var markers_748 = L.marker(coords_748).addTo(map); 
markers_748.bindPopup("Eliel Ortho Medical Corp.").openPopup(); 

var circle_748 = L.circle(coords_748, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_749 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_749 = L.marker(coords_749).addTo(map); 
markers_749.bindPopup("Donor Network West").openPopup(); 

var circle_749 = L.circle(coords_749, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_750 = [ 27.96554649343185 , -82.45874592758621]; 
var markers_750 = L.marker(coords_750).addTo(map); 
markers_750.bindPopup("Lions Eye Institute for Transplant and Research, Inc.").openPopup(); 

var circle_750 = L.circle(coords_750, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_751 = [ 33.7489924 , -84.3902644]; 
var markers_751 = L.marker(coords_751).addTo(map); 
markers_751.bindPopup("Wright Medical Technology, Inc. - District Service Center").openPopup(); 

var circle_751 = L.circle(coords_751, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_752 = [ 37.54803795 , -77.56512326304173]; 
var markers_752 = L.marker(coords_752).addTo(map); 
markers_752.bindPopup("Virginia IVF and Andrology Center LLC").openPopup(); 

var circle_752 = L.circle(coords_752, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_753 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_753 = L.marker(coords_753).addTo(map); 
markers_753.bindPopup("Dental Implant Technologies, Inc").openPopup(); 

var circle_753 = L.circle(coords_753, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_754 = [ 39.387081300000006 , -76.61112257684786]; 
var markers_754 = L.marker(coords_754).addTo(map); 
markers_754.bindPopup("Fertility Center of Maryland, Inc.").openPopup(); 

var circle_754 = L.circle(coords_754, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_755 = [ 29.50626249341317 , -98.5683992]; 
var markers_755 = L.marker(coords_755).addTo(map); 
markers_755.bindPopup("Fertility Center Laboratory, Inc").openPopup(); 

var circle_755 = L.circle(coords_755, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_756 = [ 29.78808766666667 , -82.48273446360153]; 
var markers_756 = L.marker(coords_756).addTo(map); 
markers_756.bindPopup("RTI Surgical, Inc. dba RTI Biologics, Inc.").openPopup(); 

var circle_756 = L.circle(coords_756, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_757 = [ 42.16511397941111 , -73.26116904844066]; 
var markers_757 = L.marker(coords_757).addTo(map); 
markers_757.bindPopup("New England Cryogenic Center, Inc.").openPopup(); 

var circle_757 = L.circle(coords_757, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_758 = [ 37.15965470737636 , -93.25538070259849]; 
var markers_758 = L.marker(coords_758).addTo(map); 
markers_758.bindPopup("Titan Surgical Group, LLC").openPopup(); 

var circle_758 = L.circle(coords_758, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_759 = [ 30.38390014089958 , -91.00975953922594]; 
var markers_759 = L.marker(coords_759).addTo(map); 
markers_759.bindPopup("Louisiana IVF Laboratries LLC. dba...Fertility Answers").openPopup(); 

var circle_759 = L.circle(coords_759, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_760 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_760 = L.marker(coords_760).addTo(map); 
markers_760.bindPopup("AlloSource").openPopup(); 

var circle_760 = L.circle(coords_760, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_761 = [ 44.9497487 , -93.0931028]; 
var markers_761 = L.marker(coords_761).addTo(map); 
markers_761.bindPopup("ReproTech, Ltd.").openPopup(); 

var circle_761 = L.circle(coords_761, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_762 = [ 42.28990867405141 , -87.95058046119951]; 
var markers_762 = L.marker(coords_762).addTo(map); 
markers_762.bindPopup("Medline Industries Inc").openPopup(); 

var circle_762 = L.circle(coords_762, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_763 = [ 33.054257447886776 , -117.26937075721814]; 
var markers_763 = L.marker(coords_763).addTo(map); 
markers_763.bindPopup("California Center For Reproductive Sciences").openPopup(); 

var circle_763 = L.circle(coords_763, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_764 = [ 30.40956380424448 , -91.14578016757216]; 
var markers_764 = L.marker(coords_764).addTo(map); 
markers_764.bindPopup("Baton Rouge Regional Eye Bank").openPopup(); 

var circle_764 = L.circle(coords_764, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_765 = [ 26.15885871563126 , -97.9883419004008]; 
var markers_765 = L.marker(coords_765).addTo(map); 
markers_765.bindPopup("GenCure").openPopup(); 

var circle_765 = L.circle(coords_765, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_766 = [ 39.66406964063989 , -104.9278876238938]; 
var markers_766 = L.marker(coords_766).addTo(map); 
markers_766.bindPopup("Cryogam Colorado, LLC").openPopup(); 

var circle_766 = L.circle(coords_766, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_767 = [ 33.3571538907563 , -86.81959298907563]; 
var markers_767 = L.marker(coords_767).addTo(map); 
markers_767.bindPopup("BioHorizons Implant Systems Inc").openPopup(); 

var circle_767 = L.circle(coords_767, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_768 = [ 39.74249983219617 , -104.8960818607676]; 
var markers_768 = L.marker(coords_768).addTo(map); 
markers_768.bindPopup("Conceptions Reproductive Associates, Inc.").openPopup(); 

var circle_768 = L.circle(coords_768, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_769 = [ 30.4018559682266 , -91.07588163916256]; 
var markers_769 = L.marker(coords_769).addTo(map); 
markers_769.bindPopup("Fertility Institute of New Orleans APC").openPopup(); 

var circle_769 = L.circle(coords_769, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_770 = [ 39.29515815203904 , -76.62187465086768]; 
var markers_770 = L.marker(coords_770).addTo(map); 
markers_770.bindPopup("University of Maryland Medical Center Midtown Campus").openPopup(); 

var circle_770 = L.circle(coords_770, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_771 = [ 37.71923590673684 , -122.1403940731579]; 
var markers_771 = L.marker(coords_771).addTo(map); 
markers_771.bindPopup("Joint Restoration Foundation").openPopup(); 

var circle_771 = L.circle(coords_771, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_772 = [ 32.79528832319981 , -117.07108498927994]; 
var markers_772 = L.marker(coords_772).addTo(map); 
markers_772.bindPopup("Sperm Bank, Inc").openPopup(); 

var circle_772 = L.circle(coords_772, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_773 = [ 38.75857908249103 , -77.47598759981524]; 
var markers_773 = L.marker(coords_773).addTo(map); 
markers_773.bindPopup("Old Dominion Eye Foundation Northern Virginia Branch").openPopup(); 

var circle_773 = L.circle(coords_773, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_774 = [ -26.7982582 , -55.0228553]; 
var markers_774 = L.marker(coords_774).addTo(map); 
markers_774.bindPopup("Hospital Auxilio Mutuo").openPopup(); 

var circle_774 = L.circle(coords_774, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_775 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_775 = L.marker(coords_775).addTo(map); 
markers_775.bindPopup("AlloSource").openPopup(); 

var circle_775 = L.circle(coords_775, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_776 = [ 51.7520131 , -1.2578499]; 
var markers_776 = L.marker(coords_776).addTo(map); 
markers_776.bindPopup("Oxford Biomedica (UK) Limited").openPopup(); 

var circle_776 = L.circle(coords_776, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_777 = [ 39.29515815203904 , -76.62187465086768]; 
var markers_777 = L.marker(coords_777).addTo(map); 
markers_777.bindPopup("Vigilant Bioservices LLC").openPopup(); 

var circle_777 = L.circle(coords_777, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_778 = [ 39.541827 , -104.84612446579108]; 
var markers_778 = L.marker(coords_778).addTo(map); 
markers_778.bindPopup("Albrecht Women's Care").openPopup(); 

var circle_778 = L.circle(coords_778, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_779 = [ 26.45912191058091 , -80.08628357178424]; 
var markers_779 = L.marker(coords_779).addTo(map); 
markers_779.bindPopup("Arthomed, LLC.").openPopup(); 

var circle_779 = L.circle(coords_779, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_780 = [ 37.383327040163934 , -122.11456647131148]; 
var markers_780 = L.marker(coords_780).addTo(map); 
markers_780.bindPopup("California Cryobank, LLC").openPopup(); 

var circle_780 = L.circle(coords_780, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_781 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_781 = L.marker(coords_781).addTo(map); 
markers_781.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_781 = L.circle(coords_781, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_782 = [ 33.9528472 , -84.5496148]; 
var markers_782 = L.marker(coords_782).addTo(map); 
markers_782.bindPopup("Xytex Laboratories").openPopup(); 

var circle_782 = L.circle(coords_782, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_783 = [ 39.74249983219617 , -104.8960818607676]; 
var markers_783 = L.marker(coords_783).addTo(map); 
markers_783.bindPopup("Colorado Reproductive Endocrinology").openPopup(); 

var circle_783 = L.circle(coords_783, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_784 = [ 37.71923590673684 , -122.1403940731579]; 
var markers_784 = L.marker(coords_784).addTo(map); 
markers_784.bindPopup("Joint Restoration Foundation").openPopup(); 

var circle_784 = L.circle(coords_784, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_785 = [ 38.93973767625571 , -77.08686526149164]; 
var markers_785 = L.marker(coords_785).addTo(map); 
markers_785.bindPopup("Shady Grove Fertility Reproductive Science Center").openPopup(); 

var circle_785 = L.circle(coords_785, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_786 = [ 41.80921335733333 , -88.016243889]; 
var markers_786 = L.marker(coords_786).addTo(map); 
markers_786.bindPopup("Midwest Sperm Bank, LLC").openPopup(); 

var circle_786 = L.circle(coords_786, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_787 = [ 40.11082995942948 , -76.50711238383518]; 
var markers_787 = L.marker(coords_787).addTo(map); 
markers_787.bindPopup("Patterson Logistics Services Inc.").openPopup(); 

var circle_787 = L.circle(coords_787, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_788 = [ 39.15004819790576 , -84.48888868743455]; 
var markers_788 = L.marker(coords_788).addTo(map); 
markers_788.bindPopup("Cincinnati Childrens Hosp Med Center Div of Gynecology").openPopup(); 

var circle_788 = L.circle(coords_788, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_789 = [ 33.03849155019701 , -96.80893476367218]; 
var markers_789 = L.marker(coords_789).addTo(map); 
markers_789.bindPopup("Alfred J. Rodriguez, M.D., P.A.").openPopup(); 

var circle_789 = L.circle(coords_789, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_790 = [ 37.79852183286189 , -122.4096742514975]; 
var markers_790 = L.marker(coords_790).addTo(map); 
markers_790.bindPopup("SanFrancisco Fertility Centers, A Medical Corporation").openPopup(); 

var circle_790 = L.circle(coords_790, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_791 = [ 39.96403466330049 , -75.1472920864532]; 
var markers_791 = L.marker(coords_791).addTo(map); 
markers_791.bindPopup("Greater Delaware Valley Society of Transplant Surgeons").openPopup(); 

var circle_791 = L.circle(coords_791, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_792 = [ 42.237770056612526 , -83.7205163035267]; 
var markers_792 = L.marker(coords_792).addTo(map); 
markers_792.bindPopup("University of Michigan Center for Reproductive Medicine").openPopup(); 

var circle_792 = L.circle(coords_792, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_793 = [ 30.38121841105288 , -97.70710744092425]; 
var markers_793 = L.marker(coords_793).addTo(map); 
markers_793.bindPopup("Austin Laboratory New Health LLC").openPopup(); 

var circle_793 = L.circle(coords_793, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_794 = [ 42.04717111713147 , -88.04776288565736]; 
var markers_794 = L.marker(coords_794).addTo(map); 
markers_794.bindPopup("American Medical Management Inc").openPopup(); 

var circle_794 = L.circle(coords_794, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_795 = [ 39.61002140979381 , -105.04687310257732]; 
var markers_795 = L.marker(coords_795).addTo(map); 
markers_795.bindPopup("Ortho Pros, Inc.").openPopup(); 

var circle_795 = L.circle(coords_795, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_796 = [ 40.0888834420068 , -75.37196396309524]; 
var markers_796 = L.marker(coords_796).addTo(map); 
markers_796.bindPopup("Camber Spine Technologies").openPopup(); 

var circle_796 = L.circle(coords_796, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_797 = [ 36.145952468263474 , -115.28714001317366]; 
var markers_797 = L.marker(coords_797).addTo(map); 
markers_797.bindPopup("Infertility Laboratories of Las Vegas LLC").openPopup(); 

var circle_797 = L.circle(coords_797, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_798 = [ 36.1672559 , -115.148516]; 
var markers_798 = L.marker(coords_798).addTo(map); 
markers_798.bindPopup("Nevada Fertility Institute, LLC").openPopup(); 

var circle_798 = L.circle(coords_798, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_799 = [ 36.091526 , -79.3641862]; 
var markers_799 = L.marker(coords_799).addTo(map); 
markers_799.bindPopup("Sterigenics US, LLC").openPopup(); 

var circle_799 = L.circle(coords_799, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_800 = [ 33.7489924 , -84.3902644]; 
var markers_800 = L.marker(coords_800).addTo(map); 
markers_800.bindPopup("Aspire Fertility - Atlanta").openPopup(); 

var circle_800 = L.circle(coords_800, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_801 = [ 0.0 , 0.0]; 
var markers_801 = L.marker(coords_801).addTo(map); 
markers_801.bindPopup("CITAGENIX INC").openPopup(); 

var circle_801 = L.circle(coords_801, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_802 = [ 39.68062462243238 , -86.07398345241228]; 
var markers_802 = L.marker(coords_802).addTo(map); 
markers_802.bindPopup("Franciscan  Health  Indianapolis").openPopup(); 

var circle_802 = L.circle(coords_802, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_803 = [ 35.1427731 , -89.7963741]; 
var markers_803 = L.marker(coords_803).addTo(map); 
markers_803.bindPopup("Mid-South Transplant Foundation").openPopup(); 

var circle_803 = L.circle(coords_803, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_804 = [ 30.29209155560946 , -97.7390149515464]; 
var markers_804 = L.marker(coords_804).addTo(map); 
markers_804.bindPopup("Aspire Fertility Institute Austin").openPopup(); 

var circle_804 = L.circle(coords_804, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_805 = [ 29.74577682467044 , -95.46714213917136]; 
var markers_805 = L.marker(coords_805).addTo(map); 
markers_805.bindPopup("Inserio Solutions").openPopup(); 

var circle_805 = L.circle(coords_805, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_806 = [ 38.81605862622951 , -104.77444941639344]; 
var markers_806 = L.marker(coords_806).addTo(map); 
markers_806.bindPopup("CNY Fertility Colorado PLLC").openPopup(); 

var circle_806 = L.circle(coords_806, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_807 = [ 32.285 , -110.9432948]; 
var markers_807 = L.marker(coords_807).addTo(map); 
markers_807.bindPopup("Vivere Arizona Reproductive Institute, LLC").openPopup(); 

var circle_807 = L.circle(coords_807, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_808 = [ 33.7489924 , -84.3902644]; 
var markers_808 = L.marker(coords_808).addTo(map); 
markers_808.bindPopup("Atlanta Blood Services").openPopup(); 

var circle_808 = L.circle(coords_808, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_809 = [ 45.00026496036603 , -93.30267986119532]; 
var markers_809 = L.marker(coords_809).addTo(map); 
markers_809.bindPopup("Coloplast Manufacturing US, LLC").openPopup(); 

var circle_809 = L.circle(coords_809, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_810 = [ 41.7198216 , -72.8320435]; 
var markers_810 = L.marker(coords_810).addTo(map); 
markers_810.bindPopup("The Laboratory at the Center for Advanced Reproductive Svcs").openPopup(); 

var circle_810 = L.circle(coords_810, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_811 = [ 29.5463577 , -95.1353332]; 
var markers_811 = L.marker(coords_811).addTo(map); 
markers_811.bindPopup("Center Of Reproductive Medicine").openPopup(); 

var circle_811 = L.circle(coords_811, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_812 = [ -26.7982582 , -55.0228553]; 
var markers_812 = L.marker(coords_812).addTo(map); 
markers_812.bindPopup("Premed LLC").openPopup(); 

var circle_812 = L.circle(coords_812, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_813 = [ 40.07416759199918 , -82.97077208603454]; 
var markers_813 = L.marker(coords_813).addTo(map); 
markers_813.bindPopup("Wright Medical Technology Inc").openPopup(); 

var circle_813 = L.circle(coords_813, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_814 = [ 29.541636225 , -98.49767410917086]; 
var markers_814 = L.marker(coords_814).addTo(map); 
markers_814.bindPopup("MedInc of Texas, LP").openPopup(); 

var circle_814 = L.circle(coords_814, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_815 = [ 33.86489784947925 , -84.41857419943919]; 
var markers_815 = L.marker(coords_815).addTo(map); 
markers_815.bindPopup("Massey Fertility Services").openPopup(); 

var circle_815 = L.circle(coords_815, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_816 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_816 = L.marker(coords_816).addTo(map); 
markers_816.bindPopup("Birth Tissue Recovery LLC").openPopup(); 

var circle_816 = L.circle(coords_816, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_817 = [ 42.563243272 , -83.17588842611765]; 
var markers_817 = L.marker(coords_817).addTo(map); 
markers_817.bindPopup("Henry Ford Reproductive Medicine").openPopup(); 

var circle_817 = L.circle(coords_817, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_818 = [ 45.11463382166357 , -93.43675478566108]; 
var markers_818 = L.marker(coords_818).addTo(map); 
markers_818.bindPopup("Midwest Center for Reproductive Health").openPopup(); 

var circle_818 = L.circle(coords_818, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_819 = [ 41.796868823357016 , -87.93497244049733]; 
var markers_819 = L.marker(coords_819).addTo(map); 
markers_819.bindPopup("Hinsdale Center for Reproduction").openPopup(); 

var circle_819 = L.circle(coords_819, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_820 = [ 38.65411456590039 , -121.3553032724138]; 
var markers_820 = L.marker(coords_820).addTo(map); 
markers_820.bindPopup("Northern California Fertility Medical Center").openPopup(); 

var circle_820 = L.circle(coords_820, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_821 = [ 36.54385774193548 , -119.3954699483871]; 
var markers_821 = L.marker(coords_821).addTo(map); 
markers_821.bindPopup("Patterson Logistics Services Inc").openPopup(); 

var circle_821 = L.circle(coords_821, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_822 = [ 39.6053331 , -104.9355941]; 
var markers_822 = L.marker(coords_822).addTo(map); 
markers_822.bindPopup("AlloSource, Inc.").openPopup(); 

var circle_822 = L.circle(coords_822, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_823 = [ 27.96554649343185 , -82.45874592758621]; 
var markers_823 = L.marker(coords_823).addTo(map); 
markers_823.bindPopup("Lions Eye Institute for Transplant and Research, Inc.").openPopup(); 

var circle_823 = L.circle(coords_823, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_824 = [ 38.25325909885038 , -85.55736807643287]; 
var markers_824 = L.marker(coords_824).addTo(map); 
markers_824.bindPopup("Oliver Stanbery Orthopedics LLC").openPopup(); 

var circle_824 = L.circle(coords_824, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_825 = [ 32.53566428361138 , -97.30955145220804]; 
var markers_825 = L.marker(coords_825).addTo(map); 
markers_825.bindPopup("Grada Spine LLC").openPopup(); 

var circle_825 = L.circle(coords_825, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_826 = [ 45.00026496036603 , -93.30267986119532]; 
var markers_826 = L.marker(coords_826).addTo(map); 
markers_826.bindPopup("Eurofins Donor & Product Testing Inc Minneapolis").openPopup(); 

var circle_826 = L.circle(coords_826, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_827 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_827 = L.marker(coords_827).addTo(map); 
markers_827.bindPopup("Medical Purchasing Solutions, LLC").openPopup(); 

var circle_827 = L.circle(coords_827, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_828 = [ 40.78916667135916 , -73.40590462377018]; 
var markers_828 = L.marker(coords_828).addTo(map); 
markers_828.bindPopup("RMA Long Island IVF").openPopup(); 

var circle_828 = L.circle(coords_828, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_829 = [ 39.8912248 , -74.9218325]; 
var markers_829 = L.marker(coords_829).addTo(map); 
markers_829.bindPopup("Women for Women Medical Associates, LLC").openPopup(); 

var circle_829 = L.circle(coords_829, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_830 = [ 42.3273118 , -71.6406529]; 
var markers_830 = L.marker(coords_830).addTo(map); 
markers_830.bindPopup("Isomedix Operations, Inc. dba Steris Applied Sterilization Technologies").openPopup(); 

var circle_830 = L.circle(coords_830, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_831 = [ 33.10381182251701 , -117.29242666319728]; 
var markers_831 = L.marker(coords_831).addTo(map); 
markers_831.bindPopup("Vista Biologicals Corporation").openPopup(); 

var circle_831 = L.circle(coords_831, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_832 = [ 18.3990551 , -66.1560326]; 
var markers_832 = L.marker(coords_832).addTo(map); 
markers_832.bindPopup("Puerto Rico Fertility and Reproductive Center PSC").openPopup(); 

var circle_832 = L.circle(coords_832, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_833 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_833 = L.marker(coords_833).addTo(map); 
markers_833.bindPopup("Scripps Medical Laboratory").openPopup(); 

var circle_833 = L.circle(coords_833, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_834 = [ 36.75782250305924 , -76.23509177922608]; 
var markers_834 = L.marker(coords_834).addTo(map); 
markers_834.bindPopup("Chamrock Medical, LLC").openPopup(); 

var circle_834 = L.circle(coords_834, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_835 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_835 = L.marker(coords_835).addTo(map); 
markers_835.bindPopup("MedX Surgical Partners, Inc.").openPopup(); 

var circle_835 = L.circle(coords_835, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_836 = [ 0.0 , 0.0]; 
var markers_836 = L.marker(coords_836).addTo(map); 
markers_836.bindPopup("Tritin Medical Distribution LLC").openPopup(); 

var circle_836 = L.circle(coords_836, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_837 = [ 38.13846598431231 , -85.62980681411652]; 
var markers_837 = L.marker(coords_837).addTo(map); 
markers_837.bindPopup("OM Healthcare Logistics OMo3").openPopup(); 

var circle_837 = L.circle(coords_837, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_838 = [ 33.77311756720099 , -84.37592444950678]; 
var markers_838 = L.marker(coords_838).addTo(map); 
markers_838.bindPopup("Emory University Hospital Midtown- Center for Transfusion & Cellular Therapies").openPopup(); 

var circle_838 = L.circle(coords_838, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_839 = [ 40.6710765 , -111.8250278]; 
var markers_839 = L.marker(coords_839).addTo(map); 
markers_839.bindPopup("Gallant Medical, LLC.").openPopup(); 

var circle_839 = L.circle(coords_839, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_840 = [ 33.84223318408456 , -118.35939678371152]; 
var markers_840 = L.marker(coords_840).addTo(map); 
markers_840.bindPopup("Cton Laboratories").openPopup(); 

var circle_840 = L.circle(coords_840, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_841 = [ 28.5421109 , -81.3790304]; 
var markers_841 = L.marker(coords_841).addTo(map); 
markers_841.bindPopup("Wright Medical Technology, Inc.").openPopup(); 

var circle_841 = L.circle(coords_841, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_842 = [ 39.95764396098266 , -75.1973050515896]; 
var markers_842 = L.marker(coords_842).addTo(map); 
markers_842.bindPopup("Fairfax Cryobank Inc.").openPopup(); 

var circle_842 = L.circle(coords_842, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_843 = [ 40.646225512456745 , -111.8869612480969]; 
var markers_843 = L.marker(coords_843).addTo(map); 
markers_843.bindPopup("Biomet West, Inc.").openPopup(); 

var circle_843 = L.circle(coords_843, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_844 = [ 33.78830559480986 , -117.87242521238436]; 
var markers_844 = L.marker(coords_844).addTo(map); 
markers_844.bindPopup("Children's Hospital of Orange County").openPopup(); 

var circle_844 = L.circle(coords_844, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_845 = [ 27.4989278 , -82.5748194]; 
var markers_845 = L.marker(coords_845).addTo(map); 
markers_845.bindPopup("O.N.E. SURG, INC.").openPopup(); 

var circle_845 = L.circle(coords_845, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_846 = [ 40.27673215 , -76.98444602055159]; 
var markers_846 = L.marker(coords_846).addTo(map); 
markers_846.bindPopup("Reproductive Medicine Associates of Central Pennsylvania").openPopup(); 

var circle_846 = L.circle(coords_846, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_847 = [ 40.73742573614622 , -111.82743401380252]; 
var markers_847 = L.marker(coords_847).addTo(map); 
markers_847.bindPopup("University of Utah Andrology & IVF Laboratories").openPopup(); 

var circle_847 = L.circle(coords_847, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_848 = [ 40.57191675555556 , -111.8896127148148]; 
var markers_848 = L.marker(coords_848).addTo(map); 
markers_848.bindPopup("Isomedix Operations Inc.").openPopup(); 

var circle_848 = L.circle(coords_848, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_849 = [ 42.194543 , -71.1994976]; 
var markers_849 = L.marker(coords_849).addTo(map); 
markers_849.bindPopup("Wright Medical Group, Inc.").openPopup(); 

var circle_849 = L.circle(coords_849, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_850 = [ 27.95499 , -82.37284632542764]; 
var markers_850 = L.marker(coords_850).addTo(map); 
markers_850.bindPopup("MVP Orthopedics, Inc.").openPopup(); 

var circle_850 = L.circle(coords_850, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_851 = [ 42.70559785498418 , -73.76876375132515]; 
var markers_851 = L.marker(coords_851).addTo(map); 
markers_851.bindPopup("Albany IVF Fertility and Gynecology, P.L.L.C.").openPopup(); 

var circle_851 = L.circle(coords_851, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_852 = [ 41.8949892729885 , -87.6226382045977]; 
var markers_852 = L.marker(coords_852).addTo(map); 
markers_852.bindPopup("Andrology Laboratory Services, Inc").openPopup(); 

var circle_852 = L.circle(coords_852, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_853 = [ 34.103976854949494 , -117.5931209338384]; 
var markers_853 = L.marker(coords_853).addTo(map); 
markers_853.bindPopup("Dowell Dental Products Inc").openPopup(); 

var circle_853 = L.circle(coords_853, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_854 = [ 41.64647648174758 , -93.4846929662136]; 
var markers_854 = L.marker(coords_854).addTo(map); 
markers_854.bindPopup("Iowa Donor Network").openPopup(); 

var circle_854 = L.circle(coords_854, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_855 = [ 30.660301839848195 , -88.16430093586338]; 
var markers_855 = L.marker(coords_855).addTo(map); 
markers_855.bindPopup("Alabama Organ Center - Mobile Region").openPopup(); 

var circle_855 = L.circle(coords_855, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_856 = [ 35.90906105243902 , -78.76836778231707]; 
var markers_856 = L.marker(coords_856).addTo(map); 
markers_856.bindPopup("UNC Healthcare/Fertility").openPopup(); 

var circle_856 = L.circle(coords_856, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_857 = [ 41.79809136003717 , -87.9753938133829]; 
var markers_857 = L.marker(coords_857).addTo(map); 
markers_857.bindPopup("SpineCraft, LLC.").openPopup(); 

var circle_857 = L.circle(coords_857, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_858 = [ 39.983306613707455 , -75.59624259190431]; 
var markers_858 = L.marker(coords_858).addTo(map); 
markers_858.bindPopup("Liberty Surgical, Inc").openPopup(); 

var circle_858 = L.circle(coords_858, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_859 = [ 37.8857378460274 , -122.20030427589042]; 
var markers_859 = L.marker(coords_859).addTo(map); 
markers_859.bindPopup("Reproductive Science Center of the San Francisco Bay Area A Medical Corporation").openPopup(); 

var circle_859 = L.circle(coords_859, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_860 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_860 = L.marker(coords_860).addTo(map); 
markers_860.bindPopup("VRL Eurofins").openPopup(); 

var circle_860 = L.circle(coords_860, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_861 = [ 42.10916065 , -71.2460194]; 
var markers_861 = L.marker(coords_861).addTo(map); 
markers_861.bindPopup("Allotex, Inc").openPopup(); 

var circle_861 = L.circle(coords_861, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_862 = [ 32.828868722202486 , -96.84895223801064]; 
var markers_862 = L.marker(coords_862).addTo(map); 
markers_862.bindPopup("Fertility and Advanced Reproductive Medicine at UTSW").openPopup(); 

var circle_862 = L.circle(coords_862, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_863 = [ 37.50392605421687 , -122.26072208433736]; 
var markers_863 = L.marker(coords_863).addTo(map); 
markers_863.bindPopup("Natera Inc").openPopup(); 

var circle_863 = L.circle(coords_863, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_864 = [ 39.4188292 , -76.6135481]; 
var markers_864 = L.marker(coords_864).addTo(map); 
markers_864.bindPopup("IVF/ART Laboratories/JHH at Green Spring Station").openPopup(); 

var circle_864 = L.circle(coords_864, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_865 = [ 32.79068400416667 , -96.77561509375]; 
var markers_865 = L.marker(coords_865).addTo(map); 
markers_865.bindPopup("Texas Center for Reproductive Health").openPopup(); 

var circle_865 = L.circle(coords_865, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_866 = [ 41.92220201423313 , -87.65104900184049]; 
var markers_866 = L.marker(coords_866).addTo(map); 
markers_866.bindPopup("Miomed Orthopedics Dba Obility").openPopup(); 

var circle_866 = L.circle(coords_866, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_867 = [ 33.59414446306805 , -117.6996269227219]; 
var markers_867 = L.marker(coords_867).addTo(map); 
markers_867.bindPopup("American National Red Cross, The").openPopup(); 

var circle_867 = L.circle(coords_867, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_868 = [ 32.4755852059829 , -90.12260656951568]; 
var markers_868 = L.marker(coords_868).addTo(map); 
markers_868.bindPopup("Positive Steps Fertility, PLLC").openPopup(); 

var circle_868 = L.circle(coords_868, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_869 = [ 36.75782250305924 , -76.23509177922608]; 
var markers_869 = L.marker(coords_869).addTo(map); 
markers_869.bindPopup("Cavalier Biotech LLC").openPopup(); 

var circle_869 = L.circle(coords_869, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_870 = [ 33.73315706538462 , -85.13363485384616]; 
var markers_870 = L.marker(coords_870).addTo(map); 
markers_870.bindPopup("TMC/Higgins General Hospital").openPopup(); 

var circle_870 = L.circle(coords_870, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_871 = [ 33.84769665333334 , -84.22123712010581]; 
var markers_871 = L.marker(coords_871).addTo(map); 
markers_871.bindPopup("Emory University Orthopaedics and Spine Hospital").openPopup(); 

var circle_871 = L.circle(coords_871, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_872 = [ 44.0416541 , -92.48419921280647]; 
var markers_872 = L.marker(coords_872).addTo(map); 
markers_872.bindPopup("Mayo Clinic Rochester - Human Tissue").openPopup(); 

var circle_872 = L.circle(coords_872, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_873 = [ 41.0264862 , -73.6284598]; 
var markers_873 = L.marker(coords_873).addTo(map); 
markers_873.bindPopup("Greenwich Fertility & Ivf Center, P.c.").openPopup(); 

var circle_873 = L.circle(coords_873, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_874 = [ 42.17870840632023 , -87.80536878174158]; 
var markers_874 = L.marker(coords_874).addTo(map); 
markers_874.bindPopup("NM FRM Andrology Services North").openPopup(); 

var circle_874 = L.circle(coords_874, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_875 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_875 = L.marker(coords_875).addTo(map); 
markers_875.bindPopup("Alphacord, LLC").openPopup(); 

var circle_875 = L.circle(coords_875, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_876 = [ 44.91116236993312 , -92.94387467955802]; 
var markers_876 = L.marker(coords_876).addTo(map); 
markers_876.bindPopup("Reproductive Medicine & Infertility Associates").openPopup(); 

var circle_876 = L.circle(coords_876, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_877 = [ 29.72578682295633 , -95.3687247793953]; 
var markers_877 = L.marker(coords_877).addTo(map); 
markers_877.bindPopup("Fairfax Cryobank - Houston").openPopup(); 

var circle_877 = L.circle(coords_877, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_878 = [ 35.378345122727275 , -119.01677919545456]; 
var markers_878 = L.marker(coords_878).addTo(map); 
markers_878.bindPopup("Dignity Health Bakersfield Memorial Hospital").openPopup(); 

var circle_878 = L.circle(coords_878, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_879 = [ 39.74166146539509 , -104.78484567360842]; 
var markers_879 = L.marker(coords_879).addTo(map); 
markers_879.bindPopup("The Rocky Mountain Lions Eye Bank").openPopup(); 

var circle_879 = L.circle(coords_879, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_880 = [ 47.81006361826394 , -122.34235542373332]; 
var markers_880 = L.marker(coords_880).addTo(map); 
markers_880.bindPopup("LifeCenter Northwest").openPopup(); 

var circle_880 = L.circle(coords_880, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_881 = [ 43.46703085135135 , -111.99143814324324]; 
var markers_881 = L.marker(coords_881).addTo(map); 
markers_881.bindPopup("Reproductive Care Center PC").openPopup(); 

var circle_881 = L.circle(coords_881, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_882 = [ 29.50626249341317 , -98.5683992]; 
var markers_882 = L.marker(coords_882).addTo(map); 
markers_882.bindPopup("Texas Organ Sharing Alliance").openPopup(); 

var circle_882 = L.circle(coords_882, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_883 = [ 39.74166146539509 , -104.78484567360842]; 
var markers_883 = L.marker(coords_883).addTo(map); 
markers_883.bindPopup("Marathon Medical Corporation").openPopup(); 

var circle_883 = L.circle(coords_883, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_884 = [ 32.9423594810582 , -97.14871645301588]; 
var markers_884 = L.marker(coords_884).addTo(map); 
markers_884.bindPopup("PHRK Intervention Inc").openPopup(); 

var circle_884 = L.circle(coords_884, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_885 = [ 40.3162195 , -74.5137645]; 
var markers_885 = L.marker(coords_885).addTo(map); 
markers_885.bindPopup("SciSafe, Inc.").openPopup(); 

var circle_885 = L.circle(coords_885, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_886 = [ 39.66666446760916 , -104.84496348328562]; 
var markers_886 = L.marker(coords_886).addTo(map); 
markers_886.bindPopup("Rocky Mountain Tissue Bank").openPopup(); 

var circle_886 = L.circle(coords_886, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_887 = [ 28.5421109 , -81.3790304]; 
var markers_887 = L.marker(coords_887).addTo(map); 
markers_887.bindPopup("Wright Medical Technology, Inc.").openPopup(); 

var circle_887 = L.circle(coords_887, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_888 = [ 21.0202117 , -101.2734016]; 
var markers_888 = L.marker(coords_888).addTo(map); 
markers_888.bindPopup("Los Angeles Reproductive Center").openPopup(); 

var circle_888 = L.circle(coords_888, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_889 = [ 32.815740637610624 , -96.86926064955752]; 
var markers_889 = L.marker(coords_889).addTo(map); 
markers_889.bindPopup("Redstone Distribution Services LLC").openPopup(); 

var circle_889 = L.circle(coords_889, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_890 = [ 27.947284677070066 , -82.78848515477708]; 
var markers_890 = L.marker(coords_890).addTo(map); 
markers_890.bindPopup("Zentech, Inc.").openPopup(); 

var circle_890 = L.circle(coords_890, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_891 = [ 39.99595278095624 , -105.10602855861696]; 
var markers_891 = L.marker(coords_891).addTo(map); 
markers_891.bindPopup("Conceptions Reproductive Associates of Colorado").openPopup(); 

var circle_891 = L.circle(coords_891, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_892 = [ 37.486124178636366 , -122.22514718568182]; 
var markers_892 = L.marker(coords_892).addTo(map); 
markers_892.bindPopup("Klatsky, Peter Charles MD Inc").openPopup(); 

var circle_892 = L.circle(coords_892, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_893 = [ 40.0289955 , -75.6207651]; 
var markers_893 = L.marker(coords_893).addTo(map); 
markers_893.bindPopup("Absorption Systems").openPopup(); 

var circle_893 = L.circle(coords_893, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_894 = [ 38.77777106105699 , -90.6234853572461]; 
var markers_894 = L.marker(coords_894).addTo(map); 
markers_894.bindPopup("The Fertility Partnership LLC").openPopup(); 

var circle_894 = L.circle(coords_894, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_895 = [ 26.40798749570957 , -80.0874489191419]; 
var markers_895 = L.marker(coords_895).addTo(map); 
markers_895.bindPopup("Surgentec, LLC").openPopup(); 

var circle_895 = L.circle(coords_895, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_896 = [ 41.71024601583333 , -86.30443831283333]; 
var markers_896 = L.marker(coords_896).addTo(map); 
markers_896.bindPopup("Patterson Logistics Services, Inc").openPopup(); 

var circle_896 = L.circle(coords_896, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_897 = [ 39.00219574237288 , -77.09002847288136]; 
var markers_897 = L.marker(coords_897).addTo(map); 
markers_897.bindPopup("The A.R.T. Institute of Washington, Inc.").openPopup(); 

var circle_897 = L.circle(coords_897, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_898 = [ 40.3183284 , -74.42021831867089]; 
var markers_898 = L.marker(coords_898).addTo(map); 
markers_898.bindPopup("Tri State Dental Inc.").openPopup(); 

var circle_898 = L.circle(coords_898, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_899 = [ 40.81507168294582 , -73.50209060067333]; 
var markers_899 = L.marker(coords_899).addTo(map); 
markers_899.bindPopup("New York Reproductive Wellness Medicine, P.C.").openPopup(); 

var circle_899 = L.circle(coords_899, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_900 = [ 41.74832984276808 , -88.24435723678305]; 
var markers_900 = L.marker(coords_900).addTo(map); 
markers_900.bindPopup("Rush-Copley Center for Reproductive Health").openPopup(); 

var circle_900 = L.circle(coords_900, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_901 = [ 29.56857722407504 , -98.61441590932778]; 
var markers_901 = L.marker(coords_901).addTo(map); 
markers_901.bindPopup("INCELL Corporation LLC").openPopup(); 

var circle_901 = L.circle(coords_901, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_902 = [ 40.7127281 , -74.0060152]; 
var markers_902 = L.marker(coords_902).addTo(map); 
markers_902.bindPopup("CCB-MCB LLC").openPopup(); 

var circle_902 = L.circle(coords_902, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_903 = [ 34.42031194408205 , -119.70934631598288]; 
var markers_903 = L.marker(coords_903).addTo(map); 
markers_903.bindPopup("Advanced Reproductive Technologies of Santa Barbara, LLC.").openPopup(); 

var circle_903 = L.circle(coords_903, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_904 = [ 42.17870840632023 , -87.80536878174158]; 
var markers_904 = L.marker(coords_904).addTo(map); 
markers_904.bindPopup("Fertility Centers of Illinois").openPopup(); 

var circle_904 = L.circle(coords_904, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_905 = [ 34.0234337 , -84.6154897]; 
var markers_905 = L.marker(coords_905).addTo(map); 
markers_905.bindPopup("MiMedx Tissue Services LLC").openPopup(); 

var circle_905 = L.circle(coords_905, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_906 = [ 32.43115943252212 , -97.78875258108408]; 
var markers_906 = L.marker(coords_906).addTo(map); 
markers_906.bindPopup("C.G. Laboratories, Inc.").openPopup(); 

var circle_906 = L.circle(coords_906, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_907 = [ 33.53024490477335 , -117.70095302000642]; 
var markers_907 = L.marker(coords_907).addTo(map); 
markers_907.bindPopup("Acacio Fertility Center").openPopup(); 

var circle_907 = L.circle(coords_907, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_908 = [ 43.080274450000005 , -89.43095871991434]; 
var markers_908 = L.marker(coords_908).addTo(map); 
markers_908.bindPopup("University of Wisconsin Hospitals & Clinics Authority").openPopup(); 

var circle_908 = L.circle(coords_908, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_909 = [ 25.887474310174003 , -80.22917344008188]; 
var markers_909 = L.marker(coords_909).addTo(map); 
markers_909.bindPopup("Vivex Biologics, Inc.").openPopup(); 

var circle_909 = L.circle(coords_909, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_910 = [ 30.315232692426587 , -97.74026123910356]; 
var markers_910 = L.marker(coords_910).addTo(map); 
markers_910.bindPopup("We Are Blood").openPopup(); 

var circle_910 = L.circle(coords_910, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_911 = [ 53.2922794 , -6.1360079]; 
var markers_911 = L.marker(coords_911).addTo(map); 
markers_911.bindPopup("Amgen Technology (Ireland) Unlimited Company").openPopup(); 

var circle_911 = L.circle(coords_911, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_912 = [ 29.78808766666667 , -82.48273446360153]; 
var markers_912 = L.marker(coords_912).addTo(map); 
markers_912.bindPopup("RTI Donor Services, Inc").openPopup(); 

var circle_912 = L.circle(coords_912, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_913 = [ 39.2558999576 , -94.6878334706]; 
var markers_913 = L.marker(coords_913).addTo(map); 
markers_913.bindPopup("Saving Sight").openPopup(); 

var circle_913 = L.circle(coords_913, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_914 = [ 38.8856158 , -94.2117959]; 
var markers_914 = L.marker(coords_914).addTo(map); 
markers_914.bindPopup("Eurofins Viracor, Inc.").openPopup(); 

var circle_914 = L.circle(coords_914, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_915 = [ 33.500461498851244 , -111.986898111593]; 
var markers_915 = L.marker(coords_915).addTo(map); 
markers_915.bindPopup("Southwest Fertility Center").openPopup(); 

var circle_915 = L.circle(coords_915, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_916 = [ 32.33242036044776 , -90.08517370597016]; 
var markers_916 = L.marker(coords_916).addTo(map); 
markers_916.bindPopup("University Of Mississippi Medical Center IVF & Andrology Lab").openPopup(); 

var circle_916 = L.circle(coords_916, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_917 = [ 31.579696742276425 , -84.15918769207316]; 
var markers_917 = L.marker(coords_917).addTo(map); 
markers_917.bindPopup("Phoebe Putney Memorial Hosp").openPopup(); 

var circle_917 = L.circle(coords_917, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_918 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_918 = L.marker(coords_918).addTo(map); 
markers_918.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_918 = L.circle(coords_918, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_919 = [ 33.1021502 , -116.995733]; 
var markers_919 = L.marker(coords_919).addTo(map); 
markers_919.bindPopup("Wright Medical Technology Inc - District Service Center - Escondido").openPopup(); 

var circle_919 = L.circle(coords_919, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_920 = [ 33.9419393 , -118.43808037530732]; 
var markers_920 = L.marker(coords_920).addTo(map); 
markers_920.bindPopup("One Legacy").openPopup(); 

var circle_920 = L.circle(coords_920, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_921 = [ 30.29209155560946 , -97.7390149515464]; 
var markers_921 = L.marker(coords_921).addTo(map); 
markers_921.bindPopup("Fairfax Cryobank, Inc.").openPopup(); 

var circle_921 = L.circle(coords_921, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_922 = [ 39.2558999576 , -94.6878334706]; 
var markers_922 = L.marker(coords_922).addTo(map); 
markers_922.bindPopup("Saving Sight").openPopup(); 

var circle_922 = L.circle(coords_922, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_923 = [ 32.0670737 , -110.8665785]; 
var markers_923 = L.marker(coords_923).addTo(map); 
markers_923.bindPopup("CBR Systems Inc").openPopup(); 

var circle_923 = L.circle(coords_923, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_924 = [ 39.9786728 , -75.3015247]; 
var markers_924 = L.marker(coords_924).addTo(map); 
markers_924.bindPopup("Crozer Chester Medical Center dba HAN Fertility Center").openPopup(); 

var circle_924 = L.circle(coords_924, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_925 = [ 39.0402 , -94.6205]; 
var markers_925 = L.marker(coords_925).addTo(map); 
markers_925.bindPopup("Midwest Transplant Network").openPopup(); 

var circle_925 = L.circle(coords_925, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_926 = [ 33.840511479834255 , -116.51901206169428]; 
var markers_926 = L.marker(coords_926).addTo(map); 
markers_926.bindPopup("American Reproductive Centers").openPopup(); 

var circle_926 = L.circle(coords_926, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_927 = [ 44.07532270510753 , -121.27135427674732]; 
var markers_927 = L.marker(coords_927).addTo(map); 
markers_927.bindPopup("St. Charles Health System").openPopup(); 

var circle_927 = L.circle(coords_927, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_928 = [ 38.32547753126294 , -88.91059410020705]; 
var markers_928 = L.marker(coords_928).addTo(map); 
markers_928.bindPopup("Happy Beginnings LLC").openPopup(); 

var circle_928 = L.circle(coords_928, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_929 = [ 41.2917652 , -72.3761956]; 
var markers_929 = L.marker(coords_929).addTo(map); 
markers_929.bindPopup("MetaGen Corp.").openPopup(); 

var circle_929 = L.circle(coords_929, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_930 = [ 42.583645 , -83.2454883]; 
var markers_930 = L.marker(coords_930).addTo(map); 
markers_930.bindPopup("Advanced Reproductive Medicine & Surgery, P.C.").openPopup(); 

var circle_930 = L.circle(coords_930, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_931 = [ 33.9419393 , -118.43808037530732]; 
var markers_931 = L.marker(coords_931).addTo(map); 
markers_931.bindPopup("Dental Implant Specialties").openPopup(); 

var circle_931 = L.circle(coords_931, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_932 = [ 32.33242036044776 , -90.08517370597016]; 
var markers_932 = L.marker(coords_932).addTo(map); 
markers_932.bindPopup("Mississippi Reproductive Medicine, LLC").openPopup(); 

var circle_932 = L.circle(coords_932, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_933 = [ 36.82894571153847 , -119.6935758]; 
var markers_933 = L.marker(coords_933).addTo(map); 
markers_933.bindPopup("Valley Andrology Fertility Center Inc.").openPopup(); 

var circle_933 = L.circle(coords_933, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_934 = [ 39.730556306054055 , -104.95182971915315]; 
var markers_934 = L.marker(coords_934).addTo(map); 
markers_934.bindPopup("National Jewish Health").openPopup(); 

var circle_934 = L.circle(coords_934, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_935 = [ 33.7489924 , -84.3902644]; 
var markers_935 = L.marker(coords_935).addTo(map); 
markers_935.bindPopup("Northside Hospital - Blood Bank").openPopup(); 

var circle_935 = L.circle(coords_935, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_936 = [ 33.63216492475682 , -117.87771778237632]; 
var markers_936 = L.marker(coords_936).addTo(map); 
markers_936.bindPopup("OC Fertility / Orange County Fertility").openPopup(); 

var circle_936 = L.circle(coords_936, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_937 = [ 41.780206 , -71.4087604910087]; 
var markers_937 = L.marker(coords_937).addTo(map); 
markers_937.bindPopup("Women & Infants Hospital Of Rhode Island  Women & Infants' Fertility Center").openPopup(); 

var circle_937 = L.circle(coords_937, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_938 = [ 38.411259285860304 , -82.43933390114992]; 
var markers_938 = L.marker(coords_938).addTo(map); 
markers_938.bindPopup("Cabell Huntington Hospital").openPopup(); 

var circle_938 = L.circle(coords_938, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_939 = [ 44.88087631196078 , -93.33766134686276]; 
var markers_939 = L.marker(coords_939).addTo(map); 
markers_939.bindPopup("CCRM Minneapolis").openPopup(); 

var circle_939 = L.circle(coords_939, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_940 = [ 35.581519551748976 , -82.60814833950617]; 
var markers_940 = L.marker(coords_940).addTo(map); 
markers_940.bindPopup("Lifeshare Of The Carolinas").openPopup(); 

var circle_940 = L.circle(coords_940, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_941 = [ 35.16805538103302 , -80.78785909047417]; 
var markers_941 = L.marker(coords_941).addTo(map); 
markers_941.bindPopup("Salvin Dental Specialties, Inc.").openPopup(); 

var circle_941 = L.circle(coords_941, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_942 = [ 43.52686836302895 , -96.74770378685967]; 
var markers_942 = L.marker(coords_942).addTo(map); 
markers_942.bindPopup("Sanford Women's Health    Advanced Reproductive Laboratory").openPopup(); 

var circle_942 = L.circle(coords_942, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_943 = [ 38.62351752450111 , -90.25591997815964]; 
var markers_943 = L.marker(coords_943).addTo(map); 
markers_943.bindPopup("St Louis Children's Hospital").openPopup(); 

var circle_943 = L.circle(coords_943, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_944 = [ 35.12495985695492 , -89.86875265898625]; 
var markers_944 = L.marker(coords_944).addTo(map); 
markers_944.bindPopup("Kutteh Ke Fertility Associates of Memphis, PLLC").openPopup(); 

var circle_944 = L.circle(coords_944, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_945 = [ 38.64611097213144 , -90.61833031267793]; 
var markers_945 = L.marker(coords_945).addTo(map); 
markers_945.bindPopup("Elite Orthopedics, LLC").openPopup(); 

var circle_945 = L.circle(coords_945, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_946 = [ 29.705316533084577 , -95.40499932139303]; 
var markers_946 = L.marker(coords_946).addTo(map); 
markers_946.bindPopup("University Of Texas MD Anderson Cancer Center").openPopup(); 

var circle_946 = L.circle(coords_946, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_947 = [ 35.23165488041237 , -80.89905004041236]; 
var markers_947 = L.marker(coords_947).addTo(map); 
markers_947.bindPopup("Peerless Surgical, Inc").openPopup(); 

var circle_947 = L.circle(coords_947, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_948 = [ 41.58734406461539 , -93.62113737869824]; 
var markers_948 = L.marker(coords_948).addTo(map); 
markers_948.bindPopup("LifeServe Blood Center").openPopup(); 

var circle_948 = L.circle(coords_948, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_949 = [ 32.94910312882562 , -96.84216764590748]; 
var markers_949 = L.marker(coords_949).addTo(map); 
markers_949.bindPopup("Aspire Fertility-Dallas").openPopup(); 

var circle_949 = L.circle(coords_949, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_950 = [ 33.7489924 , -84.3902644]; 
var markers_950 = L.marker(coords_950).addTo(map); 
markers_950.bindPopup("Wright Medical Technology, Inc. - District Service Center").openPopup(); 

var circle_950 = L.circle(coords_950, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_951 = [ 47.386878389749526 , -122.26624732686804]; 
var markers_951 = L.marker(coords_951).addTo(map); 
markers_951.bindPopup("Wright Medical Technology Inc - District Service Center - Seattle").openPopup(); 

var circle_951 = L.circle(coords_951, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_952 = [ 21.2967432628125 , -157.84543497843748]; 
var markers_952 = L.marker(coords_952).addTo(map); 
markers_952.bindPopup("Advanced Reproductive Medicine & Gynecology of Hawaii, Inc.").openPopup(); 

var circle_952 = L.circle(coords_952, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_953 = [ 41.46980287142857 , -81.51355601887124]; 
var markers_953 = L.marker(coords_953).addTo(map); 
markers_953.bindPopup("Cleveland Clinic Fertility Center").openPopup(); 

var circle_953 = L.circle(coords_953, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_954 = [ 32.96447653250249 , -96.74092492662014]; 
var markers_954 = L.marker(coords_954).addTo(map); 
markers_954.bindPopup("Palm Springs Partners, LLC.").openPopup(); 

var circle_954 = L.circle(coords_954, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_955 = [ 37.8857378460274 , -122.20030427589042]; 
var markers_955 = L.marker(coords_955).addTo(map); 
markers_955.bindPopup("Reproductive Science Center of the San Francisco Bay Area A Medical Corporation").openPopup(); 

var circle_955 = L.circle(coords_955, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_956 = [ 47.1995303 , -65.205763]; 
var markers_956 = L.marker(coords_956).addTo(map); 
markers_956.bindPopup("Xytex Cryo International").openPopup(); 

var circle_956 = L.circle(coords_956, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_957 = [ 45.512094 , -122.6207486]; 
var markers_957 = L.marker(coords_957).addTo(map); 
markers_957.bindPopup("Steelhead Surgical Inc").openPopup(); 

var circle_957 = L.circle(coords_957, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_958 = [ 44.9497487 , -93.0931028]; 
var markers_958 = L.marker(coords_958).addTo(map); 
markers_958.bindPopup("ReproTech, Ltd.").openPopup(); 

var circle_958 = L.circle(coords_958, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_959 = [ 39.986298778861126 , -105.25153080852112]; 
var markers_959 = L.marker(coords_959).addTo(map); 
markers_959.bindPopup("CryoGam Colorado, LLC").openPopup(); 

var circle_959 = L.circle(coords_959, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_960 = [ 31.85457283284672 , -102.3521288540146]; 
var markers_960 = L.marker(coords_960).addTo(map); 
markers_960.bindPopup("Odessa Fertility Lab, Inc").openPopup(); 

var circle_960 = L.circle(coords_960, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_961 = [ 32.919609713422815 , -96.77132810738254]; 
var markers_961 = L.marker(coords_961).addTo(map); 
markers_961.bindPopup("Med Select, LLC dba DR Medical, Inc.").openPopup(); 

var circle_961 = L.circle(coords_961, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_962 = [ -26.7982582 , -55.0228553]; 
var markers_962 = L.marker(coords_962).addTo(map); 
markers_962.bindPopup("Innovasive Medical Inc.").openPopup(); 

var circle_962 = L.circle(coords_962, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_963 = [ 33.9934867 , -81.0739826]; 
var markers_963 = L.marker(coords_963).addTo(map); 
markers_963.bindPopup("Southern Anesthesia & Surgical, Inc").openPopup(); 

var circle_963 = L.circle(coords_963, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_964 = [ 39.90414996633517 , -86.01661041928158]; 
var markers_964 = L.marker(coords_964).addTo(map); 
markers_964.bindPopup("Crossroads Orthopedics, LLC").openPopup(); 

var circle_964 = L.circle(coords_964, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_965 = [ 30.3342414 , -97.5168016]; 
var markers_965 = L.marker(coords_965).addTo(map); 
markers_965.bindPopup("Miracles In Sight Lone Star Division").openPopup(); 

var circle_965 = L.circle(coords_965, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_966 = [ 39.430678436470586 , -119.75185029058824]; 
var markers_966 = L.marker(coords_966).addTo(map); 
markers_966.bindPopup("Gensano").openPopup(); 

var circle_966 = L.circle(coords_966, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_967 = [ 33.7489924 , -84.3902644]; 
var markers_967 = L.marker(coords_967).addTo(map); 
markers_967.bindPopup("Emory University Hospital, Center for Transusion & Cellular Therapies").openPopup(); 

var circle_967 = L.circle(coords_967, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_968 = [ 40.44420588580645 , -79.95281572080646]; 
var markers_968 = L.marker(coords_968).addTo(map); 
markers_968.bindPopup("Center for Fertility and Reproductive Endocrinology").openPopup(); 

var circle_968 = L.circle(coords_968, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_969 = [ 36.4198258 , -82.4765352]; 
var markers_969 = L.marker(coords_969).addTo(map); 
markers_969.bindPopup("DCI Donor Services dba Tennessee Donor Services (Tri-Cities)").openPopup(); 

var circle_969 = L.circle(coords_969, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_970 = [ -26.7982582 , -55.0228553]; 
var markers_970 = L.marker(coords_970).addTo(map); 
markers_970.bindPopup("Banco de Ojos del Leonismo Puertorrique?o, Inc.").openPopup(); 

var circle_970 = L.circle(coords_970, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_971 = [ 37.96312578209877 , -87.522989395679]; 
var markers_971 = L.marker(coords_971).addTo(map); 
markers_971.bindPopup("Advanced Fertility Group, PC").openPopup(); 

var circle_971 = L.circle(coords_971, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_972 = [ 47.161462785714285 , -122.50638157922076]; 
var markers_972 = L.marker(coords_972).addTo(map); 
markers_972.bindPopup("Burkhart Dental Supply Co, The").openPopup(); 

var circle_972 = L.circle(coords_972, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_973 = [ 30.16070606839623 , -92.02720628742138]; 
var markers_973 = L.marker(coords_973).addTo(map); 
markers_973.bindPopup("Harbinger Medical Group LLC").openPopup(); 

var circle_973 = L.circle(coords_973, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_974 = [ 35.55061857376312 , -97.62632615727136]; 
var markers_974 = L.marker(coords_974).addTo(map); 
markers_974.bindPopup("LifeShare Transplant Donor Services of Oklahoma").openPopup(); 

var circle_974 = L.circle(coords_974, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_975 = [ 35.509847432954544 , -97.52494605941558]; 
var markers_975 = L.marker(coords_975).addTo(map); 
markers_975.bindPopup("LifeShare Transplant Donor Services of Oklahoma - Recovery").openPopup(); 

var circle_975 = L.circle(coords_975, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_976 = [ 40.7539956 , -79.8103943]; 
var markers_976 = L.marker(coords_976).addTo(map); 
markers_976.bindPopup("Synergy Health AST, LLC").openPopup(); 

var circle_976 = L.circle(coords_976, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_977 = [ 32.80116482493902 , -117.17287716096205]; 
var markers_977 = L.marker(coords_977).addTo(map); 
markers_977.bindPopup("ImpactOrtho Inc (San Diego)").openPopup(); 

var circle_977 = L.circle(coords_977, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_978 = [ 45.512094 , -122.6207486]; 
var markers_978 = L.marker(coords_978).addTo(map); 
markers_978.bindPopup("Lions VisionGift").openPopup(); 

var circle_978 = L.circle(coords_978, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_979 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_979 = L.marker(coords_979).addTo(map); 
markers_979.bindPopup("California Fertility Experts").openPopup(); 

var circle_979 = L.circle(coords_979, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_980 = [ 27.60048904765625 , -99.49101758671875]; 
var markers_980 = L.marker(coords_980).addTo(map); 
markers_980.bindPopup("A & N Forwarding Inc").openPopup(); 

var circle_980 = L.circle(coords_980, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_981 = [ 33.15459300100365 , -117.33109556872265]; 
var markers_981 = L.marker(coords_981).addTo(map); 
markers_981.bindPopup("Aurora Spine Inc").openPopup(); 

var circle_981 = L.circle(coords_981, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_982 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_982 = L.marker(coords_982).addTo(map); 
markers_982.bindPopup("IGO Medical Group, AMC").openPopup(); 

var circle_982 = L.circle(coords_982, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_983 = [ 40.7539956 , -79.8103943]; 
var markers_983 = L.marker(coords_983).addTo(map); 
markers_983.bindPopup("Synergy Health AST, LLC").openPopup(); 

var circle_983 = L.circle(coords_983, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_984 = [ 40.26175351607143 , -76.63952415982142]; 
var markers_984 = L.marker(coords_984).addTo(map); 
markers_984.bindPopup("Penn State Health Milton S. Hershey Medical Center").openPopup(); 

var circle_984 = L.circle(coords_984, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_985 = [ 33.01405036748006 , -117.11220773862036]; 
var markers_985 = L.marker(coords_985).addTo(map); 
markers_985.bindPopup("TissueTech, Inc.").openPopup(); 

var circle_985 = L.circle(coords_985, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_986 = [ 36.03411796072586 , -95.93741055975372]; 
var markers_986 = L.marker(coords_986).addTo(map); 
markers_986.bindPopup("Advanced NuMed Technologies, Ltd.").openPopup(); 

var circle_986 = L.circle(coords_986, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_987 = [ 33.7489924 , -84.3902644]; 
var markers_987 = L.marker(coords_987).addTo(map); 
markers_987.bindPopup("Atlanta Reproductive Laboratories").openPopup(); 

var circle_987 = L.circle(coords_987, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_988 = [ 34.75396455191919 , -92.41250187373736]; 
var markers_988 = L.marker(coords_988).addTo(map); 
markers_988.bindPopup("Midwestern Medical Inc").openPopup(); 

var circle_988 = L.circle(coords_988, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_989 = [ 36.09539526162791 , -95.8866109276744]; 
var markers_989 = L.marker(coords_989).addTo(map); 
markers_989.bindPopup("Mid-America Surgical Systems, LLC").openPopup(); 

var circle_989 = L.circle(coords_989, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_990 = [ 34.75159047624831 , -92.34576986005398]; 
var markers_990 = L.marker(coords_990).addTo(map); 
markers_990.bindPopup("Arkansas Regional Organ Recovery Agency").openPopup(); 

var circle_990 = L.circle(coords_990, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_991 = [ 35.980717622887866 , -95.88445418986176]; 
var markers_991 = L.marker(coords_991).addTo(map); 
markers_991.bindPopup("Integrity Biologics, LLC").openPopup(); 

var circle_991 = L.circle(coords_991, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_992 = [ 40.47082971291314 , -88.96798966648731]; 
var markers_992 = L.marker(coords_992).addTo(map); 
markers_992.bindPopup("Eversight Illinois, Bloomington").openPopup(); 

var circle_992 = L.circle(coords_992, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_993 = [ 32.772645411884554 , -117.13512520305602]; 
var markers_993 = L.marker(coords_993).addTo(map); 
markers_993.bindPopup("AlloSource Inc.").openPopup(); 

var circle_993 = L.circle(coords_993, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_994 = [ 37.38179798835228 , -122.08187402542612]; 
var markers_994 = L.marker(coords_994).addTo(map); 
markers_994.bindPopup("Schmidt, Richard Joseph MD Inc").openPopup(); 

var circle_994 = L.circle(coords_994, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_995 = [ 21.29135410335196 , -157.82701256256982]; 
var markers_995 = L.marker(coords_995).addTo(map); 
markers_995.bindPopup("Pacific In Vitro Fertilization Institute").openPopup(); 

var circle_995 = L.circle(coords_995, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_996 = [ 41.83894804632035 , -87.95467960714285]; 
var markers_996 = L.marker(coords_996).addTo(map); 
markers_996.bindPopup("Rostein, Daniel MD SC").openPopup(); 

var circle_996 = L.circle(coords_996, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_997 = [ 38.9013729 , -77.2651762]; 
var markers_997 = L.marker(coords_997).addTo(map); 
markers_997.bindPopup("CCRM Fertility Northern Virginia").openPopup(); 

var circle_997 = L.circle(coords_997, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_998 = [ 34.27739299336219 , -118.6816862116883]; 
var markers_998 = L.marker(coords_998).addTo(map); 
markers_998.bindPopup("AlloSurgical").openPopup(); 

var circle_998 = L.circle(coords_998, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_999 = [ 44.91116236993312 , -92.94387467955802]; 
var markers_999 = L.marker(coords_999).addTo(map); 
markers_999.bindPopup("Reproductive Medicine & Infertility Associates").openPopup(); 

var circle_999 = L.circle(coords_999, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1000 = [ 35.95906217374377 , -78.93871488646431]; 
var markers_1000 = L.marker(coords_1000).addTo(map); 
markers_1000.bindPopup("Carolina Donor Services").openPopup(); 

var circle_1000 = L.circle(coords_1000, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1001 = [ 42.51324151401515 , -83.06088033636364]; 
var markers_1001 = L.marker(coords_1001).addTo(map); 
markers_1001.bindPopup("Michigan Center IVF PLLC").openPopup(); 

var circle_1001 = L.circle(coords_1001, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1002 = [ 42.51324151401515 , -83.06088033636364]; 
var markers_1002 = L.marker(coords_1002).addTo(map); 
markers_1002.bindPopup("Fertility Storage, Inc.").openPopup(); 

var circle_1002 = L.circle(coords_1002, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1003 = [ 42.51324151401515 , -83.06088033636364]; 
var markers_1003 = L.marker(coords_1003).addTo(map); 
markers_1003.bindPopup("Michigan Center for Fertility and Women's Health, PLC").openPopup(); 

var circle_1003 = L.circle(coords_1003, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1004 = [ 33.47548803874598 , -82.0094166755627]; 
var markers_1004 = L.marker(coords_1004).addTo(map); 
markers_1004.bindPopup("Servy Institute for Reproductive Endocrinology").openPopup(); 

var circle_1004 = L.circle(coords_1004, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1005 = [ 32.8474741 , -117.271941]; 
var markers_1005 = L.marker(coords_1005).addTo(map); 
markers_1005.bindPopup("Fertility Institute of San Diego, PC").openPopup(); 

var circle_1005 = L.circle(coords_1005, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1006 = [ 37.979774821666666 , -122.0414565025]; 
var markers_1006 = L.marker(coords_1006).addTo(map); 
markers_1006.bindPopup("Wright Medical Technology Inc - District Service Center - Concord").openPopup(); 

var circle_1006 = L.circle(coords_1006, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1007 = [ 32.8474741 , -117.271941]; 
var markers_1007 = L.marker(coords_1007).addTo(map); 
markers_1007.bindPopup("La Jolla IVF").openPopup(); 

var circle_1007 = L.circle(coords_1007, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1008 = [ 42.19433164958678 , -88.21418054214875]; 
var markers_1008 = L.marker(coords_1008).addTo(map); 
markers_1008.bindPopup("LeMaitre Vascular Inc").openPopup(); 

var circle_1008 = L.circle(coords_1008, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1009 = [ 33.676115898241 , -117.8181700322685]; 
var markers_1009 = L.marker(coords_1009).addTo(map); 
markers_1009.bindPopup("MD Tox Laboratory").openPopup(); 

var circle_1009 = L.circle(coords_1009, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1010 = [ 31.457418292144023 , -83.49964411227495]; 
var markers_1010 = L.marker(coords_1010).addTo(map); 
markers_1010.bindPopup("Medtech Southeast, Inc.").openPopup(); 

var circle_1010 = L.circle(coords_1010, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1011 = [ 32.8474741 , -117.271941]; 
var markers_1011 = L.marker(coords_1011).addTo(map); 
markers_1011.bindPopup("Reproductive Partners Medical Group - LaJolla Inc.").openPopup(); 

var circle_1011 = L.circle(coords_1011, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1012 = [ 32.04109455637931 , -81.12849659034482]; 
var markers_1012 = L.marker(coords_1012).addTo(map); 
markers_1012.bindPopup("Georgia Center for Reproductive Medicine").openPopup(); 

var circle_1012 = L.circle(coords_1012, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1013 = [ 32.48347151365462 , -93.73662146385544]; 
var markers_1013 = L.marker(coords_1013).addTo(map); 
markers_1013.bindPopup("Lions Eye Institute for Transplant and Research").openPopup(); 

var circle_1013 = L.circle(coords_1013, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1014 = [ 38.439203298716365 , -122.6734878606827]; 
var markers_1014 = L.marker(coords_1014).addTo(map); 
markers_1014.bindPopup("Advanced Fertility Associates Medical Group, Inc.").openPopup(); 

var circle_1014 = L.circle(coords_1014, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1015 = [ 39.6582032 , -79.84895492016241]; 
var markers_1015 = L.marker(coords_1015).addTo(map); 
markers_1015.bindPopup("Omnia Biologix, LLC").openPopup(); 

var circle_1015 = L.circle(coords_1015, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1016 = [ 44.811349 , -91.4984941]; 
var markers_1016 = L.marker(coords_1016).addTo(map); 
markers_1016.bindPopup("ATSF NW Office").openPopup(); 

var circle_1016 = L.circle(coords_1016, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1017 = [ 43.05794284200278 , -88.1510066132128]; 
var markers_1017 = L.marker(coords_1017).addTo(map); 
markers_1017.bindPopup("Great Lakes Orthopedics, LLC").openPopup(); 

var circle_1017 = L.circle(coords_1017, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1018 = [ 39.091220046581874 , -77.17062372615263]; 
var markers_1018 = L.marker(coords_1018).addTo(map); 
markers_1018.bindPopup("CCB DEB, LLC").openPopup(); 

var circle_1018 = L.circle(coords_1018, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1019 = [ 40.7244443 , -74.3069069]; 
var markers_1019 = L.marker(coords_1019).addTo(map); 
markers_1019.bindPopup("Diamond Institute for Infertility and Menopause").openPopup(); 

var circle_1019 = L.circle(coords_1019, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1020 = [ 21.0202117 , -101.2734016]; 
var markers_1020 = L.marker(coords_1020).addTo(map); 
markers_1020.bindPopup("Steinberg, Jeffrey MD, Inc, a Professional Medical Corp").openPopup(); 

var circle_1020 = L.circle(coords_1020, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1021 = [ 35.581519551748976 , -82.60814833950617]; 
var markers_1021 = L.marker(coords_1021).addTo(map); 
markers_1021.bindPopup("Lifeshare Of The Carolinas").openPopup(); 

var circle_1021 = L.circle(coords_1021, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1022 = [ 21.0204318 , -101.2731821]; 
var markers_1022 = L.marker(coords_1022).addTo(map); 
markers_1022.bindPopup("Assisted Reproductive Technologies Medical Group Inc").openPopup(); 

var circle_1022 = L.circle(coords_1022, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1023 = [ 43.10411356980057 , -89.50676742635328]; 
var markers_1023 = L.marker(coords_1023).addTo(map); 
markers_1023.bindPopup("Generations Fertility Care, Inc.").openPopup(); 

var circle_1023 = L.circle(coords_1023, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1024 = [ 34.04338538899587 , -117.18451423575618]; 
var markers_1024 = L.marker(coords_1024).addTo(map); 
markers_1024.bindPopup("Core BioScience, LLC").openPopup(); 

var circle_1024 = L.circle(coords_1024, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1025 = [ 33.9701009 , -84.2215869]; 
var markers_1025 = L.marker(coords_1025).addTo(map); 
markers_1025.bindPopup("LifeLink of Georgia").openPopup(); 

var circle_1025 = L.circle(coords_1025, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1026 = [ 39.89730213041816 , -86.18260394602244]; 
var markers_1026 = L.marker(coords_1026).addTo(map); 
markers_1026.bindPopup("Rapp Medical Systems, Inc.").openPopup(); 

var circle_1026 = L.circle(coords_1026, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1027 = [ 33.78830559480986 , -117.87242521238436]; 
var markers_1027 = L.marker(coords_1027).addTo(map); 
markers_1027.bindPopup("OneLegacy").openPopup(); 

var circle_1027 = L.circle(coords_1027, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1028 = [ 39.93197052559758 , -76.71017602694403]; 
var markers_1028 = L.marker(coords_1028).addTo(map); 
markers_1028.bindPopup("The Fertility Center, LLC").openPopup(); 

var circle_1028 = L.circle(coords_1028, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1029 = [ 41.60775038673835 , -93.7679939660693]; 
var markers_1029 = L.marker(coords_1029).addTo(map); 
markers_1029.bindPopup("Mid-Iowa Fertility PC").openPopup(); 

var circle_1029 = L.circle(coords_1029, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1030 = [ 35.060531671810466 , -89.9095353197454]; 
var markers_1030 = L.marker(coords_1030).addTo(map); 
markers_1030.bindPopup("SpinalGraft Technologies LLC").openPopup(); 

var circle_1030 = L.circle(coords_1030, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1031 = [ 42.391852 , -87.89408420121015]; 
var markers_1031 = L.marker(coords_1031).addTo(map); 
markers_1031.bindPopup("Advanced Fertility Center of Chicago").openPopup(); 

var circle_1031 = L.circle(coords_1031, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1032 = [ 35.349542150000005 , -80.86434492512674]; 
var markers_1032 = L.marker(coords_1032).addTo(map); 
markers_1032.bindPopup("OrthoCarolina Research Institute, Inc.").openPopup(); 

var circle_1032 = L.circle(coords_1032, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1033 = [ 33.700546398900855 , -117.802475449989]; 
var markers_1033 = L.marker(coords_1033).addTo(map); 
markers_1033.bindPopup("Genesis Biologics Inc").openPopup(); 

var circle_1033 = L.circle(coords_1033, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1034 = [ 35.1335022 , -89.9668758]; 
var markers_1034 = L.marker(coords_1034).addTo(map); 
markers_1034.bindPopup("Community Blood Center dba CommunityTissue Services").openPopup(); 

var circle_1034 = L.circle(coords_1034, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1035 = [ 35.96395172541254 , -80.0261055440594]; 
var markers_1035 = L.marker(coords_1035).addTo(map); 
markers_1035.bindPopup("High Point Regional Health System").openPopup(); 

var circle_1035 = L.circle(coords_1035, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1036 = [ 35.16001250948081 , -90.05201022223476]; 
var markers_1036 = L.marker(coords_1036).addTo(map); 
markers_1036.bindPopup("Midsouth Eye Bank for Sight Restoration Inc").openPopup(); 

var circle_1036 = L.circle(coords_1036, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1037 = [ 36.10196660580271 , -80.22841610270794]; 
var markers_1037 = L.marker(coords_1037).addTo(map); 
markers_1037.bindPopup("Wake Forest Institute for Regenerative Medicine").openPopup(); 

var circle_1037 = L.circle(coords_1037, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1038 = [ 43.118993742469705 , -89.35021544212348]; 
var markers_1038 = L.marker(coords_1038).addTo(map); 
markers_1038.bindPopup("Lions Eye Bank Of Wisconsin, Inc.").openPopup(); 

var circle_1038 = L.circle(coords_1038, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1039 = [ 31.7808952992126 , -106.37572841023622]; 
var markers_1039 = L.marker(coords_1039).addTo(map); 
markers_1039.bindPopup("Southwest Transplant Alliance").openPopup(); 

var circle_1039 = L.circle(coords_1039, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1040 = [ 30.01008236650173 , -90.1621700612062]; 
var markers_1040 = L.marker(coords_1040).addTo(map); 
markers_1040.bindPopup("telaGen, LLC").openPopup(); 

var circle_1040 = L.circle(coords_1040, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1041 = [ 40.7127281 , -74.0060152]; 
var markers_1041 = L.marker(coords_1041).addTo(map); 
markers_1041.bindPopup("Michael A. Werner MD PC/dba M.A.Z.E Laboratories").openPopup(); 

var circle_1041 = L.circle(coords_1041, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1042 = [ 33.8577297 , -118.0641398]; 
var markers_1042 = L.marker(coords_1042).addTo(map); 
markers_1042.bindPopup("Wright Medical Technologhy, Inc. -District Service Center-Anaheim").openPopup(); 

var circle_1042 = L.circle(coords_1042, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1043 = [ 41.944883609143965 , -88.09290696614786]; 
var markers_1043 = L.marker(coords_1043).addTo(map); 
markers_1043.bindPopup("Reproductive Medicine Institute").openPopup(); 

var circle_1043 = L.circle(coords_1043, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1044 = [ 43.652822400000005 , -72.24284571667266]; 
var markers_1044 = L.marker(coords_1044).addTo(map); 
markers_1044.bindPopup("Dartmouth-Hitchcock Medical Center").openPopup(); 

var circle_1044 = L.circle(coords_1044, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1045 = [ 43.10411356980057 , -89.50676742635328]; 
var markers_1045 = L.marker(coords_1045).addTo(map); 
markers_1045.bindPopup("Fertility Labs of Wisconsin").openPopup(); 

var circle_1045 = L.circle(coords_1045, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1046 = [ 21.319862069166668 , -157.86276457333332]; 
var markers_1046 = L.marker(coords_1046).addTo(map); 
markers_1046.bindPopup("Hawaii Organ Procurement Organization").openPopup(); 

var circle_1046 = L.circle(coords_1046, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1047 = [ 35.9449105 , -83.97891729569912]; 
var markers_1047 = L.marker(coords_1047).addTo(map); 
markers_1047.bindPopup("East Tennessee IVF and Andrology Center").openPopup(); 

var circle_1047 = L.circle(coords_1047, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1048 = [ 39.2558999576 , -94.6878334706]; 
var markers_1048 = L.marker(coords_1048).addTo(map); 
markers_1048.bindPopup("Saving Sight").openPopup(); 

var circle_1048 = L.circle(coords_1048, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1049 = [ 38.934691490806046 , -92.29675503979848]; 
var markers_1049 = L.marker(coords_1049).addTo(map); 
markers_1049.bindPopup("University of Missouri Reproductive Health and Fertility Center").openPopup(); 

var circle_1049 = L.circle(coords_1049, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1050 = [ 41.7833176054878 , -87.8067385457317]; 
var markers_1050 = L.marker(coords_1050).addTo(map); 
markers_1050.bindPopup("Old School Medical LLC").openPopup(); 

var circle_1050 = L.circle(coords_1050, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1051 = [ 21.319862069166668 , -157.86276457333332]; 
var markers_1051 = L.marker(coords_1051).addTo(map); 
markers_1051.bindPopup("Hawaii Lions Eye Bank and Makana Foundation").openPopup(); 

var circle_1051 = L.circle(coords_1051, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1052 = [ 40.8853773 , -73.9523597]; 
var markers_1052 = L.marker(coords_1052).addTo(map); 
markers_1052.bindPopup("North Hudson IVF Center for Fertility & Gynecology P.C.").openPopup(); 

var circle_1052 = L.circle(coords_1052, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1053 = [ 38.572433658181815 , -121.47778147909092]; 
var markers_1053 = L.marker(coords_1053).addTo(map); 
markers_1053.bindPopup("Sequoia Surgical, Inc.").openPopup(); 

var circle_1053 = L.circle(coords_1053, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1054 = [ 28.5421109 , -81.3790304]; 
var markers_1054 = L.marker(coords_1054).addTo(map); 
markers_1054.bindPopup("Wright Medical Technology, Inc.").openPopup(); 

var circle_1054 = L.circle(coords_1054, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1055 = [ 32.2412339 , -110.9456041]; 
var markers_1055 = L.marker(coords_1055).addTo(map); 
markers_1055.bindPopup("Banner - University Medical Center Tuscon").openPopup(); 

var circle_1055 = L.circle(coords_1055, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1056 = [ 33.578557826807234 , -83.84456001957831]; 
var markers_1056 = L.marker(coords_1056).addTo(map); 
markers_1056.bindPopup("C.R. Bard Inc").openPopup(); 

var circle_1056 = L.circle(coords_1056, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1057 = [ 42.08556499156442 , -87.82930938726994]; 
var markers_1057 = L.marker(coords_1057).addTo(map); 
markers_1057.bindPopup("Glenbrook Hospital Blood Bank").openPopup(); 

var circle_1057 = L.circle(coords_1057, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1058 = [ 39.90414996633517 , -86.01661041928158]; 
var markers_1058 = L.marker(coords_1058).addTo(map); 
markers_1058.bindPopup("Community Fertility Specialty Care").openPopup(); 

var circle_1058 = L.circle(coords_1058, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1059 = [ 40.38787160679702 , -111.7477421225326]; 
var markers_1059 = L.marker(coords_1059).addTo(map); 
markers_1059.bindPopup("Utah Fertility Center").openPopup(); 

var circle_1059 = L.circle(coords_1059, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1060 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_1060 = L.marker(coords_1060).addTo(map); 
markers_1060.bindPopup("Lifegift Organ Donation Center").openPopup(); 

var circle_1060 = L.circle(coords_1060, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1061 = [ 33.5846448 , -101.8920188]; 
var markers_1061 = L.marker(coords_1061).addTo(map); 
markers_1061.bindPopup("Texas Tech University Health Science Center").openPopup(); 

var circle_1061 = L.circle(coords_1061, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1062 = [ 42.563243272 , -83.17588842611765]; 
var markers_1062 = L.marker(coords_1062).addTo(map); 
markers_1062.bindPopup("Reproductive Medicine Associates of Michigan, PLC").openPopup(); 

var circle_1062 = L.circle(coords_1062, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1063 = [ 29.497661565095846 , -95.10827257396166]; 
var markers_1063 = L.marker(coords_1063).addTo(map); 
markers_1063.bindPopup("Orthopedic Concepts, Inc").openPopup(); 

var circle_1063 = L.circle(coords_1063, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1064 = [ 43.10411356980057 , -89.50676742635328]; 
var markers_1064 = L.marker(coords_1064).addTo(map); 
markers_1064.bindPopup("BloodCenter of Wisconsin Inc. Wisconsin Tissue Bank").openPopup(); 

var circle_1064 = L.circle(coords_1064, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1065 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_1065 = L.marker(coords_1065).addTo(map); 
markers_1065.bindPopup("Texas Fertility Center").openPopup(); 

var circle_1065 = L.circle(coords_1065, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1066 = [ 37.918873387912086 , -122.34419256043957]; 
var markers_1066 = L.marker(coords_1066).addTo(map); 
markers_1066.bindPopup("CorneaGen - Richmond").openPopup(); 

var circle_1066 = L.circle(coords_1066, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1067 = [ 39.1516452876 , -84.4310678316]; 
var markers_1067 = L.marker(coords_1067).addTo(map); 
markers_1067.bindPopup("Institute for Reproductive Health").openPopup(); 

var circle_1067 = L.circle(coords_1067, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1068 = [ 30.683802186534656 , -88.06057528019802]; 
var markers_1068 = L.marker(coords_1068).addTo(map); 
markers_1068.bindPopup("University of South Alabama IVF Lab").openPopup(); 

var circle_1068 = L.circle(coords_1068, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1069 = [ 47.656816375 , -117.39208102361113]; 
var markers_1069 = L.marker(coords_1069).addTo(map); 
markers_1069.bindPopup("Corvus Medical, Inc.").openPopup(); 

var circle_1069 = L.circle(coords_1069, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1070 = [ 33.515238070731705 , -101.9279002740418]; 
var markers_1070 = L.marker(coords_1070).addTo(map); 
markers_1070.bindPopup("Osteogenics Biomedical, Inc.").openPopup(); 

var circle_1070 = L.circle(coords_1070, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1071 = [ 30.16070606839623 , -92.02720628742138]; 
var markers_1071 = L.marker(coords_1071).addTo(map); 
markers_1071.bindPopup("Harbinger Medical Group dba Tides Medical").openPopup(); 

var circle_1071 = L.circle(coords_1071, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1072 = [ 44.15386756666667 , -93.99293099930192]; 
var markers_1072 = L.marker(coords_1072).addTo(map); 
markers_1072.bindPopup("Mayo Clinic Health System, Mankato").openPopup(); 

var circle_1072 = L.circle(coords_1072, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1073 = [ 38.994829917870725 , -94.55002220304183]; 
var markers_1073 = L.marker(coords_1073).addTo(map); 
markers_1073.bindPopup("Research Medical Center IVF Laboratory").openPopup(); 

var circle_1073 = L.circle(coords_1073, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1074 = [ 41.763299346804125 , -88.01539359319588]; 
var markers_1074 = L.marker(coords_1074).addTo(map); 
markers_1074.bindPopup("Fertility & Cryogenics Lab").openPopup(); 

var circle_1074 = L.circle(coords_1074, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1075 = [ 40.7127281 , -74.0060152]; 
var markers_1075 = L.marker(coords_1075).addTo(map); 
markers_1075.bindPopup("The Fertility Institutes, Jeffrey Steinberg, MD Incorporated").openPopup(); 

var circle_1075 = L.circle(coords_1075, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1076 = [ 41.76696927619604 , -88.16195085087516]; 
var markers_1076 = L.marker(coords_1076).addTo(map); 
markers_1076.bindPopup("Morris, Randy  MD  SC").openPopup(); 

var circle_1076 = L.circle(coords_1076, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1077 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_1077 = L.marker(coords_1077).addTo(map); 
markers_1077.bindPopup("ORM Fertility LLC").openPopup(); 

var circle_1077 = L.circle(coords_1077, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1078 = [ 21.29135410335196 , -157.82701256256982]; 
var markers_1078 = L.marker(coords_1078).addTo(map); 
markers_1078.bindPopup("Kapiolani Medical Center for Women and Children").openPopup(); 

var circle_1078 = L.circle(coords_1078, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1079 = [ 39.6336935 , -84.1867387]; 
var markers_1079 = L.marker(coords_1079).addTo(map); 
markers_1079.bindPopup("SpringCreek Fertility").openPopup(); 

var circle_1079 = L.circle(coords_1079, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1080 = [ 39.93923706523605 , -86.12972437124463]; 
var markers_1080 = L.marker(coords_1080).addTo(map); 
markers_1080.bindPopup("Center For Reproductive Biology Of Indiana, LLC").openPopup(); 

var circle_1080 = L.circle(coords_1080, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1081 = [ 39.7683331 , -86.1583502]; 
var markers_1081 = L.marker(coords_1081).addTo(map); 
markers_1081.bindPopup("Advanced Fertility Group, P.C.").openPopup(); 

var circle_1081 = L.circle(coords_1081, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1082 = [ 40.8579293 , -74.0816693]; 
var markers_1082 = L.marker(coords_1082).addTo(map); 
markers_1082.bindPopup("University Reproductive Associates, P.C.").openPopup(); 

var circle_1082 = L.circle(coords_1082, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1083 = [ 40.65413813005952 , -74.002208804375]; 
var markers_1083 = L.marker(coords_1083).addTo(map); 
markers_1083.bindPopup("StemCure,  Inc.").openPopup(); 

var circle_1083 = L.circle(coords_1083, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1084 = [ 41.944883609143965 , -88.09290696614786]; 
var markers_1084 = L.marker(coords_1084).addTo(map); 
markers_1084.bindPopup("Reproductive Medicine Institute").openPopup(); 

var circle_1084 = L.circle(coords_1084, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1085 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_1085 = L.marker(coords_1085).addTo(map); 
markers_1085.bindPopup("Creative Testing Solutions").openPopup(); 

var circle_1085 = L.circle(coords_1085, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1086 = [ 40.05147048135593 , -83.0194845031477]; 
var markers_1086 = L.marker(coords_1086).addTo(map); 
markers_1086.bindPopup("Reproductive Diagnostics Inc").openPopup(); 

var circle_1086 = L.circle(coords_1086, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1087 = [ 38.9742502 , -94.6851702]; 
var markers_1087 = L.marker(coords_1087).addTo(map); 
markers_1087.bindPopup("Reproductive Resource Cntr of Greater KC, LLC").openPopup(); 

var circle_1087 = L.circle(coords_1087, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1088 = [ 38.92983965 , -94.65276942068084]; 
var markers_1088 = L.marker(coords_1088).addTo(map); 
markers_1088.bindPopup("KUPI Reproductive Endocrinology & Infertility Lab").openPopup(); 

var circle_1088 = L.circle(coords_1088, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1089 = [ 18.2345399 , -66.0351316]; 
var markers_1089 = L.marker(coords_1089).addTo(map); 
markers_1089.bindPopup("Clinica de Fertlidad HIMA San Pablo Caguas").openPopup(); 

var circle_1089 = L.circle(coords_1089, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1090 = [ 30.01008236650173 , -90.1621700612062]; 
var markers_1090 = L.marker(coords_1090).addTo(map); 
markers_1090.bindPopup("telaGen, LLC").openPopup(); 

var circle_1090 = L.circle(coords_1090, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1091 = [ 27.9320968 , -81.9841166]; 
var markers_1091 = L.marker(coords_1091).addTo(map); 
markers_1091.bindPopup("Sterigenics U.S. LLC").openPopup(); 

var circle_1091 = L.circle(coords_1091, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1092 = [ 33.5206824 , -86.8024326]; 
var markers_1092 = L.marker(coords_1092).addTo(map); 
markers_1092.bindPopup("Regenerative Biologics").openPopup(); 

var circle_1092 = L.circle(coords_1092, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1093 = [ 39.84710685949821 , -86.38776558494624]; 
var markers_1093 = L.marker(coords_1093).addTo(map); 
markers_1093.bindPopup("BHC, LLC").openPopup(); 

var circle_1093 = L.circle(coords_1093, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1094 = [ 39.74571575670103 , -104.83800912371132]; 
var markers_1094 = L.marker(coords_1094).addTo(map); 
markers_1094.bindPopup("Rocky Mountain Lions Eye Bank").openPopup(); 

var circle_1094 = L.circle(coords_1094, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1095 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_1095 = L.marker(coords_1095).addTo(map); 
markers_1095.bindPopup("Birth Tissue Recovery LLC").openPopup(); 

var circle_1095 = L.circle(coords_1095, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1096 = [ 32.729904709205776 , -97.32030240577618]; 
var markers_1096 = L.marker(coords_1096).addTo(map); 
markers_1096.bindPopup("LifeGift Organ Donation Center - Fort Worth").openPopup(); 

var circle_1096 = L.circle(coords_1096, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1097 = [ 37.4201119 , -122.1499851]; 
var markers_1097 = L.marker(coords_1097).addTo(map); 
markers_1097.bindPopup("Stanford Blood Center").openPopup(); 

var circle_1097 = L.circle(coords_1097, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1098 = [ 32.828868722202486 , -96.84895223801064]; 
var markers_1098 = L.marker(coords_1098).addTo(map); 
markers_1098.bindPopup("Transplant Services Center UT Southwestern Medical Center").openPopup(); 

var circle_1098 = L.circle(coords_1098, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1099 = [ 38.6249976 , -121.32138]; 
var markers_1099 = L.marker(coords_1099).addTo(map); 
markers_1099.bindPopup("Mercy San Juan Medical Center").openPopup(); 

var circle_1099 = L.circle(coords_1099, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1100 = [ 33.50745099579832 , -86.80231119159664]; 
var markers_1100 = L.marker(coords_1100).addTo(map); 
markers_1100.bindPopup("University of Alabama at Birmingham Gamete Biology Lab").openPopup(); 

var circle_1100 = L.circle(coords_1100, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1101 = [ 36.1672559 , -115.148516]; 
var markers_1101 = L.marker(coords_1101).addTo(map); 
markers_1101.bindPopup("Red Rock Fertility Center").openPopup(); 

var circle_1101 = L.circle(coords_1101, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1102 = [ 39.29962642486814 , -76.6069346290877]; 
var markers_1102 = L.marker(coords_1102).addTo(map); 
markers_1102.bindPopup("Shady Grove Fertility Reproductive Science Ctr").openPopup(); 

var circle_1102 = L.circle(coords_1102, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1103 = [ 32.96447653250249 , -96.74092492662014]; 
var markers_1103 = L.marker(coords_1103).addTo(map); 
markers_1103.bindPopup("CPM Medical Consultants, LLC").openPopup(); 

var circle_1103 = L.circle(coords_1103, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1104 = [ 33.678814928479 , -117.7440965949406]; 
var markers_1104 = L.marker(coords_1104).addTo(map); 
markers_1104.bindPopup("Interpore Cross International, LLC").openPopup(); 

var circle_1104 = L.circle(coords_1104, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1105 = [ 29.52334760497667 , -98.59272306656298]; 
var markers_1105 = L.marker(coords_1105).addTo(map); 
markers_1105.bindPopup("San Antonio Eye Bank / CorneaGen - San Antonio").openPopup(); 

var circle_1105 = L.circle(coords_1105, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1106 = [ 36.31506226802395 , -82.38285468047904]; 
var markers_1106 = L.marker(coords_1106).addTo(map); 
markers_1106.bindPopup("Quillen Fertility And Women's Services").openPopup(); 

var circle_1106 = L.circle(coords_1106, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1107 = [ 41.88685470780488 , -87.64793630146342]; 
var markers_1107 = L.marker(coords_1107).addTo(map); 
markers_1107.bindPopup("Eversight Illinois (Chicago)").openPopup(); 

var circle_1107 = L.circle(coords_1107, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1108 = [ 30.01008236650173 , -90.1621700612062]; 
var markers_1108 = L.marker(coords_1108).addTo(map); 
markers_1108.bindPopup("telaGen, LLC").openPopup(); 

var circle_1108 = L.circle(coords_1108, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1109 = [ 38.93973767625571 , -77.08686526149164]; 
var markers_1109 = L.marker(coords_1109).addTo(map); 
markers_1109.bindPopup("Shady Grove Fertility Reproductive Science Center").openPopup(); 

var circle_1109 = L.circle(coords_1109, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1110 = [ 36.145952468263474 , -115.28714001317366]; 
var markers_1110 = L.marker(coords_1110).addTo(map); 
markers_1110.bindPopup("Fertility Center of Las Vegas, Shapiro MD PLLC").openPopup(); 

var circle_1110 = L.circle(coords_1110, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1111 = [ 30.683802186534656 , -88.06057528019802]; 
var markers_1111 = L.marker(coords_1111).addTo(map); 
markers_1111.bindPopup("Alabama Eye Bank Southwest Regional Office").openPopup(); 

var circle_1111 = L.circle(coords_1111, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1112 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_1112 = L.marker(coords_1112).addTo(map); 
markers_1112.bindPopup("Birth Tissue Recovery LLC").openPopup(); 

var circle_1112 = L.circle(coords_1112, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1113 = [ 33.9934867 , -81.0739826]; 
var markers_1113 = L.marker(coords_1113).addTo(map); 
markers_1113.bindPopup("Piedmont Reproductive Endocrinology Group, PA").openPopup(); 

var circle_1113 = L.circle(coords_1113, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1114 = [ 39.96403466330049 , -75.1472920864532]; 
var markers_1114 = L.marker(coords_1114).addTo(map); 
markers_1114.bindPopup("Lions Eye Bank of Delaware Valley, Inc.").openPopup(); 

var circle_1114 = L.circle(coords_1114, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1115 = [ 42.55481163071719 , -83.11740726373478]; 
var markers_1115 = L.marker(coords_1115).addTo(map); 
markers_1115.bindPopup("Pinnacle, Inc").openPopup(); 

var circle_1115 = L.circle(coords_1115, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1116 = [ 39.05802827898663 , -94.59339390310848]; 
var markers_1116 = L.marker(coords_1116).addTo(map); 
markers_1116.bindPopup("Community Blood Center Of Gtr KC").openPopup(); 

var circle_1116 = L.circle(coords_1116, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1117 = [ 42.67789470539624 , -73.8297262525607]; 
var markers_1117 = L.marker(coords_1117).addTo(map); 
markers_1117.bindPopup("Sight Society Of Northeastern New York, Inc.").openPopup(); 

var circle_1117 = L.circle(coords_1117, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1118 = [ 29.7827179 , -95.5568654]; 
var markers_1118 = L.marker(coords_1118).addTo(map); 
markers_1118.bindPopup("CCRM Houston").openPopup(); 

var circle_1118 = L.circle(coords_1118, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1119 = [ 30.347109392405063 , -97.76595100423565]; 
var markers_1119 = L.marker(coords_1119).addTo(map); 
markers_1119.bindPopup("Vaughn, Silverberg and Associates, LLP").openPopup(); 

var circle_1119 = L.circle(coords_1119, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1120 = [ 26.7006023 , -81.2127996]; 
var markers_1120 = L.marker(coords_1120).addTo(map); 
markers_1120.bindPopup("University of South Florida Morsani College of Medicine").openPopup(); 

var circle_1120 = L.circle(coords_1120, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1121 = [ 38.77777106105699 , -90.6234853572461]; 
var markers_1121 = L.marker(coords_1121).addTo(map); 
markers_1121.bindPopup("American Red Cross Blood Services").openPopup(); 

var circle_1121 = L.circle(coords_1121, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1122 = [ 33.9419393 , -118.43808037530732]; 
var markers_1122 = L.marker(coords_1122).addTo(map); 
markers_1122.bindPopup("California Fertility Clinics LLC").openPopup(); 

var circle_1122 = L.circle(coords_1122, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1123 = [ 38.77777106105699 , -90.6234853572461]; 
var markers_1123 = L.marker(coords_1123).addTo(map); 
markers_1123.bindPopup("American Red Cross Blood Services").openPopup(); 

var circle_1123 = L.circle(coords_1123, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1124 = [ 33.901155376788324 , -117.89900589934308]; 
var markers_1124 = L.marker(coords_1124).addTo(map); 
markers_1124.bindPopup("Huntington Reproductive Center Medical Group").openPopup(); 

var circle_1124 = L.circle(coords_1124, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1125 = [ 37.96312578209877 , -87.522989395679]; 
var markers_1125 = L.marker(coords_1125).addTo(map); 
markers_1125.bindPopup("Advanced Reproduction Institute, LLC").openPopup(); 

var circle_1125 = L.circle(coords_1125, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1126 = [ 33.7110934 , -117.7939237]; 
var markers_1126 = L.marker(coords_1126).addTo(map); 
markers_1126.bindPopup("Yale Center For Reproductive Medicine & Infertility").openPopup(); 

var circle_1126 = L.circle(coords_1126, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1127 = [ 40.7890821 , -111.9867396]; 
var markers_1127 = L.marker(coords_1127).addTo(map); 
markers_1127.bindPopup("Utah Lions Eye Bank").openPopup(); 

var circle_1127 = L.circle(coords_1127, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1128 = [ 42.00552476293532 , -87.73067043606966]; 
var markers_1128 = L.marker(coords_1128).addTo(map); 
markers_1128.bindPopup("Advanced Reproductive Health Centers, Ltd").openPopup(); 

var circle_1128 = L.circle(coords_1128, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1129 = [ 41.49217494675214 , -87.0397742011966]; 
var markers_1129 = L.marker(coords_1129).addTo(map); 
markers_1129.bindPopup("Advanced Reproductive Health Centers LTD, Chicago IVF").openPopup(); 

var circle_1129 = L.circle(coords_1129, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1130 = [ 43.587533024484735 , -116.22715413036784]; 
var markers_1130 = L.marker(coords_1130).addTo(map); 
markers_1130.bindPopup("Smart Surgical, Inc").openPopup(); 

var circle_1130 = L.circle(coords_1130, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1131 = [ 39.2558999576 , -94.6878334706]; 
var markers_1131 = L.marker(coords_1131).addTo(map); 
markers_1131.bindPopup("Saving Sight").openPopup(); 

var circle_1131 = L.circle(coords_1131, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1132 = [ 39.77866911724138 , -86.15427117860501]; 
var markers_1132 = L.marker(coords_1132).addTo(map); 
markers_1132.bindPopup("Cook General BioTechnology, LLC").openPopup(); 

var circle_1132 = L.circle(coords_1132, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1133 = [ -26.7982582 , -55.0228553]; 
var markers_1133 = L.marker(coords_1133).addTo(map); 
markers_1133.bindPopup("American National Red Cross").openPopup(); 

var circle_1133 = L.circle(coords_1133, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1134 = [ 33.9419393 , -118.43808037530732]; 
var markers_1134 = L.marker(coords_1134).addTo(map); 
markers_1134.bindPopup("Pacific Fertility Center - Los Angeles").openPopup(); 

var circle_1134 = L.circle(coords_1134, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1135 = [ 33.9419393 , -118.43808037530732]; 
var markers_1135 = L.marker(coords_1135).addTo(map); 
markers_1135.bindPopup("Regents of the University of California on behalf of UCLA Fertility and Reproductive Health Center").openPopup(); 

var circle_1135 = L.circle(coords_1135, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1136 = [ 47.81006361826394 , -122.34235542373332]; 
var markers_1136 = L.marker(coords_1136).addTo(map); 
markers_1136.bindPopup("LifeCenter Northwest").openPopup(); 

var circle_1136 = L.circle(coords_1136, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1137 = [ 33.9934867 , -81.0739826]; 
var markers_1137 = L.marker(coords_1137).addTo(map); 
markers_1137.bindPopup("We Are Sharing Hope SC").openPopup(); 

var circle_1137 = L.circle(coords_1137, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1138 = [ 42.46155279606189 , -83.38984773052039]; 
var markers_1138 = L.marker(coords_1138).addTo(map); 
markers_1138.bindPopup("Wright Medical Technology Inc - District Service Center - Detroit").openPopup(); 

var circle_1138 = L.circle(coords_1138, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1139 = [ 35.349542150000005 , -80.86434492512674]; 
var markers_1139 = L.marker(coords_1139).addTo(map); 
markers_1139.bindPopup("Advanced Reproductive Concepts, Pllc").openPopup(); 

var circle_1139 = L.circle(coords_1139, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1140 = [ 30.3158148121673 , -95.44939947794676]; 
var markers_1140 = L.marker(coords_1140).addTo(map); 
markers_1140.bindPopup("Lance Ellis").openPopup(); 

var circle_1140 = L.circle(coords_1140, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1141 = [ 37.65911038502994 , -122.42159101257484]; 
var markers_1141 = L.marker(coords_1141).addTo(map); 
markers_1141.bindPopup("CorneaGen, Inc.").openPopup(); 

var circle_1141 = L.circle(coords_1141, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1142 = [ 38.37196702719595 , -81.62867212398648]; 
var markers_1142 = L.marker(coords_1142).addTo(map); 
markers_1142.bindPopup("Charleston Area Medical Center, Fertility Center").openPopup(); 

var circle_1142 = L.circle(coords_1142, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1143 = [ 38.31840617916667 , -81.58961626904762]; 
var markers_1143 = L.marker(coords_1143).addTo(map); 
markers_1143.bindPopup("Medical Eye Bank of West Virginia").openPopup(); 

var circle_1143 = L.circle(coords_1143, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1144 = [ 30.16070606839623 , -92.02720628742138]; 
var markers_1144 = L.marker(coords_1144).addTo(map); 
markers_1144.bindPopup("Louisiana IVF Laboratories LLC").openPopup(); 

var circle_1144 = L.circle(coords_1144, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1145 = [ 42.963107794251336 , -85.6616826855615]; 
var markers_1145 = L.marker(coords_1145).addTo(map); 
markers_1145.bindPopup("Mercy Health St. Mary's").openPopup(); 

var circle_1145 = L.circle(coords_1145, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1146 = [ 29.690817975551468 , -95.42766034779412]; 
var markers_1146 = L.marker(coords_1146).addTo(map); 
markers_1146.bindPopup("Biograft Transplant Services Inc").openPopup(); 

var circle_1146 = L.circle(coords_1146, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1147 = [ 40.57191675555556 , -111.8896127148148]; 
var markers_1147 = L.marker(coords_1147).addTo(map); 
markers_1147.bindPopup("Active Medical").openPopup(); 

var circle_1147 = L.circle(coords_1147, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1148 = [ 32.9423594810582 , -97.14871645301588]; 
var markers_1148 = L.marker(coords_1148).addTo(map); 
markers_1148.bindPopup("United States Global Partners").openPopup(); 

var circle_1148 = L.circle(coords_1148, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1149 = [ 39.2558999576 , -94.6878334706]; 
var markers_1149 = L.marker(coords_1149).addTo(map); 
markers_1149.bindPopup("Saving Sight").openPopup(); 

var circle_1149 = L.circle(coords_1149, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1150 = [ 41.57021304285714 , -88.12518455714286]; 
var markers_1150 = L.marker(coords_1150).addTo(map); 
markers_1150.bindPopup("VIOS").openPopup(); 

var circle_1150 = L.circle(coords_1150, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1151 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_1151 = L.marker(coords_1151).addTo(map); 
markers_1151.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_1151 = L.circle(coords_1151, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1152 = [ 35.0814362122294 , -89.84902053880452]; 
var markers_1152 = L.marker(coords_1152).addTo(map); 
markers_1152.bindPopup("UT Regional One Reproductive Medicine").openPopup(); 

var circle_1152 = L.circle(coords_1152, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1153 = [ 30.17566195 , -97.81575095089984]; 
var markers_1153 = L.marker(coords_1153).addTo(map); 
markers_1153.bindPopup("Bioeden Inc").openPopup(); 

var circle_1153 = L.circle(coords_1153, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1154 = [ 35.21287095 , -106.71324849574629]; 
var markers_1154 = L.marker(coords_1154).addTo(map); 
markers_1154.bindPopup("OCO Biomedical, Inc.").openPopup(); 

var circle_1154 = L.circle(coords_1154, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1155 = [ 29.459650123665483 , -98.56912534448398]; 
var markers_1155 = L.marker(coords_1155).addTo(map); 
markers_1155.bindPopup("Operative Innovations, LLC").openPopup(); 

var circle_1155 = L.circle(coords_1155, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1156 = [ 35.02536101968348 , -85.14826657299703]; 
var markers_1156 = L.marker(coords_1156).addTo(map); 
markers_1156.bindPopup("Fertility Center LLC").openPopup(); 

var circle_1156 = L.circle(coords_1156, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1157 = [ 39.7611625542517 , -84.18467071972789]; 
var markers_1157 = L.marker(coords_1157).addTo(map); 
markers_1157.bindPopup("AxoGen Corporation").openPopup(); 

var circle_1157 = L.circle(coords_1157, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1158 = [ 40.64817853311828 , -75.37578331838709]; 
var markers_1158 = L.marker(coords_1158).addTo(map); 
markers_1158.bindPopup("Family Fertility Center").openPopup(); 

var circle_1158 = L.circle(coords_1158, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1159 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_1159 = L.marker(coords_1159).addTo(map); 
markers_1159.bindPopup("San Antonio IVF").openPopup(); 

var circle_1159 = L.circle(coords_1159, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1160 = [ 41.80921335733333 , -88.016243889]; 
var markers_1160 = L.marker(coords_1160).addTo(map); 
markers_1160.bindPopup("International Egg Bank").openPopup(); 

var circle_1160 = L.circle(coords_1160, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1161 = [ 38.029306 , -78.4766781]; 
var markers_1161 = L.marker(coords_1161).addTo(map); 
markers_1161.bindPopup("Virginia Fertility & IVF").openPopup(); 

var circle_1161 = L.circle(coords_1161, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1162 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1162 = L.marker(coords_1162).addTo(map); 
markers_1162.bindPopup("DCI Donor Services/dba Tennessee Donor Services").openPopup(); 

var circle_1162 = L.circle(coords_1162, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1163 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1163 = L.marker(coords_1163).addTo(map); 
markers_1163.bindPopup("DCI Donor Services dba Sierra Donor Services Eye Bank").openPopup(); 

var circle_1163 = L.circle(coords_1163, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1164 = [ 33.03849155019701 , -96.80893476367218]; 
var markers_1164 = L.marker(coords_1164).addTo(map); 
markers_1164.bindPopup("SOLCO BIOMEDICAL CORPORATION").openPopup(); 

var circle_1164 = L.circle(coords_1164, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1165 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_1165 = L.marker(coords_1165).addTo(map); 
markers_1165.bindPopup("Rush Center for Advanced Reproductive Care").openPopup(); 

var circle_1165 = L.circle(coords_1165, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1166 = [ 39.61454596474986 , -104.87864046135712]; 
var markers_1166 = L.marker(coords_1166).addTo(map); 
markers_1166.bindPopup("Statline").openPopup(); 

var circle_1166 = L.circle(coords_1166, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1167 = [ 29.705316533084577 , -95.40499932139303]; 
var markers_1167 = L.marker(coords_1167).addTo(map); 
markers_1167.bindPopup("Aspire Fertility").openPopup(); 

var circle_1167 = L.circle(coords_1167, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1168 = [ 34.01513631568627 , -118.49496511078432]; 
var markers_1168 = L.marker(coords_1168).addTo(map); 
markers_1168.bindPopup("Younique Surgical Center and Medical Spa").openPopup(); 

var circle_1168 = L.circle(coords_1168, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1169 = [ 36.017023274320884 , -78.95891160610759]; 
var markers_1169 = L.marker(coords_1169).addTo(map); 
markers_1169.bindPopup("Carolinas Cord Blood Bank").openPopup(); 

var circle_1169 = L.circle(coords_1169, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1170 = [ 33.901155376788324 , -117.89900589934308]; 
var markers_1170 = L.marker(coords_1170).addTo(map); 
markers_1170.bindPopup("Huntington Reproductive Center Medical Group").openPopup(); 

var circle_1170 = L.circle(coords_1170, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1171 = [ 32.94910312882562 , -96.84216764590748]; 
var markers_1171 = L.marker(coords_1171).addTo(map); 
markers_1171.bindPopup("CTL Medical Corporation").openPopup(); 

var circle_1171 = L.circle(coords_1171, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1172 = [ 39.88697809999999 , -105.07348773668832]; 
var markers_1172 = L.marker(coords_1172).addTo(map); 
markers_1172.bindPopup("Zimmer Biomet Spine Inc.").openPopup(); 

var circle_1172 = L.circle(coords_1172, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1173 = [ 39.8512162 , -74.9619779]; 
var markers_1173 = L.marker(coords_1173).addTo(map); 
markers_1173.bindPopup("Dr. Louis R. Manara").openPopup(); 

var circle_1173 = L.circle(coords_1173, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1174 = [ 40.57191675555556 , -111.8896127148148]; 
var markers_1174 = L.marker(coords_1174).addTo(map); 
markers_1174.bindPopup("Utah Cord Bank LLC").openPopup(); 

var circle_1174 = L.circle(coords_1174, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1175 = [ 43.12243111153846 , -77.62517771923078]; 
var markers_1175 = L.marker(coords_1175).addTo(map); 
markers_1175.bindPopup("University of Rochester - Strong Memorial Hospital").openPopup(); 

var circle_1175 = L.circle(coords_1175, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1176 = [ 30.542704884012824 , -97.898026458612]; 
var markers_1176 = L.marker(coords_1176).addTo(map); 
markers_1176.bindPopup("Parametrics Medical, LLC").openPopup(); 

var circle_1176 = L.circle(coords_1176, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1177 = [ 33.738159994745544 , -117.81673662977528]; 
var markers_1177 = L.marker(coords_1177).addTo(map); 
markers_1177.bindPopup("Sperm Bank, Inc. (dba) Fertility Center of California").openPopup(); 

var circle_1177 = L.circle(coords_1177, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1178 = [ 38.255537450000006 , -85.6644510572572]; 
var markers_1178 = L.marker(coords_1178).addTo(map); 
markers_1178.bindPopup("Louisville Reproductive Center").openPopup(); 

var circle_1178 = L.circle(coords_1178, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1179 = [ 33.15459300100365 , -117.33109556872265]; 
var markers_1179 = L.marker(coords_1179).addTo(map); 
markers_1179.bindPopup("California Transplant Services Inc").openPopup(); 

var circle_1179 = L.circle(coords_1179, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1180 = [ 33.15459300100365 , -117.33109556872265]; 
var markers_1180 = L.marker(coords_1180).addTo(map); 
markers_1180.bindPopup("Advanced Biologics LLC").openPopup(); 

var circle_1180 = L.circle(coords_1180, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1181 = [ 43.11370735 , -77.67223448331175]; 
var markers_1181 = L.marker(coords_1181).addTo(map); 
markers_1181.bindPopup("Rochester Fertility Care, P.C.").openPopup(); 

var circle_1181 = L.circle(coords_1181, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1182 = [ 33.46517612241029 , -111.99424646939742]; 
var markers_1182 = L.marker(coords_1182).addTo(map); 
markers_1182.bindPopup("Smart Health Inc. (dba) SmartPractice").openPopup(); 

var circle_1182 = L.circle(coords_1182, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1183 = [ 40.3337038 , -75.9474322]; 
var markers_1183 = L.marker(coords_1183).addTo(map); 
markers_1183.bindPopup("Advanced Fertility & Reproductive Medicine, THMG").openPopup(); 

var circle_1183 = L.circle(coords_1183, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1184 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_1184 = L.marker(coords_1184).addTo(map); 
markers_1184.bindPopup("Women's Health Consultants").openPopup(); 

var circle_1184 = L.circle(coords_1184, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1185 = [ 42.380063 , -76.643085]; 
var markers_1185 = L.marker(coords_1185).addTo(map); 
markers_1185.bindPopup("CT Fertility, PC").openPopup(); 

var circle_1185 = L.circle(coords_1185, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1186 = [ 32.94625240772878 , -117.2119045168421]; 
var markers_1186 = L.marker(coords_1186).addTo(map); 
markers_1186.bindPopup("San Diego Fertility Center, Medical Group Inc").openPopup(); 

var circle_1186 = L.circle(coords_1186, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1187 = [ 37.72833463739496 , -97.23095917941176]; 
var markers_1187 = L.marker(coords_1187).addTo(map); 
markers_1187.bindPopup("Heartland Pathology Diagnostics, LLC").openPopup(); 

var circle_1187 = L.circle(coords_1187, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1188 = [ 37.453773920165744 , -122.18075532983424]; 
var markers_1188 = L.marker(coords_1188).addTo(map); 
markers_1188.bindPopup("CCRM San Francisco").openPopup(); 

var circle_1188 = L.circle(coords_1188, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1189 = [ 26.2522898 , -80.21121231219807]; 
var markers_1189 = L.marker(coords_1189).addTo(map); 
markers_1189.bindPopup("IVF Florida Reproductive Associates").openPopup(); 

var circle_1189 = L.circle(coords_1189, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1190 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_1190 = L.marker(coords_1190).addTo(map); 
markers_1190.bindPopup("Six Medical Solutions, LLC").openPopup(); 

var circle_1190 = L.circle(coords_1190, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1191 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_1191 = L.marker(coords_1191).addTo(map); 
markers_1191.bindPopup("Creative Testing Solutions").openPopup(); 

var circle_1191 = L.circle(coords_1191, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1192 = [ 42.559425018769225 , -83.75895890753846]; 
var markers_1192 = L.marker(coords_1192).addTo(map); 
markers_1192.bindPopup("Gago Center for Fertility/Gago IVF").openPopup(); 

var circle_1192 = L.circle(coords_1192, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1193 = [ 38.55060536868009 , -90.37890392013422]; 
var markers_1193 = L.marker(coords_1193).addTo(map); 
markers_1193.bindPopup("Versari Global Health Partners, LLC").openPopup(); 

var circle_1193 = L.circle(coords_1193, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1194 = [ -26.7982582 , -55.0228553]; 
var markers_1194 = L.marker(coords_1194).addTo(map); 
markers_1194.bindPopup("Banco Vida Corp.").openPopup(); 

var circle_1194 = L.circle(coords_1194, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1195 = [ 41.662399640845074 , -91.54362736197184]; 
var markers_1195 = L.marker(coords_1195).addTo(map); 
markers_1195.bindPopup("University Of Iowa Hospitals & Clinics").openPopup(); 

var circle_1195 = L.circle(coords_1195, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1196 = [ 36.74169479485294 , -119.7272202639706]; 
var markers_1196 = L.marker(coords_1196).addTo(map); 
markers_1196.bindPopup("Stem Cell Life Connect").openPopup(); 

var circle_1196 = L.circle(coords_1196, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1197 = [ 36.15629765 , -115.22797910962709]; 
var markers_1197 = L.marker(coords_1197).addTo(map); 
markers_1197.bindPopup("Global Orthopedic, LLC").openPopup(); 

var circle_1197 = L.circle(coords_1197, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1198 = [ 36.145726550000006 , -115.11214270714208]; 
var markers_1198 = L.marker(coords_1198).addTo(map); 
markers_1198.bindPopup("Goode Surgical Inc.").openPopup(); 

var circle_1198 = L.circle(coords_1198, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1199 = [ 33.7489924 , -84.3902644]; 
var markers_1199 = L.marker(coords_1199).addTo(map); 
markers_1199.bindPopup("Children's Healthcare of Atlanta at Scottish Rite").openPopup(); 

var circle_1199 = L.circle(coords_1199, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1200 = [ 42.963107794251336 , -85.6616826855615]; 
var markers_1200 = L.marker(coords_1200).addTo(map); 
markers_1200.bindPopup("Birth Tissue Recovery, LLC").openPopup(); 

var circle_1200 = L.circle(coords_1200, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1201 = [ 41.25524825 , -96.02839560611709]; 
var markers_1201 = L.marker(coords_1201).addTo(map); 
markers_1201.bindPopup("Heartland Center for Reproductive Medicine, PC").openPopup(); 

var circle_1201 = L.circle(coords_1201, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1202 = [ 36.145726550000006 , -115.11214270714208]; 
var markers_1202 = L.marker(coords_1202).addTo(map); 
markers_1202.bindPopup("Saura Medical, LLC").openPopup(); 

var circle_1202 = L.circle(coords_1202, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1203 = [ 38.89635379206349 , -77.04772952261905]; 
var markers_1203 = L.marker(coords_1203).addTo(map); 
markers_1203.bindPopup("The George Washington University Medical Faculty Associates Fertility and IVF Center").openPopup(); 

var circle_1203 = L.circle(coords_1203, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1204 = [ 32.492487847368416 , -93.7689694754386]; 
var markers_1204 = L.marker(coords_1204).addTo(map); 
markers_1204.bindPopup("ARK-LA-TEX Fertility and Reproductive Medicine, PMC").openPopup(); 

var circle_1204 = L.circle(coords_1204, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1205 = [ 32.492487847368416 , -93.7689694754386]; 
var markers_1205 = L.marker(coords_1205).addTo(map); 
markers_1205.bindPopup("E & A Labs and Imaging, LLC").openPopup(); 

var circle_1205 = L.circle(coords_1205, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1206 = [ 33.678814928479 , -117.7440965949406]; 
var markers_1206 = L.marker(coords_1206).addTo(map); 
markers_1206.bindPopup("IsoTis OrthoBiologics, Inc.").openPopup(); 

var circle_1206 = L.circle(coords_1206, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1207 = [ 38.93973767625571 , -77.08686526149164]; 
var markers_1207 = L.marker(coords_1207).addTo(map); 
markers_1207.bindPopup("Shady Grove Fertility Reproductive Science Center").openPopup(); 

var circle_1207 = L.circle(coords_1207, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1208 = [ 42.4250964 , -71.066163]; 
var markers_1208 = L.marker(coords_1208).addTo(map); 
markers_1208.bindPopup("SpineFrontier, Inc.").openPopup(); 

var circle_1208 = L.circle(coords_1208, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1209 = [ 36.145726550000006 , -115.11214270714208]; 
var markers_1209 = L.marker(coords_1209).addTo(map); 
markers_1209.bindPopup("Invictus Management Consulting Services, Inc.").openPopup(); 

var circle_1209 = L.circle(coords_1209, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1210 = [ 29.558978040268457 , -95.26293384]; 
var markers_1210 = L.marker(coords_1210).addTo(map); 
markers_1210.bindPopup("Texas Donor Services, Inc").openPopup(); 

var circle_1210 = L.circle(coords_1210, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1211 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_1211 = L.marker(coords_1211).addTo(map); 
markers_1211.bindPopup("University of Illinois at Chicago Andrology Laboratory").openPopup(); 

var circle_1211 = L.circle(coords_1211, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1212 = [ 38.93973767625571 , -77.08686526149164]; 
var markers_1212 = L.marker(coords_1212).addTo(map); 
markers_1212.bindPopup("Shady Grove Fertility Reproductive Science Center").openPopup(); 

var circle_1212 = L.circle(coords_1212, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1213 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_1213 = L.marker(coords_1213).addTo(map); 
markers_1213.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_1213 = L.circle(coords_1213, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1214 = [ 32.874784571842106 , -79.80218064789474]; 
var markers_1214 = L.marker(coords_1214).addTo(map); 
markers_1214.bindPopup("Roper St Francis  Mount Pleasant Hospital").openPopup(); 

var circle_1214 = L.circle(coords_1214, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1215 = [ 26.4614625 , -80.0728201]; 
var markers_1215 = L.marker(coords_1215).addTo(map); 
markers_1215.bindPopup("OneBlood, Inc.").openPopup(); 

var circle_1215 = L.circle(coords_1215, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1216 = [ 33.678814928479 , -117.7440965949406]; 
var markers_1216 = L.marker(coords_1216).addTo(map); 
markers_1216.bindPopup("Werlin, Lawrence, MD, Inc").openPopup(); 

var circle_1216 = L.circle(coords_1216, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1217 = [ 44.97594155841584 , -93.26015967920792]; 
var markers_1217 = L.marker(coords_1217).addTo(map); 
markers_1217.bindPopup("Fortus Medical, Inc").openPopup(); 

var circle_1217 = L.circle(coords_1217, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1218 = [ 40.73742573614622 , -111.82743401380252]; 
var markers_1218 = L.marker(coords_1218).addTo(map); 
markers_1218.bindPopup("University of Utah Cell Therapy and Regnerative Medicine").openPopup(); 

var circle_1218 = L.circle(coords_1218, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1219 = [ 36.06391108983254 , -80.30756845538278]; 
var markers_1219 = L.marker(coords_1219).addTo(map); 
markers_1219.bindPopup("Plakous Therapeutics, Inc").openPopup(); 

var circle_1219 = L.circle(coords_1219, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1220 = [ 47.60163620134367 , -122.32916850108528]; 
var markers_1220 = L.marker(coords_1220).addTo(map); 
markers_1220.bindPopup("Pacific Northwest Fertility and IVF Specialists, I , PLLC").openPopup(); 

var circle_1220 = L.circle(coords_1220, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1221 = [ 37.7710534490566 , -122.390341845283]; 
var markers_1221 = L.marker(coords_1221).addTo(map); 
markers_1221.bindPopup("UCSF Center for Reproductive Health").openPopup(); 

var circle_1221 = L.circle(coords_1221, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1222 = [ 33.83767711775 , -117.876661840375]; 
var markers_1222 = L.marker(coords_1222).addTo(map); 
markers_1222.bindPopup("ModernOrtho LLC").openPopup(); 

var circle_1222 = L.circle(coords_1222, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1223 = [ 29.541636225 , -98.49767410917086]; 
var markers_1223 = L.marker(coords_1223).addTo(map); 
markers_1223.bindPopup("General Orthopedics Inc").openPopup(); 

var circle_1223 = L.circle(coords_1223, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1224 = [ 33.700546398900855 , -117.802475449989]; 
var markers_1224 = L.marker(coords_1224).addTo(map); 
markers_1224.bindPopup("Fertility Center of Orange County, A Medical Group Inc.").openPopup(); 

var circle_1224 = L.circle(coords_1224, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1225 = [ 41.76696927619604 , -88.16195085087516]; 
var markers_1225 = L.marker(coords_1225).addTo(map); 
markers_1225.bindPopup("Advanced Institute Charles E. Miller and Associate").openPopup(); 

var circle_1225 = L.circle(coords_1225, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1226 = [ 31.7808952992126 , -106.37572841023622]; 
var markers_1226 = L.marker(coords_1226).addTo(map); 
markers_1226.bindPopup("Southwest Transplant Alliance").openPopup(); 

var circle_1226 = L.circle(coords_1226, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1227 = [ 39.74571575670103 , -104.83800912371132]; 
var markers_1227 = L.marker(coords_1227).addTo(map); 
markers_1227.bindPopup("Advanced Reproductive Medicine - University of Colorado Hospital").openPopup(); 

var circle_1227 = L.circle(coords_1227, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1228 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_1228 = L.marker(coords_1228).addTo(map); 
markers_1228.bindPopup("Gulf Coast Regional Blood Center").openPopup(); 

var circle_1228 = L.circle(coords_1228, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1229 = [ 32.798991548961034 , -117.13656408233769]; 
var markers_1229 = L.marker(coords_1229).addTo(map); 
markers_1229.bindPopup("San Diego Eye Bank").openPopup(); 

var circle_1229 = L.circle(coords_1229, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1230 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_1230 = L.marker(coords_1230).addTo(map); 
markers_1230.bindPopup("University of Illinois @Chicago In Vitro Fertilization Progr").openPopup(); 

var circle_1230 = L.circle(coords_1230, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1231 = [ 40.9256538 , -73.140943]; 
var markers_1231 = L.marker(coords_1231).addTo(map); 
markers_1231.bindPopup("NYU Langone Reproductive Specialists of New York").openPopup(); 

var circle_1231 = L.circle(coords_1231, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1232 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_1232 = L.marker(coords_1232).addTo(map); 
markers_1232.bindPopup("Medinc of Texas, LP").openPopup(); 

var circle_1232 = L.circle(coords_1232, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1233 = [ 44.4761601 , -73.212906]; 
var markers_1233 = L.marker(coords_1233).addTo(map); 
markers_1233.bindPopup("Vermont Center for Reproductive Medicine").openPopup(); 

var circle_1233 = L.circle(coords_1233, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1234 = [ 33.678814928479 , -117.7440965949406]; 
var markers_1234 = L.marker(coords_1234).addTo(map); 
markers_1234.bindPopup("Lin, James P MD Inc").openPopup(); 

var circle_1234 = L.circle(coords_1234, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1235 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_1235 = L.marker(coords_1235).addTo(map); 
markers_1235.bindPopup("University of Texas MD Anderson Cancer Center").openPopup(); 

var circle_1235 = L.circle(coords_1235, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1236 = [ 26.09247153278856 , -80.17770026741573]; 
var markers_1236 = L.marker(coords_1236).addTo(map); 
markers_1236.bindPopup("Unilab of Dade").openPopup(); 

var circle_1236 = L.circle(coords_1236, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1237 = [ 30.29209155560946 , -97.7390149515464]; 
var markers_1237 = L.marker(coords_1237).addTo(map); 
markers_1237.bindPopup("Fairfax Cryobank, Inc.").openPopup(); 

var circle_1237 = L.circle(coords_1237, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1238 = [ 14.2861921 , 120.909613]; 
var markers_1238 = L.marker(coords_1238).addTo(map); 
markers_1238.bindPopup("South Florida Institute for Reproductive Medicine/IVFMD").openPopup(); 

var circle_1238 = L.circle(coords_1238, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1239 = [ 27.73235523325124 , -97.41695344162562]; 
var markers_1239 = L.marker(coords_1239).addTo(map); 
markers_1239.bindPopup("Talecris Plasma Resources, Inc.").openPopup(); 

var circle_1239 = L.circle(coords_1239, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1240 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_1240 = L.marker(coords_1240).addTo(map); 
markers_1240.bindPopup("Seattle Reproductive Medicine, Inc., P.S.").openPopup(); 

var circle_1240 = L.circle(coords_1240, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1241 = [ -38.2421068 , -57.7887512]; 
var markers_1241 = L.marker(coords_1241).addTo(map); 
markers_1241.bindPopup("Kimera Labs Inc").openPopup(); 

var circle_1241 = L.circle(coords_1241, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1242 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_1242 = L.marker(coords_1242).addTo(map); 
markers_1242.bindPopup("Spectrum Medical Solutions, LLC").openPopup(); 

var circle_1242 = L.circle(coords_1242, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1243 = [ 47.62570301102088 , -122.20307285533644]; 
var markers_1243 = L.marker(coords_1243).addTo(map); 
markers_1243.bindPopup("Seattle Reproductive Medicine, Inc., P.S.").openPopup(); 

var circle_1243 = L.circle(coords_1243, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1244 = [ 39.27821717318768 , -76.7420666717799]; 
var markers_1244 = L.marker(coords_1244).addTo(map); 
markers_1244.bindPopup("CorneaGen").openPopup(); 

var circle_1244 = L.circle(coords_1244, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1245 = [ 38.87866007676191 , -77.38773794914286]; 
var markers_1245 = L.marker(coords_1245).addTo(map); 
markers_1245.bindPopup("Shady Grove Fertility").openPopup(); 

var circle_1245 = L.circle(coords_1245, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1246 = [ 31.7808952992126 , -106.37572841023622]; 
var markers_1246 = L.marker(coords_1246).addTo(map); 
markers_1246.bindPopup("Southwest Transplant Alliance").openPopup(); 

var circle_1246 = L.circle(coords_1246, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1247 = [ 30.226918480052493 , -93.2052328156168]; 
var markers_1247 = L.marker(coords_1247).addTo(map); 
markers_1247.bindPopup("LifeShare Blood Centers").openPopup(); 

var circle_1247 = L.circle(coords_1247, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1248 = [ 40.79510870417591 , -73.68814144537387]; 
var markers_1248 = L.marker(coords_1248).addTo(map); 
markers_1248.bindPopup("Northwell Health Fertility").openPopup(); 

var circle_1248 = L.circle(coords_1248, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1249 = [ 26.40798749570957 , -80.0874489191419]; 
var markers_1249 = L.marker(coords_1249).addTo(map); 
markers_1249.bindPopup("AGORA Health Solutions, LLC").openPopup(); 

var circle_1249 = L.circle(coords_1249, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1250 = [ 40.8220442 , -74.448765]; 
var markers_1250 = L.marker(coords_1250).addTo(map); 
markers_1250.bindPopup("Legacy Orthopedics, Inc.").openPopup(); 

var circle_1250 = L.circle(coords_1250, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1251 = [ 38.61510521666667 , -121.5029759]; 
var markers_1251 = L.marker(coords_1251).addTo(map); 
markers_1251.bindPopup("California IVF Fertility Center").openPopup(); 

var circle_1251 = L.circle(coords_1251, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1252 = [ 33.689283151867535 , -117.78781192520792]; 
var markers_1252 = L.marker(coords_1252).addTo(map); 
markers_1252.bindPopup("Fertility Center of Southern California").openPopup(); 

var circle_1252 = L.circle(coords_1252, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1253 = [ 44.9497487 , -93.0931028]; 
var markers_1253 = L.marker(coords_1253).addTo(map); 
markers_1253.bindPopup("Lifestor Cordblood Services").openPopup(); 

var circle_1253 = L.circle(coords_1253, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1254 = [ 26.4614625 , -80.0728201]; 
var markers_1254 = L.marker(coords_1254).addTo(map); 
markers_1254.bindPopup("OneBlood, Inc.").openPopup(); 

var circle_1254 = L.circle(coords_1254, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1255 = [ 45.5400696 , -122.6282258]; 
var markers_1255 = L.marker(coords_1255).addTo(map); 
markers_1255.bindPopup("Oregon Fertility Institute, LLC").openPopup(); 

var circle_1255 = L.circle(coords_1255, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1256 = [ 41.568090263320464 , -90.53785695135136]; 
var markers_1256 = L.marker(coords_1256).addTo(map); 
markers_1256.bindPopup("ImpactLife").openPopup(); 

var circle_1256 = L.circle(coords_1256, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1257 = [ 28.707721141666667 , -81.34616879907408]; 
var markers_1257 = L.marker(coords_1257).addTo(map); 
markers_1257.bindPopup("Fertility Center of Orlando").openPopup(); 

var circle_1257 = L.circle(coords_1257, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1258 = [ 33.7489924 , -84.3902644]; 
var markers_1258 = L.marker(coords_1258).addTo(map); 
markers_1258.bindPopup("Georgia Eye Bank, Inc.").openPopup(); 

var circle_1258 = L.circle(coords_1258, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1259 = [ 32.94625240772878 , -117.2119045168421]; 
var markers_1259 = L.marker(coords_1259).addTo(map); 
markers_1259.bindPopup("Reproductive Sciences Medical Center, Inc.").openPopup(); 

var circle_1259 = L.circle(coords_1259, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1260 = [ 47.1995303 , -65.205763]; 
var markers_1260 = L.marker(coords_1260).addTo(map); 
markers_1260.bindPopup("Robert Wood Johnson University Hospital").openPopup(); 

var circle_1260 = L.circle(coords_1260, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1261 = [ 29.68291520408805 , -95.50341949606918]; 
var markers_1261 = L.marker(coords_1261).addTo(map); 
markers_1261.bindPopup("Surgical Spectrum, LLC").openPopup(); 

var circle_1261 = L.circle(coords_1261, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1262 = [ 36.1672559 , -115.148516]; 
var markers_1262 = L.marker(coords_1262).addTo(map); 
markers_1262.bindPopup("Implant Direct Sybron International, LLC").openPopup(); 

var circle_1262 = L.circle(coords_1262, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1263 = [ 33.88073601841341 , -117.74294676955034]; 
var markers_1263 = L.marker(coords_1263).addTo(map); 
markers_1263.bindPopup("Nobel Biocare Usa Llc").openPopup(); 

var circle_1263 = L.circle(coords_1263, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1264 = [ 40.9796683 , -74.1194403]; 
var markers_1264 = L.marker(coords_1264).addTo(map); 
markers_1264.bindPopup("The Valley Hospital Microbiology Laboratory").openPopup(); 

var circle_1264 = L.circle(coords_1264, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1265 = [ 38.994829917870725 , -94.55002220304183]; 
var markers_1265 = L.marker(coords_1265).addTo(map); 
markers_1265.bindPopup("Midwest Women's Healthcare Specialists").openPopup(); 

var circle_1265 = L.circle(coords_1265, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1266 = [ 37.79403314908486 , -122.42043294475872]; 
var markers_1266 = L.marker(coords_1266).addTo(map); 
markers_1266.bindPopup("Laurel Fertility Care, A Professional Medical Corporation").openPopup(); 

var circle_1266 = L.circle(coords_1266, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1267 = [ 29.58871988166432 , -98.47291482919604]; 
var markers_1267 = L.marker(coords_1267).addTo(map); 
markers_1267.bindPopup("Stability Biologics LLC").openPopup(); 

var circle_1267 = L.circle(coords_1267, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1268 = [ 33.6703799791889 , -112.10563846353864]; 
var markers_1268 = L.marker(coords_1268).addTo(map); 
markers_1268.bindPopup("Resilience, LLC").openPopup(); 

var circle_1268 = L.circle(coords_1268, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1269 = [ 34.52997385574425 , -82.6316744045954]; 
var markers_1269 = L.marker(coords_1269).addTo(map); 
markers_1269.bindPopup("AnMed Health").openPopup(); 

var circle_1269 = L.circle(coords_1269, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1270 = [ 42.47878124210526 , -83.2851276835314]; 
var markers_1270 = L.marker(coords_1270).addTo(map); 
markers_1270.bindPopup("Vios Fertility Institute - Southfield").openPopup(); 

var circle_1270 = L.circle(coords_1270, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1271 = [ 47.0487959 , -122.9010134]; 
var markers_1271 = L.marker(coords_1271).addTo(map); 
markers_1271.bindPopup("Olympia Women's Health").openPopup(); 

var circle_1271 = L.circle(coords_1271, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1272 = [ 33.9419393 , -118.43808037530732]; 
var markers_1272 = L.marker(coords_1272).addTo(map); 
markers_1272.bindPopup("LAIVF Clinic").openPopup(); 

var circle_1272 = L.circle(coords_1272, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1273 = [ 42.04717111713147 , -88.04776288565736]; 
var markers_1273 = L.marker(coords_1273).addTo(map); 
markers_1273.bindPopup("Wright Medical Technology Inc, District Service Center-Chica").openPopup(); 

var circle_1273 = L.circle(coords_1273, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1274 = [ 55.8609825 , -4.2488787]; 
var markers_1274 = L.marker(coords_1274).addTo(map); 
markers_1274.bindPopup("Sartorius Stedim Biooutsource Limited").openPopup(); 

var circle_1274 = L.circle(coords_1274, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1275 = [ 42.12642578790732 , -87.84284784250544]; 
var markers_1275 = L.marker(coords_1275).addTo(map); 
markers_1275.bindPopup("Reproductive Genetics Institute, Inc.").openPopup(); 

var circle_1275 = L.circle(coords_1275, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1276 = [ 29.50626249341317 , -98.5683992]; 
var markers_1276 = L.marker(coords_1276).addTo(map); 
markers_1276.bindPopup("UT Health San Antonio Reproductive Health and Fertility Center").openPopup(); 

var circle_1276 = L.circle(coords_1276, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1277 = [ 29.46533808780488 , -98.52518571788616]; 
var markers_1277 = L.marker(coords_1277).addTo(map); 
markers_1277.bindPopup("United Tissue Resources LLC").openPopup(); 

var circle_1277 = L.circle(coords_1277, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1278 = [ 47.60163620134367 , -122.32916850108528]; 
var markers_1278 = L.marker(coords_1278).addTo(map); 
markers_1278.bindPopup("Bloodworks").openPopup(); 

var circle_1278 = L.circle(coords_1278, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1279 = [ 40.9074237 , -74.1183543]; 
var markers_1279 = L.marker(coords_1279).addTo(map); 
markers_1279.bindPopup("BioReference Health, LLC").openPopup(); 

var circle_1279 = L.circle(coords_1279, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1280 = [ 40.4416941 , -79.9900861]; 
var markers_1280 = L.marker(coords_1280).addTo(map); 
markers_1280.bindPopup("Center for Fertility and Reproductive Endocrinology UPP").openPopup(); 

var circle_1280 = L.circle(coords_1280, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1281 = [ 42.28093605517662 , -89.01771854397076]; 
var markers_1281 = L.marker(coords_1281).addTo(map); 
markers_1281.bindPopup("Reproductive Solutions LLC").openPopup(); 

var circle_1281 = L.circle(coords_1281, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1282 = [ 36.04946819927972 , -95.81619586344536]; 
var markers_1282 = L.marker(coords_1282).addTo(map); 
markers_1282.bindPopup("Life Biologics and Tissue LLC").openPopup(); 

var circle_1282 = L.circle(coords_1282, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1283 = [ 40.1278839 , -75.4318532]; 
var markers_1283 = L.marker(coords_1283).addTo(map); 
markers_1283.bindPopup("Globus Medical, Inc.").openPopup(); 

var circle_1283 = L.circle(coords_1283, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1284 = [ 41.25575094705882 , -95.97619887058823]; 
var markers_1284 = L.marker(coords_1284).addTo(map); 
markers_1284.bindPopup("The Nebraska Medical Center").openPopup(); 

var circle_1284 = L.circle(coords_1284, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1285 = [ 34.095031326635024 , -118.3997237263713]; 
var markers_1285 = L.marker(coords_1285).addTo(map); 
markers_1285.bindPopup("Southern California Reproductive Center").openPopup(); 

var circle_1285 = L.circle(coords_1285, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1286 = [ 35.340260697979794 , -119.05687612929296]; 
var markers_1286 = L.marker(coords_1286).addTo(map); 
markers_1286.bindPopup("Onelegacy").openPopup(); 

var circle_1286 = L.circle(coords_1286, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1287 = [ 32.9216165752 , -96.96499905216]; 
var markers_1287 = L.marker(coords_1287).addTo(map); 
markers_1287.bindPopup("The Burkhart Dental Supply Co.").openPopup(); 

var circle_1287 = L.circle(coords_1287, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1288 = [ 37.25742850689738 , -121.9218908262244]; 
var markers_1288 = L.marker(coords_1288).addTo(map); 
markers_1288.bindPopup("PAMF Fertility Physicians of Northern California").openPopup(); 

var circle_1288 = L.circle(coords_1288, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1289 = [ 35.25730307617801 , -120.647199443089]; 
var markers_1289 = L.marker(coords_1289).addTo(map); 
markers_1289.bindPopup("Fziomed Inc").openPopup(); 

var circle_1289 = L.circle(coords_1289, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1290 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_1290 = L.marker(coords_1290).addTo(map); 
markers_1290.bindPopup("UTHealth Medical School The Evelyn H Griffin Stem Cell Thera").openPopup(); 

var circle_1290 = L.circle(coords_1290, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1291 = [ 29.70943453414044 , -82.38956563486683]; 
var markers_1291 = L.marker(coords_1291).addTo(map); 
markers_1291.bindPopup("Regenerative Biologics Inc.").openPopup(); 

var circle_1291 = L.circle(coords_1291, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1292 = [ 33.15459300100365 , -117.33109556872265]; 
var markers_1292 = L.marker(coords_1292).addTo(map); 
markers_1292.bindPopup("Implant Innovations, LLC").openPopup(); 

var circle_1292 = L.circle(coords_1292, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1293 = [ 26.1129437059376 , -80.38263356707058]; 
var markers_1293 = L.marker(coords_1293).addTo(map); 
markers_1293.bindPopup("Florida Institute for Reproductive Sciences and Technologies").openPopup(); 

var circle_1293 = L.circle(coords_1293, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1294 = [ 34.11084542539267 , -118.1484414670157]; 
var markers_1294 = L.marker(coords_1294).addTo(map); 
markers_1294.bindPopup("Del Mar Birth Center, Inc., a Nursing corporation").openPopup(); 

var circle_1294 = L.circle(coords_1294, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1295 = [ 32.8746026608 , -96.7646495584]; 
var markers_1295 = L.marker(coords_1295).addTo(map); 
markers_1295.bindPopup("Eurofins Donor & Product Testing Inc Dallas").openPopup(); 

var circle_1295 = L.circle(coords_1295, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1296 = [ 29.41255592152588 , -98.63381435749318]; 
var markers_1296 = L.marker(coords_1296).addTo(map); 
markers_1296.bindPopup("Tissue Transplant Technology, Ltd. d/b/a Bone Bank Allografts").openPopup(); 

var circle_1296 = L.circle(coords_1296, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1297 = [ 33.6703799791889 , -112.10563846353864]; 
var markers_1297 = L.marker(coords_1297).addTo(map); 
markers_1297.bindPopup("Pinnacle Transplant Technologics, LLC").openPopup(); 

var circle_1297 = L.circle(coords_1297, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1298 = [ 32.96447653250249 , -96.74092492662014]; 
var markers_1298 = L.marker(coords_1298).addTo(map); 
markers_1298.bindPopup("Modal Manufacturing, LLC").openPopup(); 

var circle_1298 = L.circle(coords_1298, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1299 = [ 33.6703799791889 , -112.10563846353864]; 
var markers_1299 = L.marker(coords_1299).addTo(map); 
markers_1299.bindPopup("Axolotl Biologix, Inc.").openPopup(); 

var circle_1299 = L.circle(coords_1299, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1300 = [ 31.0751162 , -97.3608969]; 
var markers_1300 = L.marker(coords_1300).addTo(map); 
markers_1300.bindPopup("Scott & White Memorial Hospital Andrology Laboratory").openPopup(); 

var circle_1300 = L.circle(coords_1300, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1301 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_1301 = L.marker(coords_1301).addTo(map); 
markers_1301.bindPopup("Southwest Ortho Solutions Inc.").openPopup(); 

var circle_1301 = L.circle(coords_1301, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1302 = [ 36.59711416992619 , -121.88517037250922]; 
var markers_1302 = L.marker(coords_1302).addTo(map); 
markers_1302.bindPopup("Central Coast Multispecialty Medical Group, Inc.").openPopup(); 

var circle_1302 = L.circle(coords_1302, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1303 = [ 42.60202517655556 , -82.94658736622223]; 
var markers_1303 = L.marker(coords_1303).addTo(map); 
markers_1303.bindPopup("Michigan Comprehensive Fertility Center, LLC").openPopup(); 

var circle_1303 = L.circle(coords_1303, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1304 = [ 29.70943453414044 , -82.38956563486683]; 
var markers_1304 = L.marker(coords_1304).addTo(map); 
markers_1304.bindPopup("Exactech, Inc.").openPopup(); 

var circle_1304 = L.circle(coords_1304, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1305 = [ 33.47548803874598 , -82.0094166755627]; 
var markers_1305 = L.marker(coords_1305).addTo(map); 
markers_1305.bindPopup("Walter L. Shepeard Community Blood Center, Inc.").openPopup(); 

var circle_1305 = L.circle(coords_1305, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1306 = [ 36.1525973864486 , -115.125175667757]; 
var markers_1306 = L.marker(coords_1306).addTo(map); 
markers_1306.bindPopup("Nevada Donor Network Inc").openPopup(); 

var circle_1306 = L.circle(coords_1306, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1307 = [ 34.13735423686534 , -117.96854243642385]; 
var markers_1307 = L.marker(coords_1307).addTo(map); 
markers_1307.bindPopup("City Of Hope National Medical Center").openPopup(); 

var circle_1307 = L.circle(coords_1307, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1308 = [ 41.568090263320464 , -90.53785695135136]; 
var markers_1308 = L.marker(coords_1308).addTo(map); 
markers_1308.bindPopup("ImpactLife").openPopup(); 

var circle_1308 = L.circle(coords_1308, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1309 = [ 37.85555323859649 , -122.26061287192984]; 
var markers_1309 = L.marker(coords_1309).addTo(map); 
markers_1309.bindPopup("Alta Bates IVF Program").openPopup(); 

var circle_1309 = L.circle(coords_1309, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1310 = [ 33.65113400306122 , -81.62040445204082]; 
var markers_1310 = L.marker(coords_1310).addTo(map); 
markers_1310.bindPopup("Crestview Pharma, LLC").openPopup(); 

var circle_1310 = L.circle(coords_1310, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1311 = [ 43.04296005250501 , -76.14987731563126]; 
var markers_1311 = L.marker(coords_1311).addTo(map); 
markers_1311.bindPopup("Central New York  Eye & Tissue Bank").openPopup(); 

var circle_1311 = L.circle(coords_1311, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1312 = [ 42.55481163071719 , -83.11740726373478]; 
var markers_1312 = L.marker(coords_1312).addTo(map); 
markers_1312.bindPopup("Healthsource Surgical Supply Inc.").openPopup(); 

var circle_1312 = L.circle(coords_1312, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1313 = [ 36.091526 , -79.3641862]; 
var markers_1313 = L.marker(coords_1313).addTo(map); 
markers_1313.bindPopup("Sterigenics US, LLC").openPopup(); 

var circle_1313 = L.circle(coords_1313, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1314 = [ 33.13941946434245 , -96.84132154060018]; 
var markers_1314 = L.marker(coords_1314).addTo(map); 
markers_1314.bindPopup("Dallas IVF").openPopup(); 

var circle_1314 = L.circle(coords_1314, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1315 = [ 38.74787810900901 , -121.30880982252252]; 
var markers_1315 = L.marker(coords_1315).addTo(map); 
markers_1315.bindPopup("OrthoSport Surgical Inc.").openPopup(); 

var circle_1315 = L.circle(coords_1315, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1316 = [ 31.784754828125 , -106.368544471875]; 
var markers_1316 = L.marker(coords_1316).addTo(map); 
markers_1316.bindPopup("Momentum Orthopaedic Solutions").openPopup(); 

var circle_1316 = L.circle(coords_1316, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1317 = [ 42.03981885213483 , -87.73509260434457]; 
var markers_1317 = L.marker(coords_1317).addTo(map); 
markers_1317.bindPopup("North Shore Fertility, SC").openPopup(); 

var circle_1317 = L.circle(coords_1317, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1318 = [ 30.28448062403688 , -81.58140083435016]; 
var markers_1318 = L.marker(coords_1318).addTo(map); 
markers_1318.bindPopup("Legacy Donor Services Foundation").openPopup(); 

var circle_1318 = L.circle(coords_1318, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1319 = [ 42.04794216707317 , -88.10813221829268]; 
var markers_1319 = L.marker(coords_1319).addTo(map); 
markers_1319.bindPopup("Karande & Associates, S.C.").openPopup(); 

var circle_1319 = L.circle(coords_1319, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1320 = [ 37.495498 , -77.568434]; 
var markers_1320 = L.marker(coords_1320).addTo(map); 
markers_1320.bindPopup("Old Dominion Eye Foundation, Inc.").openPopup(); 

var circle_1320 = L.circle(coords_1320, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1321 = [ 41.55793470368217 , -87.50499914534883]; 
var markers_1321 = L.marker(coords_1321).addTo(map); 
markers_1321.bindPopup("Midwest Fertility Center, Corp.").openPopup(); 

var circle_1321 = L.circle(coords_1321, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1322 = [ 41.58734406461539 , -93.62113737869824]; 
var markers_1322 = L.marker(coords_1322).addTo(map); 
markers_1322.bindPopup("Central Iowa Health System").openPopup(); 

var circle_1322 = L.circle(coords_1322, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1323 = [ 42.9509042 , -78.7343332]; 
var markers_1323 = L.marker(coords_1323).addTo(map); 
markers_1323.bindPopup("CNY Fertility Center").openPopup(); 

var circle_1323 = L.circle(coords_1323, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1324 = [ 36.145561894081 , -95.9893091906542]; 
var markers_1324 = L.marker(coords_1324).addTo(map); 
markers_1324.bindPopup("Tulsa Fertility Center, P.C.").openPopup(); 

var circle_1324 = L.circle(coords_1324, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1325 = [ 37.36299917814208 , -122.09386143551912]; 
var markers_1325 = L.marker(coords_1325).addTo(map); 
markers_1325.bindPopup("Los Altos Surgery Center").openPopup(); 

var circle_1325 = L.circle(coords_1325, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1326 = [ 39.287691706140464 , -76.55808906476697]; 
var markers_1326 = L.marker(coords_1326).addTo(map); 
markers_1326.bindPopup("Eye Life International Inc").openPopup(); 

var circle_1326 = L.circle(coords_1326, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1327 = [ 32.93014229932146 , -97.0959688173876]; 
var markers_1327 = L.marker(coords_1327).addTo(map); 
markers_1327.bindPopup("GraftSource, LLC").openPopup(); 

var circle_1327 = L.circle(coords_1327, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1328 = [ 33.15459300100365 , -117.33109556872265]; 
var markers_1328 = L.marker(coords_1328).addTo(map); 
markers_1328.bindPopup("Center for Advanced Genetics").openPopup(); 

var circle_1328 = L.circle(coords_1328, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1329 = [ 40.1996931 , -75.4779074]; 
var markers_1329 = L.marker(coords_1329).addTo(map); 
markers_1329.bindPopup("Allied Orthopedic Associates, Inc.").openPopup(); 

var circle_1329 = L.circle(coords_1329, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1330 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_1330 = L.marker(coords_1330).addTo(map); 
markers_1330.bindPopup("Creative Testing Solutions").openPopup(); 

var circle_1330 = L.circle(coords_1330, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1331 = [ 41.87737588980447 , -87.65242968156424]; 
var markers_1331 = L.marker(coords_1331).addTo(map); 
markers_1331.bindPopup("University of Chicago Hospitals").openPopup(); 

var circle_1331 = L.circle(coords_1331, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1332 = [ 35.4732339903125 , -97.5016976615625]; 
var markers_1332 = L.marker(coords_1332).addTo(map); 
markers_1332.bindPopup("Oklahoma Blood Institute").openPopup(); 

var circle_1332 = L.circle(coords_1332, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1333 = [ 41.568090263320464 , -90.53785695135136]; 
var markers_1333 = L.marker(coords_1333).addTo(map); 
markers_1333.bindPopup("Midwest Regional Blood Testing Services LLC").openPopup(); 

var circle_1333 = L.circle(coords_1333, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1334 = [ 42.67789470539624 , -73.8297262525607]; 
var markers_1334 = L.marker(coords_1334).addTo(map); 
markers_1334.bindPopup("Musculoskeletal Transplant Foundation - TSAB").openPopup(); 

var circle_1334 = L.circle(coords_1334, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1335 = [ 40.18519729571183 , -75.4559203432247]; 
var markers_1335 = L.marker(coords_1335).addTo(map); 
markers_1335.bindPopup("Elite Spine LLC").openPopup(); 

var circle_1335 = L.circle(coords_1335, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1336 = [ 35.2115703490566 , -80.83959222853774]; 
var markers_1336 = L.marker(coords_1336).addTo(map); 
markers_1336.bindPopup("Carolinas Medical Center - Women's Institute").openPopup(); 

var circle_1336 = L.circle(coords_1336, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1337 = [ 33.583800090620485 , -85.10128363116883]; 
var markers_1337 = L.marker(coords_1337).addTo(map); 
markers_1337.bindPopup("Tanner Medical Center Blood Bank").openPopup(); 

var circle_1337 = L.circle(coords_1337, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1338 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_1338 = L.marker(coords_1338).addTo(map); 
markers_1338.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_1338 = L.circle(coords_1338, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1339 = [ 35.349542150000005 , -80.86434492512674]; 
var markers_1339 = L.marker(coords_1339).addTo(map); 
markers_1339.bindPopup("Reproductive Endocrinology Associates of Charlotte").openPopup(); 

var circle_1339 = L.circle(coords_1339, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1340 = [ 40.70131537869023 , -73.9182558089397]; 
var markers_1340 = L.marker(coords_1340).addTo(map); 
markers_1340.bindPopup("Regenerative Biologics Inc").openPopup(); 

var circle_1340 = L.circle(coords_1340, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1341 = [ 30.46878694862444 , -84.23723493429303]; 
var markers_1341 = L.marker(coords_1341).addTo(map); 
markers_1341.bindPopup("Synergy Biologics, LLC").openPopup(); 

var circle_1341 = L.circle(coords_1341, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1342 = [ 30.46878694862444 , -84.23723493429303]; 
var markers_1342 = L.marker(coords_1342).addTo(map); 
markers_1342.bindPopup("IntegoGen, LLC").openPopup(); 

var circle_1342 = L.circle(coords_1342, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1343 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_1343 = L.marker(coords_1343).addTo(map); 
markers_1343.bindPopup("Microvascular Tissue, Inc").openPopup(); 

var circle_1343 = L.circle(coords_1343, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1344 = [ 42.08556499156442 , -87.82930938726994]; 
var markers_1344 = L.marker(coords_1344).addTo(map); 
markers_1344.bindPopup("Davies Fertility & IVF Specialists").openPopup(); 

var circle_1344 = L.circle(coords_1344, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1345 = [ 39.6616707 , -75.74889909109223]; 
var markers_1345 = L.marker(coords_1345).addTo(map); 
markers_1345.bindPopup("Delaware Institute for Reproductive Medicine, P.A").openPopup(); 

var circle_1345 = L.circle(coords_1345, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1346 = [ 41.8914113347826 , -87.63313371225296]; 
var markers_1346 = L.marker(coords_1346).addTo(map); 
markers_1346.bindPopup("Institute for Human Reproduction (IHR)").openPopup(); 

var circle_1346 = L.circle(coords_1346, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1347 = [ 40.7127281 , -74.0060152]; 
var markers_1347 = L.marker(coords_1347).addTo(map); 
markers_1347.bindPopup("Gramercy Fertility Services").openPopup(); 

var circle_1347 = L.circle(coords_1347, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1348 = [ 29.86004625 , -95.52377560625678]; 
var markers_1348 = L.marker(coords_1348).addTo(map); 
markers_1348.bindPopup("Catalyst Sales & Marketing, LLC").openPopup(); 

var circle_1348 = L.circle(coords_1348, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1349 = [ 40.0198335 , -75.3046299]; 
var markers_1349 = L.marker(coords_1349).addTo(map); 
markers_1349.bindPopup("Main Line Fertility Center").openPopup(); 

var circle_1349 = L.circle(coords_1349, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1350 = [ 26.71383221975684 , -80.092206643769]; 
var markers_1350 = L.marker(coords_1350).addTo(map); 
markers_1350.bindPopup("Academy Medical, LLC").openPopup(); 

var circle_1350 = L.circle(coords_1350, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1351 = [ 38.66403693554405 , -90.4484983195855]; 
var markers_1351 = L.marker(coords_1351).addTo(map); 
markers_1351.bindPopup("Center for Reproductive Medicine & Robotic Surgery LLC").openPopup(); 

var circle_1351 = L.circle(coords_1351, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1352 = [ -32.517366 , -54.5409821]; 
var markers_1352 = L.marker(coords_1352).addTo(map); 
markers_1352.bindPopup("VGI Medical, LLC").openPopup(); 

var circle_1352 = L.circle(coords_1352, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1353 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_1353 = L.marker(coords_1353).addTo(map); 
markers_1353.bindPopup("NuVasive Inc").openPopup(); 

var circle_1353 = L.circle(coords_1353, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1354 = [ 42.05649340092473 , -87.70037921097742]; 
var markers_1354 = L.marker(coords_1354).addTo(map); 
markers_1354.bindPopup("Evanston Hospital Blood Bank").openPopup(); 

var circle_1354 = L.circle(coords_1354, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1355 = [ 32.81875425337423 , -80.05368221411044]; 
var markers_1355 = L.marker(coords_1355).addTo(map); 
markers_1355.bindPopup("Bon Secours - St. Francis Hospital Blood Bank").openPopup(); 

var circle_1355 = L.circle(coords_1355, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1356 = [ 33.8507158909168 , -117.78464656682816]; 
var markers_1356 = L.marker(coords_1356).addTo(map); 
markers_1356.bindPopup("Sports Tek Medical, Inc.").openPopup(); 

var circle_1356 = L.circle(coords_1356, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1357 = [ 39.721103237919465 , -104.88453321308724]; 
var markers_1357 = L.marker(coords_1357).addTo(map); 
markers_1357.bindPopup("Donor Alliance, Inc.").openPopup(); 

var circle_1357 = L.circle(coords_1357, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1358 = [ 29.686878357391304 , -95.3834042547826]; 
var markers_1358 = L.marker(coords_1358).addTo(map); 
markers_1358.bindPopup("AlloSource").openPopup(); 

var circle_1358 = L.circle(coords_1358, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1359 = [ 39.0259287 , -77.41457886879164]; 
var markers_1359 = L.marker(coords_1359).addTo(map); 
markers_1359.bindPopup("Inova Health Care Services").openPopup(); 

var circle_1359 = L.circle(coords_1359, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1360 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_1360 = L.marker(coords_1360).addTo(map); 
markers_1360.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_1360 = L.circle(coords_1360, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1361 = [ 39.541827 , -104.84612446579108]; 
var markers_1361 = L.marker(coords_1361).addTo(map); 
markers_1361.bindPopup("AEGIS Spine, Inc.").openPopup(); 

var circle_1361 = L.circle(coords_1361, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1362 = [ 45.7758414652174 , -108.51247338623187]; 
var markers_1362 = L.marker(coords_1362).addTo(map); 
markers_1362.bindPopup("Billings Clinic Reproductive Medicine and Fertility Care").openPopup(); 

var circle_1362 = L.circle(coords_1362, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1363 = [ 29.560654021130954 , -95.10135229583334]; 
var markers_1363 = L.marker(coords_1363).addTo(map); 
markers_1363.bindPopup("Texas BioSurgical, LLC").openPopup(); 

var circle_1363 = L.circle(coords_1363, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1364 = [ 40.645979393627066 , -73.95502170322581]; 
var markers_1364 = L.marker(coords_1364).addTo(map); 
markers_1364.bindPopup("HEMOGENYX LLC").openPopup(); 

var circle_1364 = L.circle(coords_1364, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1365 = [ 39.743634509162895 , -105.20936063891402]; 
var markers_1365 = L.marker(coords_1365).addTo(map); 
markers_1365.bindPopup("Snoasis Medical, LLC").openPopup(); 

var circle_1365 = L.circle(coords_1365, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1366 = [ 33.370989709013095 , -111.8769156922793]; 
var markers_1366 = L.marker(coords_1366).addTo(map); 
markers_1366.bindPopup("Banner Desert Med Center And Cardon Children's Med Center").openPopup(); 

var circle_1366 = L.circle(coords_1366, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1367 = [ 28.5605451 , -81.37351174359483]; 
var markers_1367 = L.marker(coords_1367).addTo(map); 
markers_1367.bindPopup("Primary Health Care Associates").openPopup(); 

var circle_1367 = L.circle(coords_1367, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1368 = [ 46.74221457910448 , -117.16853164149254]; 
var markers_1368 = L.marker(coords_1368).addTo(map); 
markers_1368.bindPopup("CCB-NWC LLC").openPopup(); 

var circle_1368 = L.circle(coords_1368, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1369 = [ 39.9448402 , -75.1198911]; 
var markers_1369 = L.marker(coords_1369).addTo(map); 
markers_1369.bindPopup("Coriell Institue for Medical Research").openPopup(); 

var circle_1369 = L.circle(coords_1369, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1370 = [ 38.10688813529411 , -122.56221514117648]; 
var markers_1370 = L.marker(coords_1370).addTo(map); 
markers_1370.bindPopup("Lane, Danielle E MD").openPopup(); 

var circle_1370 = L.circle(coords_1370, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1371 = [ 33.48629325 , -86.78168366983525]; 
var markers_1371 = L.marker(coords_1371).addTo(map); 
markers_1371.bindPopup("Fusio Medical Devices, LLC").openPopup(); 

var circle_1371 = L.circle(coords_1371, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1372 = [ 29.68291520408805 , -95.50341949606918]; 
var markers_1372 = L.marker(coords_1372).addTo(map); 
markers_1372.bindPopup("Cooper Institute").openPopup(); 

var circle_1372 = L.circle(coords_1372, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1373 = [ 37.74635319615384 , -121.43338034230769]; 
var markers_1373 = L.marker(coords_1373).addTo(map); 
markers_1373.bindPopup("Innovative Biologics, LLC").openPopup(); 

var circle_1373 = L.circle(coords_1373, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1374 = [ 39.091220046581874 , -77.17062372615263]; 
var markers_1374 = L.marker(coords_1374).addTo(map); 
markers_1374.bindPopup("Fisher BioServices").openPopup(); 

var circle_1374 = L.circle(coords_1374, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1375 = [ 33.370989709013095 , -111.8769156922793]; 
var markers_1375 = L.marker(coords_1375).addTo(map); 
markers_1375.bindPopup("MacMedical Inc").openPopup(); 

var circle_1375 = L.circle(coords_1375, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1376 = [ 28.76679177783252 , -81.35391190837439]; 
var markers_1376 = L.marker(coords_1376).addTo(map); 
markers_1376.bindPopup("Fusion Innovations, LLC").openPopup(); 

var circle_1376 = L.circle(coords_1376, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1377 = [ 39.541827 , -104.84612446579108]; 
var markers_1377 = L.marker(coords_1377).addTo(map); 
markers_1377.bindPopup("Paragon 28, Inc.").openPopup(); 

var circle_1377 = L.circle(coords_1377, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1378 = [ 37.15965470737636 , -93.25538070259849]; 
var markers_1378 = L.marker(coords_1378).addTo(map); 
markers_1378.bindPopup("Amniogistic, LLC").openPopup(); 

var circle_1378 = L.circle(coords_1378, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1379 = [ 38.44065614659949 , -90.20298381813602]; 
var markers_1379 = L.marker(coords_1379).addTo(map); 
markers_1379.bindPopup("Yado Medical Inc").openPopup(); 

var circle_1379 = L.circle(coords_1379, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1380 = [ 33.9493537 , -117.63665556849082]; 
var markers_1380 = L.marker(coords_1380).addTo(map); 
markers_1380.bindPopup("Sterigenics U.S. LLC.").openPopup(); 

var circle_1380 = L.circle(coords_1380, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1381 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_1381 = L.marker(coords_1381).addTo(map); 
markers_1381.bindPopup("Boston IVF-The Arizona Center").openPopup(); 

var circle_1381 = L.circle(coords_1381, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1382 = [ 39.242555 , -76.5144808]; 
var markers_1382 = L.marker(coords_1382).addTo(map); 
markers_1382.bindPopup("Bay-Shore Surgical, LLC").openPopup(); 

var circle_1382 = L.circle(coords_1382, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1383 = [ 37.76185130645161 , -121.95824885591398]; 
var markers_1383 = L.marker(coords_1383).addTo(map); 
markers_1383.bindPopup("Eyvazzadeh, Aimee MD").openPopup(); 

var circle_1383 = L.circle(coords_1383, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1384 = [ 47.595682948275865 , -117.47499420689654]; 
var markers_1384 = L.marker(coords_1384).addTo(map); 
markers_1384.bindPopup("Robins, Edwin MD, PS").openPopup(); 

var circle_1384 = L.circle(coords_1384, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1385 = [ 45.10774755700935 , -93.37761894735203]; 
var markers_1385 = L.marker(coords_1385).addTo(map); 
markers_1385.bindPopup("Steris Laboratories").openPopup(); 

var circle_1385 = L.circle(coords_1385, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1386 = [ 39.1626298 , -76.6250756]; 
var markers_1386 = L.marker(coords_1386).addTo(map); 
markers_1386.bindPopup("Allied Orthopedic Associates Inc").openPopup(); 

var circle_1386 = L.circle(coords_1386, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1387 = [ 38.77777106105699 , -90.6234853572461]; 
var markers_1387 = L.marker(coords_1387).addTo(map); 
markers_1387.bindPopup("American Red Cross Blood Services").openPopup(); 

var circle_1387 = L.circle(coords_1387, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1388 = [ 33.94752237401676 , -83.4269433844278]; 
var markers_1388 = L.marker(coords_1388).addTo(map); 
markers_1388.bindPopup("Piedmont Athens Regional Medical Ctr").openPopup(); 

var circle_1388 = L.circle(coords_1388, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1389 = [ 33.15459300100365 , -117.33109556872265]; 
var markers_1389 = L.marker(coords_1389).addTo(map); 
markers_1389.bindPopup("Biologica Technologies, LLC").openPopup(); 

var circle_1389 = L.circle(coords_1389, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1390 = [ 36.091526 , -79.3641862]; 
var markers_1390 = L.marker(coords_1390).addTo(map); 
markers_1390.bindPopup("Sterigenics US, LLC").openPopup(); 

var circle_1390 = L.circle(coords_1390, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1391 = [ 41.0414858 , -74.129032]; 
var markers_1391 = L.marker(coords_1391).addTo(map); 
markers_1391.bindPopup("Bergen Comm Reg Blood Center").openPopup(); 

var circle_1391 = L.circle(coords_1391, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1392 = [ 42.008213546860986 , -87.88778736233185]; 
var markers_1392 = L.marker(coords_1392).addTo(map); 
markers_1392.bindPopup("ITxM Clinical Services").openPopup(); 

var circle_1392 = L.circle(coords_1392, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1393 = [ 35.21287095 , -106.71324849574629]; 
var markers_1393 = L.marker(coords_1393).addTo(map); 
markers_1393.bindPopup("Presbyterian Hospital Blood Bank").openPopup(); 

var circle_1393 = L.circle(coords_1393, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1394 = [ 41.49217494675214 , -87.0397742011966]; 
var markers_1394 = L.marker(coords_1394).addTo(map); 
markers_1394.bindPopup("Midwest Fertility Center Corp.").openPopup(); 

var circle_1394 = L.circle(coords_1394, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1395 = [ 28.03782717201448 , -82.39453225681545]; 
var markers_1395 = L.marker(coords_1395).addTo(map); 
markers_1395.bindPopup("RMG ART Laboratories, Inc.").openPopup(); 

var circle_1395 = L.circle(coords_1395, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1396 = [ 28.03782717201448 , -82.39453225681545]; 
var markers_1396 = L.marker(coords_1396).addTo(map); 
markers_1396.bindPopup("The Reproductive Medicine Group, P.A.").openPopup(); 

var circle_1396 = L.circle(coords_1396, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1397 = [ 41.78690242773613 , -87.59713344797602]; 
var markers_1397 = L.marker(coords_1397).addTo(map); 
markers_1397.bindPopup("University Of Chicago").openPopup(); 

var circle_1397 = L.circle(coords_1397, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1398 = [ 36.1672559 , -115.148516]; 
var markers_1398 = L.marker(coords_1398).addTo(map); 
markers_1398.bindPopup("Orion Ortho").openPopup(); 

var circle_1398 = L.circle(coords_1398, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1399 = [ 36.19486059310345 , -115.2546443827586]; 
var markers_1399 = L.marker(coords_1399).addTo(map); 
markers_1399.bindPopup("Trilogy Medical Partners").openPopup(); 

var circle_1399 = L.circle(coords_1399, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1400 = [ 41.0120268 , -73.7962904]; 
var markers_1400 = L.marker(coords_1400).addTo(map); 
markers_1400.bindPopup("Montefiore's Institute for Reproductive Medicine and Health").openPopup(); 

var circle_1400 = L.circle(coords_1400, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1401 = [ 32.809955980046404 , -96.81320394709977]; 
var markers_1401 = L.marker(coords_1401).addTo(map); 
markers_1401.bindPopup("Tissue  Specialists").openPopup(); 

var circle_1401 = L.circle(coords_1401, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1402 = [ 29.56857722407504 , -98.61441590932778]; 
var markers_1402 = L.marker(coords_1402).addTo(map); 
markers_1402.bindPopup("Dorotea LLC dba BioRepository Service LLC").openPopup(); 

var circle_1402 = L.circle(coords_1402, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1403 = [ 32.24649813703704 , -110.89184459629628]; 
var markers_1403 = L.marker(coords_1403).addTo(map); 
markers_1403.bindPopup("Arizona Center for Reproductive Endocrinology & Infertility").openPopup(); 

var circle_1403 = L.circle(coords_1403, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1404 = [ 33.601489650000005 , -111.8493395463428]; 
var markers_1404 = L.marker(coords_1404).addTo(map); 
markers_1404.bindPopup("Applied Biologics LLC").openPopup(); 

var circle_1404 = L.circle(coords_1404, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1405 = [ 35.21287095 , -106.71324849574629]; 
var markers_1405 = L.marker(coords_1405).addTo(map); 
markers_1405.bindPopup("TriCore Reference Laboratories").openPopup(); 

var circle_1405 = L.circle(coords_1405, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1406 = [ 36.03841094722222 , -115.09534201666668]; 
var markers_1406 = L.marker(coords_1406).addTo(map); 
markers_1406.bindPopup("Green Valley Fertility Partners").openPopup(); 

var circle_1406 = L.circle(coords_1406, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1407 = [ 61.1796582 , -149.971867]; 
var markers_1407 = L.marker(coords_1407).addTo(map); 
markers_1407.bindPopup("Life Alaska Donor Services").openPopup(); 

var circle_1407 = L.circle(coords_1407, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1408 = [ 33.44382792610939 , -111.92852831635706]; 
var markers_1408 = L.marker(coords_1408).addTo(map); 
markers_1408.bindPopup("Wright Medical Technology, Inc - District Service Center- Phoenix").openPopup(); 

var circle_1408 = L.circle(coords_1408, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1409 = [ 44.964763467870725 , -93.19558401539923]; 
var markers_1409 = L.marker(coords_1409).addTo(map); 
markers_1409.bindPopup("New York Blood Center Inc").openPopup(); 

var circle_1409 = L.circle(coords_1409, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1410 = [ 40.6959334 , -75.0101715]; 
var markers_1410 = L.marker(coords_1410).addTo(map); 
markers_1410.bindPopup("IntegraMed Medical New Jersey, LLC").openPopup(); 

var circle_1410 = L.circle(coords_1410, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1411 = [ 33.9412127 , -84.2135309]; 
var markers_1411 = L.marker(coords_1411).addTo(map); 
markers_1411.bindPopup("Zimmer Biomet Atlanta").openPopup(); 

var circle_1411 = L.circle(coords_1411, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1412 = [ 37.213697 , -121.9821641]; 
var markers_1412 = L.marker(coords_1412).addTo(map); 
markers_1412.bindPopup("National Ambulatory Surgery Center").openPopup(); 

var circle_1412 = L.circle(coords_1412, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1413 = [ 42.235359 , -71.826098]; 
var markers_1413 = L.marker(coords_1413).addTo(map); 
markers_1413.bindPopup("Newton-Wellesley Hospital").openPopup(); 

var circle_1413 = L.circle(coords_1413, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1414 = [ 32.79068400416667 , -96.77561509375]; 
var markers_1414 = L.marker(coords_1414).addTo(map); 
markers_1414.bindPopup("Fertility Center of Dallas").openPopup(); 

var circle_1414 = L.circle(coords_1414, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1415 = [ 35.9449105 , -83.97891729569912]; 
var markers_1415 = L.marker(coords_1415).addTo(map); 
markers_1415.bindPopup("Southeastern Center for Fertility and Reproductive Surgery").openPopup(); 

var circle_1415 = L.circle(coords_1415, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1416 = [ 40.10871100046894 , -74.9387139817116]; 
var markers_1416 = L.marker(coords_1416).addTo(map); 
markers_1416.bindPopup("Community Blood Center, dba Community Tissue Services").openPopup(); 

var circle_1416 = L.circle(coords_1416, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1417 = [ 18.3581491 , -66.1116969]; 
var markers_1417 = L.marker(coords_1417).addTo(map); 
markers_1417.bindPopup("Implantes y Sistemas Medicos Inc.").openPopup(); 

var circle_1417 = L.circle(coords_1417, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1418 = [ 33.9528472 , -84.5496148]; 
var markers_1418 = L.marker(coords_1418).addTo(map); 
markers_1418.bindPopup("WuXi AppTec Inc.").openPopup(); 

var circle_1418 = L.circle(coords_1418, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1419 = [ 36.78757313226631 , -76.08267106391901]; 
var markers_1419 = L.marker(coords_1419).addTo(map); 
markers_1419.bindPopup("LifeNet Health Chandler Creek").openPopup(); 

var circle_1419 = L.circle(coords_1419, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1420 = [ 33.39635540193133 , -111.93056647560802]; 
var markers_1420 = L.marker(coords_1420).addTo(map); 
markers_1420.bindPopup("Creative Testing Solutions").openPopup(); 

var circle_1420 = L.circle(coords_1420, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1421 = [ 32.92133003101852 , -96.8373033574074]; 
var markers_1421 = L.marker(coords_1421).addTo(map); 
markers_1421.bindPopup("Ten20 Medical Distribution, LLC").openPopup(); 

var circle_1421 = L.circle(coords_1421, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1422 = [ 33.515238070731705 , -101.9279002740418]; 
var markers_1422 = L.marker(coords_1422).addTo(map); 
markers_1422.bindPopup("Allotech, LLC").openPopup(); 

var circle_1422 = L.circle(coords_1422, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1423 = [ 32.8746026608 , -96.7646495584]; 
var markers_1423 = L.marker(coords_1423).addTo(map); 
markers_1423.bindPopup("Dallas-Fort Worth Fertility Associates, P.A.").openPopup(); 

var circle_1423 = L.circle(coords_1423, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1424 = [ 37.35867026116352 , -122.03950199889935]; 
var markers_1424 = L.marker(coords_1424).addTo(map); 
markers_1424.bindPopup("Lucile Salter Packard Children's Hospital Stanford Med Fertility and Reproductive Hlth").openPopup(); 

var circle_1424 = L.circle(coords_1424, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1425 = [ 33.700546398900855 , -117.802475449989]; 
var markers_1425 = L.marker(coords_1425).addTo(map); 
markers_1425.bindPopup("Life IVF Center").openPopup(); 

var circle_1425 = L.circle(coords_1425, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1426 = [ 39.58575665 , -104.8304824892646]; 
var markers_1426 = L.marker(coords_1426).addTo(map); 
markers_1426.bindPopup("Trilogy Mountain States Colorado").openPopup(); 

var circle_1426 = L.circle(coords_1426, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1427 = [ 47.60163620134367 , -122.32916850108528]; 
var markers_1427 = L.marker(coords_1427).addTo(map); 
markers_1427.bindPopup("Bloodworks").openPopup(); 

var circle_1427 = L.circle(coords_1427, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1428 = [ 40.7127281 , -74.0060152]; 
var markers_1428 = L.marker(coords_1428).addTo(map); 
markers_1428.bindPopup("Batzofin Fertility Services d.b.a. New York  Fertility Services").openPopup(); 

var circle_1428 = L.circle(coords_1428, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1429 = [ 40.546868 , -111.86597556984294]; 
var markers_1429 = L.marker(coords_1429).addTo(map); 
markers_1429.bindPopup("Reproductive Care Center").openPopup(); 

var circle_1429 = L.circle(coords_1429, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1430 = [ 43.01502177346684 , -88.2700295068836]; 
var markers_1430 = L.marker(coords_1430).addTo(map); 
markers_1430.bindPopup("Team Spine, Inc.").openPopup(); 

var circle_1430 = L.circle(coords_1430, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1431 = [ 51.6714842 , -1.2779715]; 
var markers_1431 = L.marker(coords_1431).addTo(map); 
markers_1431.bindPopup("Biovex Ltd").openPopup(); 

var circle_1431 = L.circle(coords_1431, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1432 = [ 33.9528472 , -84.5496148]; 
var markers_1432 = L.marker(coords_1432).addTo(map); 
markers_1432.bindPopup("Spinal Elements").openPopup(); 

var circle_1432 = L.circle(coords_1432, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1433 = [ 29.54766428575949 , -98.30059518797468]; 
var markers_1433 = L.marker(coords_1433).addTo(map); 
markers_1433.bindPopup("CellRight Technologies LLC").openPopup(); 

var circle_1433 = L.circle(coords_1433, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1434 = [ 30.20572796383648 , -92.06595122028304]; 
var markers_1434 = L.marker(coords_1434).addTo(map); 
markers_1434.bindPopup("Deshotels & Associates").openPopup(); 

var circle_1434 = L.circle(coords_1434, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1435 = [ 30.4647336752754 , -90.10425180758874]; 
var markers_1435 = L.marker(coords_1435).addTo(map); 
markers_1435.bindPopup("Louisiana Organ Procurement Agency").openPopup(); 

var circle_1435 = L.circle(coords_1435, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1436 = [ 41.3259134 , -75.7893604]; 
var markers_1436 = L.marker(coords_1436).addTo(map); 
markers_1436.bindPopup("Benco Dental Supply Company").openPopup(); 

var circle_1436 = L.circle(coords_1436, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1437 = [ 32.8746026608 , -96.7646495584]; 
var markers_1437 = L.marker(coords_1437).addTo(map); 
markers_1437.bindPopup("RTI Donor Services - Texas").openPopup(); 

var circle_1437 = L.circle(coords_1437, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1438 = [ 30.4647336752754 , -90.10425180758874]; 
var markers_1438 = L.marker(coords_1438).addTo(map); 
markers_1438.bindPopup("Louisiana Organ Procurement Agency").openPopup(); 

var circle_1438 = L.circle(coords_1438, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1439 = [ 29.45077581052632 , -98.44672600526316]; 
var markers_1439 = L.marker(coords_1439).addTo(map); 
markers_1439.bindPopup("Department of Army Brooke Army Medical Center").openPopup(); 

var circle_1439 = L.circle(coords_1439, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1440 = [ 35.1427731 , -89.7963741]; 
var markers_1440 = L.marker(coords_1440).addTo(map); 
markers_1440.bindPopup("BioDlogics LLC").openPopup(); 

var circle_1440 = L.circle(coords_1440, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1441 = [ 26.2522898 , -80.21121231219807]; 
var markers_1441 = L.marker(coords_1441).addTo(map); 
markers_1441.bindPopup("IVF Florida Reproductive Associates").openPopup(); 

var circle_1441 = L.circle(coords_1441, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1442 = [ 42.11485056767754 , -71.2398906563118]; 
var markers_1442 = L.marker(coords_1442).addTo(map); 
markers_1442.bindPopup("Massachusetts General Hospital").openPopup(); 

var circle_1442 = L.circle(coords_1442, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1443 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_1443 = L.marker(coords_1443).addTo(map); 
markers_1443.bindPopup("Fertility Specialist of San Antonio").openPopup(); 

var circle_1443 = L.circle(coords_1443, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1444 = [ 29.3113283 , -94.777612725]; 
var markers_1444 = L.marker(coords_1444).addTo(map); 
markers_1444.bindPopup("Dept. of OB/GYN-UTMB formerly-University Fertility Center").openPopup(); 

var circle_1444 = L.circle(coords_1444, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1445 = [ 36.86502937171783 , -76.30073375342913]; 
var markers_1445 = L.marker(coords_1445).addTo(map); 
markers_1445.bindPopup("Jones Institute for Reproductive Medicine").openPopup(); 

var circle_1445 = L.circle(coords_1445, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1446 = [ 38.9265953 , -94.62797284502076]; 
var markers_1446 = L.marker(coords_1446).addTo(map); 
markers_1446.bindPopup("Elite Biologics, LLC").openPopup(); 

var circle_1446 = L.circle(coords_1446, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1447 = [ 35.54249282539185 , -97.55834220501568]; 
var markers_1447 = L.marker(coords_1447).addTo(map); 
markers_1447.bindPopup("GraftSource, LLC.").openPopup(); 

var circle_1447 = L.circle(coords_1447, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1448 = [ 36.86502937171783 , -76.30073375342913]; 
var markers_1448 = L.marker(coords_1448).addTo(map); 
markers_1448.bindPopup("The Cryo Laboratory of EVMS - Jones Institute").openPopup(); 

var circle_1448 = L.circle(coords_1448, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1449 = [ 28.565728695315315 , -82.37776907639639]; 
var markers_1449 = L.marker(coords_1449).addTo(map); 
markers_1449.bindPopup("Adler Instrument Company").openPopup(); 

var circle_1449 = L.circle(coords_1449, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1450 = [ 29.56766204225061 , -97.96641517019786]; 
var markers_1450 = L.marker(coords_1450).addTo(map); 
markers_1450.bindPopup("Quality Bioresources, Inc").openPopup(); 

var circle_1450 = L.circle(coords_1450, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1451 = [ 28.66445211478873 , -81.37399207394367]; 
var markers_1451 = L.marker(coords_1451).addTo(map); 
markers_1451.bindPopup("Cord for Life, Inc.").openPopup(); 

var circle_1451 = L.circle(coords_1451, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1452 = [ 30.177713973768736 , -95.50416059400428]; 
var markers_1452 = L.marker(coords_1452).addTo(map); 
markers_1452.bindPopup("Osteobiologic Solutions, Inc.,").openPopup(); 

var circle_1452 = L.circle(coords_1452, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1453 = [ 38.88871558907693 , -77.43004503415385]; 
var markers_1453 = L.marker(coords_1453).addTo(map); 
markers_1453.bindPopup("Quest Diagnostics Nichols Institute").openPopup(); 

var circle_1453 = L.circle(coords_1453, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1454 = [ 42.3756401 , -71.2358004]; 
var markers_1454 = L.marker(coords_1454).addTo(map); 
markers_1454.bindPopup("Dentsply IH, Inc.").openPopup(); 

var circle_1454 = L.circle(coords_1454, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1455 = [ 40.57191675555556 , -111.8896127148148]; 
var markers_1455 = L.marker(coords_1455).addTo(map); 
markers_1455.bindPopup("Isomedix Operations Inc.").openPopup(); 

var circle_1455 = L.circle(coords_1455, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1456 = [ 40.7127281 , -74.0060152]; 
var markers_1456 = L.marker(coords_1456).addTo(map); 
markers_1456.bindPopup("CCRM New York").openPopup(); 

var circle_1456 = L.circle(coords_1456, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1457 = [ 40.78677830502197 , -73.72719588694288]; 
var markers_1457 = L.marker(coords_1457).addTo(map); 
markers_1457.bindPopup("New York Cryo").openPopup(); 

var circle_1457 = L.circle(coords_1457, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1458 = [ 33.50968511219512 , -117.16716302682929]; 
var markers_1458 = L.marker(coords_1458).addTo(map); 
markers_1458.bindPopup("Cade Medical, Inc.").openPopup(); 

var circle_1458 = L.circle(coords_1458, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1459 = [ 29.705316533084577 , -95.40499932139303]; 
var markers_1459 = L.marker(coords_1459).addTo(map); 
markers_1459.bindPopup("Center For Cell & Gene Therapy").openPopup(); 

var circle_1459 = L.circle(coords_1459, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1460 = [ 40.7127281 , -74.0060152]; 
var markers_1460 = L.marker(coords_1460).addTo(map); 
markers_1460.bindPopup("American Fertility Services, P.C.").openPopup(); 

var circle_1460 = L.circle(coords_1460, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1461 = [ 41.78690242773613 , -87.59713344797602]; 
var markers_1461 = L.marker(coords_1461).addTo(map); 
markers_1461.bindPopup("Univ of Chicago Med Center Advanced Cellular Therapeutics Facility").openPopup(); 

var circle_1461 = L.circle(coords_1461, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1462 = [ 33.62440292840532 , -101.87949037292358]; 
var markers_1462 = L.marker(coords_1462).addTo(map); 
markers_1462.bindPopup("Texas Tech University Health Sciences Center").openPopup(); 

var circle_1462 = L.circle(coords_1462, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1463 = [ 34.104637847003154 , -117.81369918107256]; 
var markers_1463 = L.marker(coords_1463).addTo(map); 
markers_1463.bindPopup("Holdsworth, Martin and Associates, Inc. dba InterMed SoCal").openPopup(); 

var circle_1463 = L.circle(coords_1463, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1464 = [ 41.57796364435076 , -83.6800440752108]; 
var markers_1464 = L.marker(coords_1464).addTo(map); 
markers_1464.bindPopup("Case Medical Incorporated").openPopup(); 

var circle_1464 = L.circle(coords_1464, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1465 = [ 38.834515546666665 , -77.20249305285715]; 
var markers_1465 = L.marker(coords_1465).addTo(map); 
markers_1465.bindPopup("Washington Fertility Center").openPopup(); 

var circle_1465 = L.circle(coords_1465, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1466 = [ 44.9497487 , -93.0931028]; 
var markers_1466 = L.marker(coords_1466).addTo(map); 
markers_1466.bindPopup("Spineology, Inc.").openPopup(); 

var circle_1466 = L.circle(coords_1466, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1467 = [ 33.646167751446605 , -117.9191904710854]; 
var markers_1467 = L.marker(coords_1467).addTo(map); 
markers_1467.bindPopup("American Reproductive Centers, Inc.").openPopup(); 

var circle_1467 = L.circle(coords_1467, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1468 = [ 30.29209155560946 , -97.7390149515464]; 
var markers_1468 = L.marker(coords_1468).addTo(map); 
markers_1468.bindPopup("Fairfax Cryobank, Inc.").openPopup(); 

var circle_1468 = L.circle(coords_1468, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1469 = [ 37.383327040163934 , -122.11456647131148]; 
var markers_1469 = L.marker(coords_1469).addTo(map); 
markers_1469.bindPopup("California Cryobank, LLC").openPopup(); 

var circle_1469 = L.circle(coords_1469, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1470 = [ 39.5355063 , -76.3490396]; 
var markers_1470 = L.marker(coords_1470).addTo(map); 
markers_1470.bindPopup("Shady Grove Fertility Center").openPopup(); 

var circle_1470 = L.circle(coords_1470, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1471 = [ 37.3107955 , -6.8517704]; 
var markers_1471 = L.marker(coords_1471).addTo(map); 
markers_1471.bindPopup("San Jorge Children's Hospital").openPopup(); 

var circle_1471 = L.circle(coords_1471, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1472 = [ 32.90082638054145 , -84.33267312030458]; 
var markers_1472 = L.marker(coords_1472).addTo(map); 
markers_1472.bindPopup("Upson Regional Medical Center- Blood Bank").openPopup(); 

var circle_1472 = L.circle(coords_1472, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1473 = [ 38.64611097213144 , -90.61833031267793]; 
var markers_1473 = L.marker(coords_1473).addTo(map); 
markers_1473.bindPopup("Missouri Center for Reproductive Medicine LLC").openPopup(); 

var circle_1473 = L.circle(coords_1473, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1474 = [ 28.5716466195122 , -81.38436181219512]; 
var markers_1474 = L.marker(coords_1474).addTo(map); 
markers_1474.bindPopup("Florida Hospital Cancer Institute for Cellular Therapy Lab").openPopup(); 

var circle_1474 = L.circle(coords_1474, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1475 = [ 3.60107 , -61.5606167]; 
var markers_1475 = L.marker(coords_1475).addTo(map); 
markers_1475.bindPopup("SeaSpine Inc").openPopup(); 

var circle_1475 = L.circle(coords_1475, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1476 = [ 35.1335022 , -89.9668758]; 
var markers_1476 = L.marker(coords_1476).addTo(map); 
markers_1476.bindPopup("Endoco, Inc dba Ultimate Dental").openPopup(); 

var circle_1476 = L.circle(coords_1476, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1477 = [ 34.0709576 , -84.2747329]; 
var markers_1477 = L.marker(coords_1477).addTo(map); 
markers_1477.bindPopup("Precision Orthopedics, Inc.").openPopup(); 

var circle_1477 = L.circle(coords_1477, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1478 = [ 38.646752592691016 , -90.53816181358584]; 
var markers_1478 = L.marker(coords_1478).addTo(map); 
markers_1478.bindPopup("St Luke's Hospital Assisted Reproductive Technology Lab").openPopup(); 

var circle_1478 = L.circle(coords_1478, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1479 = [ 34.03292897442455 , -117.64145201099744]; 
var markers_1479 = L.marker(coords_1479).addTo(map); 
markers_1479.bindPopup("Isomedix Operations Inc").openPopup(); 

var circle_1479 = L.circle(coords_1479, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1480 = [ 37.72833463739496 , -97.23095917941176]; 
var markers_1480 = L.marker(coords_1480).addTo(map); 
markers_1480.bindPopup("The Center for Reproductive Medicine").openPopup(); 

var circle_1480 = L.circle(coords_1480, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1481 = [ 39.07417855 , -96.85024994191052]; 
var markers_1481 = L.marker(coords_1481).addTo(map); 
markers_1481.bindPopup("Irwin Army Community Hospital").openPopup(); 

var circle_1481 = L.circle(coords_1481, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1482 = [ 33.744129506066734 , -84.91459506066734]; 
var markers_1482 = L.marker(coords_1482).addTo(map); 
markers_1482.bindPopup("Tanner Medical Center/Villa Rica").openPopup(); 

var circle_1482 = L.circle(coords_1482, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1483 = [ 30.180587179303675 , -92.0541519065764]; 
var markers_1483 = L.marker(coords_1483).addTo(map); 
markers_1483.bindPopup("Alon Medical Technology, LLC").openPopup(); 

var circle_1483 = L.circle(coords_1483, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1484 = [ 33.9934867 , -81.0739826]; 
var markers_1484 = L.marker(coords_1484).addTo(map); 
markers_1484.bindPopup("Piedmont Reproductive Endocrinology Group, PA").openPopup(); 

var circle_1484 = L.circle(coords_1484, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1485 = [ 38.791612 , -90.5958468]; 
var markers_1485 = L.marker(coords_1485).addTo(map); 
markers_1485.bindPopup("Jeff Toedtmann Enterprises LLC").openPopup(); 

var circle_1485 = L.circle(coords_1485, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1486 = [ 36.14367250602095 , -86.74923211387434]; 
var markers_1486 = L.marker(coords_1486).addTo(map); 
markers_1486.bindPopup("M2 Medicine Man, Inc").openPopup(); 

var circle_1486 = L.circle(coords_1486, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1487 = [ 36.75782250305924 , -76.23509177922608]; 
var markers_1487 = L.marker(coords_1487).addTo(map); 
markers_1487.bindPopup("Shoreline Medical LLC").openPopup(); 

var circle_1487 = L.circle(coords_1487, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1488 = [ 29.52334760497667 , -98.59272306656298]; 
var markers_1488 = L.marker(coords_1488).addTo(map); 
markers_1488.bindPopup("Evologics, LLC").openPopup(); 

var circle_1488 = L.circle(coords_1488, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1489 = [ 32.870021 , -83.763556]; 
var markers_1489 = L.marker(coords_1489).addTo(map); 
markers_1489.bindPopup("Alpha Tissue, Inc").openPopup(); 

var circle_1489 = L.circle(coords_1489, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1490 = [ 39.7611625542517 , -84.18467071972789]; 
var markers_1490 = L.marker(coords_1490).addTo(map); 
markers_1490.bindPopup("AxoGen Corporation").openPopup(); 

var circle_1490 = L.circle(coords_1490, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1491 = [ 29.50626249341317 , -98.5683992]; 
var markers_1491 = L.marker(coords_1491).addTo(map); 
markers_1491.bindPopup("Methodist Hospital Cellular Therapy Lab").openPopup(); 

var circle_1491 = L.circle(coords_1491, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1492 = [ 41.901026393448944 , -87.67412213015415]; 
var markers_1492 = L.marker(coords_1492).addTo(map); 
markers_1492.bindPopup("Vios Fertility Institute Chicago").openPopup(); 

var circle_1492 = L.circle(coords_1492, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1493 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_1493 = L.marker(coords_1493).addTo(map); 
markers_1493.bindPopup("Vitalant Specialty Laboratories and Therapeutics").openPopup(); 

var circle_1493 = L.circle(coords_1493, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1494 = [ 35.21287095 , -106.71324849574629]; 
var markers_1494 = L.marker(coords_1494).addTo(map); 
markers_1494.bindPopup("High Desert Medical Solutions").openPopup(); 

var circle_1494 = L.circle(coords_1494, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1495 = [ 35.21287095 , -106.71324849574629]; 
var markers_1495 = L.marker(coords_1495).addTo(map); 
markers_1495.bindPopup("Garcia Laboratories LLC").openPopup(); 

var circle_1495 = L.circle(coords_1495, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1496 = [ 41.8949892729885 , -87.6226382045977]; 
var markers_1496 = L.marker(coords_1496).addTo(map); 
markers_1496.bindPopup("Spiraltech Dental Implants").openPopup(); 

var circle_1496 = L.circle(coords_1496, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1497 = [ 40.12675402007722 , -75.12618438339769]; 
var markers_1497 = L.marker(coords_1497).addTo(map); 
markers_1497.bindPopup("Regional Women's Health Group LLC").openPopup(); 

var circle_1497 = L.circle(coords_1497, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1498 = [ 30.3646795 , -88.5585995]; 
var markers_1498 = L.marker(coords_1498).addTo(map); 
markers_1498.bindPopup("Singing River Hospital Blood Bank").openPopup(); 

var circle_1498 = L.circle(coords_1498, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1499 = [ 41.879570904866185 , -87.68539324476886]; 
var markers_1499 = L.marker(coords_1499).addTo(map); 
markers_1499.bindPopup("Univ of Ill Hosp & Hlth Sciences Stem Cell / Bone Marrow Processing Lab").openPopup(); 

var circle_1499 = L.circle(coords_1499, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1500 = [ 28.5421109 , -81.3790304]; 
var markers_1500 = L.marker(coords_1500).addTo(map); 
markers_1500.bindPopup("CORD:USE Cord Blood Bank").openPopup(); 

var circle_1500 = L.circle(coords_1500, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1501 = [ 41.64647648174758 , -93.4846929662136]; 
var markers_1501 = L.marker(coords_1501).addTo(map); 
markers_1501.bindPopup("Allo Source").openPopup(); 

var circle_1501 = L.circle(coords_1501, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1502 = [ 42.237770056612526 , -83.7205163035267]; 
var markers_1502 = L.marker(coords_1502).addTo(map); 
markers_1502.bindPopup("Eversight").openPopup(); 

var circle_1502 = L.circle(coords_1502, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1503 = [ 38.00816123745875 , -84.53350692574257]; 
var markers_1503 = L.marker(coords_1503).addTo(map); 
markers_1503.bindPopup("ZimmerBiomet OrthoSolutions").openPopup(); 

var circle_1503 = L.circle(coords_1503, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1504 = [ 38.66403693554405 , -90.4484983195855]; 
var markers_1504 = L.marker(coords_1504).addTo(map); 
markers_1504.bindPopup("Vios Fertility Institute").openPopup(); 

var circle_1504 = L.circle(coords_1504, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1505 = [ 36.01523874564102 , -86.56421238948718]; 
var markers_1505 = L.marker(coords_1505).addTo(map); 
markers_1505.bindPopup("Cardinal Health dba Specialty Pharmaceutical Services").openPopup(); 

var circle_1505 = L.circle(coords_1505, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1506 = [ 30.0482021 , -95.1856292]; 
var markers_1506 = L.marker(coords_1506).addTo(map); 
markers_1506.bindPopup("Puragraft LLC").openPopup(); 

var circle_1506 = L.circle(coords_1506, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1507 = [ 38.96185715271318 , -94.83682336666666]; 
var markers_1507 = L.marker(coords_1507).addTo(map); 
markers_1507.bindPopup("BIOinnovations LLC").openPopup(); 

var circle_1507 = L.circle(coords_1507, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1508 = [ 38.58394130073752 , -90.41210843909776]; 
var markers_1508 = L.marker(coords_1508).addTo(map); 
markers_1508.bindPopup("Patriot Medical Inc").openPopup(); 

var circle_1508 = L.circle(coords_1508, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1509 = [ 33.9412127 , -84.2135309]; 
var markers_1509 = L.marker(coords_1509).addTo(map); 
markers_1509.bindPopup("QualTex Laboratories").openPopup(); 

var circle_1509 = L.circle(coords_1509, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1510 = [ 33.50968511219512 , -117.16716302682929]; 
var markers_1510 = L.marker(coords_1510).addTo(map); 
markers_1510.bindPopup("Transplant For Life").openPopup(); 

var circle_1510 = L.circle(coords_1510, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1511 = [ 29.6905828 , -82.3875628]; 
var markers_1511 = L.marker(coords_1511).addTo(map); 
markers_1511.bindPopup("UF Reproductive Medicine at Springhill").openPopup(); 

var circle_1511 = L.circle(coords_1511, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1512 = [ 34.13970508361204 , -118.15377365317728]; 
var markers_1512 = L.marker(coords_1512).addTo(map); 
markers_1512.bindPopup("Unity Fertility Center, LLC").openPopup(); 

var circle_1512 = L.circle(coords_1512, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1513 = [ 34.02950315932203 , -118.47566806440678]; 
var markers_1513 = L.marker(coords_1513).addTo(map); 
markers_1513.bindPopup("John Kumar Jain MD Inc.").openPopup(); 

var circle_1513 = L.circle(coords_1513, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1514 = [ 42.237770056612526 , -83.7205163035267]; 
var markers_1514 = L.marker(coords_1514).addTo(map); 
markers_1514.bindPopup("Eversight").openPopup(); 

var circle_1514 = L.circle(coords_1514, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1515 = [ 40.85193324597988 , -73.20501220284426]; 
var markers_1515 = L.marker(coords_1515).addTo(map); 
markers_1515.bindPopup("Office of Chief Medical Examiner Decomposition Room").openPopup(); 

var circle_1515 = L.circle(coords_1515, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1516 = [ 35.02675273280802 , -78.97713939412607]; 
var markers_1516 = L.marker(coords_1516).addTo(map); 
markers_1516.bindPopup("North Carolina IVF Labs").openPopup(); 

var circle_1516 = L.circle(coords_1516, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1517 = [ 39.79626219582705 , -86.22466446510809]; 
var markers_1517 = L.marker(coords_1517).addTo(map); 
markers_1517.bindPopup("Indiana Organ Procurement Organization").openPopup(); 

var circle_1517 = L.circle(coords_1517, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1518 = [ 34.1468184271028 , -118.14051102990652]; 
var markers_1518 = L.marker(coords_1518).addTo(map); 
markers_1518.bindPopup("Huntington Reproductive Center, Inc.").openPopup(); 

var circle_1518 = L.circle(coords_1518, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1519 = [ 44.831868251967215 , -92.93762523836064]; 
var markers_1519 = L.marker(coords_1519).addTo(map); 
markers_1519.bindPopup("American Donor Services").openPopup(); 

var circle_1519 = L.circle(coords_1519, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1520 = [ 47.65383957984496 , -122.30596382325582]; 
var markers_1520 = L.marker(coords_1520).addTo(map); 
markers_1520.bindPopup("UW Medicine - University of Washington").openPopup(); 

var circle_1520 = L.circle(coords_1520, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1521 = [ 33.678814928479 , -117.7440965949406]; 
var markers_1521 = L.marker(coords_1521).addTo(map); 
markers_1521.bindPopup("Interventional Spine Inc").openPopup(); 

var circle_1521 = L.circle(coords_1521, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1522 = [ 40.674486570412256 , -73.70488737374879]; 
var markers_1522 = L.marker(coords_1522).addTo(map); 
markers_1522.bindPopup("Lions Eye Bank For Long Island").openPopup(); 

var circle_1522 = L.circle(coords_1522, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1523 = [ 25.95944204635492 , -80.17898012327598]; 
var markers_1523 = L.marker(coords_1523).addTo(map); 
markers_1523.bindPopup("HNM Total Recon, LLC").openPopup(); 

var circle_1523 = L.circle(coords_1523, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1524 = [ 33.620142173448954 , -117.92814826259163]; 
var markers_1524 = L.marker(coords_1524).addTo(map); 
markers_1524.bindPopup("Robert E. Anderson, M.D., A Professional Corporation").openPopup(); 

var circle_1524 = L.circle(coords_1524, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1525 = [ 34.6961883 , -82.3988222]; 
var markers_1525 = L.marker(coords_1525).addTo(map); 
markers_1525.bindPopup("The Blood Connection, Inc.").openPopup(); 

var circle_1525 = L.circle(coords_1525, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1526 = [ 33.48806012006079 , -112.03738453981762]; 
var markers_1526 = L.marker(coords_1526).addTo(map); 
markers_1526.bindPopup("Transplant For Life, LLC").openPopup(); 

var circle_1526 = L.circle(coords_1526, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1527 = [ 34.200796 , -118.4682916]; 
var markers_1527 = L.marker(coords_1527).addTo(map); 
markers_1527.bindPopup("Elite Allograft, Inc.").openPopup(); 

var circle_1527 = L.circle(coords_1527, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1528 = [ 40.60805811155015 , -75.47575627173252]; 
var markers_1528 = L.marker(coords_1528).addTo(map); 
markers_1528.bindPopup("Reprotech, Inc").openPopup(); 

var circle_1528 = L.circle(coords_1528, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1529 = [ 33.9419393 , -118.43808037530732]; 
var markers_1529 = L.marker(coords_1529).addTo(map); 
markers_1529.bindPopup("Viracor-IBT Laboratories").openPopup(); 

var circle_1529 = L.circle(coords_1529, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1530 = [ 31.75813303333333 , -106.4873119095238]; 
var markers_1530 = L.marker(coords_1530).addTo(map); 
markers_1530.bindPopup("Aurum Group Llc").openPopup(); 

var circle_1530 = L.circle(coords_1530, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1531 = [ 31.778720110975613 , -106.50084789390245]; 
var markers_1531 = L.marker(coords_1531).addTo(map); 
markers_1531.bindPopup("Max Spine, LLC").openPopup(); 

var circle_1531 = L.circle(coords_1531, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1532 = [ 42.3582529 , -71.0966272383055]; 
var markers_1532 = L.marker(coords_1532).addTo(map); 
markers_1532.bindPopup("California Cryobank LLC").openPopup(); 

var circle_1532 = L.circle(coords_1532, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1533 = [ 39.00055437155963 , -77.10289772201835]; 
var markers_1533 = L.marker(coords_1533).addTo(map); 
markers_1533.bindPopup("NIH Clinical Center").openPopup(); 

var circle_1533 = L.circle(coords_1533, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1534 = [ 39.721103237919465 , -104.88453321308724]; 
var markers_1534 = L.marker(coords_1534).addTo(map); 
markers_1534.bindPopup("Donor Alliance, Inc.").openPopup(); 

var circle_1534 = L.circle(coords_1534, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1535 = [ 39.74066201881378 , -86.26505706458333]; 
var markers_1535 = L.marker(coords_1535).addTo(map); 
markers_1535.bindPopup("Brooks Life Sciences Inc").openPopup(); 

var circle_1535 = L.circle(coords_1535, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1536 = [ 41.83307071637684 , -72.72720810293362]; 
var markers_1536 = L.marker(coords_1536).addTo(map); 
markers_1536.bindPopup("LifeChoice Donor Services, Inc.").openPopup(); 

var circle_1536 = L.circle(coords_1536, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1537 = [ 47.24573049907407 , -122.45882282685184]; 
var markers_1537 = L.marker(coords_1537).addTo(map); 
markers_1537.bindPopup("Reproductive Genetics and Fertility Centers PLLC").openPopup(); 

var circle_1537 = L.circle(coords_1537, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1538 = [ 41.78690242773613 , -87.59713344797602]; 
var markers_1538 = L.marker(coords_1538).addTo(map); 
markers_1538.bindPopup("University Of Chicago Medical Ctr, Clinical Microbiology").openPopup(); 

var circle_1538 = L.circle(coords_1538, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1539 = [ 42.36065952607655 , -71.0666397916268]; 
var markers_1539 = L.marker(coords_1539).addTo(map); 
markers_1539.bindPopup("Shriners Hospital for Children - Boston").openPopup(); 

var circle_1539 = L.circle(coords_1539, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1540 = [ 39.946710948203936 , -75.59430912804171]; 
var markers_1540 = L.marker(coords_1540).addTo(map); 
markers_1540.bindPopup("Orthopaedic & Spine Technologies, LLC").openPopup(); 

var circle_1540 = L.circle(coords_1540, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1541 = [ 33.44382792610939 , -111.92852831635706]; 
var markers_1541 = L.marker(coords_1541).addTo(map); 
markers_1541.bindPopup("Medtronic Inc").openPopup(); 

var circle_1541 = L.circle(coords_1541, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1542 = [ 29.48557210528512 , -98.45845304228096]; 
var markers_1542 = L.marker(coords_1542).addTo(map); 
markers_1542.bindPopup("BioLogistx LLC").openPopup(); 

var circle_1542 = L.circle(coords_1542, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1543 = [ 40.7127281 , -74.0060152]; 
var markers_1543 = L.marker(coords_1543).addTo(map); 
markers_1543.bindPopup("Columbia University Fertility Center").openPopup(); 

var circle_1543 = L.circle(coords_1543, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1544 = [ 39.74066201881378 , -86.26505706458333]; 
var markers_1544 = L.marker(coords_1544).addTo(map); 
markers_1544.bindPopup("Sentry Biopharma Services, Inc.").openPopup(); 

var circle_1544 = L.circle(coords_1544, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1545 = [ 36.78757313226631 , -76.08267106391901]; 
var markers_1545 = L.marker(coords_1545).addTo(map); 
markers_1545.bindPopup("LifeNet Health").openPopup(); 

var circle_1545 = L.circle(coords_1545, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1546 = [ 18.38713942142857 , -66.15561820714285]; 
var markers_1546 = L.marker(coords_1546).addTo(map); 
markers_1546.bindPopup("Caribbean Dental Products Corp.").openPopup(); 

var circle_1546 = L.circle(coords_1546, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1547 = [ 35.02536101968348 , -85.14826657299703]; 
var markers_1547 = L.marker(coords_1547).addTo(map); 
markers_1547.bindPopup("Fertility Center LLC").openPopup(); 

var circle_1547 = L.circle(coords_1547, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1548 = [ 35.18757022063655 , -89.86628200184805]; 
var markers_1548 = L.marker(coords_1548).addTo(map); 
markers_1548.bindPopup("NoMad Medical LLC").openPopup(); 

var circle_1548 = L.circle(coords_1548, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1549 = [ 40.75929163824333 , -111.8656355990089]; 
var markers_1549 = L.marker(coords_1549).addTo(map); 
markers_1549.bindPopup("DonorConnect").openPopup(); 

var circle_1549 = L.circle(coords_1549, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1550 = [ 33.612473136585365 , -117.27019227682926]; 
var markers_1550 = L.marker(coords_1550).addTo(map); 
markers_1550.bindPopup("Empire Medical").openPopup(); 

var circle_1550 = L.circle(coords_1550, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1551 = [ 35.060531671810466 , -89.9095353197454]; 
var markers_1551 = L.marker(coords_1551).addTo(map); 
markers_1551.bindPopup("Zimmer Spine, Inc.").openPopup(); 

var circle_1551 = L.circle(coords_1551, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1552 = [ 39.10244194648046 , -77.51706483337426]; 
var markers_1552 = L.marker(coords_1552).addTo(map); 
markers_1552.bindPopup("Metro Surgical Specialists, LLC").openPopup(); 

var circle_1552 = L.circle(coords_1552, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1553 = [ 38.411259285860304 , -82.43933390114992]; 
var markers_1553 = L.marker(coords_1553).addTo(map); 
markers_1553.bindPopup("West Virginia Biologics, LLC").openPopup(); 

var circle_1553 = L.circle(coords_1553, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1554 = [ 21.0202117 , -101.2734016]; 
var markers_1554 = L.marker(coords_1554).addTo(map); 
markers_1554.bindPopup("California Center for Reproductive Health").openPopup(); 

var circle_1554 = L.circle(coords_1554, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1555 = [ 40.07416759199918 , -82.97077208603454]; 
var markers_1555 = L.marker(coords_1555).addTo(map); 
markers_1555.bindPopup("Wright Medical Technology Inc").openPopup(); 

var circle_1555 = L.circle(coords_1555, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1556 = [ 42.069851569117645 , -88.1037011907353]; 
var markers_1556 = L.marker(coords_1556).addTo(map); 
markers_1556.bindPopup("Sunstar Americas, Inc.").openPopup(); 

var circle_1556 = L.circle(coords_1556, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1557 = [ 26.0628665 , -80.2331038]; 
var markers_1557 = L.marker(coords_1557).addTo(map); 
markers_1557.bindPopup("AMG MED GROUP Corp").openPopup(); 

var circle_1557 = L.circle(coords_1557, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1558 = [ 29.776415395051192 , -95.5941971728669]; 
var markers_1558 = L.marker(coords_1558).addTo(map); 
markers_1558.bindPopup("Center For Womens's Medicine").openPopup(); 

var circle_1558 = L.circle(coords_1558, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1559 = [ 34.095031326635024 , -118.3997237263713]; 
var markers_1559 = L.marker(coords_1559).addTo(map); 
markers_1559.bindPopup("ART Reproductive Center, Inc.").openPopup(); 

var circle_1559 = L.circle(coords_1559, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1560 = [ 39.4168905 , -104.8748351]; 
var markers_1560 = L.marker(coords_1560).addTo(map); 
markers_1560.bindPopup("An Eggceptional Match, LLC.").openPopup(); 

var circle_1560 = L.circle(coords_1560, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1561 = [ 33.9419393 , -118.43808037530732]; 
var markers_1561 = L.marker(coords_1561).addTo(map); 
markers_1561.bindPopup("Tissue Banks International Inc").openPopup(); 

var circle_1561 = L.circle(coords_1561, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1562 = [ 43.66178106029869 , -70.29451171107655]; 
var markers_1562 = L.marker(coords_1562).addTo(map); 
markers_1562.bindPopup("Maine Medical Center HPC Laboratory").openPopup(); 

var circle_1562 = L.circle(coords_1562, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1563 = [ 39.091220046581874 , -77.17062372615263]; 
var markers_1563 = L.marker(coords_1563).addTo(map); 
markers_1563.bindPopup("Fisher Bioservices").openPopup(); 

var circle_1563 = L.circle(coords_1563, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1564 = [ 45.77544815386997 , -111.17630650866872]; 
var markers_1564 = L.marker(coords_1564).addTo(map); 
markers_1564.bindPopup("XTANT Medical").openPopup(); 

var circle_1564 = L.circle(coords_1564, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1565 = [ 33.840511479834255 , -116.51901206169428]; 
var markers_1565 = L.marker(coords_1565).addTo(map); 
markers_1565.bindPopup("Fertility Reproductive Endocrinology Specialists").openPopup(); 

var circle_1565 = L.circle(coords_1565, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1566 = [ 39.2558999576 , -94.6878334706]; 
var markers_1566 = L.marker(coords_1566).addTo(map); 
markers_1566.bindPopup("Saving Sight").openPopup(); 

var circle_1566 = L.circle(coords_1566, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1567 = [ 35.7375791 , -78.7866692]; 
var markers_1567 = L.marker(coords_1567).addTo(map); 
markers_1567.bindPopup("North Carolina Center for Reproductive Medicine Inc (NCCRM)").openPopup(); 

var circle_1567 = L.circle(coords_1567, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1568 = [ 41.63795110952381 , -71.1741439]; 
var markers_1568 = L.marker(coords_1568).addTo(map); 
markers_1568.bindPopup("Medsource, Inc.").openPopup(); 

var circle_1568 = L.circle(coords_1568, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1569 = [ 41.8949892729885 , -87.6226382045977]; 
var markers_1569 = L.marker(coords_1569).addTo(map); 
markers_1569.bindPopup("Global IVF").openPopup(); 

var circle_1569 = L.circle(coords_1569, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1570 = [ 33.6024305523068 , -111.8834736572574]; 
var markers_1570 = L.marker(coords_1570).addTo(map); 
markers_1570.bindPopup("ReGen Biosolutions, LLC").openPopup(); 

var circle_1570 = L.circle(coords_1570, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1571 = [ 30.866203341322315 , -83.30643115867768]; 
var markers_1571 = L.marker(coords_1571).addTo(map); 
markers_1571.bindPopup("South Georgia Medical Center Blood Bank").openPopup(); 

var circle_1571 = L.circle(coords_1571, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1572 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_1572 = L.marker(coords_1572).addTo(map); 
markers_1572.bindPopup("Impact Ortho Inc").openPopup(); 

var circle_1572 = L.circle(coords_1572, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1573 = [ 29.50626249341317 , -98.5683992]; 
var markers_1573 = L.marker(coords_1573).addTo(map); 
markers_1573.bindPopup("Fertility Center of San Antonio").openPopup(); 

var circle_1573 = L.circle(coords_1573, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1574 = [ 45.53609770977761 , -122.50382217679255]; 
var markers_1574 = L.marker(coords_1574).addTo(map); 
markers_1574.bindPopup("Kaiser Foundation Health Plan of the Northwest").openPopup(); 

var circle_1574 = L.circle(coords_1574, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1575 = [ 30.4647336752754 , -90.10425180758874]; 
var markers_1575 = L.marker(coords_1575).addTo(map); 
markers_1575.bindPopup("Louisiana Organ Procurement Agency").openPopup(); 

var circle_1575 = L.circle(coords_1575, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1576 = [ 45.5400696 , -122.6282258]; 
var markers_1576 = L.marker(coords_1576).addTo(map); 
markers_1576.bindPopup("ORM Fertility, LLC").openPopup(); 

var circle_1576 = L.circle(coords_1576, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1577 = [ 40.11336792258568 , -88.18372314532711]; 
var markers_1577 = L.marker(coords_1577).addTo(map); 
markers_1577.bindPopup("Carle Health Care Inc Reproductive Reproductive Windsor").openPopup(); 

var circle_1577 = L.circle(coords_1577, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1578 = [ 38.00816123745875 , -84.53350692574257]; 
var markers_1578 = L.marker(coords_1578).addTo(map); 
markers_1578.bindPopup("Baptist Health Lexington").openPopup(); 

var circle_1578 = L.circle(coords_1578, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1579 = [ 48.74871285553097 , -122.4807521294248]; 
var markers_1579 = L.marker(coords_1579).addTo(map); 
markers_1579.bindPopup("Bellingham IVF & Fertility Care").openPopup(); 

var circle_1579 = L.circle(coords_1579, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1580 = [ 39.93923706523605 , -86.12972437124463]; 
var markers_1580 = L.marker(coords_1580).addTo(map); 
markers_1580.bindPopup("Reproductive Care Of Indiana, PC").openPopup(); 

var circle_1580 = L.circle(coords_1580, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1581 = [ 39.7683331 , -86.1583502]; 
var markers_1581 = L.marker(coords_1581).addTo(map); 
markers_1581.bindPopup("Reproductive Services Of Indiana, Inc").openPopup(); 

var circle_1581 = L.circle(coords_1581, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1582 = [ 43.89857860212015 , -91.22885908551235]; 
var markers_1582 = L.marker(coords_1582).addTo(map); 
markers_1582.bindPopup("Gundersen Fertility Center").openPopup(); 

var circle_1582 = L.circle(coords_1582, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1583 = [ 40.10871100046894 , -74.9387139817116]; 
var markers_1583 = L.marker(coords_1583).addTo(map); 
markers_1583.bindPopup("My Doctors Choice Sterile Implants, LLC").openPopup(); 

var circle_1583 = L.circle(coords_1583, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1584 = [ 0.0 , 0.0]; 
var markers_1584 = L.marker(coords_1584).addTo(map); 
markers_1584.bindPopup("Digital Dental Source, LLC").openPopup(); 

var circle_1584 = L.circle(coords_1584, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1585 = [ 30.48150205 , -87.20435215094443]; 
var markers_1585 = L.marker(coords_1585).addTo(map); 
markers_1585.bindPopup("TelaGen LLC").openPopup(); 

var circle_1585 = L.circle(coords_1585, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1586 = [ 35.35813747078261 , -94.36486043930437]; 
var markers_1586 = L.marker(coords_1586).addTo(map); 
markers_1586.bindPopup("Executive Park Surgery Center").openPopup(); 

var circle_1586 = L.circle(coords_1586, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1587 = [ 18.3967375 , -66.0521706]; 
var markers_1587 = L.marker(coords_1587).addTo(map); 
markers_1587.bindPopup("Next Step Medical Co Inc").openPopup(); 

var circle_1587 = L.circle(coords_1587, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1588 = [ 27.943133646590905 , -82.50609911619318]; 
var markers_1588 = L.marker(coords_1588).addTo(map); 
markers_1588.bindPopup("Reproductive Health Associates, Inc.").openPopup(); 

var circle_1588 = L.circle(coords_1588, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1589 = [ 28.1168272 , -80.68184883555209]; 
var markers_1589 = L.marker(coords_1589).addTo(map); 
markers_1589.bindPopup("RTI Donor Services-Melbourne").openPopup(); 

var circle_1589 = L.circle(coords_1589, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1590 = [ 33.707967475014776 , -117.95629671495831]; 
var markers_1590 = L.marker(coords_1590).addTo(map); 
markers_1590.bindPopup("Diaz, David G, MD Inc").openPopup(); 

var circle_1590 = L.circle(coords_1590, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1591 = [ 40.6453823 , -111.92927243834916]; 
var markers_1591 = L.marker(coords_1591).addTo(map); 
markers_1591.bindPopup("Nelson Laboratories, LLC").openPopup(); 

var circle_1591 = L.circle(coords_1591, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1592 = [ 28.52914 , -81.3681386]; 
var markers_1592 = L.marker(coords_1592).addTo(map); 
markers_1592.bindPopup("Lions eye Institute for Transplant & Research Inc.").openPopup(); 

var circle_1592 = L.circle(coords_1592, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1593 = [ 35.92236662748387 , -84.00570283470968]; 
var markers_1593 = L.marker(coords_1593).addTo(map); 
markers_1593.bindPopup("Choice Spine LLC").openPopup(); 

var circle_1593 = L.circle(coords_1593, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1594 = [ 32.89945710073395 , -96.79496265467893]; 
var markers_1594 = L.marker(coords_1594).addTo(map); 
markers_1594.bindPopup("IVF Institute, P.A.").openPopup(); 

var circle_1594 = L.circle(coords_1594, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1595 = [ 35.02536101968348 , -85.14826657299703]; 
var markers_1595 = L.marker(coords_1595).addTo(map); 
markers_1595.bindPopup("Tennessee Reproductive Medicine").openPopup(); 

var circle_1595 = L.circle(coords_1595, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1596 = [ 44.05282392014926 , -123.0862357766169]; 
var markers_1596 = L.marker(coords_1596).addTo(map); 
markers_1596.bindPopup("The Fertility Center of Oregon").openPopup(); 

var circle_1596 = L.circle(coords_1596, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1597 = [ 26.640628 , -81.8723084]; 
var markers_1597 = L.marker(coords_1597).addTo(map); 
markers_1597.bindPopup("Specialists in Reproductive Medicine & Surgery, P.A.").openPopup(); 

var circle_1597 = L.circle(coords_1597, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1598 = [ 18.410425092857142 , -66.10735573571428]; 
var markers_1598 = L.marker(coords_1598).addTo(map); 
markers_1598.bindPopup("Nuvasive PR, Inc.").openPopup(); 

var circle_1598 = L.circle(coords_1598, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1599 = [ 28.1511243 , -82.4614831]; 
var markers_1599 = L.marker(coords_1599).addTo(map); 
markers_1599.bindPopup("New Life Medical Services, LLC").openPopup(); 

var circle_1599 = L.circle(coords_1599, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1600 = [ 33.9412127 , -84.2135309]; 
var markers_1600 = L.marker(coords_1600).addTo(map); 
markers_1600.bindPopup("Family Inceptions International").openPopup(); 

var circle_1600 = L.circle(coords_1600, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1601 = [ 44.9772995 , -93.2654692]; 
var markers_1601 = L.marker(coords_1601).addTo(map); 
markers_1601.bindPopup("Medtronic").openPopup(); 

var circle_1601 = L.circle(coords_1601, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1602 = [ 36.1672559 , -115.148516]; 
var markers_1602 = L.marker(coords_1602).addTo(map); 
markers_1602.bindPopup("Restore Sight International").openPopup(); 

var circle_1602 = L.circle(coords_1602, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1603 = [ 40.85193324597988 , -73.20501220284426]; 
var markers_1603 = L.marker(coords_1603).addTo(map); 
markers_1603.bindPopup("Dr. Richard Schoor").openPopup(); 

var circle_1603 = L.circle(coords_1603, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1604 = [ 28.593317723453172 , -81.32044866408863]; 
var markers_1604 = L.marker(coords_1604).addTo(map); 
markers_1604.bindPopup("A&M Endeavors, LLC").openPopup(); 

var circle_1604 = L.circle(coords_1604, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1605 = [ 32.94910312882562 , -96.84216764590748]; 
var markers_1605 = L.marker(coords_1605).addTo(map); 
markers_1605.bindPopup("Osteomed, LLC").openPopup(); 

var circle_1605 = L.circle(coords_1605, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1606 = [ 33.79838088170478 , -118.18948317422036]; 
var markers_1606 = L.marker(coords_1606).addTo(map); 
markers_1606.bindPopup("MemorialCare Long Beach Medical Center").openPopup(); 

var circle_1606 = L.circle(coords_1606, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1607 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1607 = L.marker(coords_1607).addTo(map); 
markers_1607.bindPopup("DCI Donor Services/dba Tennessee Donor Services").openPopup(); 

var circle_1607 = L.circle(coords_1607, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1608 = [ 0.0 , 0.0]; 
var markers_1608 = L.marker(coords_1608).addTo(map); 
markers_1608.bindPopup("AXIS Spine LLC").openPopup(); 

var circle_1608 = L.circle(coords_1608, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1609 = [ 41.97263740348837 , -87.6643491888372]; 
var markers_1609 = L.marker(coords_1609).addTo(map); 
markers_1609.bindPopup("Fertility & Cryogenics Lab @ Weiss").openPopup(); 

var circle_1609 = L.circle(coords_1609, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1610 = [ 30.281953119296 , -81.46320779154522]; 
var markers_1610 = L.marker(coords_1610).addTo(map); 
markers_1610.bindPopup("Mayo Clinic Florida").openPopup(); 

var circle_1610 = L.circle(coords_1610, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1611 = [ 41.106612603861 , -81.64829327606178]; 
var markers_1611 = L.marker(coords_1611).addTo(map); 
markers_1611.bindPopup("Eggert Medical Inc").openPopup(); 

var circle_1611 = L.circle(coords_1611, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1612 = [ 38.572433658181815 , -121.47778147909092]; 
var markers_1612 = L.marker(coords_1612).addTo(map); 
markers_1612.bindPopup("Lifenet Health Division").openPopup(); 

var circle_1612 = L.circle(coords_1612, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1613 = [ 40.7127281 , -74.0060152]; 
var markers_1613 = L.marker(coords_1613).addTo(map); 
markers_1613.bindPopup("New York Firefighters Skin Bank New York Presbyterian Hosp").openPopup(); 

var circle_1613 = L.circle(coords_1613, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1614 = [ 32.695176454851484 , -97.08666312831684]; 
var markers_1614 = L.marker(coords_1614).addTo(map); 
markers_1614.bindPopup("IVFMD and Advanced Reproductive Laboratory").openPopup(); 

var circle_1614 = L.circle(coords_1614, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1615 = [ 34.75396455191919 , -92.41250187373736]; 
var markers_1615 = L.marker(coords_1615).addTo(map); 
markers_1615.bindPopup("Midwestern Medical Inc").openPopup(); 

var circle_1615 = L.circle(coords_1615, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1616 = [ 47.664617191562776 , -122.29917453097636]; 
var markers_1616 = L.marker(coords_1616).addTo(map); 
markers_1616.bindPopup("University of Washington Med Center - Roosevelt").openPopup(); 

var circle_1616 = L.circle(coords_1616, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1617 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1617 = L.marker(coords_1617).addTo(map); 
markers_1617.bindPopup("DCI Donor Services/dba Tennessee Donor Services").openPopup(); 

var circle_1617 = L.circle(coords_1617, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1618 = [ 21.29135410335196 , -157.82701256256982]; 
var markers_1618 = L.marker(coords_1618).addTo(map); 
markers_1618.bindPopup("Advanced Reproductive Center of Hawaii").openPopup(); 

var circle_1618 = L.circle(coords_1618, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1619 = [ 33.63216492475682 , -117.87771778237632]; 
var markers_1619 = L.marker(coords_1619).addTo(map); 
markers_1619.bindPopup("Beth Ary MD, Inc").openPopup(); 

var circle_1619 = L.circle(coords_1619, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1620 = [ 37.5581865 , -77.4682103761082]; 
var markers_1620 = L.marker(coords_1620).addTo(map); 
markers_1620.bindPopup("Osteologic Surgical Inc.").openPopup(); 

var circle_1620 = L.circle(coords_1620, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1621 = [ 37.5581865 , -77.4682103761082]; 
var markers_1621 = L.marker(coords_1621).addTo(map); 
markers_1621.bindPopup("Highland Surgical Enterprises, LLC").openPopup(); 

var circle_1621 = L.circle(coords_1621, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1622 = [ 38.126849 , -76.606362]; 
var markers_1622 = L.marker(coords_1622).addTo(map); 
markers_1622.bindPopup("Richmond Center For Fertility And Endocrinology, Ltd").openPopup(); 

var circle_1622 = L.circle(coords_1622, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1623 = [ 38.46836050979955 , -82.64809346815144]; 
var markers_1623 = L.marker(coords_1623).addTo(map); 
markers_1623.bindPopup("Ashby Medical LLC").openPopup(); 

var circle_1623 = L.circle(coords_1623, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1624 = [ 44.86174756748329 , -93.43089181091317]; 
var markers_1624 = L.marker(coords_1624).addTo(map); 
markers_1624.bindPopup("Sota, Inc").openPopup(); 

var circle_1624 = L.circle(coords_1624, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1625 = [ 37.5581865 , -77.4682103761082]; 
var markers_1625 = L.marker(coords_1625).addTo(map); 
markers_1625.bindPopup("JWC Medical, LLC").openPopup(); 

var circle_1625 = L.circle(coords_1625, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1626 = [ 38.934691490806046 , -92.29675503979848]; 
var markers_1626 = L.marker(coords_1626).addTo(map); 
markers_1626.bindPopup("Mid-Missouri Reproductive Med & Srgry Inc").openPopup(); 

var circle_1626 = L.circle(coords_1626, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1627 = [ 35.1427731 , -89.7963741]; 
var markers_1627 = L.marker(coords_1627).addTo(map); 
markers_1627.bindPopup("Tritium BioSciences, LLC").openPopup(); 

var circle_1627 = L.circle(coords_1627, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1628 = [ 40.46730072494845 , -80.00828001257732]; 
var markers_1628 = L.marker(coords_1628).addTo(map); 
markers_1628.bindPopup("May Medical, LLC").openPopup(); 

var circle_1628 = L.circle(coords_1628, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1629 = [ 30.38121841105288 , -97.70710744092425]; 
var markers_1629 = L.marker(coords_1629).addTo(map); 
markers_1629.bindPopup("Austin Fertility Institute").openPopup(); 

var circle_1629 = L.circle(coords_1629, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1630 = [ 37.90700599012346 , -122.11495443209876]; 
var markers_1630 = L.marker(coords_1630).addTo(map); 
markers_1630.bindPopup("Providence Medical Technology, Inc.").openPopup(); 

var circle_1630 = L.circle(coords_1630, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1631 = [ 33.10381182251701 , -117.29242666319728]; 
var markers_1631 = L.marker(coords_1631).addTo(map); 
markers_1631.bindPopup("Millennium Medical Technologies Inc").openPopup(); 

var circle_1631 = L.circle(coords_1631, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1632 = [ 45.3069062 , -92.3621369]; 
var markers_1632 = L.marker(coords_1632).addTo(map); 
markers_1632.bindPopup("Amery Regional Medical Center").openPopup(); 

var circle_1632 = L.circle(coords_1632, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1633 = [ 35.924203839922484 , -83.89724430248063]; 
var markers_1633 = L.marker(coords_1633).addTo(map); 
markers_1633.bindPopup("East Tennessee Lions Eye Bank").openPopup(); 

var circle_1633 = L.circle(coords_1633, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1634 = [ 21.305932378640776 , -157.8561746538835]; 
var markers_1634 = L.marker(coords_1634).addTo(map); 
markers_1634.bindPopup("IVF Hawaii, Inc. dba IVF Hawaii").openPopup(); 

var circle_1634 = L.circle(coords_1634, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1635 = [ 40.18324285289855 , -75.1495524978261]; 
var markers_1635 = L.marker(coords_1635).addTo(map); 
markers_1635.bindPopup("Flower Orthopedics Corporation").openPopup(); 

var circle_1635 = L.circle(coords_1635, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1636 = [ 30.547295 , -88.18020367595204]; 
var markers_1636 = L.marker(coords_1636).addTo(map); 
markers_1636.bindPopup("Zimmer Solutions, Inc").openPopup(); 

var circle_1636 = L.circle(coords_1636, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1637 = [ 38.019121666761365 , -84.48719336377842]; 
var markers_1637 = L.marker(coords_1637).addTo(map); 
markers_1637.bindPopup("Rupp  and Associates").openPopup(); 

var circle_1637 = L.circle(coords_1637, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1638 = [ 39.73684044516129 , -105.11334149462364]; 
var markers_1638 = L.marker(coords_1638).addTo(map); 
markers_1638.bindPopup("InterMountain Medical, Inc").openPopup(); 

var circle_1638 = L.circle(coords_1638, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1639 = [ 41.25605835680202 , -73.21072862391372]; 
var markers_1639 = L.marker(coords_1639).addTo(map); 
markers_1639.bindPopup("IntegraMed Medical Connecticut, LLC").openPopup(); 

var circle_1639 = L.circle(coords_1639, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1640 = [ 32.53566428361138 , -97.30955145220804]; 
var markers_1640 = L.marker(coords_1640).addTo(map); 
markers_1640.bindPopup("Axogen Corporation").openPopup(); 

var circle_1640 = L.circle(coords_1640, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1641 = [ 38.53184735 , -90.49810012926211]; 
var markers_1641 = L.marker(coords_1641).addTo(map); 
markers_1641.bindPopup("Integra Lifescience, LLC").openPopup(); 

var circle_1641 = L.circle(coords_1641, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1642 = [ 34.1014112 , -84.5192192]; 
var markers_1642 = L.marker(coords_1642).addTo(map); 
markers_1642.bindPopup("Affirmative Solutions, LLC").openPopup(); 

var circle_1642 = L.circle(coords_1642, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1643 = [ 42.08215966666667 , -71.39785804705882]; 
var markers_1643 = L.marker(coords_1643).addTo(map); 
markers_1643.bindPopup("Arthrosurface, Inc.").openPopup(); 

var circle_1643 = L.circle(coords_1643, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1644 = [ 0.0 , 0.0]; 
var markers_1644 = L.marker(coords_1644).addTo(map); 
markers_1644.bindPopup("Department of Air Force, 59th Medical Wing/SGVLB").openPopup(); 

var circle_1644 = L.circle(coords_1644, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1645 = [ 46.53408423428899 , -87.39615779736239]; 
var markers_1645 = L.marker(coords_1645).addTo(map); 
markers_1645.bindPopup("RTI Surgical, Inc.").openPopup(); 

var circle_1645 = L.circle(coords_1645, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1646 = [ 49.6126495 , 11.1300058]; 
var markers_1646 = L.marker(coords_1646).addTo(map); 
markers_1646.bindPopup("Tutogen Medical GmbH").openPopup(); 

var circle_1646 = L.circle(coords_1646, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1647 = [ 39.14247675 , -94.57999008413366]; 
var markers_1647 = L.marker(coords_1647).addTo(map); 
markers_1647.bindPopup("Midwest Medical Resources Inc.").openPopup(); 

var circle_1647 = L.circle(coords_1647, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1648 = [ 32.798991548961034 , -117.13656408233769]; 
var markers_1648 = L.marker(coords_1648).addTo(map); 
markers_1648.bindPopup("Fertility Specialists Medical Group, Inc").openPopup(); 

var circle_1648 = L.circle(coords_1648, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1649 = [ 26.40798749570957 , -80.0874489191419]; 
var markers_1649 = L.marker(coords_1649).addTo(map); 
markers_1649.bindPopup("Bone Bank 206").openPopup(); 

var circle_1649 = L.circle(coords_1649, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1650 = [ 26.5256179 , -80.0666026]; 
var markers_1650 = L.marker(coords_1650).addTo(map); 
markers_1650.bindPopup("Polcz Fertility Lab, LLC").openPopup(); 

var circle_1650 = L.circle(coords_1650, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1651 = [ 36.01571054139785 , -80.00989891419354]; 
var markers_1651 = L.marker(coords_1651).addTo(map); 
markers_1651.bindPopup("Premier Fertility Center").openPopup(); 

var circle_1651 = L.circle(coords_1651, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1652 = [ 40.58621502590552 , -75.46748258527559]; 
var markers_1652 = L.marker(coords_1652).addTo(map); 
markers_1652.bindPopup("Infertility Solutions, P.C.").openPopup(); 

var circle_1652 = L.circle(coords_1652, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1653 = [ 40.7127281 , -74.0060152]; 
var markers_1653 = L.marker(coords_1653).addTo(map); 
markers_1653.bindPopup("Reproductive Medicine Associates of New York, LLP").openPopup(); 

var circle_1653 = L.circle(coords_1653, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1654 = [ 35.05030042468376 , -80.8157274519389]; 
var markers_1654 = L.marker(coords_1654).addTo(map); 
markers_1654.bindPopup("Greenhagen Medical Inc. dba Zimmer Carolinas").openPopup(); 

var circle_1654 = L.circle(coords_1654, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1655 = [ 41.8914113347826 , -87.63313371225296]; 
var markers_1655 = L.marker(coords_1655).addTo(map); 
markers_1655.bindPopup("Balin, Martin S., MD, PhD").openPopup(); 

var circle_1655 = L.circle(coords_1655, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1656 = [ 40.708469682474224 , -99.07419361340206]; 
var markers_1656 = L.marker(coords_1656).addTo(map); 
markers_1656.bindPopup("Lions Eye Bank of Nebraska Inc").openPopup(); 

var circle_1656 = L.circle(coords_1656, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1657 = [ 45.11463382166357 , -93.43675478566108]; 
var markers_1657 = L.marker(coords_1657).addTo(map); 
markers_1657.bindPopup("Wild Country Surgical, Inc.").openPopup(); 

var circle_1657 = L.circle(coords_1657, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1658 = [ 34.08902988249641 , -118.38292032410332]; 
var markers_1658 = L.marker(coords_1658).addTo(map); 
markers_1658.bindPopup("Peymamn Saadat MD Inc").openPopup(); 

var circle_1658 = L.circle(coords_1658, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1659 = [ 34.08902988249641 , -118.38292032410332]; 
var markers_1659 = L.marker(coords_1659).addTo(map); 
markers_1659.bindPopup("In VitroTech Labs, Inc.").openPopup(); 

var circle_1659 = L.circle(coords_1659, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1660 = [ 30.48478249636364 , -90.48226675454544]; 
var markers_1660 = L.marker(coords_1660).addTo(map); 
markers_1660.bindPopup("Blood Center (The)").openPopup(); 

var circle_1660 = L.circle(coords_1660, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1661 = [ 40.7539956 , -79.8103943]; 
var markers_1661 = L.marker(coords_1661).addTo(map); 
markers_1661.bindPopup("Synergy Health AST, LLC").openPopup(); 

var circle_1661 = L.circle(coords_1661, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1662 = [ 38.53184735 , -90.49810012926211]; 
var markers_1662 = L.marker(coords_1662).addTo(map); 
markers_1662.bindPopup("CoreLink LLC").openPopup(); 

var circle_1662 = L.circle(coords_1662, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1663 = [ 33.01405036748006 , -117.11220773862036]; 
var markers_1663 = L.marker(coords_1663).addTo(map); 
markers_1663.bindPopup("TissueTech, Inc.").openPopup(); 

var circle_1663 = L.circle(coords_1663, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1664 = [ 42.74709948163265 , -71.17042026224489]; 
var markers_1664 = L.marker(coords_1664).addTo(map); 
markers_1664.bindPopup("Steward Holy Family Hospital, Inc.").openPopup(); 

var circle_1664 = L.circle(coords_1664, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1665 = [ 34.17153576875 , -118.54361216875]; 
var markers_1665 = L.marker(coords_1665).addTo(map); 
markers_1665.bindPopup("Center for Fertility & Gynecology The").openPopup(); 

var circle_1665 = L.circle(coords_1665, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1666 = [ 40.727248309392266 , -84.08185300552486]; 
var markers_1666 = L.marker(coords_1666).addTo(map); 
markers_1666.bindPopup("Synergy Health AST LLC").openPopup(); 

var circle_1666 = L.circle(coords_1666, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1667 = [ 42.29831682070845 , -83.24429685803815]; 
var markers_1667 = L.marker(coords_1667).addTo(map); 
markers_1667.bindPopup("Michigan Comprehensive Fertility Center, PLLC").openPopup(); 

var circle_1667 = L.circle(coords_1667, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1668 = [ 41.35193337227984 , -74.26892233100132]; 
var markers_1668 = L.marker(coords_1668).addTo(map); 
markers_1668.bindPopup("Isomedix Operations, Inc").openPopup(); 

var circle_1668 = L.circle(coords_1668, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1669 = [ 40.2886175 , -74.67755853331724]; 
var markers_1669 = L.marker(coords_1669).addTo(map); 
markers_1669.bindPopup("Delaware Valley OB/GYN & Infertility Group P.C.").openPopup(); 

var circle_1669 = L.circle(coords_1669, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1670 = [ 37.69245916965699 , -121.88303595699207]; 
var markers_1670 = L.marker(coords_1670).addTo(map); 
markers_1670.bindPopup("Stanford Healthcare ValleyCare").openPopup(); 

var circle_1670 = L.circle(coords_1670, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1671 = [ 29.54927052130326 , -98.56860098362571]; 
var markers_1671 = L.marker(coords_1671).addTo(map); 
markers_1671.bindPopup("Medical Solutions of Texas").openPopup(); 

var circle_1671 = L.circle(coords_1671, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1672 = [ 40.55718916101399 , -74.28026387307693]; 
var markers_1672 = L.marker(coords_1672).addTo(map); 
markers_1672.bindPopup("Metro Surgical Solutions").openPopup(); 

var circle_1672 = L.circle(coords_1672, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1673 = [ 32.24649813703704 , -110.89184459629628]; 
var markers_1673 = L.marker(coords_1673).addTo(map); 
markers_1673.bindPopup("Allomed Biologics").openPopup(); 

var circle_1673 = L.circle(coords_1673, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1674 = [ 33.13941946434245 , -96.84132154060018]; 
var markers_1674 = L.marker(coords_1674).addTo(map); 
markers_1674.bindPopup("Fertility Specialists of Texas PLLC.").openPopup(); 

var circle_1674 = L.circle(coords_1674, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1675 = [ 32.768108516320474 , -97.02697330059348]; 
var markers_1675 = L.marker(coords_1675).addTo(map); 
markers_1675.bindPopup("Paradigm Surgical Devices, LLC.").openPopup(); 

var circle_1675 = L.circle(coords_1675, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1676 = [ 40.64817853311828 , -75.37578331838709]; 
var markers_1676 = L.marker(coords_1676).addTo(map); 
markers_1676.bindPopup("Family Fertility Center").openPopup(); 

var circle_1676 = L.circle(coords_1676, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1677 = [ 27.175274345438595 , -80.29696241701754]; 
var markers_1677 = L.marker(coords_1677).addTo(map); 
markers_1677.bindPopup("Regenerative Biologics, Inc.").openPopup(); 

var circle_1677 = L.circle(coords_1677, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1678 = [ 34.2545786209799 , -88.73547443618091]; 
var markers_1678 = L.marker(coords_1678).addTo(map); 
markers_1678.bindPopup("North MS Medical Center").openPopup(); 

var circle_1678 = L.circle(coords_1678, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1679 = [ 41.67372402033898 , -86.25241183008474]; 
var markers_1679 = L.marker(coords_1679).addTo(map); 
markers_1679.bindPopup("South Bend Medical Foundation, Inc.").openPopup(); 

var circle_1679 = L.circle(coords_1679, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1680 = [ 29.48557210528512 , -98.45845304228096]; 
var markers_1680 = L.marker(coords_1680).addTo(map); 
markers_1680.bindPopup("Lone Star Orthopaedics Inc").openPopup(); 

var circle_1680 = L.circle(coords_1680, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1681 = [ 28.559728614772727 , -81.36249238295456]; 
var markers_1681 = L.marker(coords_1681).addTo(map); 
markers_1681.bindPopup("Surgical Tissue Network, Inc. dba TissueNet").openPopup(); 

var circle_1681 = L.circle(coords_1681, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1682 = [ 44.65483789135959 , -90.17637352426938]; 
var markers_1682 = L.marker(coords_1682).addTo(map); 
markers_1682.bindPopup("Argon Medical USA, LLC").openPopup(); 

var circle_1682 = L.circle(coords_1682, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1683 = [ 29.733957050967746 , -95.51012797741936]; 
var markers_1683 = L.marker(coords_1683).addTo(map); 
markers_1683.bindPopup("Rolee Management LLC").openPopup(); 

var circle_1683 = L.circle(coords_1683, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1684 = [ 33.9934867 , -81.0739826]; 
var markers_1684 = L.marker(coords_1684).addTo(map); 
markers_1684.bindPopup("Advanced Fertility & Reproductive Endocrinology Institute, L").openPopup(); 

var circle_1684 = L.circle(coords_1684, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1685 = [ 42.351291754147816 , -71.06075401387632]; 
var markers_1685 = L.marker(coords_1685).addTo(map); 
markers_1685.bindPopup("Tufts Medical Center, Inc Pediatric Clinical Trials Office").openPopup(); 

var circle_1685 = L.circle(coords_1685, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1686 = [ 33.7489924 , -84.3902644]; 
var markers_1686 = L.marker(coords_1686).addTo(map); 
markers_1686.bindPopup("Amniox Medical, Inc").openPopup(); 

var circle_1686 = L.circle(coords_1686, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1687 = [ 28.805797561002784 , -81.30860738375117]; 
var markers_1687 = L.marker(coords_1687).addTo(map); 
markers_1687.bindPopup("Zimmer Etex").openPopup(); 

var circle_1687 = L.circle(coords_1687, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1688 = [ 32.75476680742115 , -97.32995871521337]; 
var markers_1688 = L.marker(coords_1688).addTo(map); 
markers_1688.bindPopup("Fuse Medical LLC.").openPopup(); 

var circle_1688 = L.circle(coords_1688, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1689 = [ 40.3119742 , -76.88670061845724]; 
var markers_1689 = L.marker(coords_1689).addTo(map); 
markers_1689.bindPopup("Keystone Surgical Systems, Inc").openPopup(); 

var circle_1689 = L.circle(coords_1689, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1690 = [ 29.705316533084577 , -95.40499932139303]; 
var markers_1690 = L.marker(coords_1690).addTo(map); 
markers_1690.bindPopup("The Methodist Hospital Blood Bank").openPopup(); 

var circle_1690 = L.circle(coords_1690, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1691 = [ 38.62113783842975 , -90.34740422768596]; 
var markers_1691 = L.marker(coords_1691).addTo(map); 
markers_1691.bindPopup("Raridon & Associates Inc").openPopup(); 

var circle_1691 = L.circle(coords_1691, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1692 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1692 = L.marker(coords_1692).addTo(map); 
markers_1692.bindPopup("HCA Health Services of Tennessee dba TriStar Centennial").openPopup(); 

var circle_1692 = L.circle(coords_1692, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1693 = [ 41.86940377297297 , -72.26434552756757]; 
var markers_1693 = L.marker(coords_1693).addTo(map); 
markers_1693.bindPopup("MycoScience, Inc.").openPopup(); 

var circle_1693 = L.circle(coords_1693, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1694 = [ 29.690817975551468 , -95.42766034779412]; 
var markers_1694 = L.marker(coords_1694).addTo(map); 
markers_1694.bindPopup("TMC Orthopedic Hanger Clinic").openPopup(); 

var circle_1694 = L.circle(coords_1694, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1695 = [ 32.41397747373333 , -93.7419729972]; 
var markers_1695 = L.marker(coords_1695).addTo(map); 
markers_1695.bindPopup("Black Label Spine, LLC").openPopup(); 

var circle_1695 = L.circle(coords_1695, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1696 = [ 32.27157662281304 , -90.09863682607204]; 
var markers_1696 = L.marker(coords_1696).addTo(map); 
markers_1696.bindPopup("Precision Spine Inc").openPopup(); 

var circle_1696 = L.circle(coords_1696, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1697 = [ 35.846488655433795 , -78.69680267945205]; 
var markers_1697 = L.marker(coords_1697).addTo(map); 
markers_1697.bindPopup("Apex MedSurg, LLC").openPopup(); 

var circle_1697 = L.circle(coords_1697, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1698 = [ 34.0234337 , -84.6154897]; 
var markers_1698 = L.marker(coords_1698).addTo(map); 
markers_1698.bindPopup("Artivion, Inc").openPopup(); 

var circle_1698 = L.circle(coords_1698, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1699 = [ 30.28448062403688 , -81.58140083435016]; 
var markers_1699 = L.marker(coords_1699).addTo(map); 
markers_1699.bindPopup("North Florida Reproductive Biology Laboratory").openPopup(); 

var circle_1699 = L.circle(coords_1699, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1700 = [ 36.15629765 , -115.22797910962709]; 
var markers_1700 = L.marker(coords_1700).addTo(map); 
markers_1700.bindPopup("OrthoPros, Inc. c/o Gabel Distributors").openPopup(); 

var circle_1700 = L.circle(coords_1700, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1701 = [ 36.13641076644068 , -86.79941731830509]; 
var markers_1701 = L.marker(coords_1701).addTo(map); 
markers_1701.bindPopup("VA Tennessee Valley Healthcare System - Nashville Campus").openPopup(); 

var circle_1701 = L.circle(coords_1701, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1702 = [ 32.2335203 , -101.4772066]; 
var markers_1702 = L.marker(coords_1702).addTo(map); 
markers_1702.bindPopup("Lone Star Extremeties LLC").openPopup(); 

var circle_1702 = L.circle(coords_1702, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1703 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1703 = L.marker(coords_1703).addTo(map); 
markers_1703.bindPopup("Sarah Cannon Blood And Marrow Transplant Program Cell Proces").openPopup(); 

var circle_1703 = L.circle(coords_1703, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1704 = [ 21.31774805 , -157.98747668716516]; 
var markers_1704 = L.marker(coords_1704).addTo(map); 
markers_1704.bindPopup("Bernz Medical Sales LLC").openPopup(); 

var circle_1704 = L.circle(coords_1704, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1705 = [ 21.305932378640776 , -157.8561746538835]; 
var markers_1705 = L.marker(coords_1705).addTo(map); 
markers_1705.bindPopup("Medimoto Surgical LLC").openPopup(); 

var circle_1705 = L.circle(coords_1705, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1706 = [ 33.48667557578125 , -86.74340698242187]; 
var markers_1706 = L.marker(coords_1706).addTo(map); 
markers_1706.bindPopup("Medical and Educational Resources Inc").openPopup(); 

var circle_1706 = L.circle(coords_1706, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1707 = [ 35.21287095 , -106.71324849574629]; 
var markers_1707 = L.marker(coords_1707).addTo(map); 
markers_1707.bindPopup("Presbyterian Apheresis/ Donor Services").openPopup(); 

var circle_1707 = L.circle(coords_1707, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1708 = [ 36.15077592618384 , -86.78625245125349]; 
var markers_1708 = L.marker(coords_1708).addTo(map); 
markers_1708.bindPopup("Center for Reproductive Health Fertility Laboratory of Nashville").openPopup(); 

var circle_1708 = L.circle(coords_1708, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1709 = [ 0.0 , 0.0]; 
var markers_1709 = L.marker(coords_1709).addTo(map); 
markers_1709.bindPopup("Isomedix Operations, Inc.").openPopup(); 

var circle_1709 = L.circle(coords_1709, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1710 = [ 45.9347548 , -66.6288542]; 
var markers_1710 = L.marker(coords_1710).addTo(map); 
markers_1710.bindPopup("New York Fertility").openPopup(); 

var circle_1710 = L.circle(coords_1710, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1711 = [ 34.01513631568627 , -118.49496511078432]; 
var markers_1711 = L.marker(coords_1711).addTo(map); 
markers_1711.bindPopup("Regents of UC behalf UCLA F. R. Health Santa Monica").openPopup(); 

var circle_1711 = L.circle(coords_1711, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1712 = [ 21.29135410335196 , -157.82701256256982]; 
var markers_1712 = L.marker(coords_1712).addTo(map); 
markers_1712.bindPopup("Hawaii Cord Blood Bank").openPopup(); 

var circle_1712 = L.circle(coords_1712, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1713 = [ 40.877673422077926 , -74.29303815519481]; 
var markers_1713 = L.marker(coords_1713).addTo(map); 
markers_1713.bindPopup("Nelson Labs Fairfield, Inc.").openPopup(); 

var circle_1713 = L.circle(coords_1713, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1714 = [ 44.97594155841584 , -93.26015967920792]; 
var markers_1714 = L.marker(coords_1714).addTo(map); 
markers_1714.bindPopup("Hennepin County Medical Center - Clinical Laboratories").openPopup(); 

var circle_1714 = L.circle(coords_1714, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1715 = [ 40.121497 , -75.3399048]; 
var markers_1715 = L.marker(coords_1715).addTo(map); 
markers_1715.bindPopup("B and S Sales, Inc.").openPopup(); 

var circle_1715 = L.circle(coords_1715, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1716 = [ 35.060531671810466 , -89.9095353197454]; 
var markers_1716 = L.marker(coords_1716).addTo(map); 
markers_1716.bindPopup("Charles River Laboratories Inc").openPopup(); 

var circle_1716 = L.circle(coords_1716, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1717 = [ 21.29135410335196 , -157.82701256256982]; 
var markers_1717 = L.marker(coords_1717).addTo(map); 
markers_1717.bindPopup("Hausten Healthcare, LLC").openPopup(); 

var circle_1717 = L.circle(coords_1717, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1718 = [ 41.3365056 , -81.5617791]; 
var markers_1718 = L.marker(coords_1718).addTo(map); 
markers_1718.bindPopup("Ohio Surgical Solutions, Inc.").openPopup(); 

var circle_1718 = L.circle(coords_1718, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1719 = [ 40.1745538 , -74.9226665]; 
var markers_1719 = L.marker(coords_1719).addTo(map); 
markers_1719.bindPopup("Alliqua Biomedical").openPopup(); 

var circle_1719 = L.circle(coords_1719, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1720 = [ 32.33242036044776 , -90.08517370597016]; 
var markers_1720 = L.marker(coords_1720).addTo(map); 
markers_1720.bindPopup("Mississippi Fertility Institute").openPopup(); 

var circle_1720 = L.circle(coords_1720, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1721 = [ 38.61947578 , -121.393715148]; 
var markers_1721 = L.marker(coords_1721).addTo(map); 
markers_1721.bindPopup("California IVF Fertility Center, Inc.").openPopup(); 

var circle_1721 = L.circle(coords_1721, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1722 = [ 42.64524130188679 , -83.12309510520755]; 
var markers_1722 = L.marker(coords_1722).addTo(map); 
markers_1722.bindPopup("IVF Michigan, PC").openPopup(); 

var circle_1722 = L.circle(coords_1722, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1723 = [ 44.84332911593407 , -93.28060328076924]; 
var markers_1723 = L.marker(coords_1723).addTo(map); 
markers_1723.bindPopup("Biomet North Central dba").openPopup(); 

var circle_1723 = L.circle(coords_1723, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1724 = [ 32.900813062685096 , -117.19246019723596]; 
var markers_1724 = L.marker(coords_1724).addTo(map); 
markers_1724.bindPopup("Save A Life America").openPopup(); 

var circle_1724 = L.circle(coords_1724, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1725 = [ 40.1023326 , -75.1521195]; 
var markers_1725 = L.marker(coords_1725).addTo(map); 
markers_1725.bindPopup("Medalliance, Inc").openPopup(); 

var circle_1725 = L.circle(coords_1725, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1726 = [ 35.92236662748387 , -84.00570283470968]; 
var markers_1726 = L.marker(coords_1726).addTo(map); 
markers_1726.bindPopup("Golden Rule Medical LLC").openPopup(); 

var circle_1726 = L.circle(coords_1726, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1727 = [ 35.9368599 , -83.95466156001811]; 
var markers_1727 = L.marker(coords_1727).addTo(map); 
markers_1727.bindPopup("HILLCO MEDICAL, LLC").openPopup(); 

var circle_1727 = L.circle(coords_1727, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1728 = [ 38.23792935663453 , -85.7247328116506]; 
var markers_1728 = L.marker(coords_1728).addTo(map); 
markers_1728.bindPopup("Vivorte, Inc.").openPopup(); 

var circle_1728 = L.circle(coords_1728, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1729 = [ 27.88117393875 , -82.82758980575]; 
var markers_1729 = L.marker(coords_1729).addTo(map); 
markers_1729.bindPopup("UMTB").openPopup(); 

var circle_1729 = L.circle(coords_1729, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1730 = [ 32.4590574 , -90.0537628]; 
var markers_1730 = L.marker(coords_1730).addTo(map); 
markers_1730.bindPopup("Dean Hulett LLC").openPopup(); 

var circle_1730 = L.circle(coords_1730, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1731 = [ 26.16363655 , -80.23619987457366]; 
var markers_1731 = L.marker(coords_1731).addTo(map); 
markers_1731.bindPopup("US Stem Cell Inc").openPopup(); 

var circle_1731 = L.circle(coords_1731, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1732 = [ 41.50627136467662 , -81.68068529850747]; 
var markers_1732 = L.marker(coords_1732).addTo(map); 
markers_1732.bindPopup("RSB Spine LLC").openPopup(); 

var circle_1732 = L.circle(coords_1732, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1733 = [ 0.0 , 0.0]; 
var markers_1733 = L.marker(coords_1733).addTo(map); 
markers_1733.bindPopup("Ridgeview Medical Center").openPopup(); 

var circle_1733 = L.circle(coords_1733, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1734 = [ 41.581672729611306 , -93.78577157279152]; 
var markers_1734 = L.marker(coords_1734).addTo(map); 
markers_1734.bindPopup("Medtronic Inc").openPopup(); 

var circle_1734 = L.circle(coords_1734, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1735 = [ 25.787314178627003 , -80.20404218192219]; 
var markers_1735 = L.marker(coords_1735).addTo(map); 
markers_1735.bindPopup("University of Miami Miller School of Medicine Tissue Bank").openPopup(); 

var circle_1735 = L.circle(coords_1735, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1736 = [ 40.84642874671361 , -74.57369274647887]; 
var markers_1736 = L.marker(coords_1736).addTo(map); 
markers_1736.bindPopup("New Jersey Surgical Solutions, Inc.").openPopup(); 

var circle_1736 = L.circle(coords_1736, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1737 = [ 37.1100598 , -113.5826491]; 
var markers_1737 = L.marker(coords_1737).addTo(map); 
markers_1737.bindPopup("Dixie Regional Medical Center").openPopup(); 

var circle_1737 = L.circle(coords_1737, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1738 = [ 35.21287095 , -106.71324849574629]; 
var markers_1738 = L.marker(coords_1738).addTo(map); 
markers_1738.bindPopup("Uhiversity of New Mexico Hospital -  Andrology Laboratory").openPopup(); 

var circle_1738 = L.circle(coords_1738, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1739 = [ 18.36805848533333 , -66.10723527466666]; 
var markers_1739 = L.marker(coords_1739).addTo(map); 
markers_1739.bindPopup("Biomet Orthopedics Puerto Rico, Inc.").openPopup(); 

var circle_1739 = L.circle(coords_1739, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1740 = [ 38.251255884660914 , -85.74952666581999]; 
var markers_1740 = L.marker(coords_1740).addTo(map); 
markers_1740.bindPopup("University of Louisville Physicians OBGYN & Womens Health Fertility Center").openPopup(); 

var circle_1740 = L.circle(coords_1740, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1741 = [ 37.72833463739496 , -97.23095917941176]; 
var markers_1741 = L.marker(coords_1741).addTo(map); 
markers_1741.bindPopup("The Center for Reproductive Medicine").openPopup(); 

var circle_1741 = L.circle(coords_1741, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1742 = [ 40.08203693274074 , -75.2990494037037]; 
var markers_1742 = L.marker(coords_1742).addTo(map); 
markers_1742.bindPopup("Liventa Bioscience Inc.").openPopup(); 

var circle_1742 = L.circle(coords_1742, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1743 = [ 29.646793318429488 , -98.48270977676282]; 
var markers_1743 = L.marker(coords_1743).addTo(map); 
markers_1743.bindPopup("Fertility Institute of Texas, PLLC").openPopup(); 

var circle_1743 = L.circle(coords_1743, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1744 = [ 34.74358686839827 , -92.2792390943723]; 
var markers_1744 = L.marker(coords_1744).addTo(map); 
markers_1744.bindPopup("Arkansas Childrens Hospital Blood Bank/HT").openPopup(); 

var circle_1744 = L.circle(coords_1744, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1745 = [ 40.94480132257389 , -73.06075604100535]; 
var markers_1745 = L.marker(coords_1745).addTo(map); 
markers_1745.bindPopup("IVF Laboratory at John T Mather Memorial Hospital").openPopup(); 

var circle_1745 = L.circle(coords_1745, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1746 = [ 33.9528472 , -84.5496148]; 
var markers_1746 = L.marker(coords_1746).addTo(map); 
markers_1746.bindPopup("Vivex Biomedical Inc").openPopup(); 

var circle_1746 = L.circle(coords_1746, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1747 = [ 33.903557991104734 , -98.48945461018651]; 
var markers_1747 = L.marker(coords_1747).addTo(map); 
markers_1747.bindPopup("Falls Tech Inc.").openPopup(); 

var circle_1747 = L.circle(coords_1747, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1748 = [ 38.86697955017159 , -94.77909601427592]; 
var markers_1748 = L.marker(coords_1748).addTo(map); 
markers_1748.bindPopup("S2 Medical Inc").openPopup(); 

var circle_1748 = L.circle(coords_1748, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1749 = [ 21.305932378640776 , -157.8561746538835]; 
var markers_1749 = L.marker(coords_1749).addTo(map); 
markers_1749.bindPopup("ImpactOrtho Inc (Hawaii)").openPopup(); 

var circle_1749 = L.circle(coords_1749, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1750 = [ 40.9256538 , -73.140943]; 
var markers_1750 = L.marker(coords_1750).addTo(map); 
markers_1750.bindPopup("Long Island IVF-Stony Brook").openPopup(); 

var circle_1750 = L.circle(coords_1750, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1751 = [ 40.50723434989317 , -74.50873861036324]; 
var markers_1751 = L.marker(coords_1751).addTo(map); 
markers_1751.bindPopup("IVF New Jersey Fertility & Gynecology Center LLC").openPopup(); 

var circle_1751 = L.circle(coords_1751, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1752 = [ 21.305932378640776 , -157.8561746538835]; 
var markers_1752 = L.marker(coords_1752).addTo(map); 
markers_1752.bindPopup("Kaimana Orthopedics Corp.").openPopup(); 

var circle_1752 = L.circle(coords_1752, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1753 = [ 38.77466479288136 , -90.37734134101694]; 
var markers_1753 = L.marker(coords_1753).addTo(map); 
markers_1753.bindPopup("Aesculap Inc").openPopup(); 

var circle_1753 = L.circle(coords_1753, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1754 = [ 47.614885168 , -117.358273336]; 
var markers_1754 = L.marker(coords_1754).addTo(map); 
markers_1754.bindPopup("Dixon Medical Inc.").openPopup(); 

var circle_1754 = L.circle(coords_1754, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1755 = [ 40.76224903918576 , -73.52296955162046]; 
var markers_1755 = L.marker(coords_1755).addTo(map); 
markers_1755.bindPopup("Sunrise Medical Laboratories, Inc.").openPopup(); 

var circle_1755 = L.circle(coords_1755, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1756 = [ 38.9013729 , -77.2651762]; 
var markers_1756 = L.marker(coords_1756).addTo(map); 
markers_1756.bindPopup("United Medical Laboratories, Inc.").openPopup(); 

var circle_1756 = L.circle(coords_1756, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1757 = [ 38.924817168604655 , -79.85259420116279]; 
var markers_1757 = L.marker(coords_1757).addTo(map); 
markers_1757.bindPopup("Davis Health System, Inc.").openPopup(); 

var circle_1757 = L.circle(coords_1757, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);



const coords_1758 = [ 32.84448958747967 , -96.6969451811382]; 
var markers_1758 = L.marker(coords_1758).addTo(map); 
markers_1758.bindPopup("ArtiMed Solutions, LLC.").openPopup(); 

var circle_1758 = L.circle(coords_1758, { 
color: "red",
fillColor: "#f03",
fillOpacity: 0.5,
radius: 5
}).addTo(map);


