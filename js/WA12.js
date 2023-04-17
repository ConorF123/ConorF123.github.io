// Problem 1
var employee1 = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true
};

var employee2 = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true
};

var employee3 = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false
};

console.log("Problem 1:")
console.log(employee1)
console.log(employee2)
console.log(employee3)

// Problem 2
var company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [employee1, employee2, employee3]
};

console.log("Problem 2:")
console.log(company)

// Problem 3
var newEmployee = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};
company.employees.push(newEmployee);

console.log("Problem 3:")
console.log(newEmployee)
console.log(company)

// Problem 4
function calculateTotalSalary(company) {
    var totalSalary = 0;
    for (var i = 0; i < company.employees.length; i++) {
        totalSalary += company.employees[i].salary;
    }
    return totalSalary;
}
console.log("Problem 4:")
console.log("Total salary for all employees: $" + calculateTotalSalary(company));

// Problem 5
function giveRaiseAndUpdateEligibility(company) {
    for (var i = 0; i < company.employees.length; i++) {
        var employee = company.employees[i];
        if (employee.raiseEligible) {
            employee.salary += employee.salary * 0.1;
            employee.raiseEligible = false;
        }
    }
}
giveRaiseAndUpdateEligibility(company);
console.log("Problem 5:")
console.log("Updated Employee Salaries after Raise");
console.log("Total salary for all employees: $" + calculateTotalSalary(company));

// Problem 6
var WFHEmployees = ['Anna', 'Sam'];
for (var i = 0; i < company.employees.length; i++) {
    var employee = company.employees[i];
    if (WFHEmployees.includes(employee.firstName)) {
        employee.wfh = true;
    } else {
        employee.wfh = false;
    }
}
console.log("Problem 6:")
console.log("Employees WFH Status Updated");