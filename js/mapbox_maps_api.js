"use strict";

mapboxgl.accessToken = mapboxToken;

var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 10, // starting zoom
}

var map = new mapboxgl.Map(mapOptions);
