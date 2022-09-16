import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      Hola mundo
      <ul>
        {!todos
          ? 'Cargando...'
          : todos.map((todo, index) => {
              return (
                <li>
                  {todo.title}
                  {todo.completed ? ' ->SI ' : ' -> NO'}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
