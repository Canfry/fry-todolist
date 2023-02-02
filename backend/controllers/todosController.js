import Todo from '../models/todoModel.js';

// @Desc   Get all todos
// @Route  GET /api/todos
// @Access Private
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500);
    throw new Error('Cannot find todos');
  }
};

// @Desc   Add todos
// @Route  POST /api/todos
// @Access Private
export const addTodo = async (req, res) => {
  const { name } = req.body;

  // if (!name) {
  //   res.status(401);
  //   throw new Error('Name required');
  // }
  // const todo = await Todo.create({ name });
  // res.status(201).json(todo);
  try {
    const todo = await Todo.create({ name });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500);
    throw new Error('Something went wrong');
  }
};

// @Desc   Update todos
// @Route  PUT /api/todos/:id
// @Access Private
export const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json(todo);
};

// @Desc   delete todos
// @Route  DELETE /api/todos/:id
// @Access Private
export const deleteTodos = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  await todo.remove();
  res.status(200).json({ message: 'Todo deleted' });
};
