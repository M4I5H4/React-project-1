import { FaTimes } from 'react-icons/fa'  //how we add the 'x' button

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} {''}
            <FaTimes style={{color: 'green', cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task
