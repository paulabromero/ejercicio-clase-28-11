// 1.crear un arreglo de 4 estudiantes

let nombresEestudiantes = ["Ana", "Pedro", "Juan", "Diego"];


// 2.mostrar la lista utilizando un ciclo for
for(let index = 0; index < nombresEestudiantes.length; index++){
    console.log("lista"+index);
    console.log(nombresEestudiantes [index]);
}


// 3.contar la cantidad total de estudiantes 

console.log("Cantidad de estudiantes "+ nombresEestudiantes.length);


// 4. agregar 2 estudiantes nuevos al arreglo

nombresEestudiantes.push("Esteban", "Carolina");
console.log("Nueva Lista");
console.log(nombresEestudiantes);


// 5. Buscar un estudiante especifico dentro del arreglo
// busqueda con indexOf para buscar el primer resultado desde arriba
// busqueda con lastindexOf para buscar el primer resultado desde abajo


// 6. Eliminar un estudiante del arreglo
//  pop : elimina el ultimo elemento del arreglo
// shift : elimina el primer elemento del arreglo


// 7. Mostrar la lista final de estudiantes