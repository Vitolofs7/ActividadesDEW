// Lista de operaciones con los datos correspondientes
const OPERATIONS = [
    { operation: "push", data: [[1, 2, 3], 4] }, // Agregar 4 al array [1, 2, 3]
    { operation: "+", data: [1, 2, 3] }, // Sumar los valores 1, 2 y 3
    { operation: "+", data: [3] }, // Sumar el valor 3
    { operation: "*", data: [2, 3] }, // Multiplicar los valores 2 y 3
    { operation: "filter", data: [[1, 2, 3], 3] }, // Filtrar el valor 3 del array [1, 2, 3]
    { operation: "merge", data: [[1, 2, 3], [4, 5], [6], [7]] }, // Combinar varios arrays
];

// Función para sumar los elementos de un array
function opSum(data) {
    let sum = 0;
    data.forEach(number => {
        sum += number; // Agrega cada número al total
    });
    console.log("Sum:", sum); // Imprime la suma total
    return sum;
}

// Función para multiplicar los elementos de un array
function opMul(data) {
    let product = 1;
    data.forEach(number => {
        product *= number; // Multiplica cada número
    });
    console.log("Multiplication:", product); // Imprime el producto total
    return product;
}

// Función para agregar un elemento varias veces a un array
function opPush(data) {
    let array = data[0]; // Obtiene el array original
    for (let i = 1; i < data.length; i++) {
        array.push(data[i]); // Agrega el elemento al array en cada iteración
    }
    console.log("After Push:", array); // Imprime el array modificado
    return array;
}

/*
    function opPush(data) {
        return data.reduce(
            (acc, curr) => [...acc, curr],
            []
        );
    }
*/ 

// Función para combinar múltiples arrays en uno solo
function opMerge(data) {
    let mergedArray = [];
    data.forEach(array => {
        mergedArray = mergedArray.concat(array); // Combina los arrays
    });
    console.log("Merged Array:", mergedArray); // Imprime el array combinado
    return mergedArray;
}

/*
    function opMerge(data){
        return [].concat(...data);
    }
*/

// Función para filtrar un valor específico de un array
function opFilter(data) {
    let array = data[0]; // Obtiene el array
    for (let i = 1; i < data.length; i++) {
        array = array.filter(num => num !== data[i])
    }
    console.log("filtered Array:", array);
    return array;
}

// Función que procesa la lista de operaciones de forma secuencial
function batchProcessing(operations) {
    for (let i = 0; i < operations.length; i++) {
        const op = operations[i];
        switch (op.operation) {
            case "+": // Llama a la función de suma
                opSum(op.data);
                break;
            case "*": // Llama a la función de multiplicación
                opMul(op.data);
                break;
            case "push": // Llama a la función para agregar un elemento
                opPush(op.data);
                break;
            case "merge": // Llama a la función para combinar arrays
                opMerge(op.data);
                break;
            case "filter": // Llama a la función de filtrado
                opFilter(op.data);
                break;
        }
    }
}

// Ejecuta la función batchProcessing con la lista de operaciones
batchProcessing(OPERATIONS);
