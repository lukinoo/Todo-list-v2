import React, { useState, useEffect } from "react";
import "./components/styles/main.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Section from "./components/Section";
import Intro from "./components/Intro";

export interface TodoConfig {
  id: number;
  text: string;
  color: string;
  done: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoConfig[]>([]);
  const [input, setInput] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("darkmode") || "{}")
  );

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  // input handler function
  const inputHandler = (input: string) => {
    setInput(input);
  };

  // function which generates random colors
  const colorHandler = (): string => {
    let symbols: string = "0123456789ABCDEFGHIJ";
    let color: string = "#";

    for (let i = 0; i < 6; i++) {
      color += symbols[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  // todo handler for submit
  const todoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodos: TodoConfig[] = [
      ...todos,
      {
        id: Math.floor(Math.random() * 2000),
        text: input,
        color: colorHandler(),
        done: false,
      },
    ];

    setTodos(newTodos);
    // clear up form input every time when this function runs
    setInput("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // delete todo handler
  const deleteHandler = (index: number): void => {
    const deleteTodo = todos.filter((el) => index !== el.id);
    setTodos(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
  };

  const doneHandler = (index: number): void => {
    const checkTodos = todos.map((todo) => {
      if (index === todo.id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    setTodos(checkTodos);
    localStorage.setItem("todos", JSON.stringify(checkTodos));
  };

  // darkmode handler
  const darkModeHandler = (): void => {
    setDarkMode(!darkMode);
  };

  // darkmode check
  const darkModeActive = darkMode ? "dark-mode-active" : "";

  return (
    <div className={`App ${darkModeActive}`}>
      <Intro />
      <Header darkModeHandler={darkModeHandler} darkMode={darkMode} />
      <Form
        input={input}
        inputHandler={inputHandler}
        todoHandler={todoHandler}
      />
      <Section
        todos={todos}
        deleteHandler={deleteHandler}
        doneHandler={doneHandler}
      />
    </div>
  );
};

export default App;
