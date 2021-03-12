import TaskComp from './TaskComp'

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return(
        <>
            {tasks.map((task) => (
            <TaskComp key={task.id} task={task}
            onDelete = {onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks