import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
import { useState } from "react";

const App: React.FC = () => {
  //const todos = [{ id: "t1", text: "Finish the course" }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo addTodo={todoAddHandler} />
      <TodoList items={todos} deleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
