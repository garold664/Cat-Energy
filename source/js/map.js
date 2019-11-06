// Google Maps
var map;
function initMap() {
  var myLatLng = {lat: 59.938872, lng: 30.323047};
  var image = {
    url: 'img/map-pin.png'
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'Cat Energy'
});
}
