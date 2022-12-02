import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
function App() {
  const name = "Nisarga";
  const x = false;
  return (
   <div className="container">
    <Header title={name} bol={x}></Header>
    <Tasks />
   </div>
  );
}

export default App;
