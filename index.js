// 1.crear un arreglo de 4 estudiantes

let nombresEstudiantes = ["Ana", "Pedro", "Juan", "Diego"];


// 2.mostrar la lista utilizando un ciclo for
for(let index = 0; index < nombresEstudiantes.length; index++){
    console.log("lista"+index);
    console.log(nombresEstudiantes [index]);
}


// 3.contar la cantidad total de estudiantes 

console.log("Cantidad de estudiantes "+ nombresEstudiantes.length);


// 4. agregar 2 estudiantes nuevos al arreglo

nombresEstudiantes.push("Esteban", "Carolina");
console.log("Nueva Lista");
console.log(nombresEstudiantes);


// 5. Buscar un estudiante especifico dentro del arreglo
let estudianteBuscado = "Juan";
let posicion = nombresEstudiantes.indexOf(estudianteBuscado); //el indexOF si encuentra el elemento devuelve el indice (posicion), si no lo encuentra devuelve -1

// si lo encuentra, es decir, es mayor a -1... muestra al estudiante y su posicion, de lo contrario, mensaje de errorrr
if (posicion >= 0) {
    console.log("El estudiante '" + estudianteBuscado + "' está en la posición " + posicion);
} else {
    console.log("El estudiante '" + estudianteBuscado + "' no se encuentra en la lista");
}

// 6. Eliminar estudiante
let estudianteEliminar = "Pedro";
let posicionEliminar = nombresEstudiantes.indexOf(estudianteEliminar);


if (posicionEliminar >= 0) {
    nombresEstudiantes.splice(posicionEliminar, 1); // el 1 indica cuantos elementos borrar
    console.log("Estudiante '" + estudianteEliminar + "' eliminado.");
} else {
    console.log("No se encontró a '" + estudianteEliminar + "' para eliminar.");
}

// 7. Mostrar la lista final de estudiantes
console.log("Lista final de estudiantes:");
console.log(nombresEstudiantes);

//se arregla el nombre de la variable estudiantes xd, se terminan puntos 5 6 y 7