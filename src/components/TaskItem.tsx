import { useState } from "react";
import { SingleTaskType } from "../types/types.modal";

interface TaskItemProps {
  task: SingleTaskType;
  handleTaskDone: (a: string) => void;
  handleTaskDeletion: (a: string) => void;
}
function TaskItem({ task, handleTaskDone, handleTaskDeletion }: TaskItemProps) {
  const [taskDone, setTaskDone] = useState(false);

  const handleTaskDoneCheckBox = (taskId: string) => {
    setTaskDone((prev) => !prev);
    handleTaskDone(taskId);
  };

  const handleDelete = (taskId: string) => {
    handleTaskDeletion(taskId);
  };

  return (
    <li
      key={task.id}
      className="taskItem"
      style={{
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        borderBottom: "1px solid #d1d5db",
        height: "30px",
        padding: "10px 0",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          marginLeft: "60px",
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <input
          type="checkbox"
          checked={taskDone}
          value={task.id}
          onChange={() => handleTaskDoneCheckBox(task.id)}
        />
        <span className={task.completed ? `taskDone` : ""}>{task.task}</span>
      </div>
      {task.completed && (
        <button
          onClick={() => handleDelete(task.id)}
          style={{
            marginRight: "40px",
            backgroundColor: "#ef4444",
            borderColor: "transparent",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "12px",
            padding: "0px 10px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
}

export default TaskItem;
