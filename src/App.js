import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
      [
          {
              id:1,
              text: 'Doctors Appointment',
              day: 'Feb 5th at 2:30 pm',
              remainder: true,
          },
          {
              id:2,
              text: 'Meeting at School',
              day: 'Feb 6th at 1:30 pm',
              remainder: true,
          },
          {
              id:3,
              text: 'Food Shooping',
              day: 'Feb 7th at 2:30 pm',
              remainder: false,
          }
      ]
  )
// Add Task
  const addTask = (task) =>{
    console.log(task)
    // const id = Math.floor(Math.random() * 10000) + 1
    const id = 90
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

// Delete Tasks 
  const deleteTask = (id) => {
    
    setTasks(tasks.filter((task) => task.id !==id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, remainder: !task.remainder}: task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd ={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle = {toggleReminder}/> : 
      'No tasks to show'}
    </div>
  );
}

export default App;
