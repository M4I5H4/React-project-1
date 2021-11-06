//app.js is the root componet example commented out below
import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        "reminder": false
      }
])

//Delete Task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) =>{
console.log(id);
}
  
  return (
    <div className="container">
      <Header /*I could assign props here for example title='Task Header'*//>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} /> : 'Tasks Complete'}
    </div>
  );
}


export default App;

//JSX has to have one parent element so would need to go into a div or fragment 
// function App() {
//   const name = 'Maisha'
//   const x = true
//   return (
//     <div className="container">
//       <h1>Hello From React </h1>
//       <h2>Hello {name} let's learn React</h2>
//       <p> {x ? 'Yes' : 'No'} </p>

//     </div>
//   );
// }