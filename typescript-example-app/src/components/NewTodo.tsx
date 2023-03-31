import React from "react";
import { useRef } from "react";
import "./NewTodo.css";

interface newTodoProps {
  addTodo: (todoText: string) => void;
}

const NewTodo = (props: newTodoProps) => {
  const textFromInput = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault(); // We do not want to send any request to server
    const todoText = textFromInput.current!.value; // here because I know with certainity that I will get some value I can use todo. therefore I added "!"
    props.addTodo(todoText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-contol">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textFromInput} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
