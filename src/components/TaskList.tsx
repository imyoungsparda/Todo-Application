import { SingleTaskType } from "../types/types.modal";
import TaskItem from "./TaskItem";

interface TaskListProps {
  allTasks: SingleTaskType[];
  handleTaskDone: (a: string) => void;
  handleTaskDeletion: (a: string) => void;
}

function TaskList({
  allTasks,
  handleTaskDeletion,
  handleTaskDone,
}: TaskListProps) {
  return (
    <ul
      className="list"
      style={{ width: "80%", margin: "0 auto", paddingLeft: "0" }}
    >
      {allTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleTaskDone={handleTaskDone}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;
