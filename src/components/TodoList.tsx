import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext)!;

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-4 mb-2 rounded-lg shadow"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`flex-1 cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;