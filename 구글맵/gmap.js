function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.39094933041195, lng: -122.02503913145092 },
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    });
    const infoWindow = new google.maps.InfoWindow();
    const draggableMarker = new google.maps.marker.AdvancedMarkerView({
      map,
      position: { lat: 37.39094933041195, lng: -122.02503913145092 },
      draggable: true,
      title: "This marker is draggable.",
    });
  
    draggableMarker.addListener("dragend", (event) => {
      const position = draggableMarker.position;
  
      infoWindow.close();
      infoWindow.setContent(
        `Pin dropped at: ${position.lat()}, ${position.lng()}`
      );
      infoWindow.open(draggableMarker.map, draggableMarker);
    });
  }
  
  window.initMap = initMap;