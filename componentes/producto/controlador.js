const storage = require('./almacenamiento')

function agregarProducto( producto ) {
    return new Promise((resolve, reject) => {
        storage.agregar( producto )
        resolve( producto )
    })
}

function obtenerProductos( filtroProducto ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtroProducto ) )
    })
}

function actualizarProducto( serie, nombre, stock, valor ) {
    return new Promise((resolve, reject) => {
        let producto = {
            serie: serie,
            nombre: nombre,
            stock: stock,
            valor: valor
        }
        storage.actualizar( producto )
        resolve( producto )
    })
}

function eliminarProducto( serie ) {
    return new Promise((resolve, reject) => {
        storage.eliminar( serie )
        resolve( serie )
    })
}

module.exports = {
    agregarProducto,
    obtenerProductos,
    actualizarProducto,
    eliminarProducto,
}