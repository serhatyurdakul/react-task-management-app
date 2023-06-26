import "./App.css";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDescription: updatedTaskDesc };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  let usedIds = [];
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
    // usedIds.push(id);
    usedIds = [...usedIds, id];

    /* push ile spread farkı:push her defasında yeni bir referans oluşturmaz. spread is her defasında yeni bir kopya ve referans oluşturur. spread kulllanıldığında orjinal veri etkilenmez iken push kullandığımızda orjinal veri etkilenir. Ayrıca spread operatörü kullanıldığında her defasında yeniden render edilmesi sağlanıyor. push metodu kullanmış olsaydık eski arrayin üzerine eklendiği için diziye yeni eleman eklendiğinde render edilmez. Eğer biz bir diziye her yeni eleman eklediğimizde yeniden render edilmesini istiyorsak push yerine spread operatörünü kullanmamız gerekiyor. */

    setTasks(addedTasks);
  };

  return (
    <div className="App">
      <CreateTask onCreate={addTask} />
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
