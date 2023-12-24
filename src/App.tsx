import { useState } from "react";
import AddToDo from "./components/AddToDo";
import TaskList from "./components/TaskList";
import { SingleTaskType } from "./types/types.modal";
import Navbar from "./components/Navbar";
import { useSearchParams } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [allTasks, setAllTasks] = useState<SingleTaskType[]>(() => {
    try {
      const newTodos = localStorage.getItem("tasksList") || "[]";
      return JSON.parse(newTodos) as SingleTaskType[];
    } catch (error) {
      return [];
    }
  });

  console.log(allTasks);
  const [searchParams] = useSearchParams();
  const listType = searchParams.get("list");

  const submitHandler = (latestEntry: string) => {
    setAllTasks((prev) => {
      const latestTasksList = [
        ...prev,
        {
          id: Math.random().toString(),
          task: latestEntry,
          completed: false,
          createdAt: new Date(),
        },
      ];
      localStorage.setItem("tasksList", JSON.stringify(latestTasksList));
      return latestTasksList;
    });
  };

  const handleTaskDone = (taskId: string) => {
    allTasks.forEach((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
    });
    console.log(allTasks);
  };

  const handleTaskDeletion = (taskId: string) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  let filterTasks: SingleTaskType[] = allTasks;
  if (listType === "active") {
    filterTasks = allTasks.filter((task) => task.completed === false);
  } else if (listType === "completed") {
    filterTasks = allTasks.filter((task) => task.completed === true);
  }

  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          minWidth: "350px",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "poppins,sens-serif",
            fontSize: "28px",
            letterSpacing: "1.5px",
          }}
        >
          ToDo Application
        </h1>
        <Navbar />
        <AddToDo submitHandler={submitHandler} />
        <TaskList
          allTasks={filterTasks}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskDone={handleTaskDone}
        />
        <Footer />
      </div>
    </main>
  );
}

export default App;
