import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;