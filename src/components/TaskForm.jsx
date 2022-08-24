import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-600 p-10 mb-6">
        <h1 className="text-2xl text-white font-bold text-center">Crea tu tarea</h1>
        <hr className="mt-3 mb-3"/>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 rounded-md text-white hover:bg-lime-800">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
