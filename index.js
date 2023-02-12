const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const questions = {
    manager: [
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team manager\'s id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager\'s email?'
        },          
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team manager\'s office number?'
        },
        {  
            type: 'list',
            name: 'addMember',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }],

    engineer: [
        {
            type: 'input', 
            name: 'engineerName',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the engineer\'s id?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the engineer\'s GitHub username?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }],

    intern: [
        {  
            type: 'input',
            name: 'internName',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',  
            name: 'internId',
            message: 'What is the intern\'s id?'
        },
        {   
            type: 'input',
            name: 'internEmail',
            message: 'What is the intern\'s email?'
        },
        {   
            type: 'input',
            name: 'internSchool',   
            message: 'What is the intern\'s school?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }]
};


function addEngineer() {
    inquirer.prompt(questions.engineer).then((data) => {
        const member = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
        team.push(member);
        if (data.addMember === "Engineer") {
            return addEngineer();
        } else if (data.addMember === "Intern") {
            return addIntern();
        } else { 
            return addMember();
        }
    });
}

function addIntern() {
    inquirer.prompt(questions.intern).then((data) => {
        const member = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
        team.push(member);
        if (data.addMember === "Engineer") {
            return addEngineer();
        } else if (data.addMember === "Intern") {
            return addIntern();
        } else { 
        return addMember();
        }
    });
}

function addMember() {
    fs.writeFileSync('./dist/index.html', generateHTML(team), 'utf-8'), (err) => 
        err ? console.log(err) : console.log('Success!');
}

init();