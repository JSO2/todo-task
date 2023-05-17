import { useState } from "react";
import { db } from "../firebase";
import {addDoc, collection} from "firebase/firestore";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    details: "",
  });

  async function handleSubmit(){
    const docRef = await addDoc(collection(db, "todos"), todo)
    setTodo({
      title: "",
      details: "",
    })
  }

  return (
    <>
      <form >
        <label>Title:</label>
        <br />
        <input
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
          value={todo.title}
        />
        <br />
        <label>Details:</label>
        <br />
        <textarea
          onChange={(e) => setTodo({ ...todo, details: e.target.value })}
        value={todo.details}
        ></textarea>
      </form>
      <button onClick={handleSubmit}>Add Todo</button>
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}
