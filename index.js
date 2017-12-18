// Own Library Imports
const Todo = require('./Todo.js');

// console.log(argv);
const argv = require('yargs')
    .command('add', "Add TODO to database",{
        title: {
            describe: 'Title of TODO',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of TODO',
            demand: false,
            alias: 'b'
        }
    })
    .command('all', "List add TODOS")
    .command('remove', "Remove an existing TODO", {
        title: {
            describe: 'Title of TODO',
            demand: true,
            alias: 't'
        }
    })
    .command('view', "View a single TODO", {
        title: {
            describe: 'Title of TODO',
            demand: true,
            alias: 't'
        }
    })
    .help('h')
    .argv;

if(argv._[0] === 'add'){
    const todo = Todo.appendTodo({'title': argv.title, 'body': argv.body});
    if(todo && todo.title) Todo.prittyPrint(todo);
} else if(argv._[0] === 'remove') {
    Todo.deleteTodo(Todo.deleteTodo(argv.title));
    console.log("Todo has been deleted");
} else if(argv._[0] === 'view') {
    const todo = Todo.getTodo(argv.title);
    Todo.prittyPrint(todo);
} else if(argv._[0] === 'all') {
    const todos = Todo.getTodos();
    todos.forEach(singleTodo => {
        Todo.prittyPrint(singleTodo);
    });
} else {
    console.log("Invalid Option. Use -h for help");
}