<!DOCTYPE html>
<html>
  <head>
    <title>Google Map</title>
    <style>
      #map {
        height: 100vh;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <h1>Our Location</h1>
    <div id="map"></div>

    <script>
      function initMap() {
        const location = { lat:}; 
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: location,
        });

        new google.maps.Marker({
          position: location,
          map: map,
        });
      }
    </script>

    <script async
      src=
    </script>
  </body>
</html>
