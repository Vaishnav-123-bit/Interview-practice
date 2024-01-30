(async function () {
    const data = await fetch("./src/data.json");
    const res = await data.json();

    let employees = res;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = employees[0];

    const employeeList = document.querySelector('.employee_names--list');
    const employeeInfo = document.querySelector('.employee_single--list');

    const renderEmployee = () => {
        employeeList.innerHTML = '';
        employees.forEach((emp) => {
            const employee = document.createElement("span"); // Create a <span> element

            // Set the class name
            employee.classList.add("employees__names--item");

            // Check if the current employee is the selected one
            if (parseInt(selectedEmployeeId, 10) === emp.id) {
                employee.classList.add("selected");
                selectedEmployee = emp; // Update selectedEmployee with the current employee
            }

            // Set the inner text content
            employee.textContent = emp.name; // Adjust this based on your data structure

            // Append the created element to employeeList
            employeeList.appendChild(employee);
        });
    };

    renderEmployee();
})();
