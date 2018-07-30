function getImage(latitude, longitude) {
    const img = new Image;
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
    return img;
}
function getPosition(position) {
    const img = getImage(position.coords.latitude, position.coords.longitude);
    document.body.appendChild(img);
}
function error(err) {
    console.warn(`Error(${err.code}): ${err.message}`);
};
function findMe() {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser");
    }
    navigator.geolocation.getCurrentPosition(getPosition, error);
}




