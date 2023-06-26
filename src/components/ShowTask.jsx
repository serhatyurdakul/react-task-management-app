import { useState } from "react";
import CreateTask from "./CreateTask";

function ShowTask({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="show-task-container">
      {showEdit ? (
        <CreateTask task={task} taskFormEdit={true} onUpdate={handleSubmit} />
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default ShowTask;
