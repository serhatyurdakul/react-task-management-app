import axios from "axios";
import "./App.css";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import { useState, useEffect } from "react";

function App() {
  let usedIds = [];
  const createTask = async (title, taskDescription) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDescription,
    });

    let id;
    do {
      id = Math.round(Math.random() * 99999);
    } while (usedIds.includes(id));

    const createdTask = [...tasks, response.data];
    // usedIds.push(id);
    usedIds = [...usedIds, id];

    /* push ile spread farkı:push her defasında yeni bir referans oluşturmaz. spread is her defasında yeni bir kopya ve referans oluşturur. spread kulllanıldığında orjinal veri etkilenmez iken push kullandığımızda orjinal veri etkilenir. Ayrıca spread operatörü kullanıldığında her defasında yeniden render edilmesi sağlanıyor. push metodu kullanmış olsaydık eski arrayin üzerine eklendiği için diziye yeni eleman eklendiğinde render edilmez. Eğer biz bir diziye her yeni eleman eklediğimizde yeniden render edilmesini istiyorsak push yerine spread operatörünü kullanmamız gerekiyor. */

    setTasks(createdTask);
  };

  const fetchTasks = async (id) => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []); /* Sadece başlangıçta çalışmasını için sonuna array eklendi */

  const [tasks, setTasks] = useState([]);
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDescription: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDescription: updatedTaskDesc };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  return (
    <div className="App">
      <CreateTask onCreate={createTask} />
      <h1>Tasks</h1>
      <ListTasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
