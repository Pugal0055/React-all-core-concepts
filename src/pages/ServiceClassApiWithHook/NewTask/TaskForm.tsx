import React, { useRef } from "react";
import classes from "./TaskForm.module.css";

const TaskForm: React.FC<{ onEnterTask: Function; loading: boolean }> = (
  props
) => {
  const taskInputRef = useRef<any>();

  const submitHandler = (event: any) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
      taskInputRef.current.value = "";
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
