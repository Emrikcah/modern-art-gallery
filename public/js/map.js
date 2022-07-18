
   var map = L.map("map").setView([41.481310, -71.310410], 15);
   
   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      minZoom: 10,
      maxZoom: 20,
      attribution: "© OpenStreetMap",
   }).addTo(map);

   map.removeControl(map.zoomControl);

  var  locationIcon = L.icon({
   iconUrl:'../assets/icon-location.svg',
   iconSize:[66,88],
   iconAnchor:[50,60]
  });

  L.marker([41.48131, -71.31041],{
   icon: locationIcon
  }).addTo(map);

