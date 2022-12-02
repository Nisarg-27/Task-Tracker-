import { Header } from "./components/Header";

function App() {
  const name = "Nisarga";
  const x = false;
  return (
   <div className="container">
    <Header title={name} bol={x}></Header>

   </div>
  );
}

export default App;
