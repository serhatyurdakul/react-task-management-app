import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const usedIds = [];
  const addTask = (title, taskDescription) => {
    let id;
    do {
      id = Math.round(Math.random() * 99999);
    } while (usedIds.includes(id));

    const addedTasks = [
      ...tasks,
      {
        id,
        title,
        taskDescription,
      },
    ];
    usedIds.push(id);
    /* push ile spread farkı:push her defasında yeni bir referans oluşturmaz. spread is her defasında yeni bir kopya ve referans oluşturur. spread kulllanıldığında orjinal veri etkilenmez iken push kullandığımızda orjinal veri etkilenir.*/

    setTasks(addedTasks);
  };

  return (
    <div className="App">
      <CreateTask onCreate={addTask} />
      <h1>Tasks</h1>
      <ListTasks tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
