function initMap() {
    const toronto = { lat: 1.119477, lng: 104.0008606 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: toronto,
        styles: /*PASTE YOUR SNAZZYMAPS ARRAY HERE*/,
        disableDefaultUI: true
    });
}

