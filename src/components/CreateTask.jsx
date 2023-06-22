import { useState } from "react";

function CreateTask({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, taskDescription);
    setTitle("");
    setTaskDescription("");
  };

  return (
    <div className="create-task">
      <h3 className="create-task__heading">Please Add a Task</h3>
      <form className="task-form">
        <label className="task-form__label" htmlFor="title">
          Title
        </label>
        <input
          value={title}
          onChange={handleChange}
          className="task-form__input task-form__field"
          type="text"
        />
        <label className="task-form__label" htmlFor="task">
          Enter a Task
        </label>
        <textarea
          value={taskDescription}
          onChange={handleTaskDescription}
          className="task-form__textarea task-form__field"
          cols="30"
          rows="5"
        ></textarea>
        <button className="task-form__button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
