import { BaseService } from "src/service/base.serviceClass";

const useClassCurd = () => {
  const service = new BaseService();

  const getItem = () => {
    const newData = service.getAll("/tasks.json");
    return newData;
  };

  const createItem = (item: any) => {
    const newItem = service.create("/tasks.json", { text: item });
    return newItem;
  };

  const updateItem = (id: string, item: any) => {
    const updateItem = service.update("/tasks", id, { text: item });
    return updateItem;
  };

  const removeItem = (id: any) => {
    const removeItem = service.delete("/tasks", id);
    return removeItem;
  };

  return { getItem, createItem, updateItem, removeItem };
};

export default useClassCurd;
