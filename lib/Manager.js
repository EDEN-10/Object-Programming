const Employee = require("./Employee.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email);
        this.officeNumber = officeNumber;
        
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;

// const manager1 = new Manager("Harold", 456, "harold@mail.com", 7890)

// console.log(manager1)