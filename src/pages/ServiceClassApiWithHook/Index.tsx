import React, { useEffect, useState, useCallback } from "react";

import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks/Tasks";

import useClassCurd from "src/hooks/useClassCurd";

const Index = () => {
  const { getItem, updateItem, createItem, removeItem } = useClassCurd();
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllItem = () => {
    setIsLoading(true);
    getItem()
      .then((res: any) => {
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

    removeItem(id)
      .then((res) => {
        getAllItem();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={data}
        loading={isLoading}
        error={error}
        onFetch={getItem}
        updateTask={updateTaskHandler}
        deleteTask={deleteTaskHandler}
      />
    </React.Fragment>
  );
};
export default Index;
