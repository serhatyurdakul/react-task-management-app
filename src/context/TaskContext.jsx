import axios from "axios";
import { useState, useEffect } from "react";
import { createContext } from "react";

const TaskContext = createContext();

function Provider({ children }) {
  let usedIds = [];
  const [tasks, setTasks] = useState([]);
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
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

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

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };

  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}

export { Provider };
export default TaskContext;
