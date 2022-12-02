import Button from "./button"
export const Header = ({title, bol}) => {
   
  return (
    <div>
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color="green" text ="hello" >Add</Button>
        </header>
    </div>
  )
}
