class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // greetings () {
    //     console.log("Hello! I am " + this.name)
    // }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;

// const employee1 = new Employee("John", 123, "john@mail.com")
// const employee2 = new Employee("Peter", 123, "peter@mail.com")

// console.log(employee1)
// console.log(employee2)

// console.log(employee1.getRole())