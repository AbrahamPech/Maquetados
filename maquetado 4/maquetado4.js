function updateMap(address) {
    var frame = document.getElementById('mapFrame');
    frame.src = "https://maps.google.com/maps?q=" + address + "&output=embed";
}

function reloadPage() {
    location.reload()
}