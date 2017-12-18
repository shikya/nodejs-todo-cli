const fs = require('fs');

const writeTodos = (todos) => {
    fs.writeFileSync("data.json", JSON.stringify(todos));
    return todos;
};

const getTodos = () => {
    var todos = [];
    try {
        todos = fs.readFileSync("data.json").toString();
        todos = JSON.parse(todos);
    } catch (e) {
        fs.writeFileSync("data.json", "[]");
        todos = [];
    }
    return todos;
};

const appendTodo = (todo) => {
    debugger;
    var todos = getTodos();
    const isPreset = (todos.filter(interator => interator.title === todo.title)).length > 0;
    if(isPreset)
        console.log("Already Present");
    else{
        todos.push(todo);
        todos = writeTodos(todos);        
    }
    return todos;
};

const deleteTodo = (title) => {
    var todos = getTodos();
    var filteredTodos = todos.filter(singleTodo => title !== singleTodo.title);
    writeTodos(filteredTodos);
    return filteredTodos;
};

const getTodo = (title) => {
    const todos = getTodos();
    var filteredTodos = todos.filter(singleTodo => title == singleTodo.title);
    return filteredTodos[0];
}

const prittyPrint = todo => {
    if(todo){
        console.log(`\nTitle: ${todo.title}\nBody: ${todo.body}`);        
    }
}

module.exports = {
    getTodos,
    appendTodo,
    deleteTodo,
    getTodo,
    prittyPrint
};