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
    map.flyTo(result);
    map.setZoom(10);

    // How to add marker with geocode result \\
    new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setHTML("<p>La Hacienda de Los Barrios</p> <p>18747 Redland Rd, San Antonio, TX 78259</p>"))
        .addTo(map);
});

geocode("15900 La Cantera Pkwy #21200, San Antonio, TX 78256", mapboxToken).then(function(result) {
    console.log(result);
    map.flyTo(result);
    map.setZoom(10);

    // How to add marker with geocode result \\
    new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setHTML("<p>Whiskey Cake Kitchen & Bar</p> <p>15900 La Cantera Pkwy #21200, San Antonio, TX 78256</p>"))
        .addTo(map);
});

geocode("5450 Babcock Rd #112, San Antonio, TX 78240", mapboxToken).then(function(result) {
    console.log(result);
    map.flyTo(result);
    map.setZoom(10);

    // How to add marker with geocode result \\
    new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(new mapboxgl.Popup().setHTML("<p>Dallah Mediterranean Cuisine</p> <p>5450 Babcock Rd #112, San Antonio, TX 78240</p>"))
        .addTo(map);
});

var restaurants = [
    {
        name: "La Hacienda de Los Barrios",
        cuisineType: "Tex-Mex eatery",
        address: "18747 Redland Rd, San Antonio, TX 78259"
    },
    {
        name: "Whiskey Cake Kitchen & Bar",
        cuisineType: "Locally sourced farm-to-kitchen dishes",
        address: "15900 La Cantera Pkwy #21200, San Antonio, TX 78256"
    },
    {
        name: "Dallah Mediterranean Cuisine",
        cuisineType: "Mediterranean",
        address: "5450 Babcock Rd #112, San Antonio, TX 78240"
    }
]

restaurants.forEach(function (restaurant) {
    console.log(restaurant)
})
