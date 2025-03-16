import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm: React.FC = () => {
  const [text, setText] = useState<string>("");
  const { addTodo } = useContext(TodoContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;