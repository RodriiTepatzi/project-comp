const contenedorHTML=document.querySelector("#cart-data");

let productos = [
    new Producto(1, "Nvidia GeForce RTX 3050", "assets/img/rtx-3050.jpg", "6,229.00"),
    new Producto(2, "MSI GeForce RTX 4080 16GB GDDR6X", "assets/img/rtx-4080.jpeg", "6229.00"),
    new Producto(3, "Gabinete Ocelot Gaming OGMC01", "assets/img/ogmc01.jpg", "1099.00"),
    new Producto(4, "AMD Ryzen™ 9 7950X Procesador", "assets/img/ryzen9-7950x.jpg", "11609.00"),
    new Producto(5, "MSI Pro X670-P WiFi DDR5 Motherboard", "assets/img/msiprox670-p.jpg", "6808.78"),
    new Producto(6, "Kingston Fury Beast Black DDR5 32 GB", "assets/img/kingstonfury.jpg", "2,294.88"),
    new Producto(7, "Asus ROG Zephyrus 15.6\" QHD Gaming Laptop", "assets/img/rogzephyrus.jpg", "39,999.00"),
    new Producto(8, "NZXT KRAKEN Z53 ENFRIAMIENTO LIQUIDO 240MM", "assets/img/nzxtkrakenz53.jpg", "5,118.20"),
    new Producto(9, "Corsair Serie RMX (2021), RM850x, 850 W", "assets/img/corsair850x.jpg", "3,298.95"),
    new Producto(10, "Razer BlackWidow V3 Mini HyperSpeed", "assets/img/razerblackwidow.jpg", "3,345.85"),
];

let carrito = []

var modal = document.getElementById("myModal");
var btn = document.getElementById("carrito");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function agregarAlCarrito(obj) {
    var producto = productos.find(producto => producto.id == obj);

    if(carrito.find(product => product.id == producto.id) != null){
        carrito.find(product => product.id == producto.id).cantidad++;
    }else{
        carrito.push(new CarritoProducto(1, producto));
    }

    

    console.log(producto);

    carritoRecargar();
}

function carritoRecargar() {
    contenedorHTML.replaceChildren();

    carrito.forEach(i => {
        const principal = document.createElement("div");
        principal.classList.add("item");

        const itemDataDiv = document.createElement("div");
        itemDataDiv.classList.add("item-data");
        
        const cantidad = document.createElement("div");
        cantidad.classList.add("cantidad");

        const nameDiv = document.createElement("div");
        nameDiv.classList.add("product-name");

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("price");

        const botonDiv = document.createElement("div");
        botonDiv.classList.add("boton-container");

        const spacerDiv = document.createElement("div");
        spacerDiv.classList.add("spacer");

        const boton = document.createElement("button");
        boton.classList.add("boton");
        botonDiv.addEventListener('click', () => {borrarItemCarrito(i.id); carritoRecargar();});
        
        const borrarBtn = document.createElement("i");
        borrarBtn.classList.add("fa-sharp");
        borrarBtn.classList.add("fa-solid");
        borrarBtn.classList.add("fa-trash");

        contenedorHTML.appendChild(principal);
        itemDataDiv.appendChild(cantidad);
        itemDataDiv.appendChild(nameDiv);
        itemDataDiv.appendChild(spacerDiv);
        itemDataDiv.appendChild(priceDiv);
        itemDataDiv.appendChild(botonDiv);
        principal.appendChild(itemDataDiv);
        cantidad.textContent = i.cantidad;
        nameDiv.textContent = i.productName;
        priceDiv.textContent = "$" + i.productPrice * i.cantidad;
        boton.textContent = "Borrar";
        botonDiv.appendChild(boton);
        botonDiv.appendChild(borrarBtn);
    });
}

function borrarItemCarrito(id) {
    carrito.splice(carrito.indexOf(carrito.find(producto => producto.id == id)), 1);
}