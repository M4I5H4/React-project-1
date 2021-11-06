import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    //removed task array fro here and put in app.js so we can use the task componet again
    return (
        <>
          {tasks.map((task) => (
          < Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          //we make a seperate task component in task.js
          ))}  
        </>
    )
}

export default Tasks
