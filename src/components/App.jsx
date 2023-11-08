import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  function handleChange(event) {
    const item = event.target.value;
    setTodo(item);
  }
  function handleClick() {
    setTodoList((prevValue) => {
      return [...prevValue, todo];
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todolist.map((todoitem) => {
            return <li>{todoitem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
