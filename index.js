const fs = require('fs');
const inquirer = require('inquirer');
const Generator = require('./src/Generator');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Commented code because I had to change how the files were being imported until I downgraded inquirer to version 8.0.0.

// import Manager from './lib/Manager.js';
// import Engineer from './lib/Engineer.js';
// import Intern from './lib/Intern.js';
// import inquirer from 'inquirer';
// import { resolve, join } from 'path';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// import profileGenerator from './src/Generator.js';

// Displays questions and has a series of if statements depanding on the role chosen. Then outs the given information into an array.

const newInformation = [];
const questions = async () => {
 const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])

      if (answers.role === "Manager") {
        const managerAns = await inquirer.prompt([
            {
              type: "input",
              message: "What is your office number?",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newInformation.push(newManager);
          
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer.prompt([
            {
              type: "input",
              message: "What is your GitHub username?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newInformation.push(newEngineer);
          
      } else if (answers.role === "Intern") {
        const internAns = await inquirer.prompt([
            {
              type: "input",
              message: "What university did you attend?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newInformation.push(newIntern);          
      } 
}

// Once completing a profile it prompts an option to make another profile  or to run the create team function to make the html page.

async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer.prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();

function createTeam () {
  console.log("new employee information", newInformation)
  fs.writeFileSync("./dist/index.html", Generator(newInformation));
}