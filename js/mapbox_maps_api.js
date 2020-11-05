"use strict";

mapboxgl.accessToken = mapboxToken;

var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.5413, 29.5512], // starting position [lng, lat]
    zoom: 11, // starting zoom

}

var map = new mapboxgl.Map(mapOptions);

// geocode("18747 Redland Rd, San Antonio, TX 78259", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setZoom(10);
//
//     // How to add marker with geocode result \\
//     // new mapboxgl.Marker(markerHaciendaOptions)
//     //     .setLngLat(result)
//     //     .setPopup(new mapboxgl.Popup().setHTML("<p>La Hacienda de Los Barrios</p> <p>18747 Redland Rd, San Antonio, TX 78259</p>"))
//     //     .addTo(map);
// });

// var markerHaciendaOptions = {
//     color: "#cf3a87",
// }

// geocode("15900 La Cantera Pkwy #21200, San Antonio, TX 78256", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setZoom(10);
//
//     // How to add marker with geocode result \\
//     // new mapboxgl.Marker(markerWhiskeyOptions)
//     //     .setLngLat(result)
//     //     .setPopup(new mapboxgl.Popup().setHTML("<p>Whiskey Cake Kitchen & Bar</p> <p>15900 La Cantera Pkwy #21200, San Antonio, TX 78256</p>"))
//     //     .addTo(map);
// });

// var markerWhiskeyOptions = {
//     color: "#3ead88",
// }

// geocode("5450 Babcock Rd #112, San Antonio, TX 78240", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setZoom(10);
//
//     // How to add marker with geocode result \\
//     // new mapboxgl.Marker(markerDallahOptions)
//     //     .setLngLat(result)
//     //     .setPopup(new mapboxgl.Popup().setHTML("<p>Dallah Mediterranean Cuisine</p> <p>5450 Babcock Rd #112, San Antonio, TX 78240</p>"))
//     //     .addTo(map);
// });

// var markerDallahOptions = {
//     color: "#d1b02e",
// }

var restaurants = [
    {
        info: {
            name: "La Hacienda de Los Barrios",
            cuisineType: "Tex-Mex eatery",
        },
        address: "18747 Redland Rd, San Antonio, TX 78259"
    },
    {
        info: {
            name: "Whiskey Cake Kitchen & Bar",
            cuisineType: "Locally sourced farm-to-kitchen dishes",
        },
        address: "15900 La Cantera Pkwy #21200, San Antonio, TX 78256"
    },
    {
        info: {
            name: "Dallah Mediterranean Cuisine",
            cuisineType: "Mediterranean",
        },
        address: "5450 Babcock Rd #112, San Antonio, TX 78240"
    }
];

restaurants.forEach(function (restaurant) {
    console.log(restaurant)
    geocode(restaurant.address, mapboxToken).then(function (result) {
        var popup = new mapboxgl.Popup()
            .setText(restaurant.info.name + "\n" + restaurant.info.cuisineType)

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);
    });
});

var markerOptions = {
    color: "#d1b02e",
}