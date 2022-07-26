const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email) {
       
        super(name, id, email);
        this.Github = Github;
        
    }
    getGithub() {
        return this.Github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;