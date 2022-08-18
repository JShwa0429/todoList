import { useState } from "react";
import { Header, List } from "../components";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
  ]);

  const handleAdd = (title, content) => {
    setTodos((cur) => {
      const newTodos = [...cur];
      const newId = newTodos.length ? newTodos[newTodos.length - 1].id : 0;
      newTodos.push({
        id: newId + 1,
        title: title,
        content: content,
        isDone: false,
      });
      return newTodos;
    });
  };

  const handleRemove = (id) => {
    setTodos((cur) => {
      const newTodos = [];
      cur.forEach((v) => {
        if (v.id !== id) newTodos.push(v);
      });
      return newTodos;
    });
  };

  const handleCancel = (id) => {
    setTodos((cur) => {
      const newTodos = [...cur];
      newTodos.forEach((v) => {
        if (v.id === id) v.isDone = false;
      });
      return newTodos;
    });
  };

  const handleComplete = (id) => {
    setTodos((cur) => {
      const newTodos = [...cur];
      newTodos.forEach((v) => {
        if (v.id === id) v.isDone = true;
      });
      return newTodos;
    });
  };

  return (
    <div>
      <Header onAdd={handleAdd} />
      <List
        todos={todos}
        onRemove={handleRemove}
        onComplete={handleComplete}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default TodoList;
