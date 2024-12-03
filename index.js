/*const vaso = document.getElementById("vaso");
const casa = document.getElementById("casa");
const antes = document.getElementById("antes");
const despues = document.getElementById("despues");

function cam(){
  antes.style.visibility = "hidden";
  despues.style.visibility = "visible";
}
function cam1(){
  antes.style.visibility = "visible";
  despues.style.visibility = "hidden";  
}

  vaso.addEventListener("click", cam);
  casa.addEventListener("click", cam1);
*/

let cremaInfo = document.getElementById("cremas");
let cremaImg = document.getElementById("imgCrema");

function mostrarInfoCrema(){
  cremaInfo.style.visibility = "visible";
}
function mostrarImgCrema(){
  cremaInfo.style.visibility = "hidden";
}

cremaImg.addEventListener("click", mostrarInfoCrema);
cremaInfo.addEventListener("click", mostrarImgCrema);

const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");

// Agregar eventos a los botones
document.querySelectorAll(".agregar").forEach((boton) => {
  boton.addEventListener("click", agregarAlCarrito);
});

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
  // Obtener datos del producto
  const producto = event.target.closest(".producto");
  const id = producto.getAttribute("data-id");
  const nombre = producto.getAttribute("data-nombre");
  const precio = parseFloat(producto.getAttribute("data-precio"));

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find((item) => item.id === id);

  if (productoExistente) {
    // Incrementar cantidad si ya existe
    productoExistente.cantidad++;
  } else {
    // Agregar nuevo producto
    carrito.push({ id, nombre, precio, cantidad: 1 });
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
    const salto = document.createElement("br");
    li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
    listaCarrito.appendChild(li);
    listaCarrito.innerHTML+="<br>";
  });

  // Calcular y mostrar el total
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,0);
  totalElement.textContent = total.toFixed(2);
}