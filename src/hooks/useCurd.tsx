import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../service/base.service";

const useCrud = () => {
  const fetchData = async () => {
    const newData = await getAll("/tasks.json");
    return newData;
  };

  const createItem = async (item: any) => {
    const newItem = await create("/tasks.json", { text: item });
    return newItem;
  };

  const updateItem = async (id: any, item: any) => {
    const updateItem = await update(id, { text: item });
    return updateItem;
  };

  const removeItem = async (id: any) => {
    const removeItem = await remove(id);

    return removeItem;

    // const newData = data.filter((d: any) => d.id !== id);
    // setData(newData);
  };

  return {
    createItem,
    updateItem,
    removeItem,
    fetchData,
  };
};

export default useCrud;

/* 














 */

/*   // const [data, setData] = useState<any>([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    const newData = await getAll("/tasks.json");
    // const loadedTasks = [];
    // for (const taskKey in newData) {
    //   loadedTasks.push({ id: taskKey, text: newData[taskKey].text });
    // }

    // setData(loadedTasks);
    return newData;
  }; */
