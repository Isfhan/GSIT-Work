import chalk from "chalk";


// add color in text
console.log(chalk.green("Hello, World!", "How are you?"));
console.log(chalk.red("Hello, World!", "How are you?"));
console.log(chalk.blue("Hello, World!", "How are you?"));
console.log(chalk.yellow("Hello, World!", "How are you?"));

let log = console.log; // save log method to variable


// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.green.bgMagenta.italic('Hello world!'));


// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));


// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

