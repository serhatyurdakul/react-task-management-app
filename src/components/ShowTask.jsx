function ShowTask({ task }) {
  console.log(task);
  return (
    <div className="show-task-container">
      <h3 className="show-task__header">Task</h3>
      <p>{task.title}</p>
      <h3 className="show-task__header">Description</h3>
      <p>{task.taskDescription}</p>
      <div>
        <button className="show-task__btn show-task__btn--delete">Delete</button>
        <button className="show-task__btn show-task__btn--edit">Edit</button>
      </div>
    </div>
  );
}

export default ShowTask;
