import { useState } from "react";

interface AddToDoProps {
  submitHandler: (a: string) => void;
}
function AddToDo({ submitHandler }: AddToDoProps) {
  const [task, setTask] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      style={{
        width: "90%",
        display: "flex",
        gap: "20px",
        margin: "20px auto",
      }}
    >
      <input
        type="text"
        placeholder="Enter Your Task Here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          border: "0.5px solid #d1d5db",
          borderRadius: "10px",
          flex: "1",
          padding: "12px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0 30px",
          borderRadius: "10px",
          backgroundColor: "#10b981",
          borderColor: "transparent",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddToDo;
