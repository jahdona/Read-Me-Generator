// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


// TODO: Create a function to write README file
const createReadme = ({ gName, description, uStory, acceptance }) => {  return `
# ${gName}

## Description


${description}

## User Story

${uStory}

## Acceptance Criteria

${acceptance}

`}
;

// TODO: Create an array of questions for user input
const questions = [ {
    type:'input',
  message: 'What is your Github repository name?',
  name: 'gName'
},
{
  type:'input',
message: 'What is your Project Descrtiption?',
name: 'description'
},
{
    type:'input',
    message:'What is your User Story?',
    name:'uStory'
},
{
  type:'input',
  message:'What is your Acceptance Criteria',
  name:'acceptance'
}];
const promptUser = () => {
    return inquirer
        .prompt(questions);

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) =>writeFile('README.md', createReadme(answers)))
      .then(() => console.log('Successfully wrote to README File'))
      .catch((err) => console.error(err));
}

// Function call to initialize app
init();
