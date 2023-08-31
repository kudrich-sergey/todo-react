import React, { useState } from "react";

import "./App.scss";
import { TaskField } from "./components/TaskField";
import { ListItem } from "./components/ListItem";

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: "Изучить ReactJS",
      completed: true,
    },
    {
      text: "Разработать ToDo на ReactJS",
      completed: false,
    },
  ]);

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIndex) =>
        index === curIndex
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, curIndex) => index !== curIndex)
    );
  };

  return (
    <div className="todo">
      <div className="todo_header">
        <h4>Список задач</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo_list">
        {tasks
          .slice(0)
          .reverse()
          .map((task, index, array) => (
            <ListItem
              key={array.length - index}
              index={array.length - index - 1}
              text={task.text}
              completed={task.completed}
              onToggleCompleted={onToggleCompleted}
              onRemoveTask={onRemoveTask}
            />
          ))}
      </div>
    </div>
  );
};
