function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: { lat: 37.55978008419305, lng: 126.92317569869374 },
    });

    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            map: map,
            label: locations[i].place,
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
        });
    }
}
const locations = [
    { place: '본사', lat: 37.55978008419305, lng: 126.92317569869374 },
    { place: '지사', lat: 37.5588310131484, lng: 126.92080376395447 },
];
