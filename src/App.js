import { Header } from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Online Shopping',
        day: 'Feb 5th at 02:30pm',
        reminder: true, 
    },
    {
        id: 2,
        text: 'Do the dishes',
        day: 'Feb 5th at 02:30pm',
        reminder: false, 
    },
    {
        id: 3,
        text: 'Send resignation',
        day: 'Feb 5th at 02:30pm',
        reminder: false, 
    }
]);

const addTask = (text, day, reminder) => {

  const id = Math.floor(Math.random() * 10000 + 1 );

  const newTask = { id, text, day, reminder}
  setTasks([...tasks, newTask])

}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

const toggleButton =(showAddTask) => {
  console.log(showAddTask)
  alert("clicked")
  if(showAddTask === true){
    setShowAddTask(false)
  }else{
    setShowAddTask(true)
  }
}

return (
   <div className="container">
    <Header onAdd={toggleButton}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask = {deleteTask} onToggle = {toggleReminder}></Tasks>) : "No Tasks To Show"}
   </div>
  );
}

export default App;
