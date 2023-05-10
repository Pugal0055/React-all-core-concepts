import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import usehttp from "../../../hooks/useHttp";

const NewTask: React.FC<{ onAddTask: Function }> = (props) => {
  const [isLoading, error, postRequest] = usehttp();

  const createdTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: any) => {
    postRequest(
      {
        url: "https://react-http-231de-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createdTask.bind(null, taskText)
    );
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
