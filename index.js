// 3rd Party Library Imports
const argv = require('yargs').argv
// Own Library Imports
const Todo = require('./Todo.js');

console.log(argv);

if(argv._[0] === 'add'){
    Todo.appendTodo({'tittle': argv.title, description: argv.desc});
} else if(argv._[0] === 'remove') {
    Todo.deleteTodo(Todo.deleteTodo(argv.title));
} else if(argv._[0] === 'view') {
    console.log(Todo.getTodo(argv.title));
} else if(argv._[0] === 'all') {
    console.log(Todo.getTodos());
}