
const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }]
    };
    const actual = await repository.getTodos();
    expect(actual).toEqual(expected);
  });
});

describe('Add a TODO to repository', () => {
  it('should Add item and return an updated todo list', async () => {
    const expected = {
      todos: [
      {
        "task": "This is a todo example"
      },
      {
        "task": "Buy Milk"
      }
    ]
    };

    const actual = await repository.addTodo("Buy Milk");
    console.log(actual);
    expect(actual).toEqual(expected);
  });
});