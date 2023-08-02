(async () => {
    const { default: inquirer } = await import('inquirer');
    const fs = require('fs');
    const { Shape, Circle, Square, Triangle } = require('./lib/shapes');

    const createLogo = async () => {
        const characters = await inquirer.prompt([
            {
                type: 'input',
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

        const shape = await inquirer.prompt([
            {
                type: 'list',
                name: ' shape',
                choices: ['Circle', 'Square', 'Triangle'],
            },
        ]);

        const shapeColor = await inquirer.prompt([
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the Color of the Shape',
                validate: (input) => input.length > 0,
            },
        ]);

        let logoShape
        switch (shape) {
            case 'circle':
                logoShape = new Circle();
                break;
            case 'triangle':
                logoShape = new Triangle();
                break;
            case 'square':
                logoShape = new Square();
                break;
        }

        logoShape.setColor(shapeColor);

        const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${logoShape.render()}
        <text x="150" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `;


        fs.writeFileSync('logo.svg', svg);

    };

    createLogo();
})();