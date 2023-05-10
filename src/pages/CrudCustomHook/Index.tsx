import React, { useEffect, useState } from "react";

import usehttp from "../../hooks/useHttp";

import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks/Tasks";

const Index = () => {
  const [tasks, setTasks] = useState<any>([]);

  const [isLoading, error, fetchTasks] = usehttp();

  const transformTasks = (tasksObj: any) => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const getTasks = (transformFunc: any) => {
    fetchTasks(
      {
        url: "https://react-http-231de-default-rtdb.firebaseio.com/tasks.json",
      },
      transformFunc
    );
  };

  useEffect(() => {
    getTasks(transformTasks);
  }, []);

  const taskAddHandler = (task: any) => {
    setTasks((prevTasks: any) => prevTasks.concat(task));
  };

  const updateTask = (value: string, id: string) => {
    fetchTasks(
      {
        url: `https://react-http-231de-default-rtdb.firebaseio.com/tasks/${id}.json`,
        method: "PATCH",
        body: { text: value },
        headers: {
          "Content-Type": "application/json",
        },
      },
      () => {
        getTasks(transformTasks);
      }
    );
  };

  const deleteTask = (id: string) => {
    fetchTasks(
      {
        url: `https://react-http-231de-default-rtdb.firebaseio.com/tasks/${id}.json`,
        method: "DELETE",
      },
      () => {
        getTasks(transformTasks);
      }
    );
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </React.Fragment>
  );
};
export default Index;
