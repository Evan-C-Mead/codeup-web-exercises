"use strict";

mapboxgl.accessToken = mapboxToken;

var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4809, 29.4949], // starting position [lng, lat]
    zoom: 10, // starting zoom

}

var map = new mapboxgl.Map(mapOptions);

geocode("18747 Redland Rd, San Antonio, TX 78259", mapboxToken).then(function(result) {
    console.log(result);
    map.jumpTo(result);
    map.setZoom(10);

    // How to add marker with geocode result \\
    new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setText("La Hacienda de Los Barrios \n 18747 Redland Rd, San Antonio, TX 78259"))
        .addTo(map);
});

geocode("15900 La Cantera Pkwy #21200, San Antonio, TX 78256", mapboxToken).then(function(result) {
    console.log(result);
    map.jumpTo(result);
    map.setZoom(10);

    // How to add marker with geocode result \\
    new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setText("Whiskey Cake Kitchen & Bar \n 15900 La Cantera Pkwy #21200, San Antonio, TX 78256"))

        .addTo(map);
});

geocode("5450 Babcock Rd #112, San Antonio, TX 78240", mapboxToken).then(function(result) {
    console.log(result);
    map.jumpTo(result);
    map.setZoom(10);

    // How to add marker with geocode result \\
    new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setText("Dallah Mediterranean Cuisine\n \n 5450 Babcock Rd #112, San Antonio, TX 78240"))

        .addTo(map);
});