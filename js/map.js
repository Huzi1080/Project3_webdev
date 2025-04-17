function initMap() {
  const location = { lat: 40.7128, lng: -74.0060 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "We are here!",
  });
}

