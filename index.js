const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// import inquirer from 'inquirer';
const allEmployees = [];

function employee(answers){
    return `<div>
    ${answers.EmployeeName}
    </div>` 
}

function createManager () {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the manager's id?",
          name: "id"
        },
        {
          type: "input",
          message: "What is the manager's email?",
          name: "email"
        },
        {
          type: "input",
          message: "What is the manager's office number?",
          name: "officeNumber"
        }
      ])
      .then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email,  answers.officeNumber);
        allEmployees.push(newManager);
        main()
      })
      .catch(function(error) {
        console.log(error);
      })
}


function createEngineer () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the engineer's id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the engineer's github?",
        name: "Github"
      }
    ])
    .then((answers) => {
      const newEngineer = new Engineer(answers.name, answers.id, answers.email,  answers.Github);
      allEmployees.push(newEngineer);
      main()
    })
    .catch(function(error) {
      console.log(error);
    })
}

function createIntern () {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the intern's id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "School"
      }
    ])
    .then((answers) => {
      const newIntern = new Intern(answers.name, answers.id, answers.email,  answers.School);
      allEmployees.push(newIntern);
      main()
    })
    .catch(function(error) {
      console.log(error);
    })
}

function main () {
  inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    name: "userChoice",
    choices: [
      "Create Manager",
      "Create Engineer", 
      "Create Intern",
      "Finish"
    ]
  }]).then(answer => {
    if(answer.userChoice == "Create Manager") {
      createManager()
    } else if(answer.userChoice == "Create Engineer") {
      createEngineer()
    } else if (answer.userChoice == "Create Intern") {
      createIntern()
    } else {
      end()
    }
  }) 
}

function end () {
  console.log("Start creating the HTML!")
  console.log("Using these data:")
  console.log(allEmployees)

  var htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- CSS only -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>

<body>
<div class="d-flex justify-content-center w-100 py-5 mb-2" style="background-color: rgb(124, 139, 124);">
        <h1 class="text-white" style="font-family: san;">Team Collabration</h1>
    </div>
    <div class="d-flex container flex-wrap justify-content-center">
      ${
        allEmployees.map(employee => {
            return card(employee)
        })
      }
    </div>
</body>

</html>`;

  fs.writeFile('./generate.html', htmlContent, (error) => { 
    /* handle error */ 
    console.log("Write file successful!")
  })

}

function card (employee) {
  let fourthProps = "";
  let icon = "";

  if(employee.getRole() === "Manager") {
    fourthProps = `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`
    icon = `<i class="fa-solid fa-mug-hot"></i>`
  } else if (employee.getRole() === "Engineer") {
    fourthProps = `<li class="list-group-item">Github: <a href="https://github.com/${employee.Github}">${employee.Github}</a></li>`
    icon = `<i class="fa-brands fa-uncharted"></i>`
  }  else if (employee.getRole() === "Intern") {
    fourthProps = `<li class="list-group-item">School: ${employee.School}</li>`
    icon = `<i class="fa-solid fa-user-graduate"></i>`
  }

  return `  <div class="card shadow mb-5 bg-body rounded mx-3" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
               <h3>${employee.name}</h3>
               <h5>${icon} ${employee.getRole()}</h5>
              </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
    ${fourthProps}
  </ul>
</div>`
}


main()





// create functions that will ask for infromation about the employees
// 1 function for manager
// 1 function for engineer
// 1 function for intern

// 1 function for writing the HTML
// fs.writeFile('/generate.html', htmlContent, (error) => { /* handle error */ }); 