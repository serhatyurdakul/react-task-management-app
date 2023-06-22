import ShowTask from "./ShowTask";

function ListTasks({ tasks, onDelete }) {
  return (
    <div className="list-task-container">
      {tasks.map((task, i) => {
        return <ShowTask task={task} key={i} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default ListTasks;
