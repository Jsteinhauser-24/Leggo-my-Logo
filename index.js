const inquirer = import('inquirer');
const fs = require('fs');
const {Shape, Circle, Square, Triangle} = require{'./lib/shapes'};

const createLogo = async () => {
    const characters = await inquirer.prompt([
        {
            type:'input',
            name: 'text',
            message: 'Enter up to 3 Characters',
            validate: (input) => input.length <= 3,
        },
    ]);

    const color = await inquirer.prompt([
        {
            type: 'input',
            name: 'color',
            message: 'Enter the Color for your Characters',
        },
    ]);

    const shape = await inquirer.prompt({
        {
            type: 'list',
            name: ' shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
    });

    const shapeColor = await inquirer.prompt([
        {
            type: 'input',
            name:'shapeColor',
            message: 'Enter the Color of the Shape'
        },
    ]);
}