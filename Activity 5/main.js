document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario al servidor
  
    // Obtener los valores de las filas y columnas
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
  
    // Validar los inputs (comprobar si los números son positivos)
    if (rows <= 0 || columns <= 0) {
      alert("Por favor, ingresa números positivos para las filas y columnas.");
      return;
    }
  
    // Eliminar cualquier tabla existente si está presente
    const existingTable = document.getElementById('generated');
    if (existingTable) {
      existingTable.remove();
    }
  
    // Crear un nuevo elemento de tabla
    const table = document.createElement('table');
    table.id = 'generated'; // Asignar id para una referencia más fácil
  
    // Generar filas y columnas
    for (let i = 1; i <= rows; i++) {
      const row = document.createElement('tr');
      for (let j = 1; j <= columns; j++) {
        const colum = document.createElement('td');
        colum.textContent = `Fila: ${i}, Columna: ${j}`;
        row.appendChild(colum);
      }
      table.appendChild(row);
    }
  
    // Añadir la nueva tabla al contenedor
    document.getElementById('tableContainer').appendChild(table);
});
