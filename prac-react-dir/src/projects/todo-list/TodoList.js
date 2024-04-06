import React, {useState} from 'react'

const TodoList = () => {

  const [todoData, setTodoData] = useState({
    notes: '',
    todos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({
      ...todoData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoData);
    setTodoData({
      ...todoData,
      todos: [...todoData.todos, todoData.notes],
      notes: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Notes</label>
      <input type='text' name='notes' value={todoData.notes} onChange={handleChange} />
      <button type='submit' >Submit</button>
      </form>
      <ul>
      {todoData.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default TodoList
