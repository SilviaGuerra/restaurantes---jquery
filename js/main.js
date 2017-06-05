function initMap() {
  var uluru = {lat: 19.417575, lng: -99.164701};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

var restaurantes = [
{
  "nombre": "Cafebreria El Pendulo Roma",
  "colonia": "Roma Norte",
  "categoria": "cafeteria",
  "ubicacion": "19.418280, -99.158578"
},
{
  "nombre": "Delirio Mónica Patiño",
  "colonia": "Roma Norte",
  "categoria": "sandwiches",
  "ubicacion": "19.417041, -99.165436"
},
{
  "nombre": "Contramar",
  "colonia": "Roma Norte",
  "categoria": "mariscos",
  "ubicacion": "19.419995, -99.166209"
},
{
  "nombre": "Le Pain Quotidien",
  "colonia": "Condesa",
  "categoria": "cafeteria",
  "ubicacion": "19.414405, -99.166381"
},
{
  "nombre": "Fresh Mexico",
  "colonia": "Roma Norte",
  "categoria": "Tacos",
  "ubicacion": "19.417801, -99.157798"
},
];

var cargarPagina = function(){
  $("#search").submit(busqueda);
}
