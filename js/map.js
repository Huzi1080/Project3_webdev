function initMap() {
  const location = { lat: 41.8781, lng: -87.6298 }; 

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Chicago!!",
  });
}

