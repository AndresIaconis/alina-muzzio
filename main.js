

// function Productos(literal){
//     this.nombre = literal.nombre;
//     this.precio = literal.precio;
//     this.stock = literal.stock;
// }

// const producto1 = new Productos ({nombre: 'Catarsis', precio: 780.000, stock: 90});
// const producto2 = new Productos ({nombre: 'Soleado', precio: 250.000, stock: 90});
// const producto3 = new Productos ({nombre: 'El Nacimiento', precio: 124.700, stock: 90});
// const producto4 = new Productos ({nombre: 'Tiniebla', precio: 900.5000, stock: 90});
// const producto5 = new Productos ({nombre: 'Ocaso', precio: 100.0000, stock: 90});
// const producto6 = new Productos ({nombre: 'El Hechizo', precio: 640.600, stock: 90});
// const producto7 = new Productos ({nombre: 'Tiniebla', precio: 230.000, stock: 90});
// const producto8 = new Productos ({nombre: 'El Hijo', precio: 400.500, stock: 90});
// const producto9 = new Productos ({nombre: 'Pensamiento', precio: 300.1000, stock: 90});
// const producto10 = new Productos ({nombre: 'El Camino', precio: , stock: 90});
// const producto11= new Productos ({nombre: 'Religión', precio: 800.000, stock: 90});
// const producto12 = new Productos ({nombre: 'Líneas', precio: 300.200, stock: 90});

const productosEnElCarrito = []
const productos = [
    {id: 1, nombre: 'Catarsis', precio: 780.000, stock: 90},
    {id: 2, nombre: 'Soleado', precio: 250.000, stock: 90},
    {id: 3, nombre: 'El Nacimiento', precio: 124.700, stock: 90},
    {id: 4, nombre: 'Tiniebla', precio: 900.5000, stock: 90},
    {id: 5, nombre: 'Ocaso', precio: 100.0000, stock: 90},
    {id: 6, nombre: 'El Hechizo', precio: 640.600, stock: 9},
    {id: 7, nombre: 'Tiniebla', precio: 230.000, stock: 90},
    {id: 8, nombre: 'El Hijo', precio: 400.500, stock: 90},
    {id: 9, nombre: 'Pensamiento', precio: 300.1000, stock: 90},
    {id: 10, nombre: 'El Camino', precio: 130000, stock: 90},
    {id: 11, nombre: 'Religión', precio: 800.000, stock: 90},
    {id: 12, nombre: 'Líneas', precio: 300.200, stock: 90},
];

let acumulador = ``; 

productos.forEach((producto) => {
    acumulador += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${producto.nombre}</h5>
                                    <!-- Product price-->
                                    $${producto.precio}
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a onclick="agregarAlCarrito(${producto.id})" class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
                            </div>
                        </div>
                    </div>`
});

document.getElementById("cards-container").innerHTML = acumulador;

function agregarAlCarrito(idDeProducto){
    const indiceEncontrado = productos.findIndex(producto => producto.id == idDeProducto);
    productosEnElCarrito.push(productos[indiceEncontrado]);
    console.log('Tenes ' + productosEnElCarrito.length + ' en el carrito');
    console.log(productosEnElCarrito);
};

// console.log(productos.length)