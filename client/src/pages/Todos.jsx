// import { useQuery } from 'react-query';
import axios from 'axios';
import Todo from '../components/Todo';
import { useState, useEffect } from 'react';

export default function Todos() {
  const url = 'http://localhost:5500/api/todos/';

  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const newPost = { name };

    try {
      const response = await axios.post(url, newPost);
      const data = response.data;
      console.log(data);
      setTodos([...todos, data]);
      setName('');
    } catch (error) {
      console.log(error.response);
    }
  }

  async function handleDelete(id) {
    const filteredTodos = todos.filter((todo) => todo._id !== id);
    try {
      await axios.delete(`http://localhost:5500/api/todos/${id}`);
      // const data = response.data;
      setTodos(filteredTodos);
      console.log(filteredTodos);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      const data = response.data;
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // using useEffect to fetch all todos from database
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='max-w-[90%] md:max-w-[80%] lg:max-w-[50%] m-auto mt-16'>
      <header className='text-center'>
        <h1 className='text-3xl text-sky-600 font-bold mb-8'>Fry Todos</h1>
        <form
          className='w-[50%] m-auto flex items-center justify-center text-center mb-6'
          onSubmit={onSubmit}
        >
          <input
            type='text'
            placeholder='Ex: Pick up kids...'
            className='shadow-md py-1 px-3 rounded-r-md'
            value={name}
            name='name'
            onChange={handleChange}
          />
          <button
            className='bg-sky-600 text-white rounded-md py-1 px-3'
            type='submit'
          >
            Add Todos
          </button>
        </form>
      </header>
      <hr />
      <ul className='mt-8'>
        <Todo todos={todos} handleDelete={handleDelete} />
      </ul>
    </div>
  );
}
