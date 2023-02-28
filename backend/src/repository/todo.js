
let todoList = {
  todos: [
    {
      "task": "This is a todo example"
    }
    // we could turn task into an array of strings but I've opted to add new task objects
    // because it'll be easier to extend the app with new properties per task like date/status/is_completed
  ]
};

const addTask = (item) => {
  // lets not add null, empty or undefined items.
  if(!item)
    return todoList

  todoList.todos.push(
    {
      "task": item
    });

  return structuredClone(todoList); // return a copy of the list to ensure it's not updated outside.
}

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: (item)=>Promise.resolve(addTask(item))
};