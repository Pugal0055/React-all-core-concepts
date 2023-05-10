import React, { useEffect, useState, useCallback } from "react";

// import usehttp from "../../hooks/useHttp";

import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks/Tasks";

// import useCurd from "../../hooks/useCurd";

import useCurd from "src/hooks/useCurd";

const Index = () => {
  const { fetchData, updateItem, createItem, removeItem } = useCurd();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("hi");

  const getAllItem = () => {
    setIsLoading(true);
    fetchData()
      .then((res) => {
        const loadedTasks = [];
        for (const taskKey in res) {
          loadedTasks.push({ id: taskKey, text: res[taskKey].text });
        }
        setData(loadedTasks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getAllItem();
  }, []);

  const taskAddHandler = (newTask: any) => {
    setIsLoading(true);
    createItem(newTask)
      .then((res) => {
        getAllItem();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  };

  const updateTaskHandler = (value: string, id: string) => {
    setIsLoading(true);
    updateItem(id, value)
      .then((res) => {
        getAllItem();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  };

  const deleteTaskHandler = (id: string) => {
    setIsLoading(true);
    setIsLoading(false);
    removeItem(id)
      .then((res) => {
        getAllItem();
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={data}
        loading={isLoading}
        error={error}
        onFetch={fetchData}
        updateTask={updateTaskHandler}
        deleteTask={deleteTaskHandler}
      />
    </React.Fragment>
  );
};
export default Index;
