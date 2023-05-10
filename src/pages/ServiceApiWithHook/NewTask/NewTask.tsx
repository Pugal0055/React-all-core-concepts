import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import usehttp from "../../../hooks/useHttp";

const NewTask: React.FC<{ onAddTask: Function }> = (props) => {
  const [isLoading, error, postRequest] = usehttp();

  const enterTaskHandler = async (taskText: any) => {
    props.onAddTask(taskText);
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
