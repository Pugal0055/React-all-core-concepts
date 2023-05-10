import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

const Tasks: React.FC<{
  items: Array<any>;
  updateTask: Function;
  deleteTask: Function;
  error: any;
  onFetch: any;
  loading: any;
}> = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem
            key={task.id}
            updateTask={props.updateTask}
            deleteTask={props.deleteTask}
            taskId={task.id}
          >
            {task.text}
          </TaskItem>
        ))}
      </ul>
    );
  }

  let content: any = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
