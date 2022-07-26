const Employee = require("./Employee.js")

class Intern extends Employee {
    constructor(name, id, email) {
       
        super(name, id, email);
        this.School = School;
        
    }
    getSchool () {
        return this.School
    }
    getRole() {
        return "Intern"
    }
}
module.exports = Intern;
