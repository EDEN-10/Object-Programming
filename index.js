const inquirer = require("inquirer");
const fs = require("fs");

// import inquirer from 'inquirer';

var htmlContent = '<html>Whatever</html>';
function employee(answers){
    return `<div>
    ${answers.EmployeeName}
    </div>` 
}

inquirer
  .prompt([{
    type: "input",
   message: "what is your name?",
   name: "EmployeeName"
  }
  ])
  .then((answers) => {
   console.log(answers)
   console.log(employee(answers))
  })
  .catch(function(error) {
    console.log(error);
  })







// create functions that will ask for infromation about the employees
// 1 function for manager
// 1 function for engineer
// 1 function for intern

// 1 function for writing the HTML
fs.writeFile('/generate.html', htmlContent, (error) => { /* handle error */ }); 