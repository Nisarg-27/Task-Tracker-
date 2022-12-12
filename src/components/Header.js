import Button from "./button"
export const Header = ({onAdd}) => {

   
  return (
    <div>
        <header className="header">
            <h1>Task Tracker</h1>
           { /* <Button color="green" text ="Add" onClick={onAdd}>Add</Button> */ }
        </header>
    </div>
  )
}
