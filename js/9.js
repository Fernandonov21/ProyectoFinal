//Objetos

const nombreProducto = "Monitor";
const Precio = 10;
const disponoble = true;

const Producto = {
    nombreProducto : "Monitor",
    Precio : 300,
    disponoble : true
}

// console.log(Producto);
// console.log(Producto.Precio);

//Agregar nuevas propiedades

Producto.imagen = "imagen.jpg";


//Eliminar propiedades

delete Producto.disponoble;
delete Producto.imagen;
console.log(Producto);
