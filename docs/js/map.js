var map = L.map('map').setView([37.8, -96], 4);

	var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
	}).addTo(map);

	// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<b>US Arthritis-Crude Prevalence</b>' +  (props ?
			'<br><b>' + props.NAME + '</b><br><b>' + props['Arthritis-Crude Prevalence'] + '%</b> with arthritis' : '<br>Hover over a state');
	};

	info.addTo(map);


	function style(feature) {
		return {
			weight: 0,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: feature.properties.Color
		};
	}


	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}



	function resetHighlight(e) {
		geojson_counties.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	function onEachFacility(feature, layer) {
			var website = feature.properties.website;

			var popupContent = '<b>' +
					feature.properties.name + '</b><br>' + '<a href="' + feature.properties.website + '" target="_blank" rel="noopener">' + feature.properties.website + '</a>'  + '<br>' + feature.properties.city + ', ' + feature.properties.state + '</p>';
			if (feature.properties && feature.properties.popupContent) {
				popupContent += feature.properties.popupContent;
			}
			layer.bindPopup(popupContent);
		}

	/* global statesData */
	var geojson_counties = L.geoJson(countiesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);


	/* global statesData */
	var geojson_facility = L.geoJson(facilityData, {
		style: style,
		onEachFeature: onEachFacility
	}).addTo(map);


	/* cite source of information */
	map.attributionControl.addAttribution('| <a href="https://www.cdc.gov/arthritis/data_statistics/state-data-current.htm" target="_blank" rel="noopener">CDC Arthritis Statistics</a> | <a href="https://datadashboard.fda.gov/ora/cd/inspections.htm" target="_blank" rel="noopener"> FDA Inspection Record </a>' );
