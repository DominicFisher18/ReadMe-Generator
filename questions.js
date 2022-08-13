// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },
    {
        tpye: 'input',
        name: 'installation',
        message: 'What is required to install the application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Any licesne?',
        choices: ['MIT', 'Python', 'Javascript', 'None']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contirbuted to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are required?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    }
]

export default questions;