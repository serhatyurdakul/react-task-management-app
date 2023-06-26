import ShowTask from "./ShowTask";

function ListTasks({ tasks, onDelete, onUpdate }) {
  return (
    <div className="list-task-container">
      {tasks.map((task, i) => {
        return (
          <ShowTask
            task={task}
            key={i}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default ListTasks;
