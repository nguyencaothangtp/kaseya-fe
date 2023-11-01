import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Thang task 1",
      description: "Thang task description",
      priority: 1,
      isCompleted: true
    },
    {
      id: 2,
      title: "Thang task 2",
      description: "Thang task description 2",
      priority: 3,
      isCompleted: false
    },
    {
      id: 3,
      title: "Thang task 3",
      description: "Thang task description 3",
      priority: 2,
      isCompleted: false
    },
    {
      id: 4,
      title: "Thang task 4",
      description: "Thang task description 4",
      priority: 3,
      isCompleted: false
    },
  ]);

  const onSubmit = (newItem: any) => {
    // Update UI first and then call API later
    setItems([...items, newItem]);

    // TODO: call Backend API to update the data
  }

  return (
    <>
      <TaskForm onFormSubmit={(newItem) => onSubmit(newItem)} />
      <TaskList items={items} />
    </>
  )
}

export default App
