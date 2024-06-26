// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


// TODO: Create a function to write README file
const createReadme = ({ gname, description, ustory, acceptance,installation,usage,githublink,email,phone,contributor,license}) => {  return `
# ${gname}

## Description

${description}

## Table of Contents

- [Description](#describution)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)

- [Authors and Contributors](#authors-and-contributors)
- [License](#license)
- [Github Repository Link](#github-repository-link)
- [Contact Me](#contact-me)

## User Story

${ustory}

## Acceptance Criteria

${acceptance}

## Installation

${installation}

## Usage

${usage}

## Tests


## Github Repository Link

[Github Repository Link](${githublink})

## License

This application is under the License of ${license}

Click on the license Badge for more details on the ${license}
[![License Badge: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${license})
## Contact Me

For further details contact me through phone ${phone} and on my Email: ${email}

## Authors and Contributors

${contributor}

`}
;

// TODO: Create an array of questions for user input
const questions = [ {
    type:'input',
  message: 'What is the project title?',
  name: 'gname'
},
{
  type:'input',
message: 'What is your Project Descrtiption?',
name: 'description'
},
{
    type:'input',
    message:'What is your User Story?',
    name:'ustory'
},
{
  type:'input',
  message:'What is your Acceptance Criteria?',
  name:'acceptance'
},
{
  type:'input',
  message:'How do you install this application?',
  name:'installation'
},
{
  type:'input',
  message:'What are the requirement to use your Application?',
  name:'usage'
},
{
  type:'input',
  message:'Could you share your github repository link ?',
  name:'githublink'
},
{
  type:'input',
  message:'Provide your email for further details',
  name:'email'
},
{
  type:'input',
  message:'Provide your phone number for further details',
  name:'phone'
},
{
  type:'input',
  message:'Who are the author and contributors of this project ?',
  name:'contributor'
},
{
  type:'input',
  message:'What the license of this project ?',
  name:'license'
},

];
const promptUser = () => {
    return inquirer
        .prompt(questions);

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) =>writeFile('GeneratedREADME.md', createReadme(answers)))
      .then(() => console.log('Successfully wrote to Generated README File'))
      .catch((err) => console.error(err));
}

// Function call to initialize app
init();
