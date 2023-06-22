import ShowTask from "./ShowTask";

function ListTasks({ tasks }) {
  return (
    <div className="list-task-container">
      {tasks.map((task, i) => {
        return <ShowTask task={task} key={i} />;
      })}
    </div>
  );
}

export default ListTasks;
