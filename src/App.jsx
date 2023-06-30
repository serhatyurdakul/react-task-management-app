import { useContext, useEffect } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import ListTasks from "./components/ListTasks";
import TaskContext from "./context/TaskContext";

function App() {
  const { fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []); /* Sadece başlangıçta çalışmasını için sonuna array eklendi */

  return (
    <div className="App">
      <CreateTask />
      <h1>Tasks</h1>
      <ListTasks />
    </div>
  );
}

export default App;
