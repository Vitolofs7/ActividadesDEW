var employees = [
    { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
    { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
    { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
    { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
];

function employeesAlert(employees) {
    for (let i = 0; i < employees.length; i++) {
        let id = employees[i].id
        let name = employees[i].name
        let department = employees[i].department
        alert("ID: " + id + " Name: " + name + " Department: " + department)
    }
};

function generateTable(employeesData) {
    var tableBody = document.querySelector("#employeeTable tbody");

    tableBody.innerHTML = '';

    employeesData.forEach(function(employee) {
        var row = document.createElement("tr");

        // para el id
        var idCell = document.createElement("td");
        idCell.textContent = employee.id;
        row.appendChild(idCell);

        // para el nombre
        var nameCell = document.createElement("td");
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);

         // para el departamento
        var departmentCell = document.createElement("td");
        departmentCell.textContent = employee.department;
        row.appendChild(departmentCell);

        tableBody.appendChild(row);
    });
}
generateTable(employees);