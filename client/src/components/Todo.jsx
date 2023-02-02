export default function Todo({ todos, handleDelete }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id} className='flex items-center justify-between mb-4'>
          <h1>{todo.name}</h1>
          <div>
            <button
              className='bg-red-700 text-white py-1 px-4 rounded-lg'
              onClick={() => handleDelete(todo._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
