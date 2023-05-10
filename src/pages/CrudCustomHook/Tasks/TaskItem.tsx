import { useState, useEffect, useRef } from "react";

import classes from "./TaskItem.module.css";

const TaskItem: React.FC<{
  children: any;
  updateTask: Function;
  taskId: string;
  deleteTask: Function;
}> = (props) => {
  const [isEditing, setIsEditing] = useState<any>(false);
  const [content, setContent] = useState<any>(props.children);
  const inputRef = useRef<any>(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: any) => {
    setContent(event.target.value);
  };

  const updateTask = () => {
    props.updateTask(inputRef.current.value, props.taskId);
  };

  const deleteTask = () => {
    props.deleteTask(props.taskId);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  let element = <span>{props.children}</span>;

  let button = (
    <div>
      <span
        onClick={handleEditClick}
        className={`material-icons-outlined ${classes.edit}`}
      >
        edit
      </span>
      <span
        onClick={deleteTask}
        className={`material-icons-outlined ${classes.delete}`}
      >
        delete
      </span>
    </div>
  );

  if (isEditing) {
    element = (
      <input
        type="text"
        value={content}
        // onBlur={handleInputBlur}
        onChange={handleInputChange}
        ref={inputRef}
      />
    );

    button = (
      <div>
        <span
          onClick={updateTask}
          className={`material-icons-outlined ${classes.save}`}
        >
          add_box
        </span>
      </div>
    );
  }

  return (
    <li className={classes.task}>
      {element}
      {button}
    </li>
  );
};

export default TaskItem;
