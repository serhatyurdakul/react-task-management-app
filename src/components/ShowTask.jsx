function ShowTask({ task, onDelete }) {
  console.log(task);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {};

  return (
    <div className="show-task-container">
      <h3 className="show-task__header">Task</h3>
      <p>{task.title}</p>
      <h3 className="show-task__header">Description</h3>
      <p>{task.taskDescription}</p>
      <div>
        <button
          className="show-task__btn show-task__btn--delete"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="show-task__btn show-task__btn--edit"
          onClick={handleEditClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default ShowTask;
