import TaskContext from "../context/TaskContext";
import ShowTask from "./ShowTask";
import { useContext } from "react";
function ListTasks() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="list-task-container">
      {tasks.map((task, i) => {
        return <ShowTask task={task} key={i} />;
      })}
    </div>
  );
}

export default ListTasks;
