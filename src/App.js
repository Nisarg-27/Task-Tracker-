import { Header } from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks"
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Online Shopping',
        day: 'Feb 5th at 02:30pm',
        reminder: true, 
    },
    {
        id: 2,
        text: 'Online Shopping',
        day: 'Feb 5th at 02:30pm',
        reminder: false, 
    },
    {
        id: 3,
        text: 'Online Shopping',
        day: 'Feb 5th at 02:30pm',
        reminder: false, 
    }
]);
  return (
   <div className="container">
    <Header></Header>
    <Tasks tasks={tasks}></Tasks>
   </div>
  );
}

export default App;
