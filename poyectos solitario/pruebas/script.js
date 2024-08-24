// Obtener los elementos de la página
const botonIrAPagina2 = document.getElementById('boton-ir-a-pagina2');
const botonVolverAIndex = document.getElementById('boton-volver-a-index');

// Función para ir a la página 2
function irAPagina2() {
  document.body.classList.add('desvanecer');
  setTimeout(function() {
    window.location.href = 'pagina2.html';
  }, 500);
}

// Función para volver al index
function volverAIndex() {
  document.body.classList.add('desvanecer');
  setTimeout(function() {
    window.location.href = 'index.html';
  }, 500);
}

// Agregar eventos a los botones
botonIrAPagina2.addEventListener('click', irAPagina2);
botonVolverAIndex.addEventListener('click', volverAIndex);

// Agregar evento de carga de página
window.addEventListener('load', function() {
  document.body.classList.add('aparecer');
});