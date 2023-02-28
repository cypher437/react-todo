const { addTodo } = require("../repository/todo");

const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTodo: async(item)=>{
        repository.addTodo(item);
        return await repository.getTodos()
    }
  };
};

module.exports = todoService;