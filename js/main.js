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
}
];

var plantilla = '<div class="col s12 m7">' + '<h5 class="header nombre">_nombre_</h5>' +
                '<div class="card horizontal">' + '<div class="card-image">' +
                '<img src="http://lorempixel.com/100/190/nature/6">' + '</div>' +
                '<div class="card-stacked">' + '<div class="card-content">' +
                '<p class="direccion">_direccion_</p>' + '<p class="telefono">_telefono</p>'+
                '</div>' + '</div>' + '</div>' + '</div>';

var cargarPagina = function() {
  $("#search-form").submit(busqueda);
}

var busqueda = function(e) {
  e.preventDefault();
  var buscar = $("#search").val().toLowerCase();
  var resultados = restaurantes.filter(function(lugar){
    return lugar.nombre.toLowerCase().indexOf(buscar) >=0;
  });

  lugaresFiltrados(resultados);
}

var lugaresFiltrados = function(restaurantes) {
  var plantillaFinal = "";
  restaurantes.forEach(function(lugar){
    plantillaFinal += plantilla.replace("_nombre_", lugar.nombre).
                      replace("_direccion", lugar.colonia).
                      replace("_telefono_", lugar.ubicacion);
  });
  $(".comida").html(plantillaFinal);
}

$(document).ready(cargarPagina);
