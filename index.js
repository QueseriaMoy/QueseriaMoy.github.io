

/*let cremaInfo = document.getElementById("cremas");
let cremaImg = document.getElementById("imgCrema");

function mostrarInfoCrema(){
  cremaInfo.style.visibility = "visible";
}
function mostrarImgCrema(){
  cremaInfo.style.visibility = "hidden";
}

cremaImg.addEventListener("click", mostrarInfoCrema);
cremaInfo.addEventListener("click", mostrarImgCrema);
*/

let ventanaInfo = document.getElementById("ventanaInfo");
let producto = document.getElementById("producto");
let imagen1 = document.getElementById("imagen1");
let tipo1 = document.getElementById("tipo1");
let imagen2 = document.getElementById("imagen2");
let tipo2 = document.getElementById("tipo2");
let tacha = document.getElementById("tacha");

//CREMA
let cremaImg = document.getElementById("imgCrema");
cremaImg.addEventListener("click", function () {
  ventanaInfo.style.visibility = "visible";
  producto.textContent = "Crema";
  imagen1.src = "crema.webp";
  tipo1.textContent = "Chica 30$";
  imagen2.src = "crema.webp";
  tipo2.textContent = "Grande 40$";
});

tacha.addEventListener("click", function (){
  ventanaInfo.style.visibility = "hidden";
});

/*CARRITO*/
/*const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");
const boton = document.getElementById("agregar");

// Agregar eventos a los botones
document.querySelectorAll(".agregar").forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
  // Obtener datos del producto
  const producto = event.target.closest(".producto");
  const nombre = producto.getAttribute("data-nombre");
  const precio = parseFloat(producto.getAttribute("data-precio"));

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find((item) => item.nombre === nombre);

  if (productoExistente) {
    // Incrementar cantidad si ya existe
    productoExistente.cantidad++;
  } else {
    // Agregar nuevo producto
    carrito.push({nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
}
// Función para actualizar el DOM del carrito
function actualizarCarrito() {
  // Limpiar lista
  listaCarrito.innerHTML = "";

  // Renderizar cada producto del carrito
  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
    listaCarrito.appendChild(li);
    listaCarrito.innerHTML+="<br>";
  });

  // Calcular y mostrar el total
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,0);
  totalElement.textContent = total.toFixed(2);
}*/