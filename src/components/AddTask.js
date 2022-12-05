import { useState } from "react"
const AddTask = ({onAdd}) => {

  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      alert("Please enter text");
    }

    onAdd(text, day, reminder);

    setText('')
    setDay('')
    setReminder('')
  }
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task" value={text} oncChange={(e) => setText(e.target.value) } />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Task" value={day} oncChange={(e) => setDay(e.target.value) } />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} oncChange={(e) => setReminder(e.currentTarget.checked) }/>
        </div>
        <input type="submit" value="save task" onSubmit={onSubmit} className="btn btn-block"></input>
    </form>
  )
}

export default AddTask