function searchProduct() {
    window.location.href = "search-results.html";
}function changeLanguage() {
    let language = document.getElementById("language").value;

    alert("Selected language: " + language);
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    alert(
        "Latitude: " + position.coords.latitude +
        "\nLongitude: " + position.coords.longitude
    );
}
