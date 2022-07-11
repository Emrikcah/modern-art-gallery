
function mapIt() {
   var map = L.map("map").setView([41.48131, -71.31041], 13);
   console.log(map);
   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
   }).addTo(map);
}

  

