const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task" />
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Task" />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox'/>
        </div>
        <input type="submit" valus="save task" className="btn btn-block"></input>
    </form>
  )
}

export default AddTask