const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
  });

  server.post('/api/todo', async (req, res) => {
    // Here we'd do authentication, validation for error checking, sanitize the input and return any errors.

    try {
      res.json(await todoService.addTodo(req.body.task)); // Strip the task for a specific parsing check of null task.
    } catch (error) {
      // log error somewhere for debugging.
      return res.status(500).send('Internal error  connecting to todolist');
    }
  });

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;